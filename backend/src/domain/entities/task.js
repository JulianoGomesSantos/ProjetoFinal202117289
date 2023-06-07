export default class Task {
  constructor({ taskName, description, priority, userId }) {
    this.taskName = taskName;
    this.description = description;
    this.priority = priority;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.userId = userId;
    this.completed = false;
  }
}
