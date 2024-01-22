import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { clear, addDot } from "../../service/DotService";
import { addDotRedux, clearRedux } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [r, setR] = useState(0);

  const handleInputY = (event) => {
    setY(event.target.value);
  };

  const clearList = () => {
    clear().then(dispatch(clearRedux()));
  };

  const check = () => {
    if (r < 0) {
      alert("R mustn't be negative");
      return;
    }
    if (isNaN(y)) {
      alert("Y must be a number");
      return;
    }
    if (y === "") {
      alert("Y must be chosen");
      return;
    }
    if (y <= -5 || y >= 3) {
      alert("Y must be in (-5, 3)");
      return;
    }

    addDot({ x: x, y: y, r: r }).then((response) => {
      dispatch(addDotRedux(response.data));
    });
  };

  return (
    <form>
      <div className="form-group">
        <div>X:</div>
        <IconButton
          size="small"
          color={x === -5 ? "warning" : "primary"}
          onClick={() => setX(-5)}
        >
          -5
        </IconButton>
        <IconButton
          size="small"
          color={x === -4 ? "warning" : "primary"}
          onClick={() => setX(-4)}
        >
          -4
        </IconButton>
        <IconButton
          size="small"
          color={x === -3 ? "warning" : "primary"}
          onClick={() => setX(-3)}
        >
          -3
        </IconButton>
        <IconButton
          size="small"
          color={x === -2 ? "warning" : "primary"}
          onClick={() => setX(-2)}
        >
          -2
        </IconButton>
        <IconButton
          size="small"
          color={x === -1 ? "warning" : "primary"}
          onClick={() => setX(-1)}
        >
          -1
        </IconButton>
        <IconButton
          size="small"
          color={x === 0 ? "warning" : "primary"}
          onClick={() => setX(0)}
        >
          0
        </IconButton>
        <IconButton
          size="small"
          color={x === 1 ? "warning" : "primary"}
          onClick={() => setX(1)}
        >
          1
        </IconButton>
        <IconButton
          size="small"
          color={x === 2 ? "warning" : "primary"}
          onClick={() => setX(2)}
        >
          2
        </IconButton>
        <IconButton
          size="small"
          color={x === 3 ? "warning" : "primary"}
          onClick={() => setX(3)}
        >
          3
        </IconButton>
      </div>

      <div className="form-group">
        <label htmlFor="y">Y:</label>
        <input
          type="text"
          id="y"
          className="form-control"
          placeholder="Y must be in (-5, 3)"
          maxLength={17}
          value={y}
          onChange={handleInputY}
        />
      </div>

      <div className="form-group">
        <div>R:</div>
        <IconButton
          size="small"
          color={r === -5 ? "warning" : "primary"}
          onClick={() => setR(-5)}
        >
          -5
        </IconButton>
        <IconButton
          size="small"
          color={r === -4 ? "warning" : "primary"}
          onClick={() => setR(-4)}
        >
          -4
        </IconButton>
        <IconButton
          size="small"
          color={r === -3 ? "warning" : "primary"}
          onClick={() => setR(-3)}
        >
          -3
        </IconButton>
        <IconButton
          size="small"
          color={r === -2 ? "warning" : "primary"}
          onClick={() => setR(-2)}
        >
          -2
        </IconButton>
        <IconButton
          size="small"
          color={r === -1 ? "warning" : "primary"}
          onClick={() => setR(-1)}
        >
          -1
        </IconButton>
        <IconButton
          size="small"
          color={r === 0 ? "warning" : "primary"}
          onClick={() => setR(0)}
        >
          0
        </IconButton>
        <IconButton
          size="small"
          color={r === 1 ? "warning" : "primary"}
          onClick={() => setR(1)}
        >
          1
        </IconButton>
        <IconButton
          size="small"
          color={r === 2 ? "warning" : "primary"}
          onClick={() => setR(2)}
        >
          2
        </IconButton>
        <IconButton
          size="small"
          color={r === 3 ? "warning" : "primary"}
          onClick={() => setR(3)}
        >
          3
        </IconButton>
      </div>

      <div className="form-group">
        <button type="button" className="btn btn-primary" onClick={check}>
          Check
        </button>
        <button type="button" className="btn btn-primary" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
