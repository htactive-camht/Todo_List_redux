import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTaskList, addTaskList , deleteTask, updateTask} from "../actions/index";
import "./tasklist.css";
import { Row, Col, Input, Button } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";


class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      NewTodo: ''
    }
  }


  EnterInput = (e) => {
    const {dispatch} = this.props;
    if (e.key === "Enter") {
      console.log("Event:",e.value);
      dispatch(addTaskList({name:this.state.NewTodo}))
    }
  };

  deleteTaskByID = (id) =>{
    const {dispatch} = this.props;
    dispatch(deleteTask(id))
  };

  updateTaskID = (task, id) => {
    const {dispatch} = this.props;
    dispatch(updateTask(task, id))
  }

  createTaskList() {
    let listItems = this.props.todo.map((eachTask, index) => {
      return (
        <div key={index} className="divTodo">
          <div className="divTodoHeader">
            <Input type="checkbox"></Input>
            <Button onClick = { () =>this.updateTaskID(eachTask, index)}>
              {" "}
              <EditOutlined />
            </Button>
            <Button onClick={()=>this.deleteTaskByID(index)}>
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
    });
    return listItems;
  }

  render() {
    return (
      <div>
        <div className="input-add">
          <Input name='NewTodo'  onKeyDown={e=>this.EnterInput(e)} onChange={e=> this.setState({NewTodo:e.target.value})} type="text" ></Input>
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

const mapStateToProps = (state) => {// mapStateToProps là hàm có sẳn không được tự tạo
  console.log("log state:", state.todo.todoArr);// khi dùng ham mapStateToProps thì props sẽ nhận luôn cả dispatch nên dùng dispatch để chạy action gọi vào
  return {
    taskList: state.listTask,
    todo: state.todo.todoArr,
  }
}




// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectTaskList: selectTaskList }, dispatch);
// }


export default connect(mapStateToProps)(TaskList);
