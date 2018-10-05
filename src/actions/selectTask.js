import { SELECT_TASK } from "./constants";

export const selectTask = (task = {}) => {
  return {
    type: SELECT_TASK,
    payload: task
  };
};
