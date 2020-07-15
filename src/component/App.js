import React from "react";
import "../component/App.css";
import TaskContainer from '../container/taskList';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to React Redux</h2>
      </header>
      <div>
        <TaskContainer/>
      </div>
    </div>
  );
}

export default (App);
