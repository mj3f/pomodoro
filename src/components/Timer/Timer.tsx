import SessionChanger from '../SessionChanger/SessionChanger';

export default function Timer() {
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col">
                <SessionChanger title="Session Length" defaultValue={25} />
            </div>
            {/* <p>25:00</p>
            <button>play/pause</button>
            <button>Reset</button> */}
        </div>
    );
}