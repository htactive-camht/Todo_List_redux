import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTaskList,
  deleteTask,
  updateTask,
  checkTask,
} from "../actions/index";
import "./tasklist.css";
import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { v1 as uuid } from "uuid";

// import TodoReduce from "../reducer/active_reducer";
// import UPDATE_TASK from "../reducer/active_reducer";

class TaskList extends Component {
  state = {
    NewTodo: "",
    edit: false,
    cloneValue: "",
    completed: false,
    todoList: [],
  };

  componentWillReceiveProps(nextProps) {
    return this.setState({ todoList: nextProps.todo });
  }

  EnterInput = (value) => {
    console.log("enter", value);
    const d = new Date();
    const n = d.toISOString();
    // Created: {moment(new Date(props.createdAt)).format("YYYY-MM-DD hh:mm:ss")
    const { dispatch } = this.props;
    // check without the NewTodo faile
    if (this.state.NewTodo.trim() === "" || this.state.NewTodo.length > 66) {
      alert("Please enter your new task or over max lenght character");
      this.setState({ NewTodo: "" });
    } else {
      console.log("Event:", value);
      dispatch(
        addTaskList({
          //  Delete space character
          id: uuid(),
          name: this.state.NewTodo.split(" ").join(""),
          color: this.getRandomColor(),
          date: n,
          isUpdate: false,
          completed: false,
        })
      );
      this.setState({ NewTodo: "" });
    }
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

  checkTaskByID = (id, check) => {
    const { dispatch } = this.props;

    dispatch(checkTask(id, check));
  };

  handleAll = (id) => {
    this.setState({ todoList: this.props.todo });
  };

  handleInCompleted = () => {
    console.log(
      "Incompleted",
      this.props.todo.filter((item) => item.completed === false)
    );
    return this.setState({
      todoList: this.props.todo.filter((item) => item.completed === false),
    });
  };

  handleCompleted = () => {
    console.log(
      "completed",
      this.props.todo.filter((item) => item.completed !== false)
    );
    return this.setState({
      todoList: this.props.todo.filter((item) => item.completed !== false),
    });
  };

  closeCheck = () => {
    this.setState((state) => ({
      edit: !state.edit,
    }));
  };

  createTaskList() {
    const { editId } = this.state;
    const { dispatch } = this.props;

    if (!this.state.edit) {
      return (
        <div id="todolist">
          {this.state.todoList.map((eachTask, index) => (
            <div key={index} id="divTodo" className="divTodo">
              <div className="divTodoHeader">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  onClick={() =>
                    this.checkTaskByID(eachTask.id, !eachTask.completed)
                  }
                  checked={eachTask.completed}
                  onChange={() => {}}
                ></input>
                <Button
                  className="btnIcon"
                  onClick={() => this.editUpdateTodoList(eachTask.id)}
                >
                  {" "}
                  <EditOutlined />
                </Button>
                <Button
                  className="btnIcon"
                  onClick={() => this.deleteTaskByID(eachTask.id)}
                >
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
          {this.state.todoList.map((eachTask, index) =>
            editId === eachTask.id ? (
              <div key={index} id="divTodo" className="divTodo">
                <div className="divTodoHeader">
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    onClick={() =>
                      this.checkTaskByID(eachTask.id, !eachTask.completed)
                    }
                    checked={eachTask.completed}
                    onChange={()=>{}}
                  ></input>
                  <Button className="btnIcon" onClick={() => this.closeCheck()}>
                    <CheckOutlined />
                  </Button>
                  <Button
                    className="btnIcon"
                    onClick={() => this.deleteTaskByID(eachTask.id)}
                  >
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
                        onChange={
                          (event) =>
                            dispatch(
                              updateTask(eachTask.id, event.target.value)
                            )
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
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    onClick={() =>
                      this.checkTaskByID(eachTask.id, !eachTask.completed)
                    }
                    checked={eachTask.completed}
                    onChange={()=>{}}
                  ></input>
                  <Button
                    className="btnIcon"
                    onClick={() => this.editUpdateTodoList(eachTask.id)}
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    className="btnIcon"
                    onClick={() => this.deleteTaskByID(eachTask.id)}
                  >
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
            onPressEnter={(e) => this.EnterInput(e.target.value)}
            placeholder="Enter new task if you want to add"
            onChange={(e) => this.setState({ NewTodo: e.target.value })}
            value={this.state.NewTodo}
            type="text"
          ></Input>
        </div>

        <div className="menu">
          <button onClick={() => this.handleAll()}>All</button>
          <button onClick={() => this.handleInCompleted()}>Incomplete</button>
          <button onClick={() => this.handleCompleted()}>Completed</button>
        </div>
        {this.createTaskList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // mapStateToProps là hàm có sẳn không được tự tạo

  return {
    taskList: state.listTask,
    todo: state.todo.todoArr,
  };
};

export default connect(mapStateToProps)(TaskList);
