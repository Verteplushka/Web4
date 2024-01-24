import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { clear, addDot } from "../../service/DotService";
import { addDotRedux, changeR, clearRedux } from "../../redux_files/actions";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";

const Form = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [x, setX] = useState(() =>
    localStorage.getItem("x") ? parseInt(localStorage.getItem("x")) : 0
  );
  const [y, setY] = useState(() =>
    localStorage.getItem("y") ? parseFloat(localStorage.getItem("y")) : 0
  );
  const [r, setR] = useState(() => {
    const r = localStorage.getItem("r")
      ? parseInt(localStorage.getItem("r"))
      : 0;
    dispatch(changeR(r));
    return r;
  });

  const globalSetR = (r) => {
    setR(r);
    if (r > 0) {
      dispatch(changeR(r));
    } else {
      dispatch(changeR(0));
    }
    localStorage.setItem("r", r);
  };

  const handleInputY = (event) => {
    setY(event.target.value);
    localStorage.setItem("y", event.target.value);
  };

  const handleInputX = (x) => {
    setX(x);
    localStorage.setItem("x", x);
  };

  const clearList = () => {
    clear(user).then(dispatch(clearRedux()));
  };

  const check = () => {
    if (r <= 0) {
      toast.error("R must be positive");
      return;
    }
    if (isNaN(y)) {
      toast.error("Y must be a number");
      return;
    }
    if (y === "") {
      toast.error("Y must be chosen");
      return;
    }
    if (y <= -5 || y >= 3) {
      toast.error("Y must be in (-5, 3)");
      return;
    }

    addDot(user, { x: x, y: y, r: r }).then((response) => {
      dispatch(addDotRedux(response.data));
    });
  };

  return (
    <>
      <form>
        <div className="form-group">
          <div>X:</div>
          <IconButton
            size="small"
            color={x === -5 ? "warning" : "primary"}
            onClick={() => handleInputX(-5)}
          >
            -5
          </IconButton>
          <IconButton
            size="small"
            color={x === -4 ? "warning" : "primary"}
            onClick={() => handleInputX(-4)}
          >
            -4
          </IconButton>
          <IconButton
            size="small"
            color={x === -3 ? "warning" : "primary"}
            onClick={() => handleInputX(-3)}
          >
            -3
          </IconButton>
          <IconButton
            size="small"
            color={x === -2 ? "warning" : "primary"}
            onClick={() => handleInputX(-2)}
          >
            -2
          </IconButton>
          <IconButton
            size="small"
            color={x === -1 ? "warning" : "primary"}
            onClick={() => handleInputX(-1)}
          >
            -1
          </IconButton>
          <IconButton
            size="small"
            color={x === 0 ? "warning" : "primary"}
            onClick={() => handleInputX(0)}
          >
            0
          </IconButton>
          <IconButton
            size="small"
            color={x === 1 ? "warning" : "primary"}
            onClick={() => handleInputX(1)}
          >
            1
          </IconButton>
          <IconButton
            size="small"
            color={x === 2 ? "warning" : "primary"}
            onClick={() => handleInputX(2)}
          >
            2
          </IconButton>
          <IconButton
            size="small"
            color={x === 3 ? "warning" : "primary"}
            onClick={() => handleInputX(3)}
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
            onClick={() => globalSetR(-5)}
          >
            -5
          </IconButton>
          <IconButton
            size="small"
            color={r === -4 ? "warning" : "primary"}
            onClick={() => globalSetR(-4)}
          >
            -4
          </IconButton>
          <IconButton
            size="small"
            color={r === -3 ? "warning" : "primary"}
            onClick={() => globalSetR(-3)}
          >
            -3
          </IconButton>
          <IconButton
            size="small"
            color={r === -2 ? "warning" : "primary"}
            onClick={() => globalSetR(-2)}
          >
            -2
          </IconButton>
          <IconButton
            size="small"
            color={r === -1 ? "warning" : "primary"}
            onClick={() => globalSetR(-1)}
          >
            -1
          </IconButton>
          <IconButton
            size="small"
            color={r === 0 ? "warning" : "primary"}
            onClick={() => globalSetR(0)}
          >
            0
          </IconButton>
          <IconButton
            size="small"
            color={r === 1 ? "warning" : "primary"}
            onClick={() => globalSetR(1)}
          >
            1
          </IconButton>
          <IconButton
            size="small"
            color={r === 2 ? "warning" : "primary"}
            onClick={() => globalSetR(2)}
          >
            2
          </IconButton>
          <IconButton
            size="small"
            color={r === 3 ? "warning" : "primary"}
            onClick={() => globalSetR(3)}
          >
            3
          </IconButton>
        </div>

        <br />

        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={check}
            style={{ marginRight: "8px" }}
          >
            Check
          </button>
          <button type="button" className="btn btn-primary" onClick={clearList}>
            Clear
          </button>
        </div>
        <br />

        <a
          href="/login_page"
          className="btn btn-primary"
          style={{ width: "137px" }}
        >
          Sign out
        </a>
        <br />
        <br />
      </form>
      <Toaster richColors />
    </>
  );
};

export default Form;
