import React from 'react';

const Circle = (cell) => {
    function getColor(weight, min, max) {
        console.log(weight);
        const ratio = Math.max(0, Math.min(1, (weight - min) / (max - min)));

        const r = Math.round(238 + (255 - 169) * ratio);
        const g = Math.round(0 + (0 - 169) * ratio);
        const b = Math.round(238 + (0 - 238) * ratio);

        return `rgb(${r}, ${g}, ${b})`;
    }

    return (

        <div
            key={cell.id}
            className={`w-4 h-4 border cursor-pointer transition-all duration-200 bg-blue-500 rounded-full shadow-[0_0_10px_4px_rgba(59,130,246,0.6)]` }
        />);
};

export default Circle;
