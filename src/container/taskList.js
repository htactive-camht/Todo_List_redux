import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTaskList } from "../actions/index";
import "./tasklist.css";
import { Row, Col, Input, Button } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

class TaskList extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      addTask: ''
    }
  }

  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.title !== '')
    {
      this.props.addTaskList(this.state.title)
      //reset input box
      this.setState({
        title: ''
      })
    }
  }
  
  EnterInput = (e) => {
    if (e.key === 'Enter') {
      alert ('hello')
    }
  }
  createTaskList() {
    let listItems = this.props.taskList.map((eachTask, index) => {
      return (
        <div key={index} className="divTodo">
          <div className='divTodoHeader'>
          <Input type="checkbox"></Input>
          <Button value ={eachTask.id}>
                {" "}
                <EditOutlined />
              </Button>
              <Button value ={eachTask.id}>
                <CloseOutlined />
              </Button>
          
          </div>
          <div className='divTodoHeader'>
          <Row>
            <Col span={24}>Content :{eachTask.content}</Col>
          </Row>
          </div>
        </div>
      );
    });
    return listItems;
  }

  render() {
    return (
      <div className="">
        <div className="input-add">
          <Input onKeyDown = {this.EnterInput} type ="text" name ="AddTask"  onChange={this.handleTitleChange.bind(this)} onClick={this.handleSubmit.bind(this)} ></Input>
        </div>
        <div className ="ant-radio-group">
          <label>All |</label>
          <label>Incomple  |</label>
          <label>Completed</label>
        </div>
        <p>{this.createTaskList()}</p>
      </div>
    );
  }
}

function mapListTask(state) {
  return {
    taskList: state.listTask,
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTaskList: selectTaskList }, dispatch);
}

const TaskContainer = connect(mapListTask, mapDispatchToProps)(TaskList);

export default TaskContainer;
