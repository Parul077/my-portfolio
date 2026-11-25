import React, { useEffect, useRef, useState } from "react";

const NODES_DATA = [
  {
    id: "center",
    label: "Parul Singh",
    sub: "AI/ML Engineer",
    color: "#ffffff",
    glow: "#64ffda",
    size: 24,
    x: 0,
    y: 0,
    isCenter: true,
  },
  {
    id: "jev",
    label: "Jev State Engine",
    sub: "Deterministic FSM & AST Gates",
    color: "#64ffda",
    glow: "#64ffda",
    size: 14,
    dist: 110,
    angle: 0.15,
  },
  {
    id: "synthetic",
    label: "Synthetic Data",
    sub: "12-Rule Quality & Bounded Repair",
    color: "#34d399",
    glow: "#34d399",
    size: 13,
    dist: 145,
    angle: 1.1,
  },
  {
    id: "blogs",
    label: "154 Articles",
    sub: "Medium Deep Learning Deep Dives",
    color: "#fb923c",
    glow: "#fb923c",
    size: 14,
    dist: 130,
    angle: 2.2,
  },
  {
    id: "iit",
    label: "IIT Kanpur",
    sub: "SURGE Research Intern",
    color: "#a78bfa",
    glow: "#a78bfa",
    size: 13,
    dist: 155,
    angle: 3.25,
  },
  {
    id: "glitch",
    label: "Glitch Room",
    sub: "Interactive Coding Platform",
    color: "#f472b6",
    glow: "#f472b6",
    size: 13,
    dist: 125,
    angle: 4.15,
  },
  {
    id: "backtest",
    label: "Backtesting & HPO",
    sub: "Finance, Healthcare & Manufacturing",
    color: "#38bdf8",
    glow: "#38bdf8",
    size: 12,
    dist: 160,
    angle: 5.1,
  },
  {
    id: "langgraph",
    label: "LangGraph",
    sub: "Multi-Agent State Workflows",
    color: "#60a5fa",
    glow: "#60a5fa",
    size: 11,
    dist: 175,
    angle: 0.75,
  },
  {
    id: "vision",
    label: "EfficientNet",
    sub: "Solar Defect Classification",
    color: "#fbbf24",
    glow: "#fbbf24",
    size: 11,
    dist: 180,
    angle: 3.85,
  },
];

const EDGES = [
  ["center", "jev"],
  ["center", "synthetic"],
  ["center", "blogs"],
  ["center", "iit"],
  ["center", "glitch"],
  ["center", "backtest"],
  ["jev", "langgraph"],
  ["synthetic", "backtest"],
  ["glitch", "vision"],
  ["blogs", "iit"],
  ["jev", "synthetic"],
];

