. venv/bin/activate

export FLASK_APP=database.py

# export FLASK_EVN=production
export FLASK_EVN=development

flask run -h 0.0.0.0 -p 3001
