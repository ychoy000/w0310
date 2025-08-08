// import logo from './logo.svg';
//import './App.css';
import './css/index.css';
import TodoHeader from './components/TodoHeader';
import TodoApp from './components/TodoApp';
import {useState} from 'react';



function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  
  const addTask = () => {
    //input 태그에 입력한 믄지얄의 앞뒤에 공백을 제거한 결과가 ''와 같으면 return
    if (input.trim() === '') return;
    // ...tasks -> []
    // setTasks([], 할일1) -> task는 ['할일1']
    setTasks([...tasks, input.trim()]);
    // TodoApp 컴포넌트의 li에 task가 모두 출력되면 입력상자의 텍스트를 비운다.
    setInput('');
  };
  
  const handleDelete = (index) => 
    // i와 index가 같지 않은 목록만 남겨 배열로 생성한다.
    setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="todo-container container">
      <TodoHeader />
      <div className=" row">
        <div className="col-sm-9 col-12"><input type="text" 
        placeholder = "할 일을 입력하세요" value={input} onChange={(e) => setInput(e.target.value)}  className="equal-width equal-height" /></div>
        <div><button onClick={addTask} className="equal-width equal-height">추가</button></div>
      </div>
    </div>
  );
}

export default App;
