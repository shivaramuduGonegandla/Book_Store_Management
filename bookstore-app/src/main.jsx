import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Correct import statement
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store'; // Assuming store.js is in the redux folder
import Routes from './routes.jsx';
import './styles/global.css';

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
