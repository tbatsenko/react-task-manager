import React, {Component} from 'react';
import TaskList from './task-list.js';
import CreateTask from './create-task';

const tasks = [
  {
    task: 'complete React Tutorial',
    isCompleted: false
  },
  {
    task: 'read a book',
    isCompleted: true
  },

];

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      tasks
    };
  }

  createTask(task){
    this.state.tasks.push({
      task,
      isCompleted: false
    });
    this.setState({ tasks: this.state.tasks })
  }

  toggleTask(task) {
    const foundTask = _.find(this.state.tasks, tsk => tsk.task === task)
    foundTask.isCompleted = !foundTask.isCompleted;
    this.setState({ tasks: this.state.tasks });

  }

  saveTask(oldTask, newTask) {
    const foundTask = _.find(this.state.tasks, tsk => tsk.task === oldTask)
    foundTask.task = newTask;
    this.setState({tasks: this.state.tasks})
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.tasks, tsk => tsk.task === taskToDelete)
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    return (
      <div>
        <h1> React ToDos App</h1>
        <CreateTask
          tasks={this.state.tasks}
          createTask={this.createTask.bind(this)}
        />
        <TaskList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>

    );
  }
}
