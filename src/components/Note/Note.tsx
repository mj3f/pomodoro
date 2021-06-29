import { useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Note({ content }: { content: string }) {
    const [taskComplete, setTaskComplete] = useState(false);

    const setComplete = () => {
        setTaskComplete(preValue => !preValue);
    };

    return (
        <div className="flex flex-wrap flex-1 max-w-24 bg-gray-200 p-4 rounded mt-4 relative">
            <p className={`text-red-500 ${taskComplete ? 'line-through' : ''}`}>{content}</p>
            <button className={`${taskComplete ? 'bg-green-500 border-green-500 text-green-50' : 'border-red-500'} border-2 hover:bg-red-400 text-gray-600 hover:text-green-50
                                active:bg-red-600 rounded p-0.5 absolute top-1 right-1`}
                    onClick={setComplete}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
}