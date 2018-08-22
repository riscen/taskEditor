class Task {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.removed = false;
    this.completed = false;
  }
}

export default Task;
