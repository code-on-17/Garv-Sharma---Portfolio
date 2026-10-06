import React, { useRef, useEffect, useCallback } from 'react';

interface MagnifiedDescriptionProps {
  text: string;
  className?: string;
}

export const MagnifiedDescription: React.FC<MagnifiedDescriptionProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isPointerInside = useRef(false);
  const ticking = useRef(false);
  const latestPointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Split text into words, and words into characters
  const words = text.split(' ');

  let charCounter = 0;
  const wordTokens = words.map((word) => {
    const chars = word.split('').map((char) => {
      const index = charCounter++;
      return { char, index };
    });
    return { word, chars };
  });

  const totalChars = charCounter;

  useEffect(() => {
    letterRefs.current = letterRefs.current.slice(0, totalChars);
  }, [totalChars]);

  // Smooth continuous gradient from normal slate-300 to a slightly darker, rich purple (#a855f7)
  const getInterpolatedColor = (p: number) => {
    if (p <= 0.001) return '';
    const easeP = p * p * (3 - 2 * p); // smoothstep
    // Base: slate-300 rgb(203, 213, 225)
    // Peak slightly darker purple: rgb(168, 85, 247) (#a855f7)
    const r = Math.round(203 + (168 - 203) * easeP);
    const g = Math.round(213 + (85 - 213) * easeP);
    const b = Math.round(225 + (247 - 225) * easeP);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const resetAllLetters = useCallback(() => {
    letterRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = 'scale(1) translate3d(0, 0, 0)';
      el.style.color = '';
      el.style.textShadow = 'none';
      el.style.zIndex = '1';
    });
  }, []);

  const updateMagnification = useCallback(() => {
    ticking.current = false;
    if (!containerRef.current || !isPointerInside.current) {
      resetAllLetters();
      return;
    }

    const { x: pointerX, y: pointerY } = latestPointer.current;
    const maxRadius = 72; // Crisp, focused influence radius
    const maxScale = 1.15; // Subtle, non-intrusive scale

    letterRefs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const charCenterX = rect.left + rect.width / 2;
      const charCenterY = rect.top + rect.height / 2;

      const dx = charCenterX - pointerX;
      const dy = charCenterY - pointerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxRadius) {
        // Cosine falloff
        const progress = Math.cos((dist / maxRadius) * (Math.PI / 2));
        const scale = 1 + progress * (maxScale - 1);

        // Balanced natural arching away from cursor
        const normDy = dy / maxRadius;
        const normDx = dx / maxRadius;
        const translateY = normDy * progress * 3;
        const translateX = normDx * progress * 1.5;

        el.style.transform = `scale(${scale.toFixed(3)}) translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0)`;
        el.style.zIndex = progress > 0.4 ? '10' : '2';

        // Continuous smooth gradient light sky blue
        el.style.color = getInterpolatedColor(progress);

        if (progress > 0.25) {
          const shadowAlpha = (progress * 0.45).toFixed(2);
          const shadowBlur = (progress * 5).toFixed(1);
          el.style.textShadow = `0 0 ${shadowBlur}px rgba(168, 85, 247, ${shadowAlpha})`;
        } else {
          el.style.textShadow = 'none';
        }
      } else {
        el.style.transform = 'scale(1) translate3d(0, 0, 0)';
        el.style.color = '';
        el.style.textShadow = 'none';
        el.style.zIndex = '1';
      }
    });
  }, [resetAllLetters]);

  const handlePointerMove = (clientX: number, clientY: number) => {
    isPointerInside.current = true;
    latestPointer.current = { x: clientX, y: clientY };

    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(updateMagnification);
    }
  };

  const handlePointerLeave = () => {
    isPointerInside.current = false;
    resetAllLetters();
  };

  return (
    <p
      ref={containerRef}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseLeave={handlePointerLeave}
      onTouchStart={(e) => {
        if (e.touches[0]) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }}
      onTouchEnd={handlePointerLeave}
      className={`relative cursor-default select-none transition-colors ${className}`}
      style={{ textWrap: 'balance' }}
    >
      {wordTokens.map((token, wordIdx) => (
        <span
          key={`w-${wordIdx}`}
          className="inline-block whitespace-nowrap mr-1.5 sm:mr-2"
        >
          {token.chars.map(({ char, index }) => (
            <span
              key={`c-${index}`}
              ref={(el) => {
                letterRefs.current[index] = el;
              }}
              className="inline-block origin-center will-change-transform text-slate-300 transition-[transform,color] duration-75"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
};
