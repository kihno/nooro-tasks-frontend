import Task from "./Task";
import { TaskModel } from "../types/index"
import NoTasks from "../components/NoTasks";

type Props = {
  tasks: TaskModel[]
}

const TaskList = ({ tasks }: Props) => {

  return (
    <div className="w-full">
      <div className="flex justify-between text-bold mb-6 text-sm">
        <span className="text-[color:--text]">Tasks <span className="bg-gray-600 text-white rounded-full px-2">{tasks.length}</span></span>
        <span className="text-[color:--altText]">Completed <span className="bg-gray-600 text-white rounded-full px-2">{tasks.filter((task) => task.completed === true).length} of {tasks.length}</span></span>
      </div>
      <div>
        {tasks.length === 0
          ? <NoTasks />
          :  <ul>
                {tasks.map((task) => {
                  return <Task key={task.id} task={task} />
                })}
              </ul>
        }
       
      </div>
    </div>
  );
}

export default TaskList;
