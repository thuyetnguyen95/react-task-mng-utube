import React, { Component } from 'react';

class TaskForm extends Component {
    /**
     * Creates an instance of TaskForm.
     * @param {*} props
     * @memberof TaskForm
     */
    constructor(props) {
        super(props);
        
        this.state = {
            taskName: '',
            taskStatus: 1
        }
    }

    /**
     * Handle input change
     *
     * @memberof TaskForm
     */
    handleOnChangeValue = (e) => {
        let { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    
    /**
     * Handle submit form
     *
     * @memberof TaskForm
     */
    handeFormSubmit = (e) => {
        if (!this.state.taskName.trim()) {
            e.preventDefault(); // disable submit form
        }

        if (this.state.taskName.trim()) {
            let newTask = {
                name: this.state.taskName.trim(),
                status: parseInt(this.state.taskStatus) ? true : false
            }
    
            this.props.addNewTask(newTask);
            this.resetForm();
        }

        e.preventDefault(); // disable submit form
    }

    handleUpdateTask = () => {

    }

    /**
     * Reset field on form
     *
     * @memberof TaskForm
     */
    resetForm = () => {
        this.setState({
            taskName: '',
            taskStatus: 1
        });

        this.handleCloseForm();
    }

    /**
     * Handle close button
     *
     * @memberof TaskForm
     */
    handleCloseForm = () => {
        this.props.handleCloseForm();
    }

    setTaskToUpdate = () => {
        if (this.props.taskSelected) {
            this.setState({
                taskName: this.props.taskSelected.name,
                taskStatus: this.props.taskSelected.status ? 1 : 0
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.taskSelected) {
            nextState.taskName = nextProps.taskSelected.name;
            nextState.taskStatus = nextProps.taskSelected.status ? 1 : 0;
        }
    }
    
    componentWillMount() {
        this.setTaskToUpdate();
    }

    /**
     * Render element component
     *
     * @memberof TaskForm
     */
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc<span className="fa fa-times-circle text-right" onClick={this.handleCloseForm}/></h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={e => this.handeFormSubmit(e)}>
                        <div className="form-group"><label>Tên :</label>
                            <input type="text" className="form-control" name="taskName" value={this.state.taskName} onChange={this.handleOnChangeValue}/>
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="taskStatus" value={this.state.taskStatus} onChange={this.handleOnChangeValue} >
                            <option value={1}>Hoạt động</option>
                            <option value={0}>Hoàn thành</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5" />Lưu Lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.resetForm}>
                                <span className="fa fa-close mr-5" />Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;