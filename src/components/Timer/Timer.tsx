import { faPlay, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SessionChanger from '../SessionChanger/SessionChanger';

let countdown: NodeJS.Timeout;

function startTimer(seconds: number) {
    const now = Date.now();
    const then = now + seconds * 1000;
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())) / 1000;
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        console.log(secondsLeft);
    }, 1000);
}

function formatTimerCountdown(duration: number): string {
    return '';
}

export default function Timer() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [countdown, setCountdown] = useState('25:00');
    // startTimer(10);

    const setSession = (value: number) => {
        setSessionLength(value);
        setCountdown(`${value < 10 ? '0' : ''}${value}:00`);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row w-full justify-center items-center">
                <SessionChanger title="Session Length" value={sessionLength} onValueChange={setSession} className="flex-1" />
                <h3 className="text-8xl font-semibold text-red-500">{countdown}</h3>
                <SessionChanger title="Break Length" value={breakLength} onValueChange={setBreakLength} className="flex-1" />
            </div>
            <div className="flex flex-1 w-full items-center justify-center space-x-4">
                <button>
                    <FontAwesomeIcon icon={faPlay} className="text-red-500 text-3xl" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faSync} className="text-red-500 text-3xl" />
                </button>
            </div>
        </div>
        
    );
}