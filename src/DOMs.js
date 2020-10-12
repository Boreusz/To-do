import {projectHolder, Project, defaultProject} from './projects.js';
import {ToDoTask, toDoTask} from './todos.js';
const printingModule = (() => {
    const printTask = () =>{};
    const editTask = () => {};
    const deleteTask = () => {}
    const completeTask = () =>{};
    const printProject = () => {};
    const editProject = () => {};
    const deleteProject = () => {};
})();
const eventListeners = (() => {
    //Task related
const completeTasks = document.querySelectorAll(".task-status");
// completeTasks.forEach(function(task){
//     task.addEventListener("click", () => {
//         printingModule.completeTask();
//     })
// })
const openAddTaskWindow = document.querySelector(".add-task_window");
// openAddTaskWindow.addEventListener("click", () => {
// })
const addTask = document.querySelector(".add-task");
// addTask.addEventListener("click", () => {
//     printingModule.createTask();
//     const newTask = ToDoTask();
//     defaultProject.addProject(newTask);
// })
const deleteTask = document.querySelectorAll(".delete-task");
const openEditTask = document.querySelectorAll(".edit-task_window");
const editTask = document.querySelectorAll(".edit-task");
//Project related
const allProjectsView = document.querySelector(".more-projects");
allProjectsView.addEventListener("click", () => {
    if(document.querySelector(".all-projects").style.visbility != "visible"){
        document.querySelector(".all-projects").style.visbility = "visible";
        document.querySelector(".all-tasks").style.visbility = "hidden";
    }else{
        document.querySelector(".all-projects").style.visbility = "hidden";
        document.querySelector(".all-tasks").style.visbility = "visible";
    }
})
const chooseProject = document.querySelectorAll(".project-title")
const openAddProjectWindow = document.querySelector(".add-project_window")
const addProject = document.querySelector(".add-project");
const openEditProject = document.querySelectorAll(".edit-project_window");
const editProject = document.querySelectorAll(".edit-project");
const deleteProject = document.querySelectorAll(".delete-project");

})();
export {
    printingModule,
    eventListeners
}