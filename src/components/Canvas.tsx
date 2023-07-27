import { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');

    // Aquí puedes dibujar en el canvas utilizando el contexto 2D

    // Ejemplo de dibujo de un rectángulo rojo
    context.fillStyle = 'yellow';
    context.fillRect(50, 50, 100, 100);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400} // Define el ancho del canvas
      height={400} // Define la altura del canvas
    />
  );
};

export default CanvasComponent;
