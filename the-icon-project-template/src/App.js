import React, { Component } from 'react';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar navbar-inverse">
            <div className="navbar-inner">
              <div className="content-fluid">
                <div className="nav-collapse collapse">
                  <ul className="nav">
                    <li className="navbar-item">
                      <a href="#" title="Browse icons sets">Icon Sets</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Browse icon designers">Designers</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Custom icon design">Custom Icons</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Quickly edit icons">Icon Editor</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Subscribe">Pro</a>
                    </li>
                  </ul>
                  <ul className="nav pull-right">
                    <li className="navbar-item">
                      <a href="#" title="Browse icons sets">Icon Sets</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Browse icon designers">Designers</a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" title="Custom icon design">Custom Icons</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
