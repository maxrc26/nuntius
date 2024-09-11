import '/src/styles/Nightmode.css';

import { useState, useEffect } from 'react';
import nightmodeOff from '/src/assets/nightmodeOff.png'
import nightmodeOn from '/src/assets/nightmodeOn.png'

export const Nightmode = ({ hidden }) => {
    const initialState = localStorage.getItem("nightmode") === 'true';
    const [nightmode, setNightmode] = useState(false);

    const changeMode = (nightmode) => {
        const body = document.body;
        if (nightmode) {
            body.classList.remove("day");
            body.classList.add("night");
        }
        else {
            body.classList.remove("night");
            body.classList.add("day");
        }
    }

    const handleChange = () => {
        localStorage.setItem("nightmode", !nightmode);
        changeMode(!nightmode);
        setNightmode(!nightmode);
    }

    useEffect(() => {
        setNightmode(initialState);
        changeMode(initialState);
    }, []);

    return (
        <>
            {
                (hidden == null || hidden === false) &&
                <button onClick={handleChange} className='nightmodeCustom'>
                    {!nightmode && <div id='nightmodeCustomfalse'><img id='nightmodeCustomfalse' src={nightmodeOff} /></div>}
                    {nightmode && <div id='nightmodeCustomtrue'><img src={nightmodeOn} /></div>}
                </button>
            }
        </>
    )
}
