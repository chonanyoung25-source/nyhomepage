'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ConjunctiveAdverbsPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1e293b]">
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/reading#part6" className="p-2 rounded-full hover:bg-slate-100 transition-colors group">
                            <ArrowLeft className="w-6 h-6 text-slate-500 group-hover:text-[#1e3a8a] transition-colors" />
                        </Link>
                        <h1 className="text-2xl font-black text-[#1e3a8a] tracking-tight">
                            접속 부사 (Conjunctive Adverb)
                        </h1>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight leading-tight">
                        Conjunctive Adverbs
                    </h2>
                </div>

                {/* Content Area - Emptied as requested */}
                <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl border border-slate-100 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                    <div className="text-slate-400 font-medium text-lg italic">
                        준비 중입니다.
                    </div>
                </div>
            </main>
        </div>
    );
}
