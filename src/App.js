import './App.css';

//Components
import Main from './views/Main';

//Provider
import { TasksContextProvider } from './context/TasksContext';

function App() {

  return (
    <div className="App">
      <TasksContextProvider>
        <Main/>
      </TasksContextProvider>
    </div>
  );
}

export default App;
