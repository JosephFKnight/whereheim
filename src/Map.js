import React from 'react';

import {findLocations} from '../src/Process';

export default function Map({buffer, targets}) {
    console.log(typeof(buffer));
    const coords = findLocations(buffer, targets);
    return (
        <ul>
            {targets.map(target =>{
                var t = target;
                t[0] = target[0].toUpperCase();
                var s = `${t}: ${coords[target].length}`
                return (<li>{s}</li>);
})}
        </ul>
    )
}