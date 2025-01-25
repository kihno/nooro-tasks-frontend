import AssignmentIcon from '@mui/icons-material/Assignment';

const NoTasks = () => {
  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center text-gray-400 gap-4">
      <AssignmentIcon className='text-5xl' />
      <div className="font-bold">You don't have any tasks registered yet.</div>
      <div>Create Tasks and organize your to-do items.</div>
    </div>
  );
}

export default NoTasks;
