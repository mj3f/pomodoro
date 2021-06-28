import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="flex flex-row w-full p-4">
        <h1 className="text-5xl text-red-500">Pomodoro</h1>
        <div className="flex flex-1 justify-end space-x-4">
          <button className="bg-red-500 hover:bg-red-400 text-gray-50 shadow rounded p-2">Restore previous session</button>
          <button className="bg-red-500 hover:bg-red-400 text-gray-50 shadow rounded p-2">Clear session</button>
        </div>
      </header>
      <main className="flex w-full bg-gray-50">
        <Timer />
      </main>
    </div>
  );
}

export default App;
