import React, { Component } from "react";
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import TodoReduce from '../reducer/active_reducer';
import { Tabs } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Demo extends Component {
    render() {
        const { todo } = this.props;
        console.log(todo.todoArr);
        return (
          <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="All" key="1">
          </TabPane>
          <TabPane tab="Incompleted" key="2">
          
          </TabPane>
          <TabPane tab="Completed" key="3">
          
          </TabPane>
        </Tabs>
        )
    }
}
const mapStateProps = (state) => {
    return {
      todo: state.todo
    }
}
export default connect(mapStateProps)(Demo)
