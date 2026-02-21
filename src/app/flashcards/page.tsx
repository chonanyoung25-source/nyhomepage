'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { phase1, phase2, phase3, phase4, phase5, Word } from '@/data/vocabulary';
import {
    getFlashcardProgress,
    markWordAsKnown,
    markWordAsUnknown,
    getFlashcardStats,
    resetFlashcardProgress
} from '@/lib/flashcard-storage';
import { ArrowLeft, Check, X, RotateCcw, Shuffle, Layers, Volume2 } from 'lucide-react';
import Link from 'next/link';

// --- Types ---
type CardFace = 'front' | 'back';

import { Suspense } from 'react';

// --- Content Component ---
function FlashcardsContent() {
    const searchParams = useSearchParams();
    const phaseParam = searchParams.get('phase');

    // --- State ---
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardQueue, setCardQueue] = useState<Word[]>([]);
    const [stats, setStats] = useState({ known: 0, unknown: 0, total: 0 });
    const [showResults, setShowResults] = useState(false);
    const [currentPhase, setCurrentPhase] = useState<number | null>(null);

    // Animation refs for swipe effect
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

    // Get phase color theme
    const getPhaseColors = () => {
        switch (currentPhase) {
            case 1: return {
                primary: 'emerald',
                border: 'border-emerald-500',
                borderHover: 'hover:border-emerald-400',
                text: 'text-emerald-400',
                bg: 'from-emerald-950/30',
                shadow: 'shadow-emerald-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
                gradient: 'to-emerald-400',
                borderSub: 'border-emerald-500/20',
                bgLabel: 'bg-emerald-500/10'
            };
            case 2: return {
                primary: 'blue',
                border: 'border-blue-500',
                borderHover: 'hover:border-blue-400',
                text: 'text-blue-400',
                bg: 'from-blue-950/30',
                shadow: 'shadow-blue-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]',
                gradient: 'to-blue-400',
                borderSub: 'border-blue-500/20',
                bgLabel: 'bg-blue-500/10'
            };
            case 3: return {
                primary: 'purple',
                border: 'border-purple-500',
                borderHover: 'hover:border-purple-400',
                text: 'text-purple-400',
                bg: 'from-purple-950/30',
                shadow: 'shadow-purple-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
                gradient: 'to-purple-400',
                borderSub: 'border-purple-500/20',
                bgLabel: 'bg-purple-500/10'
            };
            case 4: return {
                primary: 'orange',
                border: 'border-orange-500',
                borderHover: 'hover:border-orange-400',
                text: 'text-orange-400',
                bg: 'from-orange-950/30',
                shadow: 'shadow-orange-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]',
                gradient: 'to-orange-400',
                borderSub: 'border-orange-500/20',
                bgLabel: 'bg-orange-500/10'
            };
            case 5: return {
                primary: 'cyan',
                border: 'border-cyan-500',
                borderHover: 'hover:border-cyan-400',
                text: 'text-cyan-400',
                bg: 'from-cyan-950/30',
                shadow: 'shadow-cyan-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]',
                gradient: 'to-cyan-400',
                borderSub: 'border-cyan-500/20',
                bgLabel: 'bg-cyan-500/10'
            };
            default: return {
                primary: 'pink',
                border: 'border-pink-500',
                borderHover: 'hover:border-pink-400',
                text: 'text-pink-400',
                bg: 'from-pink-950/30',
                shadow: 'shadow-pink-500/20',
                shadowHover: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]',
                gradient: 'to-pink-400',
                borderSub: 'border-pink-500/20',
                bgLabel: 'bg-pink-500/10'
            };
        }
    };

    const colors = getPhaseColors();

    // Initial Load
    useEffect(() => {
        const phaseId = phaseParam ? parseInt(phaseParam) : null;
        setCurrentPhase(phaseId);
        startSession(phaseId);
        updateStats();
    }, [phaseParam]);

    const updateStats = () => {
        const storedStats = getFlashcardStats();
        // Calc total based on actual phases, not just stored
        const totalWords = phase1.words.length + phase2.words.length + phase3.words.length + phase4.words.length + phase5.words.length;
        setStats({
            known: storedStats.known,
            unknown: storedStats.unknown,
            total: totalWords
        });
    };

    const startSession = (phaseId: number | null = null) => {
        // Collect words based on phase
        let pool = [...phase1.words, ...phase2.words, ...phase3.words, ...phase4.words, ...phase5.words];

        if (phaseId === 1) pool = phase1.words;
        else if (phaseId === 2) pool = phase2.words;
        else if (phaseId === 3) pool = phase3.words;
        else if (phaseId === 4) pool = phase4.words;
        else if (phaseId === 5) pool = phase5.words;

        // Simple Shuffle - show all words without limit
        const shuffled = [...pool].sort(() => 0.5 - Math.random());

        // Use all shuffled words (no batch limit)
        setCardQueue(shuffled);
        setCurrentIndex(0);
        setIsFlipped(false);
        setShowResults(false);
    };

    const currentCard = cardQueue[currentIndex];

    // --- Actions ---
    const handleFlip = () => setIsFlipped(!isFlipped);

    const handleKnown = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!currentCard) return;

        setSwipeDirection('right'); // Swipe Right for "Known"

        setTimeout(() => {
            markWordAsKnown(String(currentCard.id), currentCard.term);
            nextCard();
        }, 300);
    };

    const handleUnknown = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!currentCard) return;

        setSwipeDirection('left'); // Swipe Left for "Unknown"

        setTimeout(() => {
            markWordAsUnknown(String(currentCard.id), currentCard.term);
            nextCard();
        }, 300);
    };

    const nextCard = () => {
        setSwipeDirection(null);
        setIsFlipped(false);
        updateStats();

        if (currentIndex < cardQueue.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setShowResults(true);
        }
    };

    const speakWord = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!currentCard) return;

        const utterance = new SpeechSynthesisUtterance(currentCard.term);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    // --- Render Helpers ---
    const progressValue = ((currentIndex) / cardQueue.length) * 100;

    return (
        <main className="min-h-screen bg-[#0A0A0F] text-slate-200 font-sans overflow-hidden flex flex-col relative">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
            </div>

            {/* Header */}
            <header className="px-6 py-4 flex items-center justify-between z-20 shrink-0">
                <Link href="/flashcards/selection">
                    <Button variant="ghost" className="text-slate-400 hover:text-pink-400 border-2 border-slate-700 hover:border-pink-500 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Exit
                    </Button>
                </Link>
                <div className="flex flex-col items-end">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 font-black tracking-tighter flex items-center gap-2 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                        <Layers className="w-5 h-5 text-pink-400" /> FLASHCARDS
                    </h1>
                    <span className="text-[10px] uppercase font-mono text-slate-500">
                        {stats.known + stats.unknown} Reviewed / {stats.total} Total
                    </span>
                </div>
            </header>

            {/* --- FLASHCARD AREA --- */}
            {!showResults && currentCard && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                    {/* Progress Bar */}
                    <div className="w-full max-w-md mb-8 relative z-10">
                        <div className={`flex justify-between text-xs font-mono ${colors.text} mb-2`}>
                            <span>SESSION PROGRESS</span>
                            <span>{currentIndex + 1} / {cardQueue.length}</span>
                        </div>
                        <Progress value={progressValue} className="h-2 bg-slate-800 border border-slate-700 shadow-inner" indicatorClassName={`bg-gradient-to-r from-${colors.primary}-500 to-${colors.primary}-600 shadow-[0_0_10px_rgba(236,72,153,0.5)]`} />
                    </div>

                    {/* Card Container */}
                    <div className="relative w-full max-w-md aspect-[4/5] perspective-1000">
                        <div
                            className={`w-full h-full relative cursor-pointer transition-all duration-500 preserve-3d
                                ${isFlipped ? 'rotate-y-180' : ''}
                                ${swipeDirection === 'left' ? '-translate-x-full opacity-0 rotate-[-15deg]' : ''}
                                ${swipeDirection === 'right' ? 'translate-x-full opacity-0 rotate-[15deg]' : ''}
                            `}
                            onClick={handleFlip}
                        >
                            {/* Front Face */}
                            <div className={`absolute inset-0 backface-hidden bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${colors.border}/40 rounded-[32px] shadow-2xl ${colors.shadow} flex flex-col items-center justify-center p-8 text-center group ${colors.borderHover}/60 ${colors.shadowHover} transition-all`}>
                                <span className={`absolute top-6 left-6 ${colors.text} text-xs font-bold tracking-widest border-2 ${colors.border} ${colors.bgLabel} px-3 py-1 rounded-full uppercase`}>
                                    Front
                                </span>

                                <span className="text-sm font-serif italic text-slate-500 mb-4">{currentCard.partOfSpeech}</span>
                                <h2 className={`text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white ${colors.gradient} mb-8 group-hover:scale-105 transition-transform drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                                    <span className={`${colors.text}/60 text-3xl mr-2`}>#{String(currentCard.id).padStart(2, '0')}</span>
                                    {currentCard.term}
                                </h2>

                                <div className="absolute top-6 right-6">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={`text-slate-500 ${colors.text} rounded-full border border-slate-700 hover:${colors.border} transition-all`}
                                        onClick={speakWord}
                                    >
                                        <Volume2 className="w-6 h-6" />
                                    </Button>
                                </div>

                                <p className={`${colors.text}/60 text-sm mt-auto animate-pulse`}>Tap to flip</p>
                            </div>

                            {/* Back Face */}
                            <div className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br ${colors.bg} to-slate-950 border-2 ${colors.border}/60 rounded-[32px] shadow-2xl ${colors.shadow} flex flex-col items-center justify-center p-8 text-center ${colors.borderHover}/80 ${colors.shadowHover} transition-all`}>
                                <span className={`absolute top-6 left-6 ${colors.text} text-xs font-bold tracking-widest border-2 ${colors.border} ${colors.bgLabel} px-3 py-1 rounded-full uppercase`}>
                                    Meaning
                                </span>

                                <h3 className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white ${colors.gradient} mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                                    {currentCard.meaning}
                                </h3>

                                <div className={`bg-slate-900/50 p-4 rounded-xl w-full border-2 ${colors.borderSub} shadow-inner`}>
                                    <p className="text-slate-300 italic text-sm">"{currentCard.example}"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6 mt-10 relative z-10">
                        <Button
                            onClick={handleUnknown}
                            className="h-16 w-16 rounded-full bg-slate-900/80 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-110"
                        >
                            <X className="w-8 h-8" />
                        </Button>
                        <span className="text-xs font-mono text-pink-400 uppercase tracking-widest font-bold">
                            Know it?
                        </span>
                        <Button
                            onClick={handleKnown}
                            className="h-16 w-16 rounded-full bg-slate-900/80 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-110"
                        >
                            <Check className="w-8 h-8" />
                        </Button>
                    </div>
                </div>
            )}

            {/* --- RESULTS SCREEN --- */}
            {showResults && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 animate-in zoom-in-95 duration-500">
                    <div className="bg-slate-900 border border-slate-800 rounded-[40px] p-10 max-sm w-full text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />

                        <h2 className="text-3xl font-black text-white mb-2">SESSION DONE</h2>
                        <p className="text-slate-400 mb-8">Good job reviewing!</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Known</div>
                                <div className="text-3xl font-black text-emerald-400">{stats.known}</div>
                            </div>
                            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Unknown</div>
                                <div className="text-3xl font-black text-red-400">{stats.unknown}</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                onClick={() => startSession(phaseParam ? parseInt(phaseParam) : null)}
                                className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-lg"
                            >
                                <RotateCcw className="w-5 h-5 mr-2" /> Another Set
                            </Button>
                            <Link href="/flashcards/selection" className="block w-full">
                                <Button
                                    variant="outline"
                                    className="w-full h-14 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl"
                                >
                                    Back to Menu
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
                .preserve-3d { transform-style: preserve-3d; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .backface-hidden { backface-visibility: hidden; }
            `}</style>
        </main>
    );
}

export default function FlashcardsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
        }>
            <FlashcardsContent />
        </Suspense>
    );
}
