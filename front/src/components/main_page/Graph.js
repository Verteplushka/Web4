import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDot } from "../../service/DotService";
import { addDotRedux } from "../../redux_files/actions";
import { Toaster, toast } from "sonner";

const Graph = (size) => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const r = useSelector((state) => state.r);
  const dotsList = useSelector((state) => state.dotsList);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const unitLenght = (canvas.height - 60) / 10;

    // Рисование оси X с стрелкой на конце
    ctx.beginPath();
    ctx.moveTo(20, canvas.height / 2);
    ctx.lineTo(canvas.width - 20, canvas.height / 2);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width - 20, canvas.height / 2);
    ctx.lineTo(canvas.width - 30, canvas.height / 2 - 5);
    ctx.lineTo(canvas.width - 30, canvas.height / 2 + 5);
    ctx.fillStyle = "black";
    ctx.fill();

    // Рисование делений на оси X
    for (let x = 30; x <= canvas.width - 30; x += unitLenght) {
      ctx.moveTo(x, canvas.height / 2 - 3);
      ctx.lineTo(x, canvas.height / 2 + 3);
      ctx.stroke();
    }

    // Рисование оси Y с стрелкой на конце
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20);
    ctx.lineTo(canvas.width / 2, canvas.height - 20);
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20);
    ctx.lineTo(canvas.width / 2 - 5, 30);
    ctx.lineTo(canvas.width / 2 + 5, 30);
    ctx.fillStyle = "black";
    ctx.fill();

    // Рисование делений на оси Y
    for (let y = 30; y <= canvas.height - 30; y += unitLenght) {
      ctx.moveTo(canvas.width / 2 - 3, y);
      ctx.lineTo(canvas.width / 2 + 3, y);
      ctx.stroke();
    }

    // Добавление меток
    ctx.fillStyle = "black";
    ctx.fillText("X", canvas.width - 10, canvas.height / 2 - 10);
    ctx.fillText("Y", canvas.width / 2 + 10, 10);

    if (r > 0) {
      let scaledR = r * unitLenght;

      ctx.fillText("R", canvas.width / 2 + 3 + scaledR, canvas.height / 2 + 20);

      ctx.fillStyle = "rgba(20, 60, 200, 0.5)"; // Голубой с прозрачностью 0.5

      // Прямоуголник
      ctx.fillRect(
        canvas.width / 2 - scaledR / 2,
        canvas.height / 2,
        scaledR / 2,
        scaledR
      );

      //Треугольник
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(canvas.width / 2 + scaledR / 2, canvas.height / 2);
      ctx.lineTo(canvas.width / 2, canvas.height / 2 - scaledR / 2);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.closePath();
      ctx.fill();

      //Сегмент круга
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        scaledR,
        Math.PI,
        (3 * Math.PI) / 2
      );
      ctx.lineTo(canvas.width / 2, canvas.height / 2); // Соединить с центром для закрытия фигуры
      ctx.closePath(); // Завершить четверть круга
      ctx.fill();

      // Точки 0_0
      dotsList.forEach((dot) => {
        ctx.fillStyle = dot.result === "hit" ? "green" : "red";
        ctx.fillRect(
          canvas.width / 2 + (dot.x / dot.r) * r * unitLenght,
          canvas.height / 2 - (dot.y / dot.r) * r * unitLenght,
          2,
          2
        );
      });
    }

    // Очистим canvas при размонтировании компонента
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [r, dotsList]);

  const checkDotMouse = (event) => {
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    const unitLenght = (canvas.height - 60) / 10;

    const x = (event.clientX - rect.left - canvas.width / 2) / unitLenght;
    const y = (canvas.height / 2 - (event.clientY - rect.top)) / unitLenght;

    if (r <= 0) {
      toast.error("You chose invalid R");
      return;
    }
    if (x < -5 || x > 3) {
      toast.error("X must be in [-5, 3]");
      return;
    }
    if (y <= -5 || y >= 3) {
      toast.error("Y must be in (-5, 3)");
      return;
    }

    addDot(user, { x: x, y: y, r: r }).then((response) =>
      dispatch(addDotRedux(response.data))
    );
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        onClick={checkDotMouse}
      />
      <Toaster richColors />
    </>
  );
};

export default Graph;
