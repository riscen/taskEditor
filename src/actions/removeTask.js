import { REMOVE_TASK } from "./constants";

export const removeTask = taskId => {
  return {
    type: REMOVE_TASK,
    payload: taskId
  };
};
