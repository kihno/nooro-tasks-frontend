'use client'

import Link from "../../../node_modules/next/link"
import { useState } from "react"
import { TaskModel } from "../types/index"

type Props = {
  initialData: TaskModel,
  onSubmit: (data: TaskModel) => void,
  action: String
}

const TaskForm = ({ initialData, onSubmit, action }: Props) => {
  const [title, setTitle] = useState(initialData?.title || '')
  const [color, setColor] = useState(initialData?.color || 'red')


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ ...initialData, title, color })
    onSubmit({ ...initialData, title, color })
  }

  return (
    <div className="mt-10">
      <Link href="/">
        <span className="text-white material-symbols-outlined mb-10">
          arrow_back
        </span>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col font-bold text-[--text]">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="font-light text-white border-solid border-3 border-gray-100 bg-[#262626] rounded-md p-2"
            required
          />
        </div>
        <div className="flex flex-col font-bold text-[--text]">
        <label htmlFor="color">Color</label>
        <div className="flex flex-row space-x-2">
          <div className="flex h-8 w-8 rounded-full">
            <input
              type="radio"
              id="red"
              name="color"
              value={color}
              onClick={(e) => setColor('red')}
              className="hidden peer"
              defaultChecked={initialData?.color === 'red' || true}
            >
            </input>
            <label htmlFor='red' className="rounded-full h-9 w-9 peer-checked:border-2 flex justify-center items-center">
              <div className="cursor-pointer rounded-full h-8 w-8 bg-red-600"></div>
            </label>
          </div>
          <div className="cursor-pointer flex h-8 w-8 rounded-full">
            <input
              type="radio"
              id="green"
              name="color"
              value={color}
              onClick={(e) => setColor('green')}
              className="hidden peer"
              defaultChecked={initialData?.color === 'green' || false}
            >
            </input>
            <label htmlFor='green' className="rounded-full h-9 w-9 peer-checked:border-2 flex justify-center items-center">
              <div className="cursor-pointer rounded-full h-8 w-8 bg-green-600"></div>
            </label>
          </div>
          <div className="cursor-pointer flex h-8 w-8 rounded-full">
            <input
              type="radio"
              id="blue"
              name="color"
              value={color}
              onClick={(e) => setColor('blue')}
              className="hidden peer"
              defaultChecked={initialData?.color === 'blue' || false}
            >
            </input>
            <label htmlFor='blue' className="rounded-full h-9 w-9 peer-checked:border-2 flex justify-center items-center">
              <div className="cursor-pointer rounded-full h-8 w-8 bg-blue-600"></div>
            </label>
          </div>
        </div>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {action === 'Add Task'
            ? <div className="flex justify-center items-center gap-1"><span>Add Task</span><span className="material-symbols-outlined">add_circle</span></div>
            : <div className="flex justify-center items-center gap-1"><span>Save</span><span className="material-symbols-outlined">check</span></div>
          }
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
