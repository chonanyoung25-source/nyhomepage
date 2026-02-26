'use client';

import React from 'react';
import Link from 'next/link';
import ReadingCoverSpring from '@/components/ReadingCoverSpring';
import { ArrowLeft, MoveRight, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function ReadingPage() {
    return (
        <div className="bg-[#050a15] text-white">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes ocean-move {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                html {
                    scroll-behavior: smooth;
                }
                .bg-ocean-animated {
                     background: linear-gradient(90deg, #ffffff, #2563eb, #1e40af, #172554);
                     background-size: 400% 400%;
                     animation: ocean-move 15s ease infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
                    50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
                }
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
                    animation: float 8s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% {
                        left: -150%;
                    }
                    100% {
                        left: 150%;
                    }
                }
                .number-shimmer {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e3a8a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .number-shimmer::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -150%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
                    transform: skewX(-20deg);
                    animation: shimmer 3s infinite;
                }
                @keyframes sphere-float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                }
                .hover-card-lift {
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
                }
                .hover-card-lift:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -5px rgba(30, 58, 138, 0.2);
                }
            `}} />
            {/* 1. Cover Section - Exact Match to Reference */}
            <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Split Background - White Left, Blue Right/Bottom */}
                <div className="absolute inset-0 bg-ocean-animated overflow-hidden">
                    {/* Floating Orbs for Extra Dynamics */}
                    <div className="floating-orb w-96 h-96 -top-20 -left-20 animation-delay-0" style={{ animationDelay: '0s' }} />
                    <div className="floating-orb w-64 h-64 top-1/2 left-1/4 animation-delay-2000" style={{ animationDelay: '-2s' }} />
                    <div className="floating-orb w-80 h-80 bottom-0 right-1/3 animation-delay-4000" style={{ animationDelay: '-4s' }} />
                    <div className="floating-orb w-[600px] h-[600px] -bottom-32 -right-32 animation-delay-1000" style={{ animationDelay: '-1s' }} />

                    {/* White background for left/top - Separate Block with Gap */}
                    <div className="absolute top-0 left-0 w-3/5 h-[42%] bg-[#F3F4F6] rounded-r-[80px] z-10" />

                    {/* White background for bottom cards area */}
                    <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-[#F3F4F6] rounded-t-[80px] z-10" />
                </div>

                {/* Logo / Brand Name */}
                <div className="absolute top-4 left-8 z-50">
                    <span className="text-2xl font-black text-[#1e3a8a] tracking-tighter">
                        Cho Nanyoung
                    </span>
                </div>

                {/* Navigation Bar */}
                <nav className="absolute top-4 right-8 z-50 flex items-center gap-12">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="text-white/60 hover:text-white font-medium text-lg transition-colors tracking-wide">Home</Link>
                        <Link href="/listening" className="text-white/60 hover:text-white font-medium text-lg transition-colors tracking-wide">Listening</Link>
                        <Link href="/vocabulary" className="text-white/60 hover:text-white font-medium text-lg transition-colors tracking-wide">Vocabulary</Link>
                        <Link href="/reading/verbal" className="text-white/60 hover:text-white font-medium text-lg transition-colors tracking-wide">Verbal</Link>
                    </div>
                    <button className="px-7 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-full text-white font-medium transition-all shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5">
                        Log in
                    </button>
                </nav>

                <main className="relative z-10 max-w-[1800px] w-full px-8 py-20">
                    {/* Header Section - Title Left, Glasses Right */}
                    <div className="flex items-start justify-between mb-32">
                        {/* Left: Title */}
                        <div className="max-w-4xl whitespace-nowrap">
                            <h1 className="text-7xl font-black text-[#1e3a8a] leading-[0.95] tracking-tight mb-4">
                                Reading의 4가지 핵심 전략
                            </h1>
                            <p className="text-2xl text-[#1e3a8a]/80 font-medium tracking-tight mt-6">
                                4가지 단계를 완료하고 완벽한 Reading 레벨에 등극하세요.
                            </p>
                        </div>

                        {/* Right: 3D Spiral Spring Illustration - Enlarged */}
                        <div className="relative">
                            <ReadingCoverSpring />
                        </div>
                    </div>

                    {/* 4 Cards - Horizontal Layout with Very Narrow Gaps */}
                    <div className="grid grid-cols-4 gap-3">
                        {/* Card 1 */}
                        <Link href="#part5" className="relative bg-white rounded-t-[40px] rounded-b-xl p-8 pt-80 pb-40 min-h-[700px] shadow-2xl border border-slate-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block">
                            {/* Giant Watermark Number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[240px] font-bold bg-gradient-to-r from-slate-50 to-blue-200 bg-clip-text text-transparent leading-none select-none pointer-events-none">
                                01
                            </div>

                            {/* Bottom Left Gradient Orb */}
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10">

                                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                                    Part 5:<br />
                                    Incomplete Sentences
                                </h3>

                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link href="#part6" className="relative bg-white rounded-t-[40px] rounded-b-xl p-8 pt-80 pb-40 min-h-[700px] shadow-2xl border border-slate-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block">
                            {/* Giant Watermark Number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[240px] font-bold bg-gradient-to-r from-slate-50 to-blue-200 bg-clip-text text-transparent leading-none select-none pointer-events-none">
                                02
                            </div>

                            {/* Bottom Left Gradient Orb */}
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10">

                                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                                    Part 6:<br />
                                    Text Completion
                                </h3>

                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link href="#part7" className="relative bg-white rounded-t-[40px] rounded-b-xl p-8 pt-80 pb-40 min-h-[700px] shadow-2xl border border-slate-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block">
                            {/* Giant Watermark Number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[240px] font-bold bg-gradient-to-r from-slate-50 to-blue-200 bg-clip-text text-transparent leading-none select-none pointer-events-none">
                                03
                            </div>

                            {/* Bottom Left Gradient Orb */}
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10">

                                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                                    Part 7:<br />
                                    Reading Comprehension
                                </h3>

                            </div>
                        </Link>

                        {/* Card 4 */}
                        <Link href="#simulation" className="relative bg-white rounded-t-[40px] rounded-b-xl p-8 pt-80 pb-40 min-h-[700px] shadow-2xl border border-slate-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block">
                            {/* Giant Watermark Number */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[240px] font-bold bg-gradient-to-r from-slate-50 to-blue-200 bg-clip-text text-transparent leading-none select-none pointer-events-none">
                                04
                            </div>

                            {/* Bottom Left Gradient Orb */}
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10">

                                <h3 className="text-3xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                                    Part 5+6+7:<br />
                                    Simulation Test
                                </h3>

                            </div>
                        </Link>
                    </div>
                </main>
            </section>

            {/* 2. Part 5 Section (Social Card Redesign) */}
            <section id="part5" className="w-full relative min-h-screen flex bg-[#F3F4F6] border-t border-slate-200">

                {/* Left Sidebar - Adapted for Part 5 */}
                <div className="hidden xl:flex flex-col w-[360px] shrink-0 bg-gradient-to-b from-[#020617] to-[#1e3a8a] sticky top-0 h-screen z-30 py-12 px-11 justify-between shadow-[10px_0_30px_rgba(30,58,138,0.3)] border-r border-white/10 rounded-r-[50px]">

                    {/* Background Pattern for Sidebar */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.15),_transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.2),_transparent_50%)]" />
                    </div>

                    {/* Top Content */}
                    <div className="relative z-10">
                        {/* Circle Indicator - PART 05 */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-2xl">
                            <div className="text-center">
                                <span className="text-[#1e3a8a] text-[10px] font-bold tracking-[0.2em] block mb-0.5">PART</span>
                                <span className="text-[#1e3a8a] text-4xl font-black tracking-tight leading-none">05</span>
                            </div>
                        </div>

                        {/* Title in Sidebar */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                                Selection<br />Strategy
                            </h3>
                            <div className="w-8 h-1 bg-blue-400 rounded-full" />
                        </div>

                        {/* Steps Navigation */}
                        <div className="flex flex-col gap-4 w-full text-left">
                            {/* Part 5 (Active) */}
                            <a href="#part5" className="group relative w-[140%] h-24 rounded-l-3xl rounded-r-none overflow-hidden cursor-pointer transition-all duration-300 shadow-[-15px_15px_30px_rgba(0,0,0,0.2)]">
                                <div className="absolute inset-0 bg-[#F3F4F6] transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-600 text-[10px] font-bold tracking-widest mb-1">PART 05</span>
                                    <span className="text-[#1e3a8a] font-bold text-lg leading-tight">
                                        Incomplete Sentences
                                    </span>
                                </div>
                            </a>

                            {/* Part 6 */}
                            <a href="#part6" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 06</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Text Completion
                                    </span>
                                </div>
                            </a>

                            {/* Part 7 */}
                            <a href="#part7" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 07</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Reading Comprehension
                                    </span>
                                </div>
                            </a>

                            {/* Simulation Test */}
                            <a href="#simulation" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">Part 5+6+7</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Simulation Test
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>

                {/* Right Content Area - Existing Content Moved Here */}
                <div className="flex-1 min-w-0 p-8 lg:p-16 relative">
                    {/* Section Header */}
                    <div className="mb-12">
                        <div className="flex items-end gap-8">
                            <h2 className="text-7xl font-black text-[#1e3a8a] leading-[0.95] tracking-tight whitespace-nowrap">
                                Incomplete Sentences
                            </h2>
                            <div className="flex-1 border-b-4 border-dotted border-[#1e3a8a]/40 mb-5 ml-4 mr-2"></div>
                            <span className="text-[#1e3a8a]/80 font-medium text-2xl mb-2 whitespace-nowrap">Part 05 Strategy</span>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto mt-32">

                        {/* 1. Grammar Card (Domino Effect) */}
                        <div className="bg-white rounded-[32px] p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            {/* Card Visual (CSS Dominos) */}
                            <Link href="/reading/grammar" className="block group relative aspect-[3/4] bg-[#F8FAFC] rounded-[24px] overflow-hidden">
                                {/* Title Top-Left */}
                                <div className="absolute top-8 left-8 z-20">
                                    <h3 className="text-5xl font-black text-[#1e3a8a] leading-[0.9] tracking-tighter">
                                        Grammar<br />Logic
                                    </h3>
                                </div>
                                {/* Geometric Flow Pattern - Blue Themed */}
                                <div className="absolute inset-y-0 -right-8 w-96 pointer-events-none overflow-hidden">
                                    <svg className="absolute w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                                        <defs>
                                            {/* Blue Gradient 1 - Darker */}
                                            <linearGradient id="blueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.9" />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                                            </linearGradient>
                                            {/* Blue Gradient 2 - Medium */}
                                            <linearGradient id="blueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                                            </linearGradient>
                                            {/* Blue Gradient 3 - Light */}
                                            <linearGradient id="blueGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
                                                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.4" />
                                            </linearGradient>
                                            {/* Blue Gradient 4 - Lightest */}
                                            <linearGradient id="blueGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.3" />
                                            </linearGradient>
                                        </defs>

                                        {/* Shape 1 - Top Left */}
                                        <rect
                                            x="110"
                                            y="90"
                                            width="120"
                                            height="120"
                                            rx="24"
                                            fill="url(#blueGrad1)"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Shape 2 - Middle Step */}
                                        <rect
                                            x="190"
                                            y="170"
                                            width="140"
                                            height="140"
                                            rx="24"
                                            fill="url(#blueGrad2)"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Shape 3 - Lower Step */}
                                        <rect
                                            x="110"
                                            y="270"
                                            width="130"
                                            height="130"
                                            rx="24"
                                            fill="url(#blueGrad3)"
                                            className="drop-shadow-md"
                                        />

                                        {/* Shape 4 - Bottom Right */}
                                        <rect
                                            x="200"
                                            y="360"
                                            width="150"
                                            height="150"
                                            rx="24"
                                            fill="url(#blueGrad4)"
                                            className="drop-shadow-md"
                                        />

                                        {/* Arrow Symbol - Bottom Right */}
                                        <g transform="translate(260, 410)">
                                            <path
                                                d="M 0 8 L 12 8 M 12 8 L 8 4 M 12 8 L 8 12"
                                                stroke="#1e3a8a"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                opacity="0.7"
                                            />
                                        </g>

                                        {/* Decorative connecting lines */}
                                        <line x1="120" y1="100" x2="180" y2="160" stroke="#60a5fa" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
                                        <line x1="150" y1="280" x2="180" y2="340" stroke="#60a5fa" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
                                    </svg>
                                </div>


                                {/* Description Bottom-Left */}
                                <div className="absolute bottom-8 left-8 max-w-[80%] z-20">
                                    <p className="text-xl font-bold text-[#1e3a8a] leading-tight mb-2">
                                        Structural Analysis
                                    </p>
                                    <p className="text-base font-semibold text-[#1e3a8a]/70 leading-relaxed">
                                        문법의 구조적 원리를<br />
                                        체계적으로 학습합니다.
                                    </p>
                                </div>

                            </Link>
                        </div>

                        {/* 2. Vocabulary Card (Glass Spheres) */}
                        <div className="bg-white rounded-[32px] p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            {/* Card Visual */}
                            <Link href="/vocabulary" className="block group relative aspect-[3/4] bg-[#F8FAFC] rounded-[24px] overflow-hidden">
                                {/* Title Top-Left */}
                                <div className="absolute top-8 left-8 z-20">
                                    <h3 className="text-5xl font-black text-[#1e3a8a] leading-[0.9] tracking-tighter">
                                        Vocab<br />Mastery
                                    </h3>
                                </div>

                                {/* Circular Pattern - Blue Themed */}
                                <div className="absolute inset-y-0 -right-8 w-96 pointer-events-none overflow-hidden">
                                    <svg className="absolute w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                                        <defs>
                                            {/* Blue Gradient for Circle - Left to Right (bright on right) - Using blueGrad2 colors */}
                                            <linearGradient id="circleGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
                                                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.9" />
                                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
                                            </linearGradient>
                                            {/* Blue Gradient for Semi-circle (down) - Left to Right (bright on right) - Using blueGrad3 colors */}
                                            <linearGradient id="circleGrad2" x1="0%" y1="50%" x2="100%" y2="50%">
                                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
                                                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.5" />
                                            </linearGradient>
                                            {/* Blue Gradient for Semi-circle (up) - Right to Left (bright on left) - Using blueGrad4 colors reversed */}
                                            <linearGradient id="circleGrad3" x1="100%" y1="50%" x2="0%" y2="50%">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.8" />
                                            </linearGradient>
                                        </defs>

                                        {/* Large Circle - Center */}
                                        <circle
                                            cx="200"
                                            cy="250"
                                            r="70"
                                            fill="url(#circleGrad1)"
                                            className="drop-shadow-xl"
                                        />

                                        {/* Semi-circle directly below the main circle */}
                                        <path
                                            d="M 130 340 A 70 70 0 0 0 270 340 Z"
                                            fill="url(#circleGrad2)"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Semi-circle below - opposite direction */}
                                        <path
                                            d="M 130 500 A 70 70 0 0 1 270 500 Z"
                                            fill="url(#circleGrad3)"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Circle - Top Right Corner (clipped by card edge) */}
                                        <circle
                                            cx="350"
                                            cy="40"
                                            r="80"
                                            fill="url(#circleGrad1)"
                                            opacity="0.8"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Semi-circle below top right circle - downward */}
                                        <path
                                            d="M 280 140 A 70 70 0 0 0 420 140 Z"
                                            fill="url(#circleGrad2)"
                                            opacity="0.7"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Semi-circle below - upward */}
                                        <path
                                            d="M 280 300 A 70 70 0 0 1 420 300 Z"
                                            fill="url(#circleGrad3)"
                                            opacity="0.7"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Semi-circle - Top Right (edge) */}
                                        <path
                                            d="M 350 80 A 70 70 0 0 1 350 220 Z"
                                            fill="url(#circleGrad3)"
                                            opacity="0.8"
                                            className="drop-shadow-lg"
                                        />

                                        {/* Semi-circle - Bottom Right (edge) */}
                                        <path
                                            d="M 380 350 A 80 80 0 0 1 380 510 Z"
                                            fill="url(#circleGrad2)"
                                            opacity="0.7"
                                            className="drop-shadow-lg"
                                        />




                                    </svg>
                                </div>

                                {/* Description Bottom-Left */}
                                <div className="absolute bottom-8 left-8 max-w-[80%] z-20">
                                    <p className="text-xl font-bold text-[#1e3a8a] leading-tight mb-2">
                                        Contextual Memory
                                    </p>
                                    <p className="text-base font-semibold text-[#1e3a8a]/70 leading-relaxed">
                                        문제 풀이를 통해 단어를 단순히 암기가 아니라<br />
                                        맥락으로 기억하세요.
                                    </p>
                                </div>

                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            {/* 3. Part 6 Section */}
            <section id="part6" className="w-full relative min-h-screen flex bg-[#F3F4F6] border-t border-slate-200">

                {/* Left Sidebar - Adapted for Part 6 */}
                <div className="hidden xl:flex flex-col w-[360px] shrink-0 bg-gradient-to-b from-[#020617] to-[#1e3a8a] sticky top-0 h-screen z-30 py-12 px-11 justify-between shadow-[10px_0_30px_rgba(30,58,138,0.3)] border-r border-white/10 rounded-r-[50px]">

                    {/* Background Pattern for Sidebar */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.15),_transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.2),_transparent_50%)]" />
                    </div>

                    {/* Top Content */}
                    <div className="relative z-10">
                        {/* Circle Indicator - PART 06 */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-2xl">
                            <div className="text-center">
                                <span className="text-[#1e3a8a] text-[10px] font-bold tracking-[0.2em] block mb-0.5">PART</span>
                                <span className="text-[#1e3a8a] text-4xl font-black tracking-tight leading-none">06</span>
                            </div>
                        </div>

                        {/* Title in Sidebar */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                                Selection<br />Strategy
                            </h3>
                            <div className="w-8 h-1 bg-blue-400 rounded-full" />
                        </div>

                        {/* Steps Navigation */}
                        <div className="flex flex-col gap-4 w-full text-left">
                            {/* Part 5 */}
                            <a href="#part5" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 05</span>
                                    <span className="text-white font-bold text-sm leading-tight group-hover:text-blue-200 transition-colors">
                                        Incomplete Sentences
                                    </span>
                                </div>
                            </a>

                            {/* Part 6 (Active) */}
                            <a href="#part6" className="group relative w-[140%] h-24 rounded-l-3xl rounded-r-none overflow-hidden cursor-pointer transition-all duration-300 shadow-[-15px_15px_30px_rgba(0,0,0,0.2)]">
                                <div className="absolute inset-0 bg-[#F3F4F6] transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-600 text-[10px] font-bold tracking-widest mb-1">PART 06</span>
                                    <span className="text-[#1e3a8a] font-bold text-lg leading-tight">
                                        Text Completion
                                    </span>
                                </div>
                            </a>

                            {/* Part 7 */}
                            <a href="#part7" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 07</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Reading Comprehension
                                    </span>
                                </div>
                            </a>

                            {/* Simulation Test */}
                            <a href="#simulation" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">Part 5+6+7</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Simulation Test
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>

                {/* Right Content Area - Existing Content Wrapped */}
                <div className="flex-1 min-w-0 p-8 lg:p-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/20 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto relative z-10">
                        {/* Title */}
                        <div className="mb-8">
                            <div className="flex items-end gap-8">
                                <h2 className="text-7xl font-black text-[#1e3a8a] leading-[0.95] tracking-tight whitespace-nowrap">
                                    Text Completion
                                </h2>
                                <div className="flex-1 border-b-4 border-dotted border-[#1e3a8a]/40 mb-5 ml-4 mr-2"></div>
                                <span className="text-[#1e3a8a]/80 font-medium text-2xl mb-2 whitespace-nowrap">Part 06 Strategy</span>
                            </div>

                        </div>

                        {/* Cards Row */}
                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                            {/* Combined Card 1 & 2 - Context Flow + Sentence Fit (Side by Side) - Spans 2 columns */}
                            <div className="md:col-span-2 rounded-3xl shadow-2xl shadow-blue-900/20 overflow-hidden min-h-[400px] flex hover-card-lift group">
                                {/* Left Section - Context Flow (Dark Blue) */}
                                <Link href="https://text-completion-p.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] p-20 relative flex-1 rounded-r-3xl z-20 shadow-[10px_0_30px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.02] block">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                                            <span className="text-[#1e3a8a] text-2xl font-black">P</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">접속사/관계대명사</h3>
                                    </div>
                                    <p className="text-blue-100 text-base leading-relaxed">
                                        앞뒤 문장의 연결 고리를 찾아 적절한 접속사나 연결어를 선택하세요.
                                        문맥의 흐름을 파악하는 것이 핵심입니다.
                                    </p>
                                </Link>

                                {/* Right Section - Sentence Fit (White) */}
                                <Link href="https://text-completion-r.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-white p-20 relative flex-1 shadow-[inset_0_8px_20px_rgba(0,0,0,0.05)] block hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                                            <span className="text-white text-2xl font-black">R</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-blue-900">접속 부사</h3>
                                    </div>
                                    <p className="text-slate-600 text-base leading-relaxed relative z-10">
                                        전체 흐름에 가장 어울리는 문장을 고르는 신토익 유형의 핵심입니다.
                                        문장 삽입 위치를 정확히 파악하세요.
                                    </p>

                                    {/* 3D Water Droplets / Spheres - More Large Ones */}
                                    {/* Huge Sphere (Corner) */}
                                    <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-90"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -15px -15px 30px rgba(71,85,105,0.2), inset 15px 15px 30px rgba(255,255,255,1), 15px 25px 40px rgba(0,0,0,0.15)',
                                            animation: 'sphere-float 8s ease-in-out infinite'
                                        }} />

                                    {/* Large Sphere 2 (Left) */}
                                    <div className="absolute bottom-[-10px] right-32 w-32 h-32 rounded-full opacity-85"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -8px -8px 20px rgba(71,85,105,0.2), inset 8px 8px 20px rgba(255,255,255,1), 8px 15px 25px rgba(0,0,0,0.12)',
                                            animation: 'sphere-float 7s ease-in-out infinite 1s'
                                        }} />

                                    {/* Large Sphere 3 (Top) */}
                                    <div className="absolute bottom-36 -right-8 w-28 h-28 rounded-full opacity-85"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -7px -7px 18px rgba(71,85,105,0.2), inset 7px 7px 18px rgba(255,255,255,1), 7px 12px 20px rgba(0,0,0,0.12)',
                                            animation: 'sphere-float 9s ease-in-out infinite 0.5s'
                                        }} />

                                    {/* Medium Sphere 1 */}
                                    <div className="absolute bottom-24 right-16 w-16 h-16 rounded-full opacity-80"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -4px -4px 10px rgba(71,85,105,0.2), inset 4px 4px 10px rgba(255,255,255,1), 5px 10px 15px rgba(0,0,0,0.1)',
                                            animation: 'sphere-float 6s ease-in-out infinite 2s'
                                        }} />

                                    {/* Medium Sphere 2 */}
                                    <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full opacity-75"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -3px -3px 8px rgba(71,85,105,0.2), inset 3px 3px 8px rgba(255,255,255,1), 4px 8px 12px rgba(0,0,0,0.1)',
                                            animation: 'sphere-float 5s ease-in-out infinite 1.5s'
                                        }} />

                                    {/* Small Sphere (Floater) */}
                                    <div className="absolute bottom-44 right-24 w-10 h-10 rounded-full opacity-60"
                                        style={{
                                            background: 'radial-gradient(circle at 30% 30%, #f8fafc, #cbd5e1)',
                                            boxShadow: 'inset -2px -2px 5px rgba(71,85,105,0.2), inset 2px 2px 5px rgba(255,255,255,1), 2px 4px 8px rgba(0,0,0,0.1)',
                                            animation: 'sphere-float 4s ease-in-out infinite 3s'
                                        }} />
                                </Link>
                            </div>

                            {/* Card 3 - Light Gray Background */}
                            <Link href="/reading/verbal" className="bg-gradient-to-t from-blue-100 to-slate-100 rounded-3xl p-20 shadow-[inset_0_8px_20px_rgba(0,0,0,0.15)] relative overflow-hidden border border-slate-200 min-h-[400px] hover-card-lift group block">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110">
                                        <span className="text-blue-900 text-2xl font-black">V</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-blue-900">준동사</h3>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed">
                                    • 동사의 형태를 변형해 명사·형용사·부사로 활용하는 개념입니다.<br />
                                    • 본동사 역할은 못하지만 동사의 성질을 지닌 준동사의 특징을 파악하세요.
                                </p>
                            </Link>
                        </div>

                        {/* Five Steps Process with Dotted Lines */}
                        <div className="relative">
                            {/* Dotted connecting line with End Dots */}
                            <div className="absolute top-8 left-0 right-0 h-0.5 border-t-2 border-dotted border-[#1e3a8a]/40 hidden md:block" />

                            {/* Start Dot */}
                            <div className="absolute top-[29px] left-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />

                            {/* End Dot */}
                            <div className="absolute top-[29px] right-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
                                {/* Step 01 */}
                                <div className="relative">
                                    <div className="relative z-10 bg-[#F3F4F6] inline-block pr-4">
                                        <div className="text-6xl font-bold number-shimmer mb-5">
                                            01
                                        </div>
                                        {/* Right Dot */}
                                        <div className="absolute top-[29px] right-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">지문 유형 파악</h4>
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        이메일, 공지문, 기사 등 지문의 종류를 먼저 확인합니다.
                                    </p>
                                </div>

                                {/* Step 02 */}
                                <div className="relative">
                                    {/* Vertical dotted line connecting from previous step */}
                                    <div className="absolute -left-4 top-20 -bottom-8 w-0.5 border-l-2 border-dotted border-blue-300 hidden md:block" />

                                    <div className="relative z-10 bg-[#F3F4F6] inline-block px-4">
                                        <div className="text-6xl font-bold number-shimmer mb-5">
                                            02
                                        </div>
                                        {/* Left & Right Dots */}
                                        <div className="absolute top-[29px] left-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                        <div className="absolute top-[29px] right-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">빈칸 전후 분석</h4>
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        빈칸 앞뒤 문장을 읽고 논리적 연결고리를 찾습니다.
                                    </p>
                                </div>

                                {/* Step 03 */}
                                <div className="relative">
                                    {/* Vertical dotted line connecting from previous step */}
                                    <div className="absolute -left-4 top-20 -bottom-8 w-0.5 border-l-2 border-dotted border-blue-300 hidden md:block" />

                                    <div className="relative z-10 bg-[#F3F4F6] inline-block px-4">
                                        <div className="text-6xl font-bold number-shimmer mb-5">
                                            03
                                        </div>
                                        {/* Left & Right Dots */}
                                        <div className="absolute top-[29px] left-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                        <div className="absolute top-[29px] right-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">품사 및 시제 확인</h4>
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        필요한 품사와 시제를 정확히 판단합니다.
                                    </p>
                                </div>

                                {/* Step 04 */}
                                <div className="relative">
                                    {/* Vertical dotted line connecting from previous step */}
                                    <div className="absolute -left-4 top-20 -bottom-8 w-0.5 border-l-2 border-dotted border-blue-300 hidden md:block" />

                                    <div className="relative z-10 bg-[#F3F4F6] inline-block px-4">
                                        <div className="text-6xl font-bold number-shimmer mb-5">
                                            04
                                        </div>
                                        {/* Left & Right Dots */}
                                        <div className="absolute top-[29px] left-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                        <div className="absolute top-[29px] right-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">선택지 소거</h4>
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        명백히 틀린 보기를 먼저 제거하여 정답률을 높입니다.
                                    </p>
                                </div>

                                {/* Step 05 */}
                                <div className="relative">
                                    {/* Vertical dotted line connecting from previous step */}
                                    <div className="absolute -left-4 top-20 -bottom-8 w-0.5 border-l-2 border-dotted border-blue-300 hidden md:block" />

                                    <div className="relative z-10 bg-[#F3F4F6] inline-block pl-4">
                                        <div className="text-6xl font-bold number-shimmer mb-5">
                                            05
                                        </div>
                                        {/* Left Dot */}
                                        <div className="absolute top-[29px] left-0 w-2 h-2 bg-[#1e3a8a] rounded-full hidden md:block" />
                                    </div>
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">전체 흐름 재확인</h4>
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        선택한 답이 전체 문맥에 자연스러운지 검토합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. Part 7 Section - Full Bleed Sidebar Layout - Condensed Scale */}
            <section id="part7" className="w-full relative min-h-screen flex bg-[#F3F4F6] overflow-hidden">

                {/* Left Full-Height Sidebar - Reduced Width */}
                <div className="hidden xl:flex flex-col w-[360px] shrink-0 bg-gradient-to-b from-[#020617] to-[#1e3a8a] sticky top-0 h-screen z-30 py-12 px-11 justify-between shadow-[10px_0_30px_rgba(30,58,138,0.3)] border-r border-white/10 rounded-r-[50px]">

                    {/* Background Pattern for Sidebar */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.15),_transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.2),_transparent_50%)]" />
                    </div>

                    {/* Top Content */}
                    <div className="relative z-10">
                        {/* Circle Indicator - Smaller */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-2xl">
                            <div className="text-center">
                                <span className="text-[#1e3a8a] text-[10px] font-bold tracking-[0.2em] block mb-0.5">PART</span>
                                <span className="text-[#1e3a8a] text-4xl font-black tracking-tight leading-none">07</span>
                            </div>
                        </div>

                        {/* Title in Sidebar - Smaller */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                                Selection<br />Strategy
                            </h3>
                            <div className="w-8 h-1 bg-blue-400 rounded-full" />
                        </div>

                        {/* Steps Navigation - Smaller Cards */}
                        <div className="flex flex-col gap-4 w-full text-left">
                            {/* Part 5 */}
                            <a href="#part5" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 05</span>
                                    <span className="text-white font-bold text-sm leading-tight group-hover:text-blue-200 transition-colors">
                                        Incomplete Sentences
                                    </span>
                                </div>
                            </a>

                            {/* Part 6 */}
                            <a href="#part6" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 06</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Text Completion
                                    </span>
                                </div>
                            </a>

                            {/* Part 7 (Active) */}
                            <a href="#part7" className="group relative w-[140%] h-24 rounded-l-3xl rounded-r-none overflow-hidden cursor-pointer transition-all duration-300 shadow-[-15px_15px_30px_rgba(0,0,0,0.2)]">
                                <div className="absolute inset-0 bg-[#F3F4F6] transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-600 text-[10px] font-bold tracking-widest mb-1">PART 07</span>
                                    <span className="text-[#1e3a8a] font-bold text-lg leading-tight">
                                        Reading Comprehension
                                    </span>
                                </div>
                            </a>

                            {/* Simulation Test */}
                            <a href="#simulation" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">Part 5+6+7</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Simulation Test
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>

                {/* Right Content Area - Condensed */}
                <div className="flex-1 min-w-0 p-8 lg:p-16 relative">
                    <div className="max-w-[1400px] mx-auto">

                        {/* Header Area - Reduced Bottom Margin & Font Size */}
                        <div className="mb-12 flex flex-col md:flex-row md:items-end gap-6 border-b border-slate-200/60 pb-6">
                            <h2 className="text-7xl font-black text-[#1e3a8a] leading-[0.9] tracking-tight shrink-0">
                                Reading Comprehension
                            </h2>
                            <div className="flex-1 flex items-center mb-3 gap-6">
                                <div className="flex-1 border-b-4 border-dotted border-[#1e3a8a]/40" />
                                <span className="text-[#1e3a8a]/80 font-medium text-2xl mb-2 whitespace-nowrap">Part 07 Strategy</span>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row items-start gap-12">
                            {/* Left Column: Numbers */}
                            <div className="xl:w-7/12 w-full pt-2">
                                <div className="flex flex-col gap-10">
                                    <div id="rc-strategy-1" className="relative min-h-[180px] scroll-mt-24 group">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="text-[60px] font-black bg-gradient-to-r from-[#1e3a8a] to-blue-400 bg-clip-text text-transparent leading-none transition-transform duration-500 group-hover:scale-110 origin-top-left opacity-90">01</div>
                                                <div className="w-px flex-1 border-l-4 border-dotted border-[#1e3a8a] my-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="pt-3">
                                                <a href="#part5" className="text-4xl font-bold text-[#1e3a8a] block mb-4 hover:text-blue-600 transition-colors">단일지문</a>
                                                <div className="flex flex-col gap-4 text-slate-700 font-medium text-base leading-relaxed">
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">이메일/편지</span>
                                                        가장 빈번하게 출제됩니다. <span className="text-blue-600 font-bold">발신자, 수신자, 날짜, 제목(Re:)</span>을 먼저 확인하는 것이 필수입니다.
                                                    </div>
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">공고/안내문</span>
                                                        사내 규정 변경, 행사 안내, 시설 수리 등 정보를 전달합니다.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="rc-strategy-2" className="relative min-h-[180px] scroll-mt-24 group">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="text-[60px] font-black bg-gradient-to-r from-[#1e3a8a] to-blue-400 bg-clip-text text-transparent leading-none transition-transform duration-500 group-hover:scale-110 origin-top-left opacity-90">02</div>
                                                <div className="w-px flex-1 border-l-4 border-dotted border-[#1e3a8a] my-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="pt-3">
                                                <a href="#part6" className="text-4xl font-bold text-[#1e3a8a] block mb-4 hover:text-blue-600 transition-colors">이중지문</a>
                                                <div className="flex flex-col gap-4 text-slate-700 font-medium text-base leading-relaxed">
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">이메일 + 이메일</span>
                                                        요청과 그에 대한 답변
                                                    </div>
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">광고 + 이메일</span>
                                                        제품/서비스 광고를 보고 문의하거나 주문하는 내용
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="rc-strategy-3" className="relative min-h-[180px] scroll-mt-24 group">
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="text-[60px] font-black bg-gradient-to-r from-[#1e3a8a] to-blue-400 bg-clip-text text-transparent leading-none transition-transform duration-500 group-hover:scale-110 origin-top-left opacity-90">03</div>
                                            </div>
                                            <div className="pt-3">
                                                <div className="text-4xl font-bold text-[#1e3a8a] block mb-4">삼중지문</div>
                                                <div className="flex flex-col gap-4 text-slate-700 font-medium text-base leading-relaxed">
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">공고 + 이메일 + 일정표</span>
                                                        채용 공고를 보고, 지원자가 이메일을 보내고, 면접 일정을 조율하는 흐름
                                                    </div>
                                                    <div className="">
                                                        <span className="text-blue-900 font-bold text-lg block mb-1">광고 + 주문서 + 이메일</span>
                                                        제품 광고를 보고, 물건을 주문했는데, 배송 문제로 문의하는 흐름
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Sticky Box - Further Condensed */}
                            <div className="xl:w-5/12 hidden xl:flex flex-col items-end gap-6 sticky top-12 h-fit">
                                <div
                                    className="w-[95%] aspect-square bg-white rounded-[40px] relative overflow-hidden flex flex-col items-start justify-center text-left p-10 transition-transform duration-500 hover:scale-[1.02]"
                                    style={{ boxShadow: "inset 0 0 30px rgba(30, 58, 138, 0.08), 0 30px 60px -15px rgba(30, 58, 138, 0.15)" }}
                                >


                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                문제 먼저 읽기
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed font-medium text-lg">
                                                문제를 통해 <span className="text-blue-700 font-bold px-1 bg-blue-50 rounded">'누구'와 '어떤 정보'</span>를<br />
                                                찾아야 하는지 미리 타겟팅하세요.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 3D Floating Crystal Objects */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px]">
                                        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
                                            {/* (SVG Contents kept similar but optimized for square container) */}
                                            <defs>

                                                {/* Left Pill Gradient - Brighter (Dark top -> Bright bottom) */}
                                                <linearGradient id="pillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#1d4ed8" /> {/* blue-700 */}
                                                    <stop offset="100%" stopColor="#60a5fa" /> {/* blue-400 */}
                                                </linearGradient>

                                                {/* Middle Pill Gradient - Brighter */}
                                                <linearGradient id="pillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#bfdbfe" /> {/* blue-200 */}
                                                    <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
                                                </linearGradient>

                                                {/* Right Pill Gradient - Brighter (Dark top -> Bright bottom) */}
                                                <linearGradient id="pillGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="#1e40af" /> {/* blue-800 (Darker) */}
                                                    <stop offset="100%" stopColor="#93c5fd" /> {/* blue-300 (Brighter) */}
                                                </linearGradient>

                                                {/* Re-added Glow Definitions - Bright Blue Theme (Darker Center to Lighter Edge) */}
                                                <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" /> {/* Medium Royal Blue Center */}
                                                    <stop offset="60%" stopColor="#60a5fa" /> {/* Light Blue */}
                                                    <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.9" /> {/* Pale Blue Edge */}
                                                </radialGradient>
                                                <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
                                                    <feGaussianBlur stdDeviation="20" result="blur" />
                                                </filter>
                                            </defs>

                                            {/* Background Orbs - Increased Opacity */}
                                            <circle cx="450" cy="50" r="180" fill="url(#orbGlow)" opacity="0.6" filter="url(#blurGlow)" />
                                            <circle cx="250" cy="450" r="180" fill="url(#orbGlow)" opacity="0.6" filter="url(#blurGlow)" />

                                            {/* Group for transformation/positioning - Centered and Scaled to fit */}
                                            <g>
                                                {/* Left Pill - Animated Rising Graph */}
                                                {/* 1. Track (Background) */}
                                                <rect
                                                    x="75" y="50" width="100" height="320" rx="50"
                                                    fill="#dbeafe"
                                                    opacity="0.3"
                                                />
                                                {/* 2. Rising Bar (Foreground) */}
                                                <rect
                                                    x="75" width="100" rx="50"
                                                    fill="url(#pillGrad1)"
                                                    opacity="0.9"
                                                >
                                                    <animate attributeName="height" values="100;320;100" dur="4.7s" begin="-0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                    <animate attributeName="y" values="270;50;270" dur="4.7s" begin="-0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                </rect>

                                                {/* Middle Pill - Animated Rising Graph */}
                                                {/* 1. Track */}
                                                <rect
                                                    x="200" y="140" width="100" height="320" rx="50"
                                                    fill="#dbeafe"
                                                    opacity="0.3"
                                                />
                                                {/* 2. Rising Bar */}
                                                <rect
                                                    x="200" width="100" rx="50"
                                                    fill="url(#pillGrad2)"
                                                    opacity="0.9"
                                                >
                                                    <animate attributeName="height" values="100;320;100" dur="3.2s" begin="-1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                    <animate attributeName="y" values="360;140;360" dur="3.2s" begin="-1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                </rect>

                                                {/* Right Pill - Animated Rising Graph */}
                                                {/* 1. Track */}
                                                <rect
                                                    x="325" y="50" width="100" height="320" rx="50"
                                                    fill="#dbeafe"
                                                    opacity="0.3"
                                                />
                                                {/* 2. Rising Bar */}
                                                <rect
                                                    x="325" width="100" rx="50"
                                                    fill="url(#pillGrad3)"
                                                    opacity="0.9"
                                                >
                                                    <animate attributeName="height" values="100;320;100" dur="5.5s" begin="-2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                    <animate attributeName="y" values="270;50;270" dur="5.5s" begin="-2.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                                </rect>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                {/* Blue Horizontal Card */}
                                {/* Blue Horizontal Card - Ratio Restored */}
                                <div className="w-[135%] bg-gradient-to-r from-[#172554] to-[#1e40af] rounded-l-[32px] rounded-r-none shadow-xl py-20 px-10 flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden -mr-[40%]">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <div className="flex items-center gap-5 relative z-10">
                                        {/* White Circle Badge */}
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-lg px-1">
                                            <span className="text-[#1e3a8a] text-[9px] font-black leading-none tracking-tighter whitespace-nowrap text-center">Part 5+6+7</span>
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">핵심 요약 정리</h3>
                                            <p className="text-blue-200 font-medium">Part 7 필수 전략 모음집</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Simulation Test Section */}
            <section id="simulation" className="w-full relative min-h-screen flex bg-[#F3F4F6] border-t border-slate-200">

                {/* Left Sidebar - Simulation Test */}
                <div className="hidden xl:flex flex-col w-[360px] shrink-0 bg-gradient-to-b from-[#020617] to-[#1e3a8a] sticky top-0 h-screen z-30 py-12 px-11 justify-between shadow-[10px_0_30px_rgba(30,58,138,0.3)] border-r border-white/10 rounded-r-[50px]">

                    {/* Background Pattern for Sidebar */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.15),_transparent_50%)]" />
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.2),_transparent_50%)]" />
                    </div>

                    {/* Top Content */}
                    <div className="relative z-10">
                        {/* Circle Indicator - Simulation */}
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-2xl">
                            <div className="text-center">
                                <span className="text-[#1e3a8a] text-xs font-black tracking-widest block whitespace-nowrap">Part 5+6+7</span>
                            </div>
                        </div>

                        {/* Title in Sidebar */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white leading-tight mb-2">
                                Simulation<br />Test
                            </h3>
                            <div className="w-8 h-1 bg-blue-400 rounded-full" />
                        </div>

                        {/* Steps Navigation */}
                        <div className="flex flex-col gap-4 w-full text-left">
                            {/* Part 5 */}
                            <a href="#part5" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 05</span>
                                    <span className="text-white font-bold text-sm leading-tight group-hover:text-blue-200 transition-colors">
                                        Incomplete Sentences
                                    </span>
                                </div>
                            </a>

                            {/* Part 6 */}
                            <a href="#part6" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 06</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Text Completion
                                    </span>
                                </div>
                            </a>

                            {/* Part 7 */}
                            <a href="#part7" className="group relative w-full h-24 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="absolute inset-0 bg-[#0f172a]/40 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-200 text-[10px] font-bold tracking-widest mb-1">PART 07</span>
                                    <span className="text-white font-bold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                                        Reading Comprehension
                                    </span>
                                </div>
                            </a>

                            {/* Simulation Test (Active) */}
                            <a href="#simulation" className="group relative w-[140%] h-24 rounded-l-3xl rounded-r-none overflow-hidden cursor-pointer transition-all duration-300 shadow-[-15px_15px_30px_rgba(0,0,0,0.2)]">
                                <div className="absolute inset-0 bg-[#F3F4F6] transition-all duration-300" />
                                <div className="relative h-full flex flex-col justify-center px-6">
                                    <span className="text-blue-600 text-[10px] font-bold tracking-widest mb-1">Part 5+6+7</span>
                                    <span className="text-[#1e3a8a] font-bold text-lg leading-tight">
                                        Simulation Test
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>


                </div>

                {/* Right Content Area */}
                <div className="flex-1 min-w-0 p-8 lg:p-12 relative">
                    <div className="max-w-[1400px] mx-auto">
                        {/* Header Section */}
                        <div className="mb-12">
                            <div className="flex items-end gap-8">
                                <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#1e3a8a] leading-[0.95] tracking-tight whitespace-normal 2xl:whitespace-nowrap">
                                    Simulation Test
                                </h2>
                                <div className="flex-1 border-b-4 border-dotted border-[#1e3a8a]/40 mb-5 ml-4 mr-2"></div>
                                <span className="text-[#1e3a8a]/80 font-medium text-2xl mb-2 whitespace-nowrap">Part 5+6+7</span>
                            </div>
                        </div>

                        {/* 3 Process Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                            {/* Card 1: Part 5 */}
                            <div className="flex flex-col gap-6">
                                <div className="bg-white rounded-[32px] p-8 pb-10 shadow-xl border border-blue-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col min-h-[600px]">
                                    {/* Header */}
                                    <div className="relative z-10 mb-12">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                            <h3 className="text-3xl font-bold text-[#1e3a8a]">Part 5</h3>
                                        </div>
                                        <p className="text-blue-400 font-medium pl-11 mb-6">Incomplete Sentences</p>

                                        {/* Custom Divider */}
                                        {/* Animated Divider */}
                                        <div className="px-3 mb-2">
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full relative overflow-hidden">
                                                <div className="absolute top-0 left-0 h-full w-2/5 bg-[#1e3a8a] rounded-full animate-slide-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Background (3x3 Grid of Circles) */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className="absolute inset-0 flex flex-col justify-between py-10">
                                            {/* Top Row */}
                                            <div className="flex justify-between items-center -mx-10">
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                            </div>
                                            {/* Middle Row */}
                                            <div className="flex justify-between items-center -mx-10">
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                            </div>
                                            {/* Bottom Row */}
                                            <div className="flex justify-between items-center -mx-10">
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                                <div className="w-36 h-36 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom List */}
                                    <div className="mt-auto relative z-10">
                                        <div className="bg-blue-50/50 rounded-2xl p-6 space-y-4">
                                            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                                                <span className="text-slate-600 font-medium">Grammar Logic</span>
                                                <span className="text-[#1e3a8a] font-bold">18 min</span>
                                            </div>
                                            <div className="flex items-center justify-between pt-1">
                                                <span className="text-slate-600 font-medium">Vocab Master</span>
                                                <span className="text-[#1e3a8a] font-bold">54 min</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* Arrow Button Step 1 */}
                                <div className="w-full h-28 relative shadow-xl group cursor-pointer transition-transform hover:scale-[1.02]"
                                    style={{ clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)' }}>
                                    {/* Arrow-shaped Color Stages */}
                                    <div className="absolute inset-0 bg-[#1d4ed8]" />
                                    <div className="absolute inset-0 bg-[#3b82f6]" style={{ clipPath: 'polygon(0% 0%, 75% 0%, 82% 50%, 75% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 bg-[#60a5fa]" style={{ clipPath: 'polygon(0% 0%, 50% 0%, 57% 50%, 50% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 bg-[#93c5fd]" style={{ clipPath: 'polygon(0% 0%, 25% 0%, 32% 50%, 25% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 flex items-center justify-between px-8 pr-12">
                                        <span className="text-white font-black text-3xl drop-shadow-lg tracking-wider">Step 1</span>
                                        <div className="bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full pl-5 pr-3 py-2 flex items-center gap-3 group-hover:bg-white/30 transition-colors">
                                            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Start</span>
                                            <ArrowRight className="w-6 h-6 text-white" strokeWidth={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Part 6 */}
                            <div className="flex flex-col gap-6">
                                <Link href="https://simulation-test-part-6-c3qo.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="bg-white rounded-[32px] p-8 pb-10 shadow-xl border border-blue-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col min-h-[600px]">
                                        {/* Header */}
                                        <div className="relative z-10 mb-12">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                                <h3 className="text-3xl font-bold text-[#1e3a8a]">Part 6</h3>
                                            </div>
                                            <p className="text-blue-400 font-medium pl-11 mb-6">Text Completion</p>

                                            {/* Custom Divider */}
                                            {/* Animated Divider */}
                                            <div className="px-3 mb-2">
                                                <div className="h-1.5 w-full bg-slate-100 rounded-full relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 h-full w-2/5 bg-[#1e3a8a] rounded-full animate-slide-bar"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual Background (Two Large Circles) */}
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                            {/* Top Right Circle */}
                                            <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-gradient-to-bl from-blue-50 to-blue-200 rounded-full opacity-80" />
                                            {/* Bottom Left Circle */}
                                            <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-gradient-to-tr from-blue-200 to-blue-50 rounded-full opacity-80" />
                                        </div>

                                        {/* Bottom List */}
                                        <div className="mt-auto relative z-10">
                                            <div className="bg-blue-50/50 rounded-2xl p-6 space-y-4">
                                                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                                                    <span className="text-slate-600 font-medium text-sm">접속사/관계대명사</span>
                                                    <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                                </div>
                                                <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                                                    <span className="text-slate-600 font-medium text-sm">접속 부사</span>
                                                    <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                                </div>
                                                <div className="flex items-center justify-between pt-1">
                                                    <span className="text-slate-600 font-medium text-sm">준동사</span>
                                                    <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </Link>
                                {/* Arrow Button Step 2 */}
                                <Link href="https://simulation-test-part-6-c3qo.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="w-full h-28 relative shadow-xl group cursor-pointer transition-transform hover:scale-[1.02]"
                                        style={{ clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)' }}>
                                        {/* Arrow-shaped Color Stages */}
                                        <div className="absolute inset-0 bg-[#1d4ed8]" />
                                        <div className="absolute inset-0 bg-[#3b82f6]" style={{ clipPath: 'polygon(0% 0%, 75% 0%, 82% 50%, 75% 100%, 0% 100%)' }} />
                                        <div className="absolute inset-0 bg-[#60a5fa]" style={{ clipPath: 'polygon(0% 0%, 50% 0%, 57% 50%, 50% 100%, 0% 100%)' }} />
                                        <div className="absolute inset-0 bg-[#93c5fd]" style={{ clipPath: 'polygon(0% 0%, 25% 0%, 32% 50%, 25% 100%, 0% 100%)' }} />
                                        <div className="absolute inset-0 flex items-center justify-between px-8 pr-12">
                                            <span className="text-white font-black text-3xl drop-shadow-lg tracking-wider">Step 2</span>
                                            <div className="bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full pl-5 pr-3 py-2 flex items-center gap-3 group-hover:bg-white/30 transition-colors">
                                                <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Start</span>
                                                <ArrowRight className="w-6 h-6 text-white" strokeWidth={5} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Card 3: Part 7 */}
                            <div className="flex flex-col gap-6">
                                <div className="bg-white rounded-[32px] p-8 pb-10 shadow-xl border border-blue-50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col min-h-[600px]">
                                    {/* Header */}
                                    <div className="relative z-10 mb-12">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                            <h3 className="text-3xl font-bold text-[#1e3a8a]">Part 7</h3>
                                        </div>
                                        <p className="text-blue-400 font-medium pl-11 mb-6">Reading Comprehension</p>


                                        {/* Animated Divider */}
                                        <div className="px-3 mb-2">
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full relative overflow-hidden">
                                                <div className="absolute top-0 left-0 h-full w-2/5 bg-[#1e3a8a] rounded-full animate-slide-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual Background (Circle Pattern) */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                                        {/* Circular Dots Layout */}
                                        <div className="relative w-[360px] h-[360px] animate-[spin_60s_linear_infinite]">
                                            {[...Array(8)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-32 h-32 bg-gradient-to-tl from-blue-50 to-blue-200 rounded-full opacity-80"
                                                    style={{
                                                        top: `calc(50% - 64px + ${Math.sin(i * Math.PI / 4) * 150}px)`,
                                                        left: `calc(50% - 64px + ${Math.cos(i * Math.PI / 4) * 150}px)`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom List */}
                                    <div className="mt-auto relative z-10">
                                        <div className="bg-blue-50/50 rounded-2xl p-6 space-y-4">
                                            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                                                <span className="text-slate-600 font-medium text-sm">단일지문</span>
                                                <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                            </div>
                                            <div className="flex items-center justify-between border-b border-blue-100 pb-3">
                                                <span className="text-slate-600 font-medium text-sm">이중지문</span>
                                                <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                            </div>
                                            <div className="flex items-center justify-between pt-1">
                                                <span className="text-slate-600 font-medium text-sm">삼중지문</span>
                                                <span className="text-[#1e3a8a] font-bold text-sm">2 min</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                {/* Arrow Button Step 3 */}
                                <div className="w-full h-28 relative shadow-xl group cursor-pointer transition-transform hover:scale-[1.02]"
                                    style={{ clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)' }}>
                                    {/* Arrow-shaped Color Stages */}
                                    <div className="absolute inset-0 bg-[#1d4ed8]" />
                                    <div className="absolute inset-0 bg-[#3b82f6]" style={{ clipPath: 'polygon(0% 0%, 75% 0%, 82% 50%, 75% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 bg-[#60a5fa]" style={{ clipPath: 'polygon(0% 0%, 50% 0%, 57% 50%, 50% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 bg-[#93c5fd]" style={{ clipPath: 'polygon(0% 0%, 25% 0%, 32% 50%, 25% 100%, 0% 100%)' }} />
                                    <div className="absolute inset-0 flex items-center justify-between px-8 pr-12">
                                        <span className="text-white font-black text-3xl drop-shadow-lg tracking-wider">Step 3</span>
                                        <div className="bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full pl-5 pr-3 py-2 flex items-center gap-3 group-hover:bg-white/30 transition-colors">
                                            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">Start</span>
                                            <ArrowRight className="w-6 h-6 text-white" strokeWidth={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Main Card - Fixed Position */}
            <div className="fixed left-8 bottom-8 z-50">
                <Link href="/">
                    <div className="group cursor-pointer">
                        <div className="min-w-[240px] px-5 py-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 group-hover:scale-105 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-slate-900 shadow-2xl">
                            <div className="flex items-center gap-3 mb-1">
                                <ArrowLeft className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-semibold text-white whitespace-nowrap">Main Menu</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed whitespace-nowrap ml-8">
                                Return to Homepage
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Shared Styles */}
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 7s ease-in-out infinite 2s;
                }
                .animate-pulse-slow {
                    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: .8; transform: scale(0.95); }
                }
                .text-glow {
                    text-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
                }
                .animate-slide-bar {
                    animation: slideBar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
                @keyframes slideBar {
                    0% { left: -50%; }
                    100% { left: 150%; }
                }
                .animate-slide-bar {
                    animation: slideBar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
                @keyframes slideBar {
                    0% { left: -50%; }
                    100% { left: 150%; }
                }
            `}</style>
        </div>
    );
}
