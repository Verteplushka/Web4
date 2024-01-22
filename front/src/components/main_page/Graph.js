import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Graph = () => {
  const canvasRef = useRef(null);
  const r = useSelector((state) => state.r);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let scaledR = r * 20;

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
    for (let x = 30; x < canvas.width - 30; x += 20) {
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
    for (let y = 30; y < canvas.height - 30; y += 20) {
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

    // Очистим canvas при размонтировании компонента
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [r]); // Пустой массив зависимостей, чтобы эффект выполнился только после монтирования

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Graph;
