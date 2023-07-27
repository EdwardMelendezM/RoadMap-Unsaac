import React, { useRef, useEffect } from 'react';

interface TreeProps {
  data: any;
}

const Tree: React.FC<TreeProps> = ({ data }) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d')!;

      // dibujar nodo raíz
      ctx.fillStyle = 'yellow';
      ctx.font = '16px Arial';
      ctx.fillText('raiz', 100, 50);

      // dibujar nodos hijos
      ctx.fillStyle = 'black';
      ctx.font = '14px Arial';
      ctx.fillText('hijo 1', 75, 100);
      ctx.fillText('hijo 2', 125, 100);

      // dibujar arcos
      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.bezierCurveTo(100, 75, 75, 100, 50, 100);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(100, 50);
      ctx.bezierCurveTo(100, 75, 125, 100, 150, 100);
      ctx.stroke();
    }
  }, []);

  return <canvas ref={canvasRef} width={200} height={200} />;

};

export default Tree;

