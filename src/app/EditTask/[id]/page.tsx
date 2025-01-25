'use client'

import { use, useEffect, useState } from "react"
import { redirect, RedirectType, useParams } from "../../../../node_modules/next/navigation"
import TaskForm from "../../components/TaskForm"
import { updateTask } from "@/app/actions"
import { TaskModel } from "@/app/types"

const EditTask = () => {
  const params = useParams()
  const taskId = params.id

  const [task, setTask] = useState(null)

  useEffect(() => {
    if (taskId) {
      console.log(taskId)
      fetch(`http://localhost:8080/tasks/${taskId}`)
      .then(response => response.json())
      .then(data => setTask(data))
    }
  }, [taskId])

  const handleUpdate = (updatedTask: TaskModel) => {
    updateTask(updatedTask)
  }

  return (
    <div className="w-1/2 self-start">
      {task && <TaskForm initialData={task} onSubmit={handleUpdate} action={'Save'}/>}
    </div>
  );
}

export default EditTask;
