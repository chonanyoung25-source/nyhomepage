'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ClipboardCheck, AlertTriangle, CheckCircle2, Zap, Layers, Menu } from 'lucide-react';

export default function AdverbsPage() {
    const [activeTab, setActiveTab] = useState("positions");

    const tabs = [
        { id: "positions", name: "부사 기본 위치" },
        { id: "special", name: "특수 자리 & 주의" },
        { id: "tricky", name: "혼동하기 쉬운 부사" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-violet-200 overflow-x-hidden">
            {/* Morphism Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-fuchsia-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">

                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-slate-200 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-violet-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-violet-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-violet-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-violet-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-violet-600 hover:border-violet-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Hero Header */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-violet-100 rounded-2xl text-violet-600 shadow-sm">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                        <span className="text-violet-600 font-bold tracking-widest uppercase text-xs bg-violet-50 px-3 py-1 rounded-full border border-violet-100">Grammar Logic 05</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                        Adverbs <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-600">Mastery Guide</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-violet-200 pl-6">
                        동사, 형용사, 또는 문장 전체를 수식하여 의미를 정교하게 다듬는 부사의 위치와 뉘앙스를 마스터합니다.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">

                    {/* Section 1: 부사 기본 위치 */}
                    {activeTab === "positions" && (
                        <section className="animate-fade-in-up space-y-12">

                            {/* 1. Standard Positions */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">1. 부사의 기본 위치 (Standard Positions)</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* 0. Adverb Formation (NEW) */}
                                    <div className="md:col-span-2 bg-gradient-to-r from-violet-50 to-white border border-violet-100 rounded-2xl p-6 mb-2 flex items-center gap-6 shadow-sm">
                                        <div className="hidden md:flex flex-col items-center justify-center min-w-[100px] border-r border-violet-100 pr-6">
                                            <span className="text-3xl font-black text-violet-200">BASIC</span>
                                            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Formation</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                                                부사의 기본 형태: <span className="bg-violet-100/80 text-violet-700 px-2 py-0.5 rounded-md text-base">형용사 + ly</span>
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-3">
                                                대부분의 부사는 형용사 뒤에 <span className="font-bold text-violet-600">-ly</span>를 붙여서 만듭니다.
                                                <span className="text-xs text-slate-400 ml-2">("~하게" 로 해석)</span>
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm font-mono bg-white/50 px-4 py-2 rounded-lg border border-violet-100/50">
                                                <span>Quick <span className="text-slate-300">→</span> Quick<span className="text-violet-600 font-bold">ly</span></span>
                                                <span className="text-slate-300">|</span>
                                                <span>Perfect <span className="text-slate-300">→</span> Perfect<span className="text-violet-600 font-bold">ly</span></span>
                                                <span className="text-slate-300">|</span>
                                                <span>Successful <span className="text-slate-300">→</span> Successful<span className="text-violet-600 font-bold">ly</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    {[
                                        { title: "형용사 수식", pattern: "부사 + 형용사", ex: "a <span class='text-violet-600 font-bold'>highly</span> successful project", desc: "매우 성공적인 프로젝트" },
                                        { title: "동사 수식", pattern: "동사 + 부사 / 부사 + 동사", ex: "speak <span class='text-violet-600 font-bold'>fluently</span> / <span class='text-violet-600 font-bold'>carefully</span> review", desc: "유창하게 말하다 / 신중하게 검토하다" },
                                        { title: "다른 부사 수식", pattern: "부사 + 부사", ex: "run <span class='text-violet-600 font-bold'>very</span> fast", desc: "매우 빨리 달리다" },
                                        { title: "문장 전체 수식", pattern: "부사, 주어 + 동사", ex: "<span class='text-violet-600 font-bold'>Fortunately</span>, he passed.", desc: "다행히도, 그는 합격했다." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-violet-200 transition-all">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-bold text-slate-800">{item.title}</h3>
                                                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono">{item.pattern}</span>
                                            </div>
                                            <div className="bg-violet-50/50 rounded-xl p-4 border border-violet-100/50">
                                                <p className="text-slate-700 font-medium mb-1" dangerouslySetInnerHTML={{ __html: item.ex }} />
                                                <p className="text-xs text-slate-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Sandwich Positions */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">2. 토익 빈출: "동사" 관련 샌드위치 자리</h2>
                                </div>

                                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                                    <p className="text-slate-600 mb-6">
                                        동사 덩어리 사이에 빈칸이 있으면 <span className="text-fuchsia-600 font-bold bg-fuchsia-50 px-1 rounded">90% 확률로 부사 자리</span>입니다.
                                    </p>
                                    <div className="grid gap-4">
                                        {[
                                            { t: "조동사와 본동사 사이", f: "will / can + (Adv) + R", ex: "The manager will <span class='text-fuchsia-600 font-bold'>promptly</span> respond." },
                                            { t: "be동사와 p.p./ing 사이", f: "be + (Adv) + p.p. / -ing", ex: "The document is <span class='text-fuchsia-600 font-bold'>currently</span> being updated." },
                                            { t: "have와 p.p. 사이", f: "have + (Adv) + p.p.", ex: "We have <span class='text-fuchsia-600 font-bold'>already</span> finished." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-fuchsia-50/30 transition-colors">
                                                <div className="w-1/3 border-r border-slate-200 pr-4">
                                                    <div className="font-bold text-slate-800 text-sm">{item.t}</div>
                                                    <div className="text-xs text-slate-400 font-mono mt-1">{item.f}</div>
                                                </div>
                                                <div className="w-2/3 pl-4">
                                                    <p className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: item.ex }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Forbidden Positions */}
                            <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100">
                                <h3 className="text-lg font-bold text-rose-800 mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    <span>절대 들어갈 수 없는 자리 (오답 소거용)</span>
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 rounded-xl p-4">
                                        <div className="font-bold text-rose-700 mb-2 text-sm">1. 동사와 목적어 사이 (V + O)</div>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center text-rose-400 line-through decoration-rose-400">
                                                <span className="w-6 text-center">X</span> He read <span className="text-rose-600 font-bold mx-1">carefully</span> the book.
                                            </div>
                                            <div className="flex items-center text-green-600 font-medium">
                                                <span className="w-6 text-center">O</span> He read the book <span className="text-green-600 font-bold mx-1">carefully</span>.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 rounded-xl p-4">
                                        <div className="font-bold text-rose-700 mb-2 text-sm">2. 형용사와 명사 사이</div>
                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center text-rose-400 line-through decoration-rose-400">
                                                <span className="w-6 text-center">X</span> a beautiful <span className="text-rose-600 font-bold mx-1">extremely</span> girl
                                            </div>
                                            <div className="flex items-center text-green-600 font-medium">
                                                <span className="w-6 text-center">O</span> an <span className="text-green-600 font-bold mx-1">extremely</span> beautiful girl
                                            </div>
                                            <p className="text-[10px] text-slate-500 mt-1 pl-6">*부사는 형용사 앞에서 수식해야 함</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 2: 특수 자리 & 주의 */}
                    {activeTab === "special" && (
                        <section className="animate-fade-in-up space-y-12">

                            {/* Special Cases */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">3. 놓치기 쉬운 '특수 자리' (Special Cases)</h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Case 1 */}
                                    <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 group hover:-translate-y-1 transition-transform">
                                        <div className="mb-4">
                                            <span className="bg-violet-100 text-violet-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Case 01</span>
                                            <h3 className="text-lg font-bold text-slate-800 mt-2">자동사와 전치사 사이</h3>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm text-slate-500 mb-4 border border-slate-100">
                                            자동사 + <span className="text-violet-600 font-bold">(Adv)</span> + 전치사
                                        </div>
                                        <p className="text-slate-700 font-medium border-l-4 border-violet-300 pl-4 py-1">
                                            Work <span className="text-violet-600 font-bold">closely</span> with the team
                                        </p>
                                    </div>

                                    {/* Case 2 */}
                                    <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 group hover:-translate-y-1 transition-transform">
                                        <div className="mb-4">
                                            <span className="bg-violet-100 text-violet-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Case 02</span>
                                            <h3 className="text-lg font-bold text-slate-800 mt-2">숫자 수식 (강조)</h3>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm text-slate-500 mb-4 border border-slate-100">
                                            <span className="text-violet-600 font-bold">(Adv)</span> + 숫자
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-slate-700 font-medium border-l-4 border-violet-300 pl-4 py-1">
                                                <span className="text-violet-600 font-bold">Approximately</span> 500 participants
                                            </p>
                                            <div className="flex gap-2 flex-wrap">
                                                {["nearly", "roughly", "at least", "more than"].map((w, i) => (
                                                    <span key={i} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded">{w}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Case 3 */}
                                    <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 group hover:-translate-y-1 transition-transform">
                                        <div className="mb-4">
                                            <span className="bg-violet-100 text-violet-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Case 03</span>
                                            <h3 className="text-lg font-bold text-slate-800 mt-2">전치사구 수식</h3>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm text-slate-500 mb-4 border border-slate-100">
                                            <span className="text-violet-600 font-bold">(Adv)</span> + 전치사구 (Prep + N)
                                        </div>
                                        <p className="text-slate-700 font-medium border-l-4 border-violet-300 pl-4 py-1">
                                            <span className="text-violet-600 font-bold">directly</span> across from the station
                                        </p>
                                    </div>

                                    {/* Case 4 */}
                                    <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100 group hover:-translate-y-1 transition-transform">
                                        <div className="mb-4">
                                            <span className="bg-violet-100 text-violet-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">Case 04</span>
                                            <h3 className="text-lg font-bold text-slate-800 mt-2">주어와 동사 사이</h3>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm text-slate-500 mb-4 border border-slate-100">
                                            주어 + <span className="text-violet-600 font-bold">(Adv)</span> + 동사 (강조)
                                        </div>
                                        <p className="text-slate-700 font-medium border-l-4 border-violet-300 pl-4 py-1">
                                            The board <span className="text-violet-600 font-bold">unanimously</span> approved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 3: 혼동하기 쉬운 부사 */}
                    {activeTab === "tricky" && (
                        <section className="animate-fade-in-up space-y-12">

                            {/* 1. Meaning Shift (-ly) */}
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800">1. 형태는 비슷하나 뜻이 다른 -ly 부사</h2>
                                </div>

                                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold text-center">
                                            <tr>
                                                <th className="p-4 border-r border-slate-100">Base Form (Adj/Adv)</th>
                                                <th className="p-4 bg-violet-50 text-violet-600">-ly Form (Adv)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-sm">
                                            {[
                                                { b: "hard", bm: "열심히, 딱딱한", l: "hardly", lm: "거의 ~않다 (부정)" },
                                                { b: "late", bm: "늦게, 늦은", l: "lately", lm: "최근에 (현재완료와 친함)" },
                                                { b: "near", bm: "가까이, 가까운", l: "nearly", lm: "거의 (=almost)" },
                                                { b: "high", bm: "높게, 높은", l: "highly", lm: "매우, 대단히 (추상적)" },
                                                { b: "close", bm: "가까이, 면밀히", l: "closely", lm: "밀접하게, 엄격히" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 w-1/2 border-r border-slate-100">
                                                        <div className="font-bold text-slate-700">{row.b}</div>
                                                        <div className="text-xs text-slate-400">{row.bm}</div>
                                                    </td>
                                                    <td className="p-4 w-1/2 bg-violet-50/10">
                                                        <div className="font-bold text-violet-700">{row.l}</div>
                                                        <div className="text-xs text-slate-500">{row.lm}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 2 & 3. Other Categories */}
                            <div className="grid md:grid-cols-2 gap-8">

                                {/* Time Adverbs */}
                                <div className="bg-white rounded-[32px] p-8 shadow-lg border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-2 h-6 bg-fuchsia-500 rounded-full" />
                                        시제와 '절친' (Already, Yet, Still)
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="font-bold text-fuchsia-700 mb-1">Already (이미)</div>
                                            <p className="text-xs text-slate-600">긍정문, 예상보다 빠름</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="font-bold text-fuchsia-700 mb-1">Yet (아직)</div>
                                            <p className="text-xs text-slate-600">부정문(not yet), 의문문 끝</p>
                                            <p className="text-[10px] text-fuchsia-500 mt-1 font-mono">have yet to + V (아직 ~안 하다)</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="font-bold text-fuchsia-700 mb-1">Still (여전히)</div>
                                            <p className="text-xs text-slate-600">계속되는 상황, 부정문에서는 not 앞</p>
                                            <p className="text-[10px] text-fuchsia-500 mt-1 font-mono">still not</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Frequency & Degree */}
                                <div className="space-y-6">
                                    {/* Negation */}
                                    <div className="bg-rose-50 rounded-[24px] p-6 border border-rose-100">
                                        <h4 className="font-bold text-rose-800 mb-2 text-sm uppercase">부정 부사 (Not 사용 금지)</h4>
                                        <p className="text-sm text-rose-900/80 leading-relaxed">
                                            Hardly, Rarely, Seldom, Scarcely, Barely <br />
                                            <span className="text-xs opacity-70">(거의 ~않다)</span>
                                        </p>
                                    </div>

                                    {/* Degree */}
                                    <div className="bg-indigo-50 rounded-[24px] p-6 border border-indigo-100">
                                        <h4 className="font-bold text-indigo-800 mb-2 text-sm uppercase">정도 부사 (매우/상당히)</h4>
                                        <p className="text-sm text-indigo-900/80 leading-relaxed mb-4">
                                            Extremely, Highly, Significantly, Considerably
                                        </p>
                                        <h4 className="font-bold text-indigo-800 mb-2 text-sm uppercase mt-4">초점 부사 (오직)</h4>
                                        <p className="text-sm text-indigo-900/80 leading-relaxed">
                                            Only, Just, Solely, Exclusively
                                        </p>
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
