import React from 'react';

export default function ReadingCoverSpring() {
    return (
        <svg className="w-[800px] h-[800px] absolute -top-80 -right-80 z-20 opacity-100 pointer-events-none rotate-[20deg]" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* 1. Crystal Glass Body Gradient - Transparent & Blue */}
                <linearGradient id="crystalBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                    <stop offset="20%" stopColor="rgba(59, 130, 246, 0.6)" /> {/* Blue-500 */}
                    <stop offset="50%" stopColor="rgba(37, 99, 235, 0.2)" /> {/* Blue-600 Transparent */}
                    <stop offset="80%" stopColor="rgba(29, 78, 216, 0.5)" /> {/* Blue-700 */}
                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0.3)" />
                </linearGradient>

                {/* 2. Sharp Specular Highlight - Glossy Surface */}
                <linearGradient id="glassHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                    <stop offset="30%" stopColor="white" stopOpacity="0.0" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.0" />
                    <stop offset="70%" stopColor="white" stopOpacity="0.0" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.8" />
                </linearGradient>

                {/* 3. Inner Glow for Depth */}
                <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="arithmetic" k2="1" k3="1" />
                </filter>

                <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
            </defs>

            {/* --- 1. Top Loop (Smallest) --- */}
            <g transform="translate(340, 160) rotate(-45)">
                {/* Shadow/Back */}
                <ellipse cx="0" cy="0" rx="60" ry="40" stroke="rgba(0,0,0,0.1)" strokeWidth="50" />
                {/* Body */}
                <ellipse cx="0" cy="0" rx="60" ry="40" stroke="url(#crystalBody)" strokeWidth="48" />
                {/* Glass Highlight */}
                <ellipse cx="0" cy="0" rx="60" ry="40" stroke="url(#glassHighlight)" strokeWidth="48" fill="none" />
                {/* Rim Light (Thin Sharp Line) */}
                <ellipse cx="0" cy="0" rx="60" ry="40" stroke="white" strokeWidth="1.5" strokeDasharray="40 100" opacity="0.9" transform="rotate(180)" />
            </g>

            {/* Connection 1-2 */}
            <path d="M310 200 Q 290 230 270 240" stroke="url(#crystalBody)" strokeWidth="46" strokeLinecap="round" opacity="0.9" />

            {/* --- 2. Middle Loop (Medium) --- */}
            <g transform="translate(250, 260) rotate(-45)">
                {/* Depth Shadow */}
                <ellipse cx="0" cy="0" rx="75" ry="50" stroke="rgba(30, 58, 138, 0.2)" strokeWidth="56" transform="translate(5, 5)" filter="url(#glassBlur)" />
                {/* Main Body */}
                <ellipse cx="0" cy="0" rx="75" ry="50" stroke="url(#crystalBody)" strokeWidth="54" />
                {/* Glass Reflection */}
                <ellipse cx="0" cy="0" rx="75" ry="50" stroke="url(#glassHighlight)" strokeWidth="54" fill="none" opacity="0.9" />
                {/* Sharp Edge Highlight */}
                <ellipse cx="0" cy="0" rx="75" ry="50" stroke="white" strokeWidth="2" strokeDasharray="80 150" strokeLinecap="round" opacity="1" />
            </g>

            {/* Connection 2-3 */}
            <path d="M220 310 Q 190 330 170 350" stroke="url(#crystalBody)" strokeWidth="54" strokeLinecap="round" opacity="0.9" />

            {/* --- 3. Bottom Loop (Largest) --- */}
            <g transform="translate(150, 370) rotate(-45)">
                {/* Shadow */}
                <ellipse cx="0" cy="0" rx="90" ry="60" stroke="rgba(0,0,0,0.15)" strokeWidth="62" transform="translate(8, 8)" filter="url(#glassBlur)" />
                {/* Body */}
                <ellipse cx="0" cy="0" rx="90" ry="60" stroke="url(#crystalBody)" strokeWidth="60" />
                {/* Glass Shine */}
                <ellipse cx="0" cy="0" rx="90" ry="60" stroke="url(#glassHighlight)" strokeWidth="25" fill="none" opacity="0.7" />
                {/* Crisp Highlight Outline */}
                <ellipse cx="0" cy="0" rx="90" ry="60" stroke="white" strokeWidth="3" strokeDasharray="60 200" strokeLinecap="round" opacity="0.95" />
                {/* Secondary Highlight */}
                <path d="M-80 10 Q -40 50 20 50" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
            </g>

            {/* Tail */}
            <path d="M110 420 Q 80 450 50 470" stroke="url(#crystalBody)" strokeWidth="60" strokeLinecap="round" opacity="0.8" />
        </svg>
    );
}
