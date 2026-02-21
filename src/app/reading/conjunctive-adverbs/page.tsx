'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Layers } from 'lucide-react';

export default function ConjunctiveAdverbsPage() {
    const [activeTab, setActiveTab] = useState<'adverb1' | 'adverb2'>('adverb1');

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
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        문장과 문장을 연결하여 논리적 흐름을 만드는 접속 부사를 마스터하세요.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 flex gap-2">
                        <button
                            onClick={() => setActiveTab('adverb1')}
                            className={`px-8 py-3 rounded-xl text-lg font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'adverb1'
                                    ? 'bg-[#1e3a8a] text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            <BookOpen className="w-5 h-5" />
                            접속부사 1
                        </button>
                        <button
                            onClick={() => setActiveTab('adverb2')}
                            className={`px-8 py-3 rounded-xl text-lg font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === 'adverb2'
                                    ? 'bg-[#1e3a8a] text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                }`}
                        >
                            <Layers className="w-5 h-5" />
                            접속부사 2
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl border border-slate-100 min-h-[600px] flex items-center justify-center relative overflow-hidden group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                    </div>

                    {activeTab === 'adverb1' && (
                        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-left space-y-8">
                            {/* Definition Banner */}
                            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-[32px] p-8 mb-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <BookOpen className="w-6 h-6 text-blue-100" />
                                            <h3 className="text-3xl font-black text-white tracking-tight">접속부사 1</h3>
                                        </div>
                                        <p className="text-blue-100 font-medium">주요 접속부사 모음</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                                    <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'adverb2' && (
                        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-left space-y-8">
                            {/* Definition Banner */}
                            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-[32px] p-8 mb-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Layers className="w-6 h-6 text-indigo-100" />
                                            <h3 className="text-3xl font-black text-white tracking-tight">접속부사 2</h3>
                                        </div>
                                        <p className="text-indigo-100 font-medium">추가 접속부사 및 심화 학습</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center">
                                    <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
