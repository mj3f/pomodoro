import { useState, useRef, Fragment } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Note from './components/Note/Note';
import { Dialog, Transition } from '@headlessui/react';

function App() {
  const [notes, addNote] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalCompleteButtonRef = useRef(null);

  const createNote = () => {
	addNote([note, ...notes]);
	setModalIsOpen(false);
  };

  return (
	  <>
		<div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-700">
			<header className="flex lg:flex-row lg:justify-between items-center flex-col w-full p-4">
				<h1 className="text-5xl text-red-500 font-semibold">Pomodoro</h1>
				<div className="flex flex-1 lg:justify-end space-x-4">
					<p className="text-gray-600 p-2">v1.0</p>
				</div>
			</header>
			<main className="flex flex-col w-full pt-10">
				<div className="flex flex-1 w-full pb-10 border-b-4 border-gray-200">
					<Timer />
				</div>
				<div className="flex flex-1 flex-col w-full px-4 pt-10">
					<div className="flex flex-1 w-full flex-row space-x-4">
						<button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2 w-32"
								onClick={() => setModalIsOpen(true)}>
						<FontAwesomeIcon icon={faPlus} />{' '} Add Note
						</button>
						<button className="border-2 border-red-500 hover:bg-red-400 text-gray-600 hover:text-green-50 active:bg-red-600 rounded p-2 w-32"
								onClick={() => addNote([])}>
							<FontAwesomeIcon icon={faTrash} />{' '} Remove all
						</button>
					</div>
					<div className="flex flex-row w-full justify-items-start space-x-4 pt-4 flex-wrap">
						{notes.map((note: string) => <Note content={note} />)}          
					</div>
				</div>
			</main>
		</div>

		<Transition appear show={modalIsOpen} as={Fragment}>
			<Dialog
				as="div"
				initialFocus={modalCompleteButtonRef}
				className="fixed inset-0 z-10 overflow-y-auto"
				onClose={() => setModalIsOpen(false)}>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child as={Fragment}
									  enter="ease-out duration-300"
									  enterFrom="opacity-0"
									  enterTo="opacity-100"
									  leave="ease-in duration-200"
									  leaveFrom="opacity-100"
									  leaveTo="opacity-0">
						<Dialog.Overlay className="fixed inset-0" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="inline-block h-screen align-middle" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
							<Dialog.Title as="h3" className="text-3xl font-semibold text-red-500">
								Add Note
							</Dialog.Title>
							<div className="mt-2">
								<input type="text" className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-500 rounded p-2 w-full mb-2 shadow"
									onChange={e => setNote(e.target.value)} />
							</div>
							<div className="float-right space-x-2">
								<button className="inline-flex justify-center hover:bg-gray-100 text-gray-600 active:bg-gray-200 rounded shadow py-2 px-6" 
										onClick={() => setModalIsOpen(false)}>
									Cancel
								</button>
								<button className="inline-flex justify-center bg-red-400 hover:bg-red-500 text-green-50 active:bg-red-600 rounded py-2 px-6" 
										onClick={createNote}
										ref={modalCompleteButtonRef}>
									OK
								</button>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog> 
		</Transition>
	</>
  );
}

export default App;
