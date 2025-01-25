'use client'

import { createTask } from "../actions"
import TaskForm from "../components/TaskForm"

const AddTask = () => {
  return (
    <div className="w-1/2 self-start">
      <TaskForm onSubmit={createTask} action={'Add Task'} />
    </div>
  );
}

export default AddTask;
