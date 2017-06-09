import React, { Component } from 'react';

export default class TaskListHeader extends Component{
  render() {
    return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
    );
  }
}
