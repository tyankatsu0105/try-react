import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let hoge = 'aaaa';

class App extends React.Component {
  render() {
    return <div>{hoge}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
