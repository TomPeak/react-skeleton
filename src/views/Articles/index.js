import React from 'react';
import { Link } from 'react-router';

export class ArticlesView extends React.Component {
  render() {
    return (
      <div className='container text-center'>
        <h1>ArticlesView</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}

export default ArticlesView;
