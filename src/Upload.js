import React, { useState } from 'react';

import Map, { COLORS } from '../src/Map';


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
            setSubmitted(true);
        }
        reader.readAsArrayBuffer(file);
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
        <>

            {!submitted &&
                <div>
                    <div className="info">
                        <p className="row">
                            Welcome to Whereheim! Select your world's db file below to find the merchant and/or the
                            locations of various bosses.</p>
                        <p className="row">This file is located in
                    <code>C:\Users\%USERNAME%\AppData\LocalLow\IronGate\Valheim\worlds</code>
                        </p>
                    </div>
                    <div className="row upload mb-3">
                        <input onChange={handleSubmit} type="file" ref={fileInput} className="form-control" id="fileUpload" />
                    </div>
                </div>
            }
            {submitted &&
                <div className="row align-items-center">
                    <Map targets={getTargets()} buffer={buffer} className="col" />
                    <div className="col-3 container">
                        <div className="row">
                            Select What to Reveal:
                        </div>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.merchant }}>Merchant:</div>
                            <input
                                name="merchant"
                                type="checkbox"
                                checked={merchant}
                                onChange={handleCheck(setMerchant)}
                                className="col justify-content-left" />
                        </label>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.eikthyr }}>Eikthyr: </div>
                            <input
                                name="eikthyr"
                                type="checkbox"
                                checked={eikthyr}
                                onChange={handleCheck(setEikthyr)}
                                className="col" />
                        </label>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.elder }}>Elder:</div>
                            <input
                                name="elder"
                                type="checkbox"
                                checked={elder}
                                onChange={handleCheck(setElder)}
                                className="col" />
                        </label>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.bonemass }}>Bonemass:</div>
                            <input
                                name="bonemass"
                                type="checkbox"
                                checked={bonemass}
                                onChange={handleCheck(setBonemass)}
                                className="col" />
                        </label>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.moder }}>Moder: </div>
                            <input
                                name="moder"
                                type="checkbox"
                                checked={moder}
                                onChange={handleCheck(setModer)}
                                className="col" />
                        </label>
                        <label className="row">
                            <div className="col" style={{ color: COLORS.yagluth }}>Yagluth:</div>
                            <input
                                name="yagluth"
                                type="checkbox"
                                checked={yagluth}
                                onChange={handleCheck(setYagluth)}
                                className="col" />
                        </label>
                        <br />
                        <div className="row">
                            <button className="col btn btn-secondary" onClick={() => setSubmitted(false)}>Submit another map</button>
                        </div>
                    </div>
                    <div>
                        Notes:
                        <ul>
                            <li>Hover over a location to get the coordinates. This can be used in a `goto X Y` console command
                            to teleport to that location.
                            </li>
                            {merchant && (
                                <li>
                                    The world gets generated with several merchant locations.
                                    The first time one of these locations is visited, that becomes the world's
                                    one and only merchant location.
                                </li>
                            )}
                        </ul>
                    </div>
                </div>}
        </>
    );
}