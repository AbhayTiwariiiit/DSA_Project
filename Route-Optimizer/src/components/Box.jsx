import React from 'react';

const Circle = (cell) => {
    function getColor(step) {
      const max = 20;
      const red = Math.round(255 * (1 - step / max));
      const green = 0;
      const blue = Math.round(255 * (step / max));
      console.log(step);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    return (
      <div className='w-4 h-4 flex items-center justify-center'>
          <div
              key={cell.id}
              className="w-2 h-2 border rounded bg-amber-50"
          />
      </div>
    );
};

export default Circle;