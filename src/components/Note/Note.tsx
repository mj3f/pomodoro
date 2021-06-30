import { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Note({ content }: { content: string }) {
    const [taskComplete, setTaskComplete] = useState(false);

    const setComplete = () => {
        setTaskComplete(preValue => !preValue);
    };

    return (
        <div className="flex flex-wrap flex-1 bg-red-200 py-4 px-8 rounded mt-4 relative shadow">
            <p className={`text-gray-800 ${taskComplete ? 'line-through' : ''}`}>{content}</p>
            <button className={`${taskComplete ? 'bg-green-500 border-green-500 text-green-50 hover:border-red-500 hover:bg-red-500 active:bg-red-600' : 'border-red-500 active:bg-green-600 hover:bg-green-500'}
                                border-2 hover:text-green-50 text-gray-600 rounded p-0.5 absolute top-1 right-1`}
                    onClick={setComplete}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
}