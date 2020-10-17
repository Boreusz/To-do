import { add } from 'date-fns';
import {projectHolder, Project, defaultProject, projectcounter} from './projects.js';
import {ToDoTask, toDoTask} from './todos.js';
const printingModule = (() => {
    const printTasks = () =>{};
    const deleteTask = () => {}
    const completeTask = () =>{};
    const printProjects = () => {
        const allProjects = document.querySelector(".all-projects-container");
        allProjects.innerHTML = "";
        for(let i = 0; i < projectHolder.length; i++){
            const div = document.createElement("div");
            div.setAttribute("class", "project");
            const spanTitle = document.createElement("span");
            spanTitle.setAttribute("class", "project-title")
            spanTitle.setAttribute("id", projectHolder[i].getID())
            spanTitle.textContent = projectHolder[i].getName();
            spanTitle.style.color = projectHolder[i].getColor();
            div.appendChild(spanTitle);
            div.innerHTML += `<div><span class="edit-project_window"><i class="fas fa-edit"></i></span> <span class="delete-project"><i class="fas fa-trash"></i></span></div>`
            allProjects.appendChild(div);
        }
        //event listener to dynamically added projects to change view, edit, and delete them
        const chooseProjects = document.querySelectorAll(".project-title")
        chooseProjects.forEach((project) => {
        project.addEventListener("click", () => {
        document.querySelector(".all-projects").style.visibility = "hidden";
        document.querySelector(".project-tab-title").textContent = project.textContent;
        document.querySelector(".project-tab-title").style.color = project.style.color;
        document.querySelector(".all-tasks").style.visibility = "visible";
        })
        const openEditProjects = document.querySelectorAll(".edit-project_window");
            openEditProjects.forEach((pbutton) => {
            pbutton.addEventListener("click", () =>{
                document.querySelector(".edit-project-wrapper").style.visibility = "visible";
            })
        })
        const deleteProjects = document.querySelectorAll(".delete-project");
        deleteProjects.forEach((project) => {
            project.addEventListener("click", () => {
            })
        })
        })
    };
    const deleteProject = () => {};
    return {
        printTasks,
        deleteTask,
        completeTask,
        printProjects,
        deleteProject
    }
})();
const eventListeners = (() => {
    //Close button
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentElement.parentElement.style.visibility = "hidden";
        })
    })
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
const openAddProjectWindow = document.querySelector(".add-project_window")
openAddProjectWindow.addEventListener("click", () => {
    if(document.querySelector(".add-project-wrapper").style.visibility != "visible"){
        document.querySelector(".add-project-wrapper").style.visibility = "visible";
    }else{
        document.querySelector(".add-project-wrapper").style.visibility = "hidden";
    }
})
const addProject = document.querySelector("#add-project-bttn");
addProject.addEventListener("click", () =>{
    const name = document.querySelector("#add-project-name")
    const color = document.querySelector("#add-project-color")
    if(name.value != ""){
        const newProject = Project(name.value, color.value, projectcounter.getValue());
        projectHolder.push(newProject)
        projectcounter.incrementValue();
        name.value = "";
        document.querySelector(".add-project-wrapper").style.visibility = "hidden";
        printingModule.printProjects();
    }else{
        alert("Empty Name Input")
    }
})
const editProjects = document.querySelector("#project-submit-edit");
editProjects.addEventListener("click", () =>{
})
// const delete Project =
})();
export {
    printingModule,
    eventListeners
}