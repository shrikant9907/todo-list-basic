import { createContext, useState } from 'react';
import './App.css';
import { Todo } from './components/todo/Todo';

// Example of Context API

// Created the context (1)
export const MyThemeContext = createContext();

function App() {

  // State Logic in App Component
  const [myTheme, setMyTheme] = useState({ mode: 'light' });
  const handleThemeToggle = () => {
    const newMode = myTheme.mode == 'light' ? 'dark' : 'light';
    const updatedThemeMode = { mode: newMode }
    setMyTheme(updatedThemeMode)
  }

  return (
    <>

      {/* Managing State  */}
      <>
        <button onClick={handleThemeToggle}>Dark/Light</button>
        <p style={{ color: "#fff" }}>{myTheme.mode}</p>
      </>

      {/* Providing Context Data (2) */}
      <MyThemeContext.Provider value={myTheme}>
        <Todo />
      </MyThemeContext.Provider>
    </>
  );
}

export default App;