'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Target, AlertTriangle, CheckCircle2, BookOpen, Layers, Zap, Menu } from 'lucide-react';

export default function AdjectivesPage() {
    const [activeTab, setActiveTab] = useState("placement");

    const tabs = [
        { id: "placement", name: "형용사 명당 자리" },
        { id: "quantity", name: "수량 형용사" },
        { id: "tricky", name: "실수하기 쉬운 형용사" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-cyan-200 overflow-x-hidden">
            {/* Morphism Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">

                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-slate-200 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-cyan-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-cyan-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-cyan-500 text-white shadow-md'
                                        : 'text-slate-500 hover:text-cyan-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-cyan-600 hover:border-cyan-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Hero Header */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-100 rounded-2xl text-cyan-600 shadow-sm">
                            <Target className="w-6 h-6" />
                        </div>
                        <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">Grammar Logic 04</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                        Adjectives <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Mastery Guide</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-cyan-200 pl-6">
                        명사의 상태를 설명하거나 보완하는 형용사의 핵심 위치와 혼동하기 쉬운 수량 표현을 완벽하게 정리합니다.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">

                    {/* Section 1: 형용사 명당 자리 */}
                    {activeTab === "placement" && (
                        <section className="animate-fade-in-up">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-cyan-500">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-800">형용사 "명당" 자리</h2>
                            </div>

                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {/* Card 1: 명사 수식 */}
                                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-[60px] -mr-6 -mt-6 opacity-60 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3 relative z-10">
                                        <span className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm font-black border border-cyan-200">1</span>
                                        명사 앞 (수식)
                                    </h3>
                                    <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-5 mb-6 font-mono text-sm border border-slate-200 text-slate-600 shadow-inner">
                                        a/an/the + <span className="text-cyan-600 font-bold bg-cyan-50 px-1 rounded mx-1 border border-cyan-100">(Adj)</span> + N
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Example</p>
                                        <p className="text-slate-700 font-medium text-lg">
                                            a <span className="text-cyan-600 bg-cyan-50 px-1 rounded">detailed</span> report
                                        </p>
                                        <p className="text-slate-500 text-sm">(상세한 보고서)</p>
                                    </div>
                                </div>

                                {/* Card 2: 2형식 보어 */}
                                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-[60px] -mr-6 -mt-6 opacity-60 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3 relative z-10">
                                        <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-black border border-indigo-200">2</span>
                                        2형식 동사 뒤
                                    </h3>
                                    <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-5 mb-6 font-mono text-sm border border-slate-200 text-slate-600 shadow-inner">
                                        be/look + <span className="text-indigo-600 font-bold bg-indigo-50 px-1 rounded mx-1 border border-indigo-100">(Adj)</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Key Verbs</p>
                                            <p className="text-slate-600 text-sm leading-relaxed">be, remain, stay, become, look, seem</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Example</p>
                                            <p className="text-slate-700 font-medium">The procedure is <span className="text-indigo-600 font-bold">simple</span>.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: 5형식 보어 */}
                                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-[60px] -mr-6 -mt-6 opacity-60 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3 relative z-10">
                                        <span className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-black border border-pink-200">3</span>
                                        5형식 목적격 보어
                                    </h3>
                                    <div className="bg-slate-50/80 backdrop-blur-sm rounded-2xl p-5 mb-6 font-mono text-sm border border-slate-200 text-slate-600 shadow-inner">
                                        make/keep + Obj + <span className="text-pink-600 font-bold bg-pink-50 px-1 rounded mx-1 border border-pink-100">(Adj)</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Key Verbs</p>
                                            <p className="text-slate-600 text-sm leading-relaxed">make, keep, find, consider, leave</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Example</p>
                                            <p className="text-slate-700 font-medium">keep the room <span className="text-pink-600 font-bold">clean</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 2: 수량 형용사 */}
                    {activeTab === "quantity" && (
                        <section className="animate-fade-in-up">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-cyan-500">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-800">수량 형용사 (Quantity)</h2>
                            </div>

                            <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden mb-10">
                                <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    <div className="p-8">Category</div>
                                    <div className="p-8 text-center text-blue-600 bg-blue-50/30">Singular Countable<br />(단수 가산)</div>
                                    <div className="p-8 text-center text-indigo-600 bg-indigo-50/30">Plural Countable<br />(복수 가산)</div>
                                    <div className="p-8 text-center text-pink-600 bg-pink-50/30">Uncountable<br />(불가산)</div>
                                </div>

                                {/* Row 1 */}
                                <div className="grid grid-cols-4 border-b border-slate-100 group">
                                    <div className="p-8 font-bold text-slate-800 flex items-center bg-white group-hover:bg-slate-50/30 transition-colors">주요 단어</div>
                                    <div className="p-8 text-sm text-slate-600 flex flex-col gap-3 items-center justify-center bg-blue-50/10 group-hover:bg-blue-50/30 transition-colors border-r border-dashed border-slate-100">
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-blue-600">each</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-blue-600">every</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-blue-600">another</span>
                                    </div>
                                    <div className="p-8 text-sm text-slate-600 flex flex-wrap gap-2 items-center justify-center bg-indigo-50/10 group-hover:bg-indigo-50/30 transition-colors border-r border-dashed border-slate-100 content-center">
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-indigo-600">many</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-indigo-600">few</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-indigo-600">several</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-indigo-600">various</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-indigo-600">both</span>
                                    </div>
                                    <div className="p-8 text-sm text-slate-600 flex flex-col gap-3 items-center justify-center bg-pink-50/10 group-hover:bg-pink-50/30 transition-colors">
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-pink-600">much</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-pink-600">little</span>
                                        <span className="font-medium bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm text-pink-600">a great deal of</span>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-4 group">
                                    <div className="p-8 font-bold text-slate-800 flex items-center bg-white group-hover:bg-slate-50/30 transition-colors">공통 사용</div>
                                    <div className="p-8 bg-slate-100/30 flex items-center justify-center text-xs text-slate-400 font-mono group-hover:bg-slate-100/50 transition-colors">
                                        (None)
                                    </div>
                                    <div className="p-8 text-sm text-slate-600 col-span-2 bg-gradient-to-r from-indigo-50/20 to-pink-50/20 flex flex-col md:flex-row items-center justify-center gap-4 group-hover:from-indigo-50/40 group-hover:to-pink-50/40 transition-colors border-l border-slate-100 shadow-[inset_0_2px_15px_rgba(0,0,0,0.02)]">
                                        <div className="font-bold text-slate-700 text-lg tracking-tight">all, most, some, any, other</div>
                                        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">Both Plural & Uncountable</span>
                                    </div>
                                </div>
                            </div>

                            {/* Point Boxes */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100/50 hover:shadow-lg hover:shadow-amber-100/50 transition-all">
                                    <h4 className="font-bold text-amber-800 mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-amber-100 rounded-lg">
                                            <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        주의 포인트 1
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                            <div className="text-sm text-amber-900/80 leading-relaxed">
                                                <span className="font-bold text-amber-900 border-b-2 border-amber-200">Each, Every, Another</span>는<br />
                                                반드시 <span className="bg-white px-1.5 py-0.5 rounded font-bold text-amber-700 shadow-sm border border-amber-100">단수 명사</span>만 수식합니다.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                            <div className="text-sm text-amber-900/80 leading-relaxed">
                                                <span className="font-bold text-amber-900">Few</span>는 셀 수 있는 것 (복수),<br />
                                                <span className="font-bold text-amber-900">Little</span>은 셀 수 없는 것 (불가산)
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100/50 hover:shadow-lg hover:shadow-blue-100/50 transition-all">
                                    <h4 className="font-bold text-blue-800 mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <AlertTriangle className="w-5 h-5" />
                                        </div>
                                        Most vs Almost
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-white/60 rounded-2xl p-4 border border-blue-100 hover:bg-white transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-blue-700">Most</span>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Adj / Pronoun</span>
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                <CheckCircle2 className="w-3 h-3 text-green-500 inline mr-1" />
                                                Most students <span className="text-slate-400">(O)</span>
                                            </div>
                                        </div>

                                        <div className="bg-white/60 rounded-2xl p-4 border border-blue-100 hover:bg-white transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-blue-700">Almost</span>
                                                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">Adverb</span>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-sm text-slate-400 decoration-slate-400 line-through decoration-2 decoration-red-300">
                                                    Almost students
                                                </div>
                                                <div className="text-sm text-slate-600 font-medium">
                                                    <CheckCircle2 className="w-3 h-3 text-green-500 inline mr-1" />
                                                    Almost <span className="text-blue-600 font-bold border-b border-blue-200">all</span> students <span className="text-slate-400">(O)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 3: 실수하기 쉬운 형용사 */}
                    {activeTab === "tricky" && (
                        <section className="animate-fade-in-up">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-cyan-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-800">실수하기 쉬운 형용사</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* -ly 형용사 */}
                                <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                                        <h3 className="text-xl font-bold text-slate-800">
                                            -ly 형용사
                                        </h3>
                                        <span className="text-xs bg-rose-100 text-rose-600 font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Not Adverb
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { w: "Timely", m: "시기적절한" },
                                            { w: "Costly", m: "비싼" },
                                            { w: "Friendly", m: "친절한" },
                                            { w: "Orderly", m: "질서 정연한" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between bg-slate-50 p-5 rounded-2xl hover:bg-cyan-50 hover:shadow-sm hover:scale-[1.02] transition-all group cursor-default">
                                                <span className="font-bold text-lg text-slate-700 group-hover:text-cyan-800 transition-colors">{item.w}</span>
                                                <span className="text-sm font-medium text-slate-400 group-hover:text-cyan-600 transition-colors">{item.m}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 혼동 어휘 */}
                                <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                                        <h3 className="text-xl font-bold text-slate-800">
                                            혼동 어휘
                                        </h3>
                                        <span className="text-xs bg-slate-100 text-slate-500 font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                            Similar Forms
                                        </span>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-slate-50 rounded-3xl p-6 ring-1 ring-slate-100 hover:ring-cyan-200 hover:bg-cyan-50/30 transition-all">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="font-black text-slate-800 text-lg">Considerable</span>
                                                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">vs</span>
                                                <span className="font-black text-slate-800 text-lg text-right">Considerate</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-600 bg-white px-2 py-1 rounded shadow-sm">상당한 (양/크기)</span>
                                                <span className="text-slate-600 bg-white px-2 py-1 rounded shadow-sm text-right">사려 깊은 (사람)</span>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50 rounded-3xl p-6 ring-1 ring-slate-100 hover:ring-cyan-200 hover:bg-cyan-50/30 transition-all">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="font-black text-slate-800 text-lg">Successful</span>
                                                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">vs</span>
                                                <span className="font-black text-slate-800 text-lg text-right">Successive</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-600 bg-white px-2 py-1 rounded shadow-sm">성공적인</span>
                                                <span className="text-slate-600 bg-white px-2 py-1 rounded shadow-sm text-right">연속적인</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
