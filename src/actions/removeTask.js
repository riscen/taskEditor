import cuid from "cuid";
import { REMOVE_TASK } from "./constants";

export const removeTask = (taskId = cuid()) => {
  return {
    type: REMOVE_TASK,
    payload: taskId
  };
};
