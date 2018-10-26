import React, { Component } from 'react';

class TaskItem extends Component {
    changeStatus = (idx) => {
        this.props.changeStatus(idx);
    }

    deleteTask = idx => {
        this.props.deleteTask(idx);
    }

    updateTask = taskSelected => {
        this.props.updateTask(taskSelected);
    }


    render() {
        let { taskValue, idx } = this.props;

        return (
            <tr>
                <td>{idx + 1}</td>
                <td>{taskValue.name}</td>
                <td className="text-center">
                    <span
                        className={ taskValue.status ? 'label label-info' : 'label label-success' }
                        onClick={() => this.changeStatus(idx)}
                        style={{cursor: 'pointer'}}
                    >
                        { taskValue.status ? 'Hoạt động' : 'Hoàn thành' }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => this.updateTask(taskValue)} >
                        <span className="fa fa-edit mr-5"></span>
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.deleteTask(idx)} >
                        <span className="fa fa-trash mr-5"></span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;