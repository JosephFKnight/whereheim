import React from 'react';

import { findLocations } from '../src/Process';

const coordToPercentage = (coord) => ((coord + 10000) / 20000) * 100

export const COLORS = {
    merchant: "#252525",
    eikthyr: "orange",
    elder: "red",
    bonemass: "green",
    moder: "purple",
    yagluth: "blue"
}

function MapPoint({ x, y, size, color, children }) {
    const xPercent = coordToPercentage(x);
    const yPercent = 100 - coordToPercentage(y);
    return (
        <div
            title={`${x}, ${y}`}
            style={{
                position: "absolute",
                top: `${xPercent}%`,
                left: `${yPercent}%`,
                transform: 'translate(-50%, -50%)',
                margin: 0,
                padding: 0,
                lineHeight: 0,
                width: `${size}%`,
                height: `${size}%`,
                background: `radial-gradient(circle at center, ${color} 0, ${color} 5%, transparent 5%)`,
                border: `1px solid ${color}`,
                borderRadius: "50%"
            }}
        >{children}
        </div>
    )
}

export default function Map({ buffer, targets }) {
    const coords = findLocations(buffer, targets);
    return (
        <div
            style={{
                width: "50%",
                paddingBottom: "50%",
                border: "2px solid #252525",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative"
            }}>
            <MapPoint size={2} color="transparent" x={0} y={0}>+</MapPoint>
            {Object.keys(coords).map(target => coords[target].map(({ x, y }) => {
                return (
                    <MapPoint size={10} x={x} y={y} color={COLORS[target]} />
                );
            }))}
        </div>
    )
}