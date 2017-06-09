import React, { Component } from 'react';

export default class TaskListItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  OnEditClick() {
    this.setState({ isEditing: true});
  }
  OnCancelClick() {
    this.setState({ isEditing: false});
  }
  OnSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.OnSaveClick.bind(this)}>Save</button>
          <button onClick={this.OnCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={this.OnEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted? 'green': 'red',
      cursor: 'pointer'
    };

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.OnSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  }
}
