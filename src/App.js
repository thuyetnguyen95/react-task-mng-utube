import React, { Component } from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
    /**
     * Creates an instance of App.
     * 
     * @param {*} props
     * @memberof App
     */
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, name: 'Ăn', status: true },
                { id: 2, name: 'Ngủ', status: false },
                { id: 3, name: 'Code', status: true },
                { id: 4, name: 'Hít thở', status: true },
                { id: 5, name: 'LOL', status: false },
            ],

            isDisplayForm: false,
            taskSelected: '',
            formTitle: 'Thêm công việc'
        }
    }

    /**
     * Close form when click close button on form
     *
     * @memberof App
     */
    handleCloseForm = () => {
        this.setState({
            isDisplayForm: false,
            taskSelected: null,
        })
    }

    /**
     * Store new task
     *
     * @memberof App
     */
    addNewTask = (ahihi) => {
        this.state.tasks.push({
            id: this.state.tasks.length + 1,
            name: ahihi.name,
            status: ahihi.status
        })

        this.setState({
            tasks: this.state.tasks
        })
    }

    /**
     * Update status when clicked
     *
     * @memberof App
     */
    changeStatus = idx => {
        let listTask = this.state.tasks;
        listTask[idx].status = !listTask[idx].status;
        this.setState({
            tasks: listTask
        });
    }

    /**
     * Delete task
     *
     * @memberof App
     */
    deleteTask = idx => {
        let listTask = this.state.tasks;
        listTask.splice(idx, 1);
        this.setState({
            tasks: listTask
        }); 
    }

    /**
     * Open form and fill data to edit
     *
     * @memberof App
     */
    editTask = taskSelected => {
        this.setState({
            isDisplayForm: true,
            taskSelected: taskSelected,
            formTitle: 'Cập nhật công việc'
        })
    }

    /**
     * Update task
     *
     * @memberof App
     */
    updateTask = taskUpdated => {
        let listTask = this.state.tasks;
        let taskUpdateIdx = listTask.findIndex((item) => {
            return item.id === taskUpdated.id;
        });

        listTask[taskUpdateIdx] = taskUpdated;
        this.setState({
            tasks: listTask,
            taskSelected: '',
        });
    }

    /**
     * Toggle form add , edit
     *
     * @memberof App
     */
    handleToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskSelected) {
            this.setState({
                isDisplayForm: true,
                taskSelected: null,
                formTitle: 'Thêm công việc'
            })
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm
            })
        }
    }

    /**
     * Render form element with condition
     *
     * @memberof App
     */
    getFormElement = () => {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm 
                    formTitle={this.state.formTitle}
                    handleCloseForm={this.handleCloseForm}
                    addNewTask={ahihi => this.addNewTask(ahihi)}
                    taskSelected={this.state.taskSelected}
                    updateTask={this.updateTask}
                />
            </div>
        )
    }

    /**
     * Render all component
     *
     * @returns
     * @memberof App
     */
  render() {
        let { tasks, isDisplayForm } = this.state;
        let formElm = isDisplayForm ? this.getFormElement() : null;

        return (
            <div className="App">
                <div className="container">
                    <div className="text-center">
                        <h1>Quản Lý Công Việc</h1>
                        <hr />
                    </div>
                    <div className="row">
                        {formElm}
                        <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' } >
                            <button type="button" className="btn btn-primary" onClick={this.handleToggleForm}>
                                <span className="fa fa-plus mr-5"></span>Thêm công việc
                            </button>
                            <Control />
                            <TaskList
                                tasks={tasks}
                                changeStatus={this.changeStatus}
                                deleteTask={this.deleteTask}
                                editTask={this.editTask}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
