const projectHolder = []; //optional, find if this variable is needed
const Project = (name, color = "black") => {
    const toDoList = [];
    const getName = () => name;
    const changeName = (newName) => name = newName;
    const getColor = () => color;
    const changeColor = (newColor) => color = newColor;
    const addTask = (task) => toDoList.push(task);
    const deleteTask = (taskIndex) => toDoList.splice(taskIndex, 1);
    return{
        getName,
        changeName,
        getColor,
        changeColor,
        addTask,
        deleteTask
    }
}
const defaultProject = Project("Default");
projectHolder.push(defaultProject);
export {
    Project,
    projectHolder,
    defaultProject,
}
