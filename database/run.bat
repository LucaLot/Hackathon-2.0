::venv\Scripts\activate

set FLASK_APP=database.py
$env:FLASK_APP = "database.py"

::set FLASK_ENV=production
::$env:FLASK_ENV = "production"
set FLASK_ENV=development
$env:FLASK_ENV = "development"

flask run -h 0.0.0.0 -p 3001
