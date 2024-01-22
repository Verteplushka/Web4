import React, { useRef, useEffect } from "react";

const Graph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Получаем ссылку на элемент canvas
    const canvas = canvasRef.current;
    // Получаем контекст для рисования
    const context = canvas.getContext("2d");

    // Тут вы можете выполнять рисование на canvas

    // Пример рисования прямоугольника
    context.fillStyle = "blue";
    context.fillRect(10, 10, 100, 50);

    // Очистим canvas при размонтировании компонента
    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []); // Пустой массив зависимостей, чтобы эффект выполнился только после монтирования

  return <canvas ref={canvasRef} width={400} height={200} />;
};

export default Graph;
