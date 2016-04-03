import React from 'react';
import { Link } from 'react-router';
import { createStore } from 'redux';
import Article from './article';
import { article } from 'GLOBALS';

// import { Provider } from 'react-redux';
const setPrice = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTICLE' :
      state.id = 0;
      state.name = 'hello';
      state.price = 230;
      return state;
    case 'default' :
      return 2;
  };
};
const store = createStore(setPrice);

store.dispatch({ type: 'ADD_ARTICLE' });
console.log(store.getState());
// import DB from 'rethinkdb';
/* var t = require('express');
var http = require('http');
var RethinkdbWebsocketServer = require('rethinkdb-websocket-server');

var ReactRethinkdb = require('react-rethinkdb');
var r = ReactRethinkdb.r;

// Set up an HTTP route to serve files from assets/
var httpServer = http.createServer(t);

// Configure rethinkdb-websocket-server to listen on the /db path and proxy
// incoming WebSocket connections to the RethinkDB server running on localhost
// port 28015. Because unsafelyAllowAnyQuery is true, any incoming query will
// be accepted (not safe in production).

RethinkdbWebsocketServer.listen({
  httpServer: httpServer,
  httpPath: '/',
  dbHost: 'localhost',
  dbPort: 28015,
  unsafelyAllowAnyQuery: true,
});

// Start the HTTP server on port 8015
httpServer.listen(8015);
console.log('Tutorial server started');
r.DefaultSession.connect({
  host: 'localhost',          // hostname of the websocket server
  port: 8015,                 // port number of the websocket server
  path: '/',                  // HTTP path to websocket route
  secure: false,              // set true to use secure TLS websockets
  db: 'test',                 // default database, passed to rethinkdb.connect
  autoReconnectDelayMs: 2000, // when disconnected, millis to wait before reconnect
});

/*
var host = 'localhost;
var port = 28015;
var conn = DB.connect(host = host, port = port);
console.log(conn);
DB.db_create('data').run(conn);
DB.db('data').table_create('posts').run(conn);
DB.table('posts').insert(
  { 'id': 1,
    'title': 'Lorem ipsum',
    'content': 'Dolor sit amet',
  }).run(conn);
var t = DB.table('posts').run(conn);*/
export class ArticlesView extends React.Component {
  render() {
    return (
      <div className='container text-center'>
      <h1>ArticlesView</h1>
        {article.map(
          value => <Article
              {...value}
              value={value.type}
          />
        )}
        <Link to='/'>Back To Home View</Link>
      </div>
	);
  }
}

export default ArticlesView;
