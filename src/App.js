
import { Todo } from './components/todo/Todo';
import TodoContextProvider from './context/todoContext';


function App() {


  return (
    <>
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </>
  );
}

export default App;