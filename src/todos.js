// eslint-disable-next-line max-len
const ToDoTask = (name, description = '', dueDate = '', priority = 'low', id, status = 'To do') => {
  const getName = () => name;
  const changeName = (newName) => name = newName;
  const getDescription= () => description;
  const changeDescription = (newDescirpiton) => description = newDescirpiton;
  const getDate = () => dueDate;
  const changeDate = (newDate) => dueDate = newDate;
  const getPriority = () => priority;
  const changePriority = (newPriority) => priority = newPriority;
  const getStatus = () => status;
  const changeStatus = (newStatus) => status = newStatus;
  const getID = () => id;
  return {
    getName,
    changeName,
    getDescription,
    changeDescription,
    getDate,
    changeDate,
    getPriority,
    changePriority,
    getStatus,
    changeStatus,
    getID,
  };
};
export {
  ToDoTask,
};
