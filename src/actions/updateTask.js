import { UPDATE_TASK } from "./constants";

export const updateTask = (task = {}) => {
  return {
    type: UPDATE_TASK,
    payload: task
  };
};
