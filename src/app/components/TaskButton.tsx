import Link from "../../../node_modules/next/link"

const TaskButton = () => {
  return (
    <Link href="/AddTask" className="-mt-5 mb-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded flex justify-center items-center">
      <span className="pr-2">Create Task</span>
      <span className="material-symbols-outlined">add_circle</span>
    </Link>
  );
}

export default TaskButton;
