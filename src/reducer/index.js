import {
  ADD_TASK,
  SELECT_TASK,
  UPDATE_TASK,
  REMOVE_TASK
} from "../actions/constants";
import { updateTasks, getActionObj } from "./util";

const initialState = {
  tasks: [],
  selectedTask: null,
  actions: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log("\tAdd task");
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.payload],
        actions: [...state.actions, getActionObj(action.type, action.payload)]
      });
    case SELECT_TASK:
      console.log("\tSelect task");
      return Object.assign({}, state, {
        selectedTask: action.payload,
        actions: [...state.actions, getActionObj(action.type, action.payload)]
      });
    case UPDATE_TASK:
      console.log("\tUpdate task");
      return Object.assign({}, state, {
        tasks: updateTasks(action.payload, state.tasks),
        actions: [...state.actions, getActionObj(action.type, action.payload)]
      });
    case REMOVE_TASK:
      console.log("\tRemove task");
      return Object.assign({}, state, {
        tasks: state.tasks.filter(task => task.taskId !== action.payload),
        actions: [...state.actions, getActionObj(action.type, action.payload)]
      });
    default:
      console.log("\tDefault task");
      return state;
  }
};

export default taskReducer;
