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
/*     //Task related
const completeTasks = document.querySelectorAll(".task-status");
// completeTasks.forEach(function(task){
//     task.addEventListener("click", () => {
//         printingModule.completeTask();
//     })
// })*/
const openAddTaskWindow = document.querySelector(".add-task_window");
openAddTaskWindow.addEventListener("click", () => {
if(document.querySelector(".add-task-wrapper").style.visibility != "visible"){
    document.querySelector(".add-task-wrapper").style.visibility = "visible";
}else{
    document.querySelector(".add-task-wrapper").style.visibility = "hidden";
}
})
/*
const addTask = document.querySelector(".add-task");
// addTask.addEventListener("click", () => {
//     printingModule.createTask();
//     const newTask = ToDoTask();
//     defaultProject.addProject(newTask);
// })
const deleteTask = document.querySelectorAll(".delete-task");
const openEditTask = document.querySelectorAll(".edit-task_window");
const editTask = document.querySelectorAll(".edit-task"); */
//Project related
const allProjectsView = document.querySelector(".more-projects");
allProjectsView.addEventListener("click", () => {
    if(document.querySelector(".all-projects").style.visibility != "visible"){
        document.querySelector(".all-projects").style.visibility = "visible";
        document.querySelector(".all-tasks").style.visibility = "hidden";
    }else{
        document.querySelector(".all-projects").style.visibility = "hidden";
        document.querySelector(".all-tasks").style.visibility = "visible";
    }
})
const chooseProject = document.querySelectorAll(".project-title")
const openAddProjectWindow = document.querySelector(".add-project_window")
openAddProjectWindow.addEventListener("click", () => {
    if(document.querySelector(".add-project-wrapper").style.visibility != "visible"){
        document.querySelector(".add-project-wrapper").style.visibility = "visible";
    }else{
        document.querySelector(".add-project-wrapper").style.visibility = "hidden";
    }
})
/*const addProject = document.querySelector(".add-project"); */
const openEditProjects = document.querySelectorAll(".edit-project_window");
openEditProjects.forEach((project) => {
    project.addEventListener("click", () =>{
    })
})
const editProjects = document.querySelectorAll(".edit-project");
editProjects.forEach((project) => {
    project.addEventListener("click", () =>{
    })
})
const deleteProjects = document.querySelectorAll(".delete-project");
deleteProjects.forEach((project) => {
    project.addEventListener("click", () => {
    })
})
})();
export {
    printingModule,
    eventListeners
}