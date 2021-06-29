import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function SessionChanger({title, value, onValueChange, isPlaying, className}: { title: string, value: number, onValueChange: (value:number) => void, isPlaying: boolean, className?: string }) {
    return (
        <div className={`flex flex-col justify-center items-center text-red-500 ${className}`}>
            <h2 className="font-semibold text-5xl">{title}</h2>
            <div className="flex flex-row content-evenly">
                <button className="px-2 text-5xl disabled:opacity-50 disabled:cursor-not-allowed" disabled={isPlaying} onClick={() => onValueChange(value + 1 <= 60 ? value + 1 : value)}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <h3 className="text-5xl font-semibold px-2">{value}</h3>
                <button className="px-2 text-5xl disabled:opacity-50 disabled:cursor-not-allowed" disabled={isPlaying} onClick={() => onValueChange(value - 1 !== 0 ? value - 1 : value)}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </div>
        </div>
    );
}
