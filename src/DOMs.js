/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  projectHolder,
  Project,
  projectcounter,
} from './projects.js';
import {ToDoTask} from './todos.js';
const printingModule = (() => {
  const printTasks = () => {
    const allTasks = document.querySelector('.all-tasks');
    allTasks.innerHTML = '';
    const activeProjectID = document
        .querySelector('.project-tab-title')
        .getAttribute('id');
    const activeProjectIndex = projectHolder.findIndex(
        (x) => x.getID() == activeProjectID,
    );
    for (
      let i = 0;
      i < projectHolder[activeProjectIndex].toDoList.length;
      i++
    ) {
      const div = document.createElement('div');
      const div1 = document.createElement('div');
      div.setAttribute(
          'id',
          projectHolder[activeProjectIndex].toDoList[i].getID(),
      );
      div.setAttribute('class', 'task');
      div1.setAttribute('class', 'task-bar');
      const taskTitle = document.createElement('span');
      taskTitle.setAttribute('class', 'task-title');
      taskTitle.textContent = projectHolder[activeProjectIndex].toDoList[
          i
      ].getName();
      div1.appendChild(taskTitle);
      div1.innerHTML += `<div><span class="more-task_window"><i class="fas fa-caret-down"></i></span>` +
                        `<span class="complete-task"><i class="far fa-check-square"></i></span></div>`;
      const divMore = document.createElement('div');
      divMore.setAttribute('class', 'more-wrapper');
      divMore.style.display = 'none';
      const priorityInfo = document.createElement('span');
      priorityInfo.textContent =
          'Priority: ' +
          projectHolder[activeProjectIndex].toDoList[i].getPriority();
      priorityInfo.style.margin = '0 auto';
      divMore.appendChild(priorityInfo);
      if (projectHolder[activeProjectIndex].toDoList[i].getDate() != '') {
        const dateInfo = document.createElement('span');
        dateInfo.textContent =
          'Due to: ' + projectHolder[activeProjectIndex].toDoList[i].getDate();
        divMore.appendChild(dateInfo);
      }
      if (projectHolder[activeProjectIndex].toDoList[i].getDescription() != '') {
        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.setAttribute('class', 'task-description');
        const descriptionInfo = document.createElement('span');
        descriptionInfo.textContent = 'Description:';
        descriptionInfo.style.margin = '0 auto';
        const descriptionContent = document.createElement('span');
        descriptionContent.textContent = projectHolder[activeProjectIndex].toDoList[i].getDescription();
        descriptionContent.style.border = '1px solid black';
        descriptionWrapper.appendChild(descriptionInfo);
        descriptionWrapper.appendChild(descriptionContent);
        divMore.appendChild(descriptionWrapper);
      }
      const buttonsWrapper = document.createElement('div');
      buttonsWrapper.setAttribute('class', 'task-buttons-wrapper');
      buttonsWrapper.setAttribute('id', `${projectHolder[activeProjectIndex].toDoList[i].getID()}`);
      const dltbutton = document.createElement('button');
      dltbutton.setAttribute('class', 'task-dlt');
      const editbutton = document.createElement('button');
      editbutton.setAttribute('class', 'task-edit');
      dltbutton.textContent = 'Delete';
      editbutton.textContent = 'Edit';
      buttonsWrapper.appendChild(dltbutton);
      buttonsWrapper.appendChild(editbutton);
      divMore.appendChild(buttonsWrapper);
      div.appendChild(div1);
      div.appendChild(divMore);
      allTasks.appendChild(div);
    }
    const moreTasks = document.querySelectorAll('.more-task_window');
    moreTasks.forEach((task) => {
      task.addEventListener('click', () => {
        if (task.parentNode.parentNode.parentNode.childNodes[1].style.display != 'flex' ) {
          task.parentNode.parentNode.parentNode.childNodes[1].style.display= 'flex';
        } else {
          task.parentNode.parentNode.parentNode.childNodes[1].style.display = 'none';
        }
      });
    });
    const completeTasks = document.querySelectorAll('.complete-task');
    completeTasks.forEach((task) => {
      task.addEventListener('click', () => {
        const taskID = task.parentNode.parentNode.parentNode.getAttribute('id');
        const taskIndex = projectHolder[document.querySelector('.project-tab-title').getAttribute('id')].toDoList.findIndex(
            (x) => x.getID() == taskID,
        );
        if (task.parentNode.parentNode.parentNode.childNodes[0].style.color != 'green') {
          task.parentNode.parentNode.parentNode.childNodes[0].style.color = 'green';
          projectHolder[document.querySelector('.project-tab-title').getAttribute('id')].toDoList[taskIndex].changeStatus('done');
        } else {
          task.parentNode.parentNode.parentNode.childNodes[0].style.color = 'black';
          projectHolder[document.querySelector('.project-tab-title').getAttribute('id')].toDoList[taskIndex].changeStatus('to do');
        }
      });
    });
    const openEditTasks = document.querySelectorAll('.task-edit');
    openEditTasks.forEach((task) => {
      task.addEventListener('click', () => {
        document.querySelector('.edit-task-wrapper').style.visibility = 'visible';
        document.querySelector('.edit-task-title').setAttribute('id', task.parentNode.getAttribute('id'));
      });
    });
    const openDeleteTasks = document.querySelectorAll('.task-dlt');
    openDeleteTasks.forEach((task) => {
      task.addEventListener('click', ()=> {
        document.querySelector('.task-assurance-wrapper').style.visibility =
              'visible';
      });
      document.querySelector(
          '.task-assurance-text',
      ).innerHTML = `Do you want delete <b>${task.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].textContent}</b> Task?`;
      document
          .querySelector('.task-assurance-text')
          .setAttribute(
              'id',
              task.parentElement.getAttribute('id'),
          );
    });
  };
  const chooseProject = (project) => {
    document.querySelector('.all-projects').style.display = 'none';
    document.querySelector('.project-tab-title').textContent =
        project.textContent;
    document.querySelector('.project-tab-title').style.color =
        project.style.color;
    document
        .querySelector('.project-tab-title')
        .setAttribute('id', project.parentElement.getAttribute('id'));
    document.querySelector('.all-tasks').style.visibility = 'visible';
  };
  const printProjects = () => {
    const allProjects = document.querySelector('.all-projects-container');
    allProjects.innerHTML = '';
    for (let i = 0; i < projectHolder.length; i++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'project');
      div.setAttribute('id', projectHolder[i].getID());
      const spanTitle = document.createElement('span');
      spanTitle.setAttribute('class', 'project-title');
      spanTitle.textContent = projectHolder[i].getName();
      spanTitle.style.color = projectHolder[i].getColor();
      div.appendChild(spanTitle);
      div.innerHTML += `<div><span class="edit-project_window"><i class="fas fa-edit"></i></span> <span class="delete-project"><i class="fas fa-trash"></i></span></div>`;
      allProjects.appendChild(div);
    }
    // event listener to dynamically added projects to change view, edit, and delete them
    const chooseProjects = document.querySelectorAll('.project-title');
    chooseProjects.forEach((project) => {
      project.addEventListener('click', () => {
        printingModule.chooseProject(project);
        printingModule.printTasks();
      });
    });
    const openEditProjects = document.querySelectorAll(
        '.edit-project_window',
    );
    openEditProjects.forEach((pbutton) => {
      pbutton.addEventListener('click', () => {
        document.querySelector('.edit-project-wrapper').style.visibility =
              'visible';
        document
            .querySelector('.edit-project-title')
            .setAttribute(
                'id',
                pbutton.parentElement.parentElement.getAttribute('id'),
            );
      });
    });
    const deleteProjects = document.querySelectorAll('.delete-project');
    deleteProjects.forEach((project) => {
      project.addEventListener('click', () => {
        document.querySelector('.assurance-wrapper').style.visibility =
              'visible';
        document.querySelector(
            '.assurance-text',
        ).innerHTML = `Do you want delete <b>${project.parentNode.parentNode.childNodes[0].textContent}</b> Project?`;
        document
            .querySelector('.task-assurance-text')
            .setAttribute(
                'id',
                task.parentElement.parentElement.getAttribute('id'),
            );
      });
    });
  };
  return {
    printTasks,
    chooseProject,
    printProjects,
  };
})();
const eventListeners = (() => {
  // Close button
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.style.visibility = 'hidden';
    });
  });
  const openAddTaskWindow = document.querySelector('.add-task_window');
  openAddTaskWindow.addEventListener('click', () => {
    if (
      document.querySelector('.add-task-wrapper').style.visibility != 'visible'
    ) {
      document.querySelector('.add-task-wrapper').style.visibility = 'visible';
    } else {
      document.querySelector('.add-task-wrapper').style.visibility = 'hidden';
    }
  });
  const addTask = document.querySelector('#add-task');
  addTask.addEventListener('click', () => {
    const title = document.querySelector('#add-task-title');
    const date = document.querySelector('#add-task-date');
    const priority = document.querySelector('#add-task-priority');
    const description = document.querySelector('#add-task-description');
    if (projectHolder.length >= 1) {
      const projectID = document
          .querySelector('.project-tab-title')
          .getAttribute('id');
      const projectIndex = projectHolder.findIndex(
          (x) => x.getID() == projectID,
      );
      if (title.value != '') {
        const newTask = ToDoTask(
            title.value,
            description.value,
            date.value,
            priority.value,
            projectHolder[projectIndex].giveTaskID(),
        );
        projectHolder[projectIndex].addTask(newTask);
        document.querySelector('.add-task-wrapper').style.visibility = 'hidden';
        printingModule.printTasks();
      } else {
        alert('Task Title is not defined');
      }
    } else {
      alert('There is no Project available to assign task');
    }
    title.value = '';
    date.value = 'mm/dd/yyyy';
    priority.value = 'low';
    description.value = '';
  });
  const editTask = document.querySelector('#edit-task');
  editTask.addEventListener('click', () => {
    const projectIndex = projectHolder.findIndex(
        (x) =>
          x.getID() ==
      document.querySelector('.project-tab-title').getAttribute('id'),
    );
    const taskIndex = projectHolder[projectIndex].toDoList.findIndex(
        (y) =>
          y.getID() ==
      document.querySelector('.edit-task-title').getAttribute('id'),
    );
    const name = document.getElementById('edit-task-title');
    const date = document.getElementById('edit-task-date');
    const priority = document.getElementById('edit-task-priority');
    const description = document.getElementById('edit-task-description');
    if (name.value != '') {
      projectHolder[projectIndex].toDoList[taskIndex].changeName(name.value);
    };
    if (date.value === '') {
      projectHolder[projectIndex].toDoList[taskIndex].changeDate('');
    } else {
      projectHolder[projectIndex].toDoList[taskIndex].changeDate(date.value);
    };
    if (priority.value != '') {
      projectHolder[projectIndex].toDoList[taskIndex].changePriority(priority.value);
    };
    if (description.value === '') {
      projectHolder[projectIndex].toDoList[taskIndex].changeDescription('');
    } else {
      projectHolder[projectIndex].toDoList[taskIndex].changeDescription(description.value);
    };
    printingModule.printTasks();
    document.getElementById('edit-task-title').value = '';
    document.getElementById('edit-task-date').value = 'mm/dd/yyyy';
    document.getElementById('edit-task-priority').value = 'low';
    document.getElementById('edit-task-description').value = '';
    document.querySelector('.edit-task-wrapper').style.visibility = 'hidden';
  });
  const taskDeletion= document.querySelector('#task-yes-bttn');
  taskDeletion.addEventListener('click', () =>{
    const projectIndex = projectHolder.findIndex(
        (x) =>
          x.getID() ==
        document.querySelector('.project-tab-title').getAttribute('id'),
    );
    const taskIndex = projectHolder[projectIndex].toDoList.findIndex(
        (y) =>
          y.getID() ==
        document.querySelector('.task-assurance-text'),
    );
    projectHolder[projectIndex].toDoList.splice(taskIndex, 1);
    printingModule.printTasks();
    document.querySelector('.task-assurance-wrapper').style.visibility = 'hidden';
  });
  const taskRefusingDeletion = document.querySelector('#task-no-bttn');
  taskRefusingDeletion.addEventListener('click', () => {
    document.querySelector('.task-assurance-wrapper').style.visibility = 'hidden';
  });
  // Project related
  const allProjectsView = document.querySelector('.more-projects');
  allProjectsView.addEventListener('click', () => {
    if (document.querySelector('.all-projects').style.display === 'none') {
      document.querySelector('.all-projects').style.display= 'flex';
      document.querySelector('.all-tasks').style.visibility = 'hidden';
    } else {
      document.querySelector('.all-projects').style.display = 'none';
      document.querySelector('.all-tasks').style.visibility = 'visible';
    }
  });
  const openAddProjectWindow = document.querySelector('.add-project_window');
  openAddProjectWindow.addEventListener('click', () => {
    if (
      document.querySelector('.add-project-wrapper').style.visibility !=
        'visible'
    ) {
      document.querySelector('.add-project-wrapper').style.visibility =
          'visible';
    } else {
      document.querySelector('.add-project-wrapper').style.visibility =
          'hidden';
    }
  });
  const addProject = document.querySelector('#add-project-bttn');
  addProject.addEventListener('click', () => {
    const name = document.querySelector('#add-project-name');
    const color = document.querySelector('#add-project-color');
    if (name.value != '') {
      const newProject = Project(
          name.value,
          color.value,
          projectcounter.getValue(),
      );
      projectHolder.push(newProject);
      projectcounter.incrementValue();
      document.querySelector('.add-project-wrapper').style.visibility =
          'hidden';
      printingModule.printProjects();
      if (projectHolder.length == 1) {
        printingModule.chooseProject(
            document.getElementById(`${projectHolder[0].getID()}`).childNodes[0],
        );
      }
    } else {
      alert('Empty Name Input');
    }
    name.value = '';
    color.value = 'black';
  });
  const editProjects = document.querySelector('#project-submit-edit');
  editProjects.addEventListener('click', () => {
    const newName = document.querySelector('#project-name-edit');
    const newColor = document.querySelector('#project-color-edit');
    const selectedProjectIndex = projectHolder.findIndex(
        (x) =>
          x.getID() ==
          document.querySelector('.edit-project-title').getAttribute('id'),
    );
    console.log(editProjects.parentElement.parentElement.getAttribute('id'));
    if (newName.value != '') {
      projectHolder[selectedProjectIndex].changeName(newName.value);
      if (document.querySelector('.edit-project-title').getAttribute('id') === document.querySelector('.project-tab-title').getAttribute('id')) {
        document.querySelector('.project-tab-title').textContent = newName.value;
      }
    }
    projectHolder[selectedProjectIndex].changeColor(newColor.value);
    printingModule.printProjects();
    document.querySelector('.edit-project-wrapper').style.visibility = 'hidden';
    newName.value = '';
    newColor.value = 'black';
  });
  const acceptDeletion = document.querySelector('#yes-bttn');
  acceptDeletion.addEventListener('click', () => {
    const projectIndex = projectHolder.findIndex(
        (x) =>
          x.getID() ==
          document.querySelector('.assurance-text').getAttribute('id'),
    );
    if (
      document.querySelector('.project-tab-title').getAttribute('id') ==
          document.querySelector('.assurance-text').getAttribute('id') &&
        projectHolder.length > 1
    ) {
      projectHolder.splice(projectIndex, 1);
      printingModule.chooseProject(
          document.getElementById(`${projectHolder[0].getID()}`).childNodes[0],
      );
      printingModule.printTasks();
      document.querySelector('.all-projects').style.display = 'flex';
      document.querySelector('.all-tasks').style.visibility = 'hidden';
    } else if (
      document.querySelector('.project-tab-title').getAttribute('id') ==
          document.querySelector('.assurance-text').getAttribute('id') &&
        projectHolder.length <= 1
    ) {
      projectHolder.splice(projectIndex, 1);
      document.querySelector('.all-tasks').innerHTML = '';
      document.querySelector('.project-tab-title').textContent =
          'Add and Choose New Project';
    } else {
      projectHolder.splice(projectIndex, 1);
    }
    printingModule.printProjects();
    document.querySelector('.assurance-wrapper').style.visibility = 'hidden';
  });
  const rejectDeletion = document.querySelector('#no-bttn');
  rejectDeletion.addEventListener('click', () => {
    document.querySelector('.assurance-wrapper').style.visibility = 'hidden';
  });
})();
export {printingModule, eventListeners};
