import React, { useState } from 'react';

import Map from '../src/Map';


export default function UploadForm() {
    const [buffer, setBuffer] = useState(Buffer.from(""));
    const [merchant, setMerchant] = useState(false);
    const [eikthyr, setEikthyr] = useState(false);
    const [elder, setElder] = useState(false);
    const [bonemass, setBonemass] = useState(false);
    const [moder, setModer] = useState(false);
    const [yagluth, setYagluth] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const fileInput = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const file = fileInput.current.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setBuffer(Buffer.from(reader.result));
        }
        reader.readAsArrayBuffer(file);
        setSubmitted(true);
    };
    const handleCheck = (cb) => (event) => cb(event.currentTarget.checked)
    const getTargets = () => {
        var targets = [];
        if (merchant) targets.push("merchant");
        if (eikthyr) targets.push("eikthyr");
        if (elder) targets.push("elder");
        if (bonemass) targets.push("bonemass");
        if (moder) targets.push("moder");
        if (yagluth) targets.push("yagluth");
        return targets;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                File Upload:
                <input type="file" ref={fileInput} />
            </label>
            <div>
                Select What to Reveal:
            </div>
            <label>
                Merchant:
                <input
                    name="merchant"
                    type="checkbox"
                    checked={merchant}
                    onChange={handleCheck(setMerchant)} />
            </label>
            <label>
                Eikthyr:
                <input
                    name="eikthyr"
                    type="checkbox"
                    checked={eikthyr}
                    onChange={handleCheck(setEikthyr)} />
            </label>
            <label>
                Elder:
                <input
                    name="elder"
                    type="checkbox"
                    checked={elder}
                    onChange={handleCheck(setElder)} />
            </label>
            <label>
                Bonemass:
                <input
                    name="bonemass"
                    type="checkbox"
                    checked={bonemass}
                    onChange={handleCheck(setBonemass)} />
            </label>
            <label>
                Moder:
                <input
                    name="moder"
                    type="checkbox"
                    checked={moder}
                    onChange={handleCheck(setModer)} />
            </label>
            <label>
                Yagluth:
                <input
                    name="yagluth"
                    type="checkbox"
                    checked={yagluth}
                    onChange={handleCheck(setYagluth)} />
            </label>
            <button type="submit" >Upload</button>
            {submitted &&
                (<Map targets={getTargets()} buffer={buffer} />)
            }
        </form>

    );
}