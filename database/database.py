from flask import Flask, jsonify, g, request
import sqlite3

app = Flask(__name__)

DATABASE = "database.db"

# PREFIXES = "section_"
# SECTION_NAMES = ["A", "B", "C", "D", "E"]
# SCORE_SUFFIX = "_score"
# AVG_SUFFIX = "_avg"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def convert_in(json_):
    return json_

def convert_out(json_):
    return json_

@app.before_first_request
def initialize_db():
    db = get_db()
    db.cursor().execute("""
        CREATE TABLE IF NOT EXISTS submissions (
            region TEXT,
            section_A_score INTEGER,
            section_B_score INTEGER,
            section_C_score INTEGER,
            section_D_score INTEGER,
            section_E_score INTEGER
        );
    """)
    db.commit()

@app.route("/")
def index():
    return "hackathon!"

@app.route("/submit", methods=["POST"])
def submit():
    json_ = request.get_json()
    json_ = convert_in(json_)
    db = get_db()
    db.cursor().execute(f"""
        INSERT INTO submissions VALUES (
            '{json_["region"]}',
            {json_['section_A_score']},
            {json_['section_B_score']},
            {json_['section_C_score']},
            {json_['section_D_score']},
            {json_['section_E_score']}
        );
    """)
    db.commit()
    return "", 200

@app.route("/global-averages", methods=["GET"])
def global_averages():
    db = get_db()
    cur = db.cursor()
    cur.execute(f"""
        SELECT
            AVG(section_A_score),
            AVG(section_B_score),
            AVG(section_C_score),
            AVG(section_D_score),
            AVG(section_E_score)
        FROM submissions;
    """)
    data = cur.fetchall()[0]
    db.commit()
    data = {
        f"section_{sec}_avg": avg
        for sec, avg in zip(
            ["A", "B", "C", "D", "E"],
            data
        )
    }
    data = convert_out(data)
    return jsonify(data)

@app.route("/regional-averages", methods=["GET"])
def regional_averages():
    region = request.args.get("region")
    if region is None:
        return "missing region param", 400
    db = get_db()
    cur = db.cursor()
    cur.execute(f"""
        SELECT
            AVG(section_A_score),
            AVG(section_B_score),
            AVG(section_C_score),
            AVG(section_D_score),
            AVG(section_E_score)
        FROM submissions
        WHERE region='{region}';
    """)
    data = cur.fetchall()[0]
    db.commit()
    data = {
        f"section_{sec}_avg": avg
        for sec, avg in zip(
            ["A", "B", "C", "D", "E"],
            data
        )
    }
    data = convert_out(data)
    return jsonify(data)

@app.route("/all-submissions", methods=["GET"])
def all_submissions():
    db = get_db()
    cur = db.cursor()
    cur.execute("""
        SELECT
            region,
            section_A_score,
            section_B_score,
            section_C_score,
            section_D_score,
            section_E_score
        FROM submissions;
    """)
    data = [
        convert_out(
            {
                "region": submission[0],
                **{
                    f"section_{sec}_score": score
                    for sec, score in zip(
                        ["A", "B", "C", "D", "E"],
                        submission[1:]
                    )
                }
            }
        )
        for submission in cur
    ]
    db.commit()
    return jsonify(data)