const ConstellationGraph = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const hoveredNodeRef = useRef(null);
  const draggedNodeRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    const initNodes = () => {
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) / 440;

      nodesRef.current = NODES_DATA.map((item) => {
        if (item.isCenter) {
          return {
            ...item,
            x: cx,
            y: cy,
            baseX: cx,
            baseY: cy,
            vx: 0,
            vy: 0,
            scaleSize: item.size * scale,
          };
        }
        const dist = (item.dist || 120) * scale;
        const x = cx + Math.cos(item.angle) * dist;
        const y = cy + Math.sin(item.angle) * dist;
        return {
          ...item,
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          scaleSize: item.size * scale,
        };
      });
    };

    initNodes();
    window.addEventListener("resize", handleResize);

    let animationFrameId;
    let tick = 0;

    const render = () => {
      tick += 0.012;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const hovered = hoveredNodeRef.current;
      const dragged = draggedNodeRef.current;

      // Update positions with subtle floating physics
      nodes.forEach((n) => {
        if (n === dragged) {
          n.x = mousePosRef.current.x;
          n.y = mousePosRef.current.y;
        } else if (!n.isCenter) {
          // Gentle orbital floating
          n.x += Math.sin(tick + n.angle) * 0.35 + n.vx * 0.1;
          n.y += Math.cos(tick + n.angle * 1.5) * 0.35 + n.vy * 0.1;

          // Pull gently towards base pos
          n.x += (n.baseX - n.x) * 0.02;
          n.y += (n.baseY - n.y) * 0.02;
        }
      });

      // Draw connecting edges
      EDGES.forEach(([id1, id2]) => {
        const n1 = nodes.find((n) => n.id === id1);
        const n2 = nodes.find((n) => n.id === id2);
        if (!n1 || !n2) return;

        const isHighlighted =
          hovered && (hovered.id === id1 || hovered.id === id2);

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);

        if (isHighlighted) {
          ctx.strokeStyle = "rgba(100, 255, 218, 0.7)";
          ctx.lineWidth = 1.8;
          ctx.shadowColor = "#64ffda";
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((n) => {
        const isHovered = hovered && hovered.id === n.id;
        const radius = isHovered ? n.scaleSize * 1.25 : n.scaleSize;

        // Outer glow
        const glowGrad = ctx.createRadialGradient(
          n.x,
          n.y,
          radius * 0.3,
          n.x,
          n.y,
          radius * 2.2
        );
        glowGrad.addColorStop(
          0,
          isHovered
            ? n.glow
            : n.isCenter
            ? "rgba(100, 255, 218, 0.35)"
            : "rgba(255, 255, 255, 0.12)"
        );
        glowGrad.addColorStop(1, "transparent");

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Node Core Circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isCenter ? "#07070f" : "#0d0d1a";
        ctx.fill();
        ctx.strokeStyle = isHovered ? "#ffffff" : n.color;
        ctx.lineWidth = n.isCenter ? 2.5 : 1.5;
        ctx.stroke();

        // Inner glowing dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#ffffff" : n.color;
        ctx.fill();

        // Text Label
        ctx.font = n.isCenter
          ? "bold 12px 'Space Mono', monospace"
          : isHovered
          ? "bold 11px 'Space Mono', monospace"
          : "10px 'Space Mono', monospace";
        ctx.fillStyle = isHovered ? "#ffffff" : n.isCenter ? "#64ffda" : "#cbd5e1";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Label offset below node
        const labelY = n.y + radius + 11;
        ctx.fillText(n.label, n.x, labelY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse handlers
    const getCanvasMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseMove = (e) => {
      const pos = getCanvasMouse(e);
      mousePosRef.current = pos;

      if (draggedNodeRef.current) return;

      const hovered = nodesRef.current.find((n) => {
        const dx = pos.x - n.x;
        const dy = pos.y - n.y;
        return Math.sqrt(dx * dx + dy * dy) <= n.scaleSize * 1.5;
      });

      if (hovered !== hoveredNodeRef.current) {
        hoveredNodeRef.current = hovered;
        setActiveTooltip(hovered ? { label: hovered.label, sub: hovered.sub } : null);
        canvas.style.cursor = hovered ? "pointer" : "default";
      }
    };

    const handleMouseDown = (e) => {
      const pos = getCanvasMouse(e);
      const clicked = nodesRef.current.find((n) => {
        const dx = pos.x - n.x;
        const dy = pos.y - n.y;
        return Math.sqrt(dx * dx + dy * dy) <= n.scaleSize * 2;
      });
      if (clicked) {
        draggedNodeRef.current = clicked;
        canvas.style.cursor = "grabbing";
      }
    };

    const handleMouseUp = () => {
      draggedNodeRef.current = null;
      canvas.style.cursor = hoveredNodeRef.current ? "pointer" : "default";
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleMouseUp);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mousedown", handleMouseDown);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden flex flex-col items-center justify-between p-2 select-none"
    >
      {/* Background Radial Glow behind constellation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,218,0.06),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(167,139,250,0.05),transparent_60%)] pointer-events-none" />

      {/* HTML5 Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

      {/* Tooltip Float HUD */}
      {activeTooltip && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-[#0d0d1a]/90 border border-[#64ffda]/40 backdrop-blur-md shadow-xl text-center pointer-events-none animate-in fade-in zoom-in-95 duration-150">
          <p className="text-[11px] font-mono font-bold text-white">
            {activeTooltip.label}
          </p>
          <p className="text-[10px] font-mono text-[#64ffda]">
            {activeTooltip.sub}
          </p>
        </div>
      )}

      {/* Subtle Hint Bar */}
      <div className="relative z-10 flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#0d0d1a]/80 border border-white/10 backdrop-blur-sm text-[10px] font-mono text-gray-400 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>DRAG · HOVER · EXPLORE KNOWLEDGE GRAPH</span>
      </div>
    </div>
  );
};

export default ConstellationGraph;
