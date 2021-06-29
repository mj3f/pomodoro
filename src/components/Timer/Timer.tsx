import { faPause, faPlay, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import SessionChanger from '../SessionChanger/SessionChanger';

export default function Timer() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [countdownValues, setCountdownValue] = useState<CountdownValues>({
        output: '25:00'
    });
    const [isPlaying, setIsPlaying] = useState(false);

    let countdownTimeout = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        if (isPlaying) {
            countdownValues.minutes && countdownValues.seconds ?
                startCountdown(countdownValues.minutes, countdownValues.seconds) :
                startCountdown(sessionLength);
        } else {
            // @ts-ignore
            clearTimeout(countdownTimeout.current);
        }
    }, [isPlaying]);

    useEffect(() => {
        return () => { // Clear timeout on unmounting of component.
            // @ts-ignore
            clearTimeout(countdownTimeout.current);
        }
    }, []);


    const startCountdown = (minutes: number, seconds?: number) => {
        let secs = seconds ? seconds : 60;
        let mins = minutes;        

        const tick = () => {
            if (!isPlaying) {
                return;
            }

            const currentMins = mins - 1; // decrement minutes, then decrement each second until seconds is 0.
            secs--;

            setCountdownValue({
                output: (currentMins < 10 ? '0' : '') + currentMins.toString() + ':' + (secs < 10 ? '0' : '') + String(secs),
                minutes: mins,
                seconds: secs
            });

            console.log('dsdsdsdsdsdsdsdsdsdsd')

            if (secs > 0) {
                // @ts-ignore
                countdownTimeout.current = setTimeout(() => tick(), 1000);
            } else {
                if (mins > 1) {
                    startCountdown(mins - 1); // repeat above steps for the next minute in the countdown.
                } else {
                    setPlayOrPause();
                }
            }
        }
        tick();
    };

    const setSession = (value: number) => {
        setSessionLength(value);
        setCountdownValue({ output: `${value < 10 ? '0' : ''}${value}:00` });
    }

    const setPlayOrPause = () => {
        setIsPlaying(prevValue => !prevValue);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row w-full justify-center items-center">
                <SessionChanger title="Session Length" value={sessionLength} onValueChange={setSession} isPlaying={isPlaying} className="flex-1" />
                <h3 className="text-8xl font-semibold text-red-500 flex-1 text-center">{countdownValues.output}</h3>
                <SessionChanger title="Break Length" value={breakLength} onValueChange={setBreakLength} isPlaying={isPlaying} className="flex-1" />
            </div>
            <div className="flex flex-1 w-full items-center justify-center space-x-4">
                <button className="text-red-500 text-3xl" onClick={setPlayOrPause}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button className="text-red-500 text-3xl disabled:opacity-50 disabled:cursor-not-allowed" disabled={isPlaying} onClick={() => setSession(sessionLength)}> 
                    <FontAwesomeIcon icon={faSync} />
                </button>
            </div>
        </div>
        
    );
}

interface CountdownValues {
    output: string,
    minutes?: number,
    seconds?: number
}