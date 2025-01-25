'use server'

import { RedirectType, redirect } from "next/navigation"
import { TaskModel } from "../types/index"

export const createTask = async (data: TaskModel) => {

  try {
    const response = await fetch('http://localhost:8080/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    console.error('Error: ', error)
  } 

  redirect('/', RedirectType.push)
}

export const updateTask = async (task: TaskModel) => {
  try {

    const response = await fetch(`http://localhost:8080/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
  } catch (error) {
    console.error(error)
  }

  redirect('/', RedirectType.push)
}

export const removeTask = async (id: Number) => {
  try {
    const response = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    console.error('Error: ', error)
  } 

  redirect('/', RedirectType.push)
}
