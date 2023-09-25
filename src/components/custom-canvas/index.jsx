import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";

function CustomCanvasDraw() {
  const [saveableCanvas, setSaveableCanvas] = useState(null);
  const [state, setState] = useState({
    color: "black",
    brushRadius: 2,
    lazyRadius: 0,
    width: 900,
    height: 400,
  });

  return (
    <>
      <button
        onClick={() => {
          console.log(saveableCanvas.getSaveData());
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          saveableCanvas.eraseAll();
        }}
      >
        Erase
      </button>
      <button
        onClick={() => {
          saveableCanvas.undo();
        }}
      >
        Undo
      </button>
      <CanvasDraw
        ref={setSaveableCanvas}
        brushColor={state.color}
        brushRadius={state.brushRadius}
        lazyRadius={state.lazyRadius}
        canvasWidth={state.width}
        canvasHeight={state.height}
      />
    </>
  );
}

export default CustomCanvasDraw;
