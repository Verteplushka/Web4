import React, { useState } from "react";
// import IconButton from "@mui/material/IconButton";
import IconButton from "react-toolbox/lib/button";
import { clear, addDot } from "../../service/DotService";
import { addDotRedux, changeR, clearRedux } from "../../redux_files/actions";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import Button from "react-toolbox/lib/button";

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
            className={
              x === -5 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(-5)}
            style={{ marginRight: "4px" }}
          >
            -5
          </IconButton>
          <IconButton
            size="small"
            className={
              x === -4 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(-4)}
            style={{ marginRight: "4px" }}
          >
            -4
          </IconButton>
          <IconButton
            size="small"
            className={
              x === -3 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(-3)}
            style={{ marginRight: "4px" }}
          >
            -3
          </IconButton>
          <IconButton
            size="small"
            className={
              x === -2 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(-2)}
            style={{ marginRight: "4px" }}
          >
            -2
          </IconButton>
          <IconButton
            size="small"
            className={
              x === -1 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(-1)}
            style={{ marginRight: "4px" }}
          >
            -1
          </IconButton>
          <IconButton
            size="small"
            className={
              x === 0 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(0)}
            style={{ marginRight: "4px" }}
          >
            0
          </IconButton>
          <IconButton
            size="small"
            className={
              x === 1 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(1)}
            style={{ marginRight: "4px" }}
          >
            1
          </IconButton>
          <IconButton
            size="small"
            className={
              x === 2 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(2)}
            style={{ marginRight: "4px" }}
          >
            2
          </IconButton>
          <IconButton
            size="small"
            className={
              x === 3 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => handleInputX(3)}
            style={{ marginRight: "4px" }}
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
            className={
              r === -5 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(-5)}
            style={{ marginRight: "4px" }}
          >
            -5
          </IconButton>
          <IconButton
            size="small"
            className={
              r === -4 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(-4)}
            style={{ marginRight: "4px" }}
          >
            -4
          </IconButton>
          <IconButton
            size="small"
            className={
              r === -3 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(-3)}
            style={{ marginRight: "4px" }}
          >
            -3
          </IconButton>
          <IconButton
            size="small"
            className={
              r === -2 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(-2)}
            style={{ marginRight: "4px" }}
          >
            -2
          </IconButton>
          <IconButton
            size="small"
            className={
              r === -1 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(-1)}
            style={{ marginRight: "4px" }}
          >
            -1
          </IconButton>
          <IconButton
            size="small"
            className={
              r === 0 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(0)}
            style={{ marginRight: "4px" }}
          >
            0
          </IconButton>
          <IconButton
            size="small"
            className={
              r === 1 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(1)}
            style={{ marginRight: "4px" }}
          >
            1
          </IconButton>
          <IconButton
            size="small"
            className={
              r === 2 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(2)}
            style={{ marginRight: "4px" }}
          >
            2
          </IconButton>
          <IconButton
            size="small"
            className={
              r === 3 ? "btn btn-custom-chosen" : "btn btn-custom-default"
            }
            onClick={() => globalSetR(3)}
            style={{ marginRight: "4px" }}
          >
            3
          </IconButton>
        </div>

        <br />

        <div className="form-group">
          <Button
            type="button"
            className="btn btn-primary"
            onClick={check}
            style={{ marginRight: "8px" }}
          >
            Check
          </Button>
          <Button type="button" className="btn btn-primary" onClick={clearList}>
            Clear
          </Button>
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
