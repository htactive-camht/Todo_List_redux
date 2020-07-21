import React from "react";
import "../component/App.css";
import TaskContainer from '../container/taskList';
import Sider from '../container/menu'
import 'antd/dist/antd.css';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Welcome to React Redux</h2>
      </header>
      <div>
        <div className ="container-menu">
        <Sider/>
        </div>
        <div className ="container-task">
        <TaskContainer/>
        </div>
       
      </div>
    </div>
  );
}

export default (App);
