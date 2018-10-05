import {
  ADD_TASK,
  SELECT_TASK,
  UPDATE_TASK,
  REMOVE_TASK
} from "../actions/constants";

const initialState = {
  tasks: [],
  selectedTask: null
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log("\tAdd task");
      return Object.assign({}, state, {
        tasks: [...state.tasks, action.payload]
      });
    case SELECT_TASK:
      console.log("\tSelect task");
      return Object.assign({}, state, {
        selectedTask: action.payload
      });
    case UPDATE_TASK:
      console.log("\tUpdate task");
      let index, tasks;
      index = state.tasks.findIndex(
        task => task.taskId === action.payload.taskId
      );
      tasks = [...state.tasks.slice(0, index), action.payload];
      if (index < state.tasks.length) {
        tasks = [...tasks, ...state.tasks.slice(index + 1)];
      }
      return Object.assign({}, state, {
        tasks: tasks
      });
    case REMOVE_TASK:
      console.log("\tRemove task");
      return Object.assign({}, state, {
        tasks: state.tasks.filter(task => task.taskId !== action.payload)
      });
    default:
      console.log("\tDefault task");
      return state;
  }
};

export default taskReducer;
