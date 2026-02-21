'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Star, Layers, Briefcase, Users, TrendingUp, DollarSign, Ship } from 'lucide-react';
import { phase1, phase2, phase3, phase4, phase5 } from '@/data/vocabulary';

export default function FlashcardSelectionPage() {
    const spaces = [
        { id: 1, unlocked: true, data: phase1, color: 'from-emerald-400 to-teal-500', icon: Briefcase },
        { id: 2, unlocked: true, data: phase2, color: 'from-blue-400 to-indigo-500', icon: Users },
        { id: 3, unlocked: true, data: phase3, color: 'from-purple-400 to-pink-500', icon: TrendingUp },
        { id: 4, unlocked: true, data: phase4, color: 'from-orange-400 to-red-500', icon: DollarSign },
        { id: 5, unlocked: true, data: phase5, color: 'from-cyan-400 to-blue-500', icon: Ship }
    ];

    return (
        <main className="min-h-screen bg-[#0A0A0F] text-white font-sans overflow-hidden select-none p-6 flex flex-col items-center">

            {/* Header */}
            <div className="w-full max-w-5xl flex items-center justify-between mb-12 mt-4">
                <Link href="/vocabulary#testing-review">
                    <Button variant="ghost" className="text-slate-400 hover:text-pink-400 border-2 border-slate-700 hover:border-pink-500 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Menu
                    </Button>
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Flashcard Selection</span>
                </div>
            </div>

            {/* Title Section */}
            <div className="text-center max-w-2xl mx-auto mb-16 animate-in slide-in-from-bottom-5 duration-500">
                <h1 className="text-4xl md:text-6xl font-black mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]">
                        Pick a Phase
                    </span>
                </h1>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Select a phase to start your flashcard session. <br />
                    Focus on specific categories for better retention.
                </p>
            </div>

            {/* Spaces Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 pb-20">
                {spaces.map((space) => {
                    // Define border and glow colors for each phase - solid, vibrant colors
                    const getBorderStyle = () => {
                        switch (space.id) {
                            case 1: return 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:border-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.8)]';
                            case 2: return 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:border-blue-400 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]';
                            case 3: return 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-400 hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]';
                            case 4: return 'border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-400 hover:shadow-[0_0_50px_rgba(249,115,22,0.8)]';
                            case 5: return 'border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]';
                            default: return 'border-slate-800';
                        }
                    };

                    return (
                        <div
                            key={space.id}
                            className={`group relative p-1 rounded-[30px] bg-gradient-to-b ${space.unlocked ? 'from-slate-800 to-slate-900' : 'from-slate-900 to-slate-950 opacity-60'} transition-all duration-300`}
                        >
                            {/* Card Content */}
                            <div className={`relative h-full bg-[#0F1016] rounded-[28px] p-8 flex flex-col border-2 transition-all ${getBorderStyle()}`}>

                                {/* Icon & Label */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-950/80 border-2 transition-all duration-300 group-hover:scale-110 ${space.id === 1 ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' :
                                        space.id === 2 ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' :
                                            space.id === 3 ? 'border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]' :
                                                space.id === 4 ? 'border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]' :
                                                    space.id === 5 ? 'border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]' :
                                                        'border-slate-700'
                                        }`}>
                                        <space.icon className={`w-7 h-7 ${space.id === 1 ? 'text-emerald-400' :
                                            space.id === 2 ? 'text-blue-400' :
                                                space.id === 3 ? 'text-purple-400' :
                                                    space.id === 4 ? 'text-orange-400' :
                                                        space.id === 5 ? 'text-cyan-400' :
                                                            'text-white'
                                            }`} />
                                    </div>
                                    <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border-2 transition-all ${space.id === 1 ? 'text-emerald-400 border-emerald-500 bg-emerald-500/10' :
                                        space.id === 2 ? 'text-blue-400 border-blue-500 bg-blue-500/10' :
                                            space.id === 3 ? 'text-purple-400 border-purple-500 bg-purple-500/10' :
                                                space.id === 4 ? 'text-orange-400 border-orange-500 bg-orange-500/10' :
                                                    space.id === 5 ? 'text-cyan-400 border-cyan-500 bg-cyan-500/10' :
                                                        'text-slate-500 border-slate-800 bg-slate-900'
                                        }`}>
                                        Phase 0{space.id}
                                    </span>
                                </div>

                                {/* Text Info */}
                                <div className="mt-auto">
                                    <h3 className={`text-2xl font-bold mb-2 transition-all text-transparent bg-clip-text ${space.id === 1 ? 'bg-gradient-to-r from-white to-emerald-500' :
                                            space.id === 2 ? 'bg-gradient-to-r from-white to-blue-500' :
                                                space.id === 3 ? 'bg-gradient-to-r from-white to-purple-500' :
                                                    space.id === 4 ? 'bg-gradient-to-r from-white to-orange-500' :
                                                        space.id === 5 ? 'bg-gradient-to-r from-white to-cyan-500' :
                                                            'text-white'
                                        }`}>
                                        <span className={`${space.id === 1 ? 'text-emerald-400' :
                                                space.id === 2 ? 'text-blue-400' :
                                                    space.id === 3 ? 'text-purple-400' :
                                                        space.id === 4 ? 'text-orange-400' :
                                                            space.id === 5 ? 'text-cyan-400' :
                                                                'text-slate-400'
                                            } text-xl mr-2`}>0{space.id}.</span>
                                        {space.data.title}
                                    </h3>

                                    {/* Keywords */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {(() => {
                                            const keywords = space.id === 1 ? ['#Recruitment', '#Interview', '#Resume', '#Career'] :
                                                space.id === 2 ? ['#Meeting', '#Office', '#Schedule', '#Teamwork'] :
                                                    space.id === 3 ? ['#Marketing', '#Customer', '#Service', '#Sales'] :
                                                        space.id === 4 ? ['#Finance', '#Budget', '#Investment', '#Economy'] :
                                                            space.id === 5 ? ['#Trade', '#Export', '#Logistics', '#Shipping'] :
                                                                [];

                                            const colorClass = space.id === 1 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                                                space.id === 2 ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' :
                                                    space.id === 3 ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' :
                                                        space.id === 4 ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' :
                                                            space.id === 5 ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' :
                                                                'bg-slate-500/10 border-slate-500/30 text-slate-400';

                                            return keywords.map((keyword, idx) => (
                                                <span key={idx} className={`px-2.5 py-1 rounded-lg border text-[10px] font-bold tracking-wider uppercase ${colorClass}`}>
                                                    {keyword}
                                                </span>
                                            ));
                                        })()}
                                    </div>

                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" /> {space.data.words.length} Words
                                        </span>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-8">
                                    <Link href={space.unlocked ? `/flashcards?phase=${space.id}` : '#'}>
                                        <Button
                                            className={`w-full h-12 rounded-xl font-bold text-base transition-all border-2 ${space.unlocked
                                                ? space.id === 1 ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]' :
                                                    space.id === 2 ? 'bg-blue-500/10 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]' :
                                                        space.id === 3 ? 'bg-purple-500/10 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]' :
                                                            space.id === 4 ? 'bg-orange-500/10 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]' :
                                                                space.id === 5 ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]' :
                                                                    'bg-slate-800 hover:bg-white hover:text-black text-white'
                                                : 'bg-slate-900 text-slate-600 cursor-not-allowed border-slate-800'
                                                }`}
                                            disabled={!space.unlocked}
                                        >
                                            {space.unlocked ? 'Start Flashcards' : 'Locked'}
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>

        </main>
    );
}
