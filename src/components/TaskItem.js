import React, { Component } from 'react';

class TaskItem extends Component {
    
    /**
     * @inheritance
     * 
     * @memberof TaskList
     */
    changeStatus = (task) => {
        this.props.changeStatus(task);
    }

    /**
     * @inheritance
     *
     * @memberof TaskList
     */
    deleteTask = task => {
        this.props.deleteTask(task);
    }

    /**
     * @inheritance
     *
     * @memberof TaskList
     */
    editTask = taskSelected => {
        this.props.editTask(taskSelected);
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
                        onClick={() => this.changeStatus(taskValue)}
                        style={{cursor: 'pointer'}}
                    >
                        { taskValue.status ? 'Hoạt động' : 'Hoàn thành' }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning btn-sm" onClick={() => this.editTask(taskValue)} >
                        <span className="fa fa-edit mr-5"></span>
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.deleteTask(taskValue)} >
                        <span className="fa fa-trash mr-5"></span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;