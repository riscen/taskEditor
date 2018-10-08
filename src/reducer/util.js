export const updateTasks = (task, tasks) => {
  let index = tasks.findIndex(
    currentTask => currentTask.taskId === task.taskId
  );
  let newTasks = [...tasks.slice(0, index), task];
  if (index < tasks.length) {
    newTasks = [...newTasks, ...tasks.slice(index + 1)];
  }
  return newTasks;
};

export const getActionObj = (actionType = "", payload = {}) => {
  const date = new Date();
  return {
    type: actionType,
    time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    payload: payload
  };
};
