import { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import Note from './components/Note/Note';

function App() {
  const [notes, addNote] = useState<string[]>([]);

  const handleAddNote = () => {
	  const note = 'Test 123';
	  addNote([...notes, note]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="flex lg:flex-row lg:justify-between items-center flex-col w-full p-4">
        <h1 className="text-5xl text-red-500 font-semibold">Pomodoro</h1>
        <div className="flex flex-1 lg:justify-end space-x-4">
          <button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2">
            <FontAwesomeIcon icon={faTrashRestore} />{' '} Restore previous session
          </button>
          <button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2">
            <FontAwesomeIcon icon={faTrash} />{' '} Clear session
          </button>
        </div>
      </header>
      <main className="flex flex-col w-full pt-10">
        <div className="flex flex-1 w-full pb-10 border-b-4 border-gray-200">
          <Timer />
        </div>
        <div className="flex flex-1 flex-col w-full px-4 pt-10">
          <button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2 w-32"
                  onClick={handleAddNote}>
              <FontAwesomeIcon icon={faPlus} />{' '} Add Note
          </button>
          <div className="flex flex-row w-full justify-items-start space-x-4 pt-4 flex-wrap">
            {notes.map((note: string) => <Note content={note} />)}          
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
