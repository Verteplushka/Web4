import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDot } from "../../service/DotService";
import { addDotRedux } from "../../redux_files/actions";

const Graph = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const r = useSelector((state) => state.r);
  const dotsList = useSelector((state) => state.dotsList);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const unitLenght = (canvas.height - 60) / 8;

    let scaledR = r * unitLenght;

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
    for (let x = 30; x < canvas.width - 30; x += unitLenght) {
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
    for (let y = 30; y < canvas.height - 30; y += unitLenght) {
      ctx.moveTo(canvas.width / 2 - 3, y);
      ctx.lineTo(canvas.width / 2 + 3, y);
      ctx.stroke();
    }

    // Добавление меток
    ctx.fillStyle = "black";
    ctx.fillText("X", canvas.width - 10, canvas.height / 2 - 10);
    ctx.fillText("Y", canvas.width / 2 + 10, 10);
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

    if (r > 0) {
      dotsList.forEach((dot) => {
        ctx.fillStyle =
          dot.result === "hit"
            ? "rgba(0, 255, 0, 0.5)"
            : "rgba(255, 0, 0, 0.5)";
        ctx.fillRect(
          canvas.width / 2 + (dot.x / dot.r) * r * unitLenght,
          canvas.height / 2 - (dot.y / dot.r) * r * unitLenght,
          3,
          3
        );
      });
    }

    // Очистим canvas при размонтировании компонента
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [r, dotsList]);

  useEffect(() => {}, [dotsList]);

  const checkDotMouse = (event) => {
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    const unitLenght = (canvas.height - 60) / 8;

    const x = (event.clientX - rect.left - canvas.width / 2) / unitLenght;
    const y = (canvas.height / 2 - (event.clientY - rect.top)) / unitLenght;

    addDot({ x: x, y: y, r: r }).then((response) =>
      dispatch(addDotRedux(response.data))
    );
  };

  return (
    <canvas ref={canvasRef} width={320} height={320} onClick={checkDotMouse} />
  );
};

export default Graph;
