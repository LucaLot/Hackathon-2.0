from flask import Flask, jsonify, g, request
from flask_cors import CORS
import requests
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = "database.db"
SUBMISSIONS = "submissions"

REGION = "region"
PREFIX = ""
SECTION_NAMES = [
    "physical",
    "psychological",
    "social",
    "spiritual",
    "professional"
]
SCORE_SUFFIX = ""
AVG_SUFFIX = "_avg"

# backslash not allowed in f-string workaround
COMMA_NEWLINE = ",\n"

def sc_name(s):
    return PREFIX + s + SCORE_SUFFIX

def av_name(s):
    return PREFIX + s + AVG_SUFFIX

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

@app.before_first_request
def initialize_db():
    db = get_db()
    db.cursor().execute(f"""
        CREATE TABLE IF NOT EXISTS {SUBMISSIONS} (
            {REGION} TEXT,
            {
                COMMA_NEWLINE.join(
                    sc_name(name) + " INTEGER"
                    for name in SECTION_NAMES
                )
            }
        );
    """)
    db.commit()

@app.route("/")
def index():
    return "hackathon!"

@app.route("/submit", methods=["POST"])
def submit():
    json_ = request.get_json()
    if json_ is None:
        return "json not provided", 400
    db = get_db()
    db.cursor().execute(f"""
        INSERT INTO {SUBMISSIONS} VALUES (
            '{json_[REGION]}',
            {
                COMMA_NEWLINE.join(
                    str(json_[sc_name(name)])
                    for name in SECTION_NAMES
                )
            }
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
            {
                COMMA_NEWLINE.join(
                    "AVG(" + sc_name(name) + ")"
                    for name in SECTION_NAMES
                )
            }
        FROM {SUBMISSIONS};
    """)
    data = cur.fetchall()[0]
    db.commit()
    data = {
        av_name(sec): avg
        for sec, avg in zip(
            SECTION_NAMES,
            data
        )
    }
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
            {
                COMMA_NEWLINE.join(
                    "AVG(" + sc_name(name) + ")"
                    for name in SECTION_NAMES
                )
            }
        FROM {SUBMISSIONS}
        WHERE {REGION}='{region}';
    """)
    data = cur.fetchall()[0]
    db.commit()
    data = {
        av_name(sec): avg
        for sec, avg in zip(
            SECTION_NAMES,
            data
        )
    }
    return jsonify(data)

@app.route("/all-submissions", methods=["GET"])
def all_submissions():
    db = get_db()
    cur = db.cursor()
    cur.execute(f"""
        SELECT
            {REGION},
            {
                COMMA_NEWLINE.join(
                    sc_name(name)
                    for name in SECTION_NAMES
                )
            }
        FROM {SUBMISSIONS};
    """)
    data = [
        {
            REGION: submission[0],
            **{
                sc_name(sec): score
                for sec, score in zip(
                    SECTION_NAMES,
                    submission[1:]
                )
            }
        }
        for submission in cur
    ]
    db.commit()
    return jsonify(data)
