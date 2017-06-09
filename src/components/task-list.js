import _ from 'lodash';
import React, { Component } from 'react';
import TaskListHeader from './task-list-header';
import TaskListItem from './task-list-item';

export default class TaskList extends Component{
  renderItems() {
    const props = _.omit(this.props, 'tasks')
    return _.map(this.props.tasks, (task, index) => <TaskListItem key={index
    } {...task} {...props}/>)
  }
  render() {
    return (
      <table>
        <TaskListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
