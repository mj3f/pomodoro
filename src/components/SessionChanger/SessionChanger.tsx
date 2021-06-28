import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function SessionChanger({title, defaultValue}: { title: string, defaultValue: number }) {
    const [value, setValue] = useState(defaultValue);

    return (
        <div className="flex flex-col justify-center items-center text-red-500">
            <h2 className="font-semibold text-5xl">{title}</h2>
            <div className="flex flex-row content-evenly">
                <button className="px-2 text-5xl"><FontAwesomeIcon icon={faArrowUp} onClick={() => setValue(prevValue => prevValue + 1)} /></button>
                <h3 className="text-5xl font-semibold px-2">{value}</h3>
                <button className="px-2 text-5xl"><FontAwesomeIcon icon={faArrowDown} onClick={() => setValue(prevValue => prevValue - 1 !== 0 ? prevValue - 1 : prevValue)} /></button>
            </div>
        </div>
    );
}