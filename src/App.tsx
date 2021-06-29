import './App.css';
import Timer from './components/Timer/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex flex-row w-full p-4">
        <h1 className="text-5xl text-red-500 font-semibold">Pomodoro</h1>
        <div className="flex flex-1 justify-end space-x-4">
          <button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2"><FontAwesomeIcon icon={faTrashRestore} />{' '} Restore previous session</button>
          <button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2"><FontAwesomeIcon icon={faTrash} />{' '} Clear session</button>
        </div>
      </header>
      <main className="flex w-full pt-10">
        <Timer />
      </main>
    </div>
  );
}

export default App;
