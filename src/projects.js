const projectHolder = []; //opt(ional, find if this variable is needed
const projectcounter = (() => {
    let value = 0;
    const getValue = () => value;
    const incrementValue = () => {
        value++;
    }
    return {
        getValue,
        incrementValue
    }
})() // id for projects
const Project = (name, color = "black", id = projectHolder.length()) => {
    const toDoList = [];
    let taskCounter = 0;
    const giveTaskID = () => taskCounter;
    const getName = () => name;
    const changeName = (newName) => name = newName;
    const getColor = () => color;
    const changeColor = (newColor) => color = newColor;
    const getID = () => id;
    const addTask = (task) => {
        toDoList.push(task);
        taskCounter++;
    }
    const deleteTask = (taskIndex) => toDoList.splice(taskIndex, 1);
    return{
        toDoList,
        getName,
        changeName,
        getColor,
        changeColor,
        getID,
        addTask,
        deleteTask,
        giveTaskID
    }
}
const defaultProject = Project("Default", "black", projectcounter.getValue());
projectHolder.push(defaultProject);
projectcounter.incrementValue();
export {
    Project,
    projectcounter,
    projectHolder,
    defaultProject,
}
