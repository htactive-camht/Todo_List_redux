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
import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { EditOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
// import TodoReduce from "../reducer/active_reducer";
// import UPDATE_TASK from "../reducer/active_reducer";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewTodo: "",
      edit: false,
    };
  }

  EnterInput = (e) => {
    const { dispatch } = this.props;
    if (e.key === "Enter") {
      console.log("Event:", e.value);
      dispatch(addTaskList({ name: this.state.NewTodo }));
    }
  };

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


  // updateTaskID = (id) => {
  //   this.props.updateUser(id, this.state.name);
  //   this.setState((state) => ({
  //      edit: !state.edit,
  //  }));
  //  }

  createTaskList() {
    let listItems = this.props.todo.map((eachTask, index) => {
      const { editId } = this.state;
      if (!this.state.edit) {
        return (
          <div key={index} className="divTodo">
            <div className="divTodoHeader">
              <Input type="checkbox"></Input>
              <Button onClick={() => this.editUpdateTodoList(index)}>
                {" "}
                <EditOutlined />
              </Button>
              <Button onClick={() => this.deleteTaskByID(index)}>
                <CloseOutlined />
              </Button>
            </div>
            <div className="divTodoHeader">
              <Row>
                <Col span={24}>Date time: </Col>
              </Row>
            </div>
            <div className="divTodoHeader">
              <Row>
                <Col span={24}>Content :{eachTask.name}</Col>
              </Row>
            </div>
          </div>
        );
      } else {
        return (
          <div id="todolist">
            {this.props.todo.map((task, index) =>
              editId === index ? (
                <div key={index} className="divTodo">
                  <div className="divTodoHeader">
                    <Input type="checkbox"></Input>
                    <Button>
                      <CheckOutlined />
                    </Button>
                    <Button onClick={() => this.deleteTaskByID(index)}>
                      <CloseOutlined />
                    </Button>
                  </div>
                  <div className="divTodoHeader">
                    <Row>
                      <Col span={24}>Date time: </Col>
                    </Row>
                  </div>
                  <div className="divTodoHeader">
                    <Row>
                      <Col span={24}>
                        <TextArea
                          className="text-area"
                          onChange={(event) =>
                            this.setState({ text: event.target.value })
                          }
                          placeholder={eachTask.name}
                          value={this.state.name}
                        ></TextArea>
                      </Col>
                    </Row>
                  </div>
                </div>
              ) : (
                <div key={index} className="divTodo">
                  <div className="divTodoHeader">
                    <Input type="checkbox"></Input>
                    <Button onClick={() => this.editUpdateTodoList(index)}>
                      {" "}
                      <EditOutlined />
                    </Button>
                    <Button onClick={() => this.deleteTaskByID(index)}>
                      <CloseOutlined />
                    </Button>
                  </div>
                  <div className="divTodoHeader">
                    <Row>
                      <Col span={24}>Date time: </Col>
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
    });
    return listItems;
  }

  render() {
    return (
      <div>
        <div className="input-add">
          <Input
            name="NewTodo"
            onKeyDown={(e) => this.EnterInput(e)}
            onChange={(e) => this.setState({ NewTodo: e.target.value })}
            type="text"
          ></Input>
        </div>
        <div className="ant-radio-group">
          <label>All |</label>
          <label>Incomple |</label>
          <label>Completed</label>
        </div>
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
