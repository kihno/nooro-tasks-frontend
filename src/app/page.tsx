import TaskButton from "./components/TaskButton";
import Tasks from "./Tasks/page";

export default async function Home() {
  const data = await fetch('http://localhost:8080/tasks')
  const tasks = await data.json()
 
  return (
    <main className="w-3/4 flex flex-col self-start">
      <TaskButton />
      <div className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Tasks tasks={tasks} />
      </div>
    </main>
  );
}
