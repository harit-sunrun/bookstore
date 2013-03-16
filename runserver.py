from library import app
from flask.ext.restless import APIManager
from library.persistence import Book, Session, init_db


init_db()
manager = APIManager(app, Session)
manager.create_api(Book, methods=['GET', 'POST', 'DELETE', 'PUT'])

app.run(debug=True)