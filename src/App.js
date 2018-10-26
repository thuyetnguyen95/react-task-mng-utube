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
        }
    }

    /**
     * Close form when click close button on form
     *
     * @memberof App
     */
    handleToggleForm = () => {
        this.setState({
            isDisplayForm: false
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
     * Render form element with condition
     *
     * @memberof App
     */
    getFormElement = () => {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <TaskForm 
                    handleCloseForm={this.handleToggleForm}
                    addNewTask={ahihi => this.addNewTask(ahihi)}
                    taskSelected={this.state.taskSelected}
                />
            </div>
        )
    }

    changeStatus = idx => {
        let listTask = this.state.tasks;
        listTask[idx].status = !listTask[idx].status;
        this.setState({
            tasks: listTask
        });
    }

    deleteTask = idx => {
        let listTask = this.state.tasks;
        listTask.splice(idx, 1);
        this.setState({
            tasks: listTask
        }); 
    }

    updateTask = taskSelected => {
        this.setState({
            isDisplayForm: true,
            taskSelected: taskSelected
        })
    }

    /**
     * Toggle form add , edit
     *
     * @memberof App
     */
    handleOpenForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
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
                            <button type="button" className="btn btn-primary" onClick={this.handleOpenForm}>
                                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                            </button>
                            <Control />
                            <TaskList
                                tasks={tasks}
                                changeStatus={this.changeStatus}
                                deleteTask={this.deleteTask}
                                updateTask={this.updateTask}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
