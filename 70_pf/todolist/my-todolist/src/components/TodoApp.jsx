const TodoApp = ({ tasks }) => {

    
  }
  return (
    <ul className="p-0">
      {tasks.map((task, index) => 
        <li
          key={index}
          className="d-flex justify-content-between align-items-center border p-2">
          <span>{task}</span>
          <button className="btn btn-danger btn-sm equal-height equal-width" onClick={()=> handleDelete(index)}>삭제</button>
        </li>
      )}
    </ul>
  );
};

export default TodoApp;
