import React, { useState } from 'react';
import dpImage from '../assets/dp.jpg';

interface AvatarDisplayProps {
  imageSrc?: string;
  altText?: string;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  imageSrc = dpImage,
  altText = 'Garv Sharma Profile Avatar',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex items-center justify-center mb-6">
      {/* Outer Ambient Glow Aura */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-full blur-2xl opacity-40 transition-opacity duration-500"
        style={{
          background: isHovered
            ? 'radial-gradient(circle, #7c3aed 0%, #22d3ee 50%, #f59e0b 80%, transparent 100%)'
            : 'radial-gradient(circle, #7c3aed 0%, #22d3ee 60%, transparent 100%)',
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        }}
        aria-hidden="true"
      />

      {/* Decorative Rotating Ring with Organic Border */}
      <div
        className="pointer-events-none absolute -inset-2.5 transition-all duration-700 opacity-60"
        style={{
          borderRadius: isHovered
            ? '55% 45% 65% 35% / 45% 55% 35% 65%'
            : '42% 58% 70% 30% / 45% 45% 55% 55%',
          border: '1.5px dashed rgba(34, 211, 238, 0.45)',
          animation: 'spin 18s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* Main Avatar Container with 3D Tilt & Organic Shape */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.4s ease-out',
        }}
        className="relative group cursor-pointer"
      >
        {/* Organic Shaped Mask Container */}
        <div
          className="relative w-36 h-36 sm:w-44 sm:h-44 overflow-hidden shadow-2xl transition-all duration-700 bg-slate-900 border-2 border-white/20"
          style={{
            borderRadius: isHovered
              ? '52% 48% 60% 40% / 40% 60% 40% 60%'
              : '42% 58% 70% 30% / 45% 45% 55% 55%',
            boxShadow: isHovered
              ? '0 20px 40px -10px rgba(124, 58, 237, 0.45), 0 0 25px 2px rgba(34, 211, 238, 0.3)'
              : '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 0 15px 1px rgba(124, 58, 237, 0.2)',
          }}
        >
          {/* Profile Picture (Object cover ensures any square image looks great) */}
          <img
            src={imageSrc}
            alt={altText}
            onError={(e) => {
              // Fallback to local asset if /dp.jpg fails
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('garv_avatar')) {
                target.src = '/src/assets/dp.jpg';
              }
            }}
            className="w-full h-full object-cover object-center filter saturate-[1.08] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
          />

          {/* Subtle gradient vignette overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0d0f14]/50 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Small floating badge */}
        <div
          className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-[#11141e]/90 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg shadow-black/40 transition-transform group-hover:scale-110"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-cyan-300 font-semibold tracking-wide">
            GARV
          </span>
        </div>
      </div>
    </div>
  );
};
