const ToDoTask = (name, description = "", dueDate = "", priority = "4", status = "To do") => {
    const getName = () => name;
    const changeName = (newName) => name = newName;
    const getDescirpiton = () => description;
    const changeDescirpiton = (newDescirpiton) => description = newDescirpiton;
    const getDate = () => dueDate;
    const changeDate = (newDate) => dueDate = newDate;
    const getPriority = () => priority;
    const changePriority = (newPriority) => priority = newPriority;
    const getStatus = () => status;
    const changeStatus = (newStatus) => status = newStatus;
    return {
        getName,
        changeName,
        getDescirpiton,
        changeDescirpiton,
        getDate,
        changeDate,
        getPriority,
        changePriority,
        getStatus,
        changeStatus
    }
}
export {
    ToDoTask
}