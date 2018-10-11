import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import onChangeSelect from './components/Select';
import * as serviceWorker from './serviceWorker';

let template = <div class="container text-center">
                  <h3 class="mb-3">Repositories List</h3>
                  <select class="custom-select w-25 mb-5" id="select-order" onChange={onChangeSelect}>
                    <option selected>Order by:</option>
                    <option value="name">Name</option>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="issues">Issues</option>
                  </select>
                  <div class="card-deck mb-3 text-center">
                    <App />
                  </div>
                </div>

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();