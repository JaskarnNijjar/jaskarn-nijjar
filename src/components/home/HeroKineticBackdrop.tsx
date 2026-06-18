"use client";

import { useEffect, useRef } from "react";

type SourceColumn = {
  x: number;
  y: number;
  width: number;
  rows: number;
  phase: number;
  speed: number;
  alpha: number;
};

type FlowPath = {
  y: number;
  bend: number;
  phase: number;
  speed: number;
  width: number;
  alpha: number;
};

type Point = {
  x: number;
  y: number;
};

const SOURCE_COLUMNS: SourceColumn[] = [
  { x: 0.02, y: 0.02, width: 0.28, rows: 18, phase: 0.1, speed: 0.34, alpha: 0.92 },
  { x: 0.27, y: 0.1, width: 0.32, rows: 16, phase: 1.7, speed: 0.26, alpha: 0.78 },
  { x: 0.54, y: 0.04, width: 0.24, rows: 20, phase: 2.6, speed: 0.3, alpha: 0.68 },
  { x: 0.72, y: 0.16, width: 0.24, rows: 14, phase: 3.4, speed: 0.22, alpha: 0.62 },
];

const FLOW_PATHS: FlowPath[] = [
  { y: 0.2, bend: -0.16, phase: 0.1, speed: 0.18, width: 1.5, alpha: 0.56 },
  { y: 0.36, bend: 0.1, phase: 1.6, speed: 0.22, width: 1.9, alpha: 0.48 },
  { y: 0.54, bend: -0.08, phase: 3.2, speed: 0.2, width: 1.4, alpha: 0.5 },
  { y: 0.72, bend: 0.14, phase: 4.4, speed: 0.16, width: 1.7, alpha: 0.42 },
];

const TOKEN_RUNS = [0.24, 0.42, 0.18, 0.62, 0.34, 0.5, 0.28, 0.7] as const;

function roundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const safeRadius = Math.min(radius, width / 2, height / 2);

  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function cubicPoint(t: number, start: Point, controlA: Point, controlB: Point, end: Point) {
  const inverse = 1 - t;

  return {
    x:
      inverse ** 3 * start.x +
      3 * inverse ** 2 * t * controlA.x +
      3 * inverse * t ** 2 * controlB.x +
      t ** 3 * end.x,
    y:
      inverse ** 3 * start.y +
      3 * inverse ** 2 * t * controlA.y +
      3 * inverse * t ** 2 * controlB.y +
      t ** 3 * end.y,
  };
}

function drawSourceColumn(
  context: CanvasRenderingContext2D,
  column: SourceColumn,
  planeWidth: number,
  planeHeight: number,
  time: number,
) {
  const x = column.x * planeWidth;
  const y = column.y * planeHeight;
  const width = column.width * planeWidth;
  const rowGap = Math.max(13, planeHeight * 0.024);
  const rowHeight = Math.max(4, planeHeight * 0.006);
  const columnHeight = column.rows * rowGap + 30;

  roundedRect(context, x - 14, y - 18, width + 28, columnHeight, 12);
  context.fillStyle = `rgba(0, 229, 255, ${0.035 * column.alpha})`;
  context.fill();
  context.strokeStyle = `rgba(0, 229, 255, ${0.09 * column.alpha})`;
  context.lineWidth = 1;
  context.stroke();

  const cursorRow = Math.floor((time * column.speed * 8 + column.phase * 3) % column.rows);

  for (let row = 0; row < column.rows; row += 1) {
    const drift = (time * column.speed * 18 + column.phase * 24) % rowGap;
    const rowY = y + row * rowGap - drift;
    const indent = ((row + Math.floor(column.phase * 4)) % 4) * 12;
    const run = TOKEN_RUNS[(row + Math.floor(column.phase * 10)) % TOKEN_RUNS.length];
    const accentRun = row === cursorRow || (row + Math.floor(time * column.speed * 5)) % 9 === 0;
    const tokenWidth = Math.max(18, (width - indent) * run);

    if (rowY < y - rowGap || rowY > y + columnHeight - 6) continue;

    roundedRect(context, x + indent, rowY, tokenWidth, rowHeight, 3);
    context.fillStyle = accentRun
      ? `rgba(0, 229, 255, ${0.42 + column.alpha * 0.2})`
      : `rgba(0, 229, 255, ${0.11 * column.alpha})`;
    context.fill();

    if (row % 3 !== 1) {
      roundedRect(
        context,
        x + indent + tokenWidth + 9,
        rowY,
        Math.max(10, (width - tokenWidth - indent) * 0.24),
        rowHeight,
        3,
      );
      context.fillStyle = `rgba(0, 229, 255, ${0.06 * column.alpha})`;
      context.fill();
    }
  }

  const statusY = y + 8 + cursorRow * rowGap - ((time * column.speed * 18 + column.phase * 24) % rowGap);
  context.fillStyle = "rgba(0, 229, 255, 0.7)";
  roundedRect(context, x - 5, statusY, 2, Math.max(20, rowGap * 1.2), 2);
  context.fill();
}

function drawPacketFlow(
  context: CanvasRenderingContext2D,
  cssWidth: number,
  cssHeight: number,
  flow: FlowPath,
  time: number,
) {
  const start: Point = {
    x: cssWidth * 0.48,
    y: cssHeight * flow.y,
  };
  const controlA: Point = {
    x: cssWidth * 0.62,
    y: cssHeight * (flow.y + flow.bend),
  };
  const controlB: Point = {
    x: cssWidth * 0.82,
    y: cssHeight * (flow.y - flow.bend * 0.65),
  };
  const end: Point = {
    x: cssWidth * 1.04,
    y: cssHeight * (flow.y + flow.bend * 0.28),
  };

  const baseGradient = context.createLinearGradient(start.x, start.y, end.x, end.y);
  baseGradient.addColorStop(0, "rgba(0, 229, 255, 0)");
  baseGradient.addColorStop(0.3, `rgba(0, 229, 255, ${flow.alpha * 0.14})`);
  baseGradient.addColorStop(0.68, `rgba(0, 229, 255, ${flow.alpha * 0.22})`);
  baseGradient.addColorStop(1, "rgba(0, 229, 255, 0)");

  context.beginPath();
  context.moveTo(start.x, start.y);
  context.bezierCurveTo(controlA.x, controlA.y, controlB.x, controlB.y, end.x, end.y);
  context.strokeStyle = baseGradient;
  context.lineWidth = flow.width;
  context.stroke();

  const packet = (time * flow.speed + flow.phase) % 1;
  const head = cubicPoint(packet, start, controlA, controlB, end);
  const tail = cubicPoint(Math.max(0, packet - 0.045), start, controlA, controlB, end);

  context.beginPath();
  context.moveTo(tail.x, tail.y);
  context.lineTo(head.x, head.y);
  context.strokeStyle = `rgba(0, 229, 255, ${0.58 + flow.alpha * 0.18})`;
  context.shadowColor = "rgba(0, 229, 255, 0.42)";
  context.shadowBlur = 20;
  context.lineWidth = flow.width + 2.4;
  context.stroke();

  context.beginPath();
  context.arc(head.x, head.y, 3.6 + flow.width, 0, Math.PI * 2);
  context.fillStyle = "rgba(0, 229, 255, 0.92)";
  context.fill();
  context.shadowBlur = 0;
}

function drawCompilerField(
  context: CanvasRenderingContext2D,
  cssWidth: number,
  cssHeight: number,
  time: number,
) {
  context.clearRect(0, 0, cssWidth, cssHeight);
  context.save();
  context.globalCompositeOperation = "screen";

  const bloom = context.createRadialGradient(
    cssWidth * 0.78,
    cssHeight * (0.36 + Math.sin(time * 0.22) * 0.04),
    0,
    cssWidth * 0.78,
    cssHeight * 0.36,
    cssWidth * 0.42,
  );
  bloom.addColorStop(0, "rgba(0, 229, 255, 0.24)");
  bloom.addColorStop(0.4, "rgba(0, 229, 255, 0.08)");
  bloom.addColorStop(1, "rgba(0, 229, 255, 0)");
  context.fillStyle = bloom;
  context.fillRect(0, 0, cssWidth, cssHeight);

  for (const flow of FLOW_PATHS) {
    drawPacketFlow(context, cssWidth, cssHeight, flow, time);
  }

  context.save();
  context.translate(cssWidth * 0.53, cssHeight * 0.09);
  context.transform(1, -0.035, 0.08, 1, 0, 0);

  const planeWidth = cssWidth * 0.56;
  const planeHeight = cssHeight * 0.76;

  roundedRect(context, -22, -28, planeWidth + 44, planeHeight + 56, 18);
  context.fillStyle = "rgba(5, 5, 5, 0.18)";
  context.fill();
  context.strokeStyle = "rgba(0, 229, 255, 0.12)";
  context.lineWidth = 1;
  context.stroke();

  for (const column of SOURCE_COLUMNS) {
    drawSourceColumn(context, column, planeWidth, planeHeight, time);
  }

  for (let index = 0; index < 5; index += 1) {
    const pulse = Math.sin(time * 1.1 + index * 0.8) * 0.5 + 0.5;
    const x = planeWidth * (0.06 + index * 0.16);
    const y = planeHeight + 14 + Math.sin(time * 0.42 + index) * 4;

    roundedRect(context, x, y, planeWidth * 0.1, 3, 2);
    context.fillStyle = `rgba(0, 229, 255, ${0.24 + pulse * 0.34})`;
    context.fill();
  }

  context.restore();

  for (let index = 0; index < 7; index += 1) {
    const y = cssHeight * (0.15 + index * 0.1);
    const x = cssWidth * (0.86 + Math.sin(time * 0.2 + index) * 0.03);
    const radius = 2.4 + (index % 3) * 1.1;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(0, 229, 255, ${0.32 - index * 0.018})`;
    context.fill();
  }

  context.restore();
}

export function HeroKineticBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasNode = canvasRef.current;
    if (!canvasNode) return;

    const canvasElement: HTMLCanvasElement = canvasNode;
    const drawingContext = canvasElement.getContext("2d", { alpha: true });
    if (!drawingContext) return;

    const context: CanvasRenderingContext2D = drawingContext;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      const rect = canvasElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, Math.floor(rect.width * dpr));
      height = Math.max(1, Math.floor(rect.height * dpr));
      canvasElement.width = width;
      canvasElement.height = height;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time: number) {
      const cssWidth = width / dpr;
      const cssHeight = height / dpr;
      drawCompilerField(context, cssWidth, cssHeight, media.matches ? 0 : time * 0.001);

      if (!media.matches) {
        frame = window.requestAnimationFrame(draw);
      }
    }

    function syncMotion() {
      window.cancelAnimationFrame(frame);
      draw(0);
    }

    resize();
    draw(0);

    window.addEventListener("resize", resize);
    media.addEventListener("change", syncMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      media.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div aria-hidden className="hero-kinetic-backdrop">
      <canvas ref={canvasRef} className="hero-kinetic-canvas" />
    </div>
  );
}
