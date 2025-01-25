'use client'

import { useState } from "react"
import { TaskModel } from "../types/index"
import Link from "../../../node_modules/next/link"
import { removeTask, updateTask } from "../actions"
import CheckIcon from "@mui/icons-material/Check"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

type Props = {
  task: TaskModel
}

const Task = ({ task }: Props) => {
  const [checked, setChecked] = useState(task.completed)

  const handleCheck = () => {
    const updatedTask = {
      ...task,
      completed: !checked
    }

    updateTask(updatedTask)

    setChecked(!checked)
  }

  const handleDelete = () => {
    removeTask(task.id)
  }

  return (
    <li>
      <div className="bg-[--foreground] border border-gray-700 rounded-md flex justify-between items-center gap-3 mt-2 mb-2 p-2">
        <div className="flex gap-3 mr-3">
          <label className="flex pt-1 cursor-pointer">
            <input type="checkbox" checked={checked} onChange={handleCheck} className="peer appearance-none w-5 h-5 border-2 border-[--text] rounded-full checked:bg-violet-400 checked:border-none" />
            <CheckIcon  className="material-symbols-outlined absolute pl-1 pt-1 h-4 w-4 opacity-0 peer-checked:opacity-100 text-white" />
          </label>
          <Link href={`/EditTask/${task.id}`}><span className={checked ? "text-white line-through opacity-50" : "text-white"} id={JSON.stringify(task.id)}>{task.title}</span></Link>
        </div>
        <button onClick={handleDelete}>
        <DeleteOutlineIcon className="text-gray-500" />
        </button>
      </div>
    </li>
  );
}

export default Task;
