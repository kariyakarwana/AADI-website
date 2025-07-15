import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StarsBackground = ({ scrollDirection }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const cometsRef = useRef([]);
  const offsetRef = useRef(0); // global horizontal offset for comets
  const tweenRef = useRef(null);

  const NUM_COMETS = 6;
  const TAIL_LENGTH = 15;

  const generateStars = (width, height) => {
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        opacity: Math.random(),
      });
    }
    starsRef.current = stars;
  };

  const generateComets = (width, height) => {
    const comets = [];
    for (let i = 0; i < NUM_COMETS; i++) {
      const baseX = (width / NUM_COMETS) * i + (Math.random() * 50 - 25); // spread with some randomness
      const baseY = Math.random() * height * 0.7 + height * 0.15;
      const speed = 2 + Math.random() * 1;
      const tail = Array(TAIL_LENGTH).fill().map(() => ({ x: baseX, y: baseY, opacity: 0 }));

      comets.push({
        baseX,
        baseY,
        speed,
        tail,
      });
    }
    cometsRef.current = comets;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      generateStars(canvas.width, canvas.height);
      generateComets(canvas.width, canvas.height);

      offsetRef.current = 0; // reset offset on resize
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      starsRef.current.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    const drawComet = (x, y, tail) => {
      // Draw tail - fading circles
      tail.forEach((point, i) => {
        ctx.beginPath();
        const alpha = point.opacity * ((i + 1) / tail.length);
        ctx.fillStyle = `rgba(0, 242, 255, ${alpha})`;
        ctx.arc(point.x, point.y, 10 * ((i + 1) / tail.length), 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw comet head - radial gradient
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 50);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(0.3, '#00f2ff');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      drawStars();

      const angle = Math.PI / 4; // 45 degrees

cometsRef.current.forEach((comet) => {
  // Calculate comet position relative to global offset at 45 degree angle
  let cometX = comet.baseX + offsetRef.current * Math.cos(angle);
  let cometY = comet.baseY + offsetRef.current * Math.sin(angle);

  // Wrap cometX and cometY around canvas width/height for looping
  if (cometX > canvas.width + 50) cometX -= canvas.width + 100;
  if (cometX < -50) cometX += canvas.width + 100;

  if (cometY > canvas.height + 50) cometY -= canvas.height + 100;
  if (cometY < -50) cometY += canvas.height + 100;

  // Update tail positions: shift and fade
  for (let i = comet.tail.length - 1; i > 0; i--) {
    comet.tail[i] = { ...comet.tail[i - 1], opacity: comet.tail[i - 1].opacity * 0.9 };
  }
  comet.tail[0] = { x: cometX, y: cometY, opacity: 1 };

  drawComet(cometX, cometY, comet.tail);
});


      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  // Animate offsetRef.current smoothly on scrollDirection changes
  useEffect(() => {
    if (tweenRef.current) tweenRef.current.kill();

    // If no scroll or zero, don't move (optional)
    if (!scrollDirection) return;

    // Move offset by a fixed amount smoothly, positive or negative based on scroll
    tweenRef.current = gsap.to(offsetRef, {
      current: `+=${scrollDirection * 500}`, // move 150px left/right on each scroll event
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        // no setState needed, animation reads offsetRef.current directly
      },
    });
  }, [scrollDirection]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: '#000' }}
    />
  );
};

export default StarsBackground;
