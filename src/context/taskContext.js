import { createContext, useState } from 'react';

const TaskContext = createContext({ taskId: null, setTaskId: () => {} });

const TaskProvider = ({ children }) => {
  const [taskId, setTaskId] = useState(null);

  return (
    <TaskContext.Provider value={{ taskId, setTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
export default TaskContext;
