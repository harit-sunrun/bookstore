from sqlalchemy import create_engine, Integer, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

Base = declarative_base()
engine = create_engine('sqlite:////Users/hhimanshu/Downloads/library.db',
                       echo=True)
Session = scoped_session(sessionmaker(
                         bind=engine, autocommit=False, autoflush=False))

class Book(Base):
    __tablename__ = 'book'
    id = Column('id', Integer, primary_key=True)
    title = Column('title', String)
    author = Column('author', String)
    keywords = Column('keywords', String)

    def __init__(self, title, author, keywords):
        self.title = title
        self.author = author
        self.keywords = keywords

    def __repr__(self):
        return '<Book(%s, %s, %s, %s)>' % (self.id, self.title, self.author,
                                           self.keywords)

def get_session():
    return Session()


def init_db():
    Base.metadata.create_all(engine)
