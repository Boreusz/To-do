import { add } from 'date-fns';
import {projectHolder, Project, defaultProject, projectcounter} from './projects.js';
import {ToDoTask, toDoTask} from './todos.js';
const printingModule = (() => {
    const printTasks = () =>{
        const allTasks = document.querySelector(".all-tasks");
        allTasks.innerHTML = "";
        const activeProjectID = document.querySelector(".project-tab-title").getAttribute("id");
        const activeProjectIndex = projectHolder.findIndex(x => x.getID() == activeProjectID);
        for(let i = 0; i < projectHolder[activeProjectIndex].toDoList.length; i++){
            const div = document.createElement("div");
            div.setAttribute("id", projectHolder[activeProjectIndex].toDoList[i].getID());
            div.setAttribute("class", "task");
            const taskTitle = document.createElement("span");
            taskTitle.setAttribute("class", "task-title");
            taskTitle.textContent = projectHolder[activeProjectIndex].toDoList[i].getName();
            div.appendChild(taskTitle);
            div.innerHTML += `<div><span class="edit-task_window"><i class="fas fa-edit"></i></span> <span class="delete-task"><i class="fas fa-trash"></i></span></div>`;
            allTasks.appendChild(div);
        }
    };
    const completeTask = () =>{};
    const chooseProject = (project) => {
        document.querySelector(".all-projects").style.visibility = "hidden";
        document.querySelector(".project-tab-title").textContent = project.textContent;
        document.querySelector(".project-tab-title").style.color = project.style.color;
        document.querySelector(".project-tab-title").setAttribute("id", project.parentElement.getAttribute("id"));
        document.querySelector(".all-tasks").style.visibility = "visible";
    };
    const printProjects = () => {
        const allProjects = document.querySelector(".all-projects-container");
        allProjects.innerHTML = "";
        for(let i = 0; i < projectHolder.length; i++){
            const div = document.createElement("div");
            div.setAttribute("class", "project");
            div.setAttribute("id", projectHolder[i].getID())
            const spanTitle = document.createElement("span");
            spanTitle.setAttribute("class", "project-title")
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
            printingModule.chooseProject(project);
            printingModule.printTasks();

        })
        const openEditProjects = document.querySelectorAll(".edit-project_window");
            openEditProjects.forEach((pbutton) => {
            pbutton.addEventListener("click", () =>{
                document.querySelector(".edit-project-wrapper").style.visibility = "visible";
                document.querySelector(".edit-project-title").setAttribute("id", pbutton.parentElement.parentElement.getAttribute("id"))
            })
        })
        const deleteProjects = document.querySelectorAll(".delete-project");
        deleteProjects.forEach((project) => {
            project.addEventListener("click", () => {
                document.querySelector(".assurance-wrapper").style.visibility = "visible";
                document.querySelector(".assurance-text").innerHTML = `Do you want delete <b>${project.parentNode.parentNode.childNodes[0].textContent}</b> Project?`;
                document.querySelector(".assurance-text").setAttribute("id", project.parentElement.parentElement.getAttribute("id"));
            })
        })
        })
    };
    return {
        printTasks,
        completeTask,
        chooseProject,
        printProjects
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

const addTask = document.querySelector("#add-task");
addTask.addEventListener("click", () => {
    if(projectHolder.length >= 1){
        const title = document.querySelector("#add-task-title");
        const date = document.querySelector("#add-task-date");
        const priority = document.querySelector("#add-task-priority");
        const description = document.querySelector("#add-task-description");
        const projectID = document.querySelector(".project-tab-title").getAttribute("id");
        const projectIndex = projectHolder.findIndex(x => x.getID() == projectID);
        if(title.value != ""){
            const newTask = ToDoTask(title.value, description.value, date.value, priority.value, projectHolder[projectIndex].giveTaskID());
            projectHolder[projectIndex].addTask(newTask);
            document.querySelector(".add-task-wrapper").style.visibility = "hidden";
            printingModule.printTasks();
            title.value = "";
            date.value = "mm/dd/yyyy";
            priority.value = "1";
            description.value = "";
        }else{
            alert("Task Title is not defined")
        }
    }else{
        alert("There is no Project available to assign task")
    }
})
/*
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
        document.querySelector(".add-project-wrapper").style.visibility = "hidden";
        printingModule.printProjects();
        if(projectHolder.length == 1){
            printingModule.chooseProject(document.getElementById(`${projectHolder[0].getID()}`).childNodes[0]);
        }
    }else{
        alert("Empty Name Input")
    }
    name.value = "";
    color.value = "black"
})
const editProjects = document.querySelector("#project-submit-edit");
editProjects.addEventListener("click", () =>{
    const newName = document.querySelector("#project-name-edit");
    const newColor = document.querySelector("#project-color-edit")
    const selectedProjectIndex = projectHolder.findIndex(x => x.getID() == document.querySelector(".edit-project-title").getAttribute("id"));
    console.log(editProjects.parentElement.getAttribute("id"))
    if(newName.value != ""){
        projectHolder[selectedProjectIndex].changeName(newName.value);
    }
    projectHolder[selectedProjectIndex].changeColor(newColor.value);
    printingModule.printProjects();
    document.querySelector(".edit-project-wrapper").style.visibility = "hidden";
    newName.value = "";
    newColor.value = "black";
})
const acceptDeletion = document.querySelector("#yes-bttn");
acceptDeletion.addEventListener("click", () =>{
    const projectIndex = projectHolder.findIndex(x => x.getID() == document.querySelector(".assurance-text").getAttribute("id"));
    if((document.querySelector(".project-tab-title").getAttribute("id") == document.querySelector(".assurance-text").getAttribute("id")) && projectHolder.length > 1){
        projectHolder.splice(projectIndex, 1);
        printingModule.chooseProject(document.getElementById(`${projectHolder[0].getID()}`).childNodes[0]);
        printingModule.printTasks();
        document.querySelector(".all-projects").style.visibility = "visible";
        document.querySelector(".all-tasks").style.visibility = "hidden";
    }else if (document.querySelector(".project-tab-title").getAttribute("id") == document.querySelector(".assurance-text").getAttribute("id") && projectHolder.length <= 1){
        projectHolder.splice(projectIndex, 1);
        document.querySelector(".all-tasks").innerHTML = "";
        document.querySelector(".project-tab-title").textContent = "Add and Choose New Project";
    }else {
        projectHolder.splice(projectIndex, 1);
    }
    printingModule.printProjects();
    document.querySelector(".assurance-wrapper").style.visibility = "hidden";
})
const rejectDeletion = document.querySelector("#no-bttn");
rejectDeletion.addEventListener("click", () => {
    document.querySelector(".assurance-wrapper").style.visibility = "hidden";
})
})();
export {
    printingModule,
    eventListeners
}