import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectTaskList,
  addTaskList,
  deleteTask,
  updateTask,
} from "../actions/index";
import "./tasklist.css";
import Demo from './tabs';
import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
// import TodoReduce from "../reducer/active_reducer";
// import UPDATE_TASK from "../reducer/active_reducer";

class TaskList extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      NewTodo: this.props.todo.name,
      edit: false,
      cloneValue:''
    };
  }

  EnterInput = (e) => {
    const d = new Date();
    const n = d.toISOString();
    // Created: {moment(new Date(props.createdAt)).format("YYYY-MM-DD hh:mm:ss")
    const { dispatch } = this.props;
    if (e.key === "Enter") {
      console.log("Event:", e.value);
      dispatch(
        addTaskList({
          name: this.state.NewTodo,
          color: this.getRandomColor(),
          date: n,
          isUpdate: false,
        })
      );
    }
    this.setState({ NewTodo: "" });
  };

  getRandomColor() {
    let colorValues = ["red", "blue", "green", "yellow"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  }

  deleteTaskByID = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteTask(id));
  };

  editUpdateTodoList = (index) => {
    this.setState((state) => ({
      edit: !state.edit,
      editId: index,
    }));
  };

  // updateTodoList = (index) => {
  //   const { dispatch } = this.props;
  //   dispatch(updateTask(index, this.state.NewTodo));
    // this.setState((state) => ({
    //   edit: !state.edit,
    // }));
  // };

  closeCheck = () => {
    this.setState((state) => ({
      edit: !state.edit,
    }));
  }

  createTaskList() {
    const { editId } = this.state;
    const { dispatch } = this.props;
    console.log(this.props.todo, 'this.props.todo');
    if (!this.state.edit) {
      return (
        <div id="todolist">
          {this.props.todo.map((eachTask, index) => (
            <div key={index} id="divTodo" className="divTodo">
              <div className="divTodoHeader">
                  <input type ="checkbox" className ="input-checkbox"></input>
                <Button className='btnIcon' onClick={() => this.editUpdateTodoList(index)} >
                  {" "}
                  <EditOutlined />
                </Button>
                <Button  className='btnIcon'  onClick={() => this.deleteTaskByID(index)}>
                  <CloseOutlined />
                </Button>
              </div>
              <div className="divTodoHeader">
                <Row>
          <Col span={24}>Date time: {eachTask.date}</Col>
                </Row>
              </div>
              <div className="divTodoHeader">
                <Row>
                  
                  <Col span={24}>Content :{eachTask.name}</Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div id="todolist">
          {this.props.todo.map((eachTask, index) =>
            editId === index ? (
              <div key={index} id="divTodo" className="divTodo">
                <div className="divTodoHeader">
                  <input type="checkbox" className ="input-checkbox"></input>
                  <Button  className='btnIcon' onClick = { () => this.closeCheck()} >
                    <CheckOutlined />
                  </Button>
                  <Button className='btnIcon' onClick={() => this.deleteTaskByID(index)}>
                    <CloseOutlined />
                  </Button>
                </div>
                <div className="divTodoHeader">
                  <Row>
                    <Col span={24}>Date time: {eachTask.date} </Col>
                  </Row>
                </div>
                <div className="divTodoHeader">
                  <Row>
                    <Col span={24}>
                      <TextArea
                        className="text-area"
                        onChange={(event) =>
                          dispatch(updateTask(index, event.target.value))
                          // this.setState({NewTodo: event.target.value})
                        }
                        value={eachTask.name}
                      ></TextArea>
                    </Col>
                  </Row>
                </div>
              </div>
            ) : (
              <div key={index} id="divTodo" className="divTodo">
                <div className="divTodoHeader">
                <input type="checkbox" className ="input-checkbox"></input>
                  <Button className='btnIcon' onClick={() => this.editUpdateTodoList(index)}>
                    <EditOutlined />
                  </Button>
                  <Button className='btnIcon' onClick={() => this.deleteTaskByID(index)}>
                    <CloseOutlined />
                  </Button>
                </div>
                <div className="divTodoHeader">
                  <Row>
                    <Col span={24}>Date time: {eachTask.date} </Col>
                  </Row>
                </div>
                <div className="divTodoHeader">
                  <Row>
                    <Col span={24}>Content :{eachTask.name}</Col>
                  </Row>
                </div>
              </div>
            )
          )}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="input-add">
          <Input
            name="NewTodo"
            onKeyDown={(e) => this.EnterInput(e)}
            placeholder ="Enter new task if you want to add"
            onChange={(e) => this.setState({ NewTodo: e.target.value })}
            type="text"
          ></Input>
        </div>
        <Demo/>
        <p>{this.createTaskList()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // mapStateToProps là hàm có sẳn không được tự tạo
  console.log("log state:", state.todo.todoArr); // khi dùng ham mapStateToProps thì props sẽ nhận luôn cả dispatch nên dùng dispatch để chạy action gọi vào
  return {
    taskList: state.listTask,
    todo: state.todo.todoArr,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   updateUser: (id, name) => dispatch(UPDATE_TASK(id, name)),

// })

export default connect(mapStateToProps)(TaskList);
