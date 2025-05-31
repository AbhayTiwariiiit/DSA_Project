import React, { useState,useEffect } from 'react';
import Circle from './Circle';
import Box from './Box';
const InteractiveGrid = () => {
  const rows = 40;
  const cols = 80;
  const [minWeight, setminWeight] = useState(0);
  const [maxWeight, setmaxWeight] = useState(20);
  function getRandomFloatInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
    
const createInitialGrid = () =>
  Array(rows).fill().map((_, rowIndex) =>
    Array(cols).fill().map((_, colIndex) => {
      const isWeighted= getRandomFloatInRange(0, 1) < 0.5;
      return {
        id: `${rowIndex}-${colIndex}`,
        row: rowIndex,
        col: colIndex,
        isnode: getRandomFloatInRange(0, 1) < 0.1,
        isWeighted,
        Weight: getRandomFloatInRange(minWeight, maxWeight) * (isWeighted ? 1 : 0),
      };
    })
  );
  const [grid, setGrid] = useState(createInitialGrid());
  const [selectedCount, setSelectedCount] = useState(0);

  const toggleCell = (row, col) => {
    setGrid(prev => {
      const newGrid = [...prev];
      const cell = { ...newGrid[row][col] };
      cell.active = !cell.active;
      newGrid[row][col] = cell;
      setSelectedCount(count => cell.active ? count + 1 : count - 1);

      return newGrid;
    });
  };

  const handleHover = (row, col, isHovering) => {
    setGrid(prev => {
      const newGrid = [...prev];
      newGrid[row][col] = { ...newGrid[row][col], hovered: isHovering };
      return newGrid;
    });
  };
  
  return (
    <div className="flex flex-col items-center p-2 font-sans">
      <div className="border-2 border-gray-700 rounded overflow-hidden shadow-md">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell) =>
              (cell.isnode===false) ? (
                <Box key={cell.id} cell={cell} />
              ) : (
                <Circle key={cell.id} cell={cell} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;