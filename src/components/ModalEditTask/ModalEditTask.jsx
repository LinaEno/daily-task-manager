import { db } from '../../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserUid } from 'redux/auth/authSelectors';
import { closeModal } from 'redux/global/slice';

// const ModalEditTask = () => {
//   const [task, setTask] = useState({});
//   const [updateTitle, setUpdateTitle] = useState('');
//   const [updateDescription, setUpdateDescription] = useState('');
//   const currentUserUid = useSelector(selectCurrentUserUid);
//   const dispatch = useDispatch();

//   console.log(task);
//   console.log(updateTitle);
//   console.log(updateDescription);

//   const handleSaveChanges = async event => {
//     event.preventDefault();

//     const updatedFields = {
//       title: updateTitle,
//       description: updateDescription,
//     };

//     const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
//     console.log(userTasksRef);
//     const taskRefNew = doc(userTasksRef);
//     console.log(taskRefNew);
//     const taskId = taskRefNew.id;
//     console.log(taskId);
//     const taskRef = doc(userTasksRef, taskId);
//     console.log(taskRef);
//     console.log(updatedFields);
//     await updateDoc(taskRef, updatedFields);
//     console.log(updatedFields);

//     setTask(prevState => ({ ...prevState, ...updatedFields }));
//     dispatch(closeModal());
//   };

//   return (
//     <div>
//       <form onSubmit={handleSaveChanges}>
//         <label>
//           Title
//           <input
//             type="text"
//             name="updateTitle"
//             // value={task.title}
//             onChange={e => setUpdateTitle(e.target.value)}
//           />
//         </label>
//         <label>
//           Description
//           <input
//             type="text"
//             name="updateDescription"
//             // value={task.description}
//             onChange={e => setUpdateDescription(e.target.value)}
//           />
//         </label>
//         <button type="submit">Edit task</button>
//       </form>
//     </div>
//   );
// };

// export default ModalEditTask;

//   const handleSaveChanges = async event => {
//     event.preventDefault();

//     const updatedFields = {
//       title: updateTitle,
//       description: updateDescription,
//     };

//     const userTasksRef = collection(db, 'users', currentUserUid, 'tasks');
//     const taskRef = doc(userTasksRef);
//     const taskId = taskRef.id;
//     const updateTask = { ...task, id: taskId };
//     await updateDoc(taskRef, updateTask);
//     setTask(prevState =>
//       prevState.map(task =>
//         task.id === taskId ? { ...task, ...updatedFields } : task
//       )
//     );
//     dispatch(closeModal());
//   };

const ModalEditTask = ({ task, getAllTasks }) => {
  const [updateTitle, setUpdateTitle] = useState(task.title);
  const [updateDescription, setUpdateDescription] = useState(task.description);
  const currentUserUid = useSelector(selectCurrentUserUid);
  const dispatch = useDispatch();

  console.log(task);
  console.log(task.id);

  const handleSaveChanges = async event => {
    event.preventDefault();

    const updatedFields = {
      title: updateTitle,
      description: updateDescription,
    };

    const taskRef = doc(
      collection(db, 'users', currentUserUid, 'tasks'),
      task.id
    );
    await updateDoc(taskRef, updatedFields);
    await getAllTasks();

    dispatch(closeModal());
  };

  return (
    <div>
      <form onSubmit={handleSaveChanges}>
        <label>
          Title
          <input
            type="text"
            name="updateTitle"
            value={updateTitle}
            onChange={e => setUpdateTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="updateDescription"
            value={updateDescription}
            onChange={e => setUpdateDescription(e.target.value)}
          />
        </label>
        <button type="submit">Edit task</button>
      </form>
    </div>
  );
};

export default ModalEditTask;
