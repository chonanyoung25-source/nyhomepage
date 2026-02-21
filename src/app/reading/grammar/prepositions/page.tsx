'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, Navigation, Bookmark, Layers, Menu, Share2, Info, AlertCircle } from 'lucide-react';

export default function PrepositionsPage() {
    const [activeTab, setActiveTab] = useState("time");

    const tabs = [
        { id: "phrase", name: "전치사구" },
        { id: "time", name: "시간 전치사" },
        { id: "place", name: "장소/위치 전치사" },
        { id: "direction", name: "방향/이동 전치사" },
        { id: "participial", name: "분사형 전치사" },
        { id: "essential", name: "필수 빈출 전치사" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-sky-200 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-sky-50 to-transparent" />
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-sky-100 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-sky-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-sky-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-sky-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-sky-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-sky-600 hover:border-sky-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <Layers className="w-4 h-4" />
                        <span>Grammar Strategy 06</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-sky-900 mb-6 tracking-tight">
                        PREPOSITIONS
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                        전치사는 <strong className="font-semibold text-sky-700">'명사 앞에 위치(前置)하는 말'</strong>로,<br />
                        시간, 장소, 방향, 이유 등을 연결하는 핵심 고리입니다.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">

                    {/* Section 0: Prepositional Phrase */}
                    {activeTab === "phrase" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-violet-300 transition-all shadow-lg hover:shadow-violet-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-violet-500/30">
                                00
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <Info className="w-8 h-8 text-violet-500" />
                                전치사구 (Prepositional Phrase)
                            </h2>
                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                {/* Definition */}
                                <div>
                                    <p className="mb-6 text-lg">
                                        전치사구는 <strong className="text-violet-700">전치사가 혼자 쓰이지 않고, 뒤에 오는 명사(또는 대명사, 동명사)와 짝을 이루어 하나의 덩어리가 된 것</strong>을 말합니다.<br />
                                        문장의 구조를 복잡하게 만드는 주범이자, 동시에 문장의 의미를 풍성하게 해주는 핵심 요소입니다.
                                    </p>
                                </div>

                                {/* 1. Structure */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-violet-500 rounded-full" />
                                        1. 전치사구의 기본 구조
                                    </h3>
                                    <div className="bg-violet-50 rounded-2xl p-8 border border-violet-100 mb-6 text-center">
                                        <div className="text-2xl font-black text-violet-900 mb-2 font-mono">
                                            Preposition + <span className="text-violet-400">(Modifier)</span> + Object
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {[
                                            { type: "전치사 + 명사", ex: "in the office" },
                                            { type: "전치사 + 대명사", ex: "with them" },
                                            { type: "전치사 + 동명사", ex: "instead of calling" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                                                <span className="text-sm font-bold text-slate-500 mb-1">{item.type}</span>
                                                <span className="text-lg font-black text-violet-700">{item.ex}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Location Rule Warning */}
                                    <div className="mt-6 p-5 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                                        <div className="p-2 bg-white rounded-full shadow-sm text-red-500">
                                            <AlertCircle className="w-5 h-5" />
                                        </div>
                                        <div className="text-sm text-red-800 leading-relaxed">
                                            <h4 className="font-bold text-red-900 mb-1">위치 규칙 주의</h4>
                                            <p>
                                                전치사는 <strong className="text-red-700">명사와 대명사 앞</strong>에 위치합니다. (즉, 전치사 뒤에는 명사가 옵니다.)<br />
                                                반면, <span className="font-bold underline">동사나 형용사 앞</span>에는 위치할 수 없습니다. (전치사 + 동사/형용사 ❌)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Roles */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-violet-500 rounded-full" />
                                        2. 전치사구의 두 가지 역할
                                    </h3>
                                    <p className="mb-6">전치사구가 문장 안에서 어떤 역할을 하는지에 따라 <strong>형용사구</strong>와 <strong>부사구</strong>로 나뉩니다.</p>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Adjective Phrase */}
                                        <div className="bg-white rounded-2xl p-6 border-l-4 border-violet-500 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold uppercase rounded-full">Role 1</div>
                                                <h4 className="text-lg font-bold text-slate-900">형용사구 (Adjective Phrase)</h4>
                                            </div>
                                            <p className="text-slate-600 mb-4 text-sm">
                                                <strong>명사 수식:</strong> 명사 바로 뒤에서 그 명사를 꾸며줍니다. <br />
                                                <span className="text-violet-500">"어떤 ~?"</span>에 대한 답이 됩니다.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-xl text-slate-800 font-medium">
                                                "The report <span className="text-violet-600 font-bold border-b-2 border-violet-300">on the desk</span> is mine."
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2 text-right">
                                                * <strong>on the desk</strong>가 report를 수식
                                            </p>
                                        </div>

                                        {/* Adverb Phrase */}
                                        <div className="bg-white rounded-2xl p-6 border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-full">Role 2</div>
                                                <h4 className="text-lg font-bold text-slate-900">부사구 (Adverb Phrase)</h4>
                                            </div>
                                            <p className="text-slate-600 mb-4 text-sm">
                                                <strong>동사/형용사/문장 수식:</strong> 언제, 어디서, 어떻게, 왜 등을 설명합니다.
                                            </p>
                                            <div className="space-y-3">
                                                <div className="bg-slate-50 p-4 rounded-xl text-slate-800 font-medium">
                                                    "We will meet <span className="text-indigo-600 font-bold border-b-2 border-indigo-300">at 2 PM</span>."
                                                </div>
                                                <div className="bg-slate-50 p-4 rounded-xl text-slate-800 font-medium">
                                                    "The project was successful <span className="text-indigo-600 font-bold border-b-2 border-indigo-300">due to your help</span>."
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                    {activeTab === "time" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-sky-300 transition-all shadow-lg hover:shadow-sky-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-sky-500/30">
                                01
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-sky-500" />
                                시간 전치사 (Prepositions of Time)
                            </h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                <p className="mb-6">토익에서 가장 기본이 되면서도 헷갈리기 쉬운 부분입니다. 시점의 구체성에 따라 구분해서 외우는 것이 좋습니다.</p>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        {
                                            prep: "at",
                                            usage: "구체적인 시간, 짧은 시점, 정확한 지점",
                                            examples: [
                                                { en: "The meeting starts at 9:00 AM.", kr: "회의는 오전 9시에 시작합니다." },
                                                { en: "I usually wake up at 7.", kr: "저는 보통 7시에 일어납니다." }
                                            ]
                                        },
                                        {
                                            prep: "on",
                                            usage: "요일, 특정 날짜, 특정한 날",
                                            examples: [
                                                { en: "The package arrived on July 4th.", kr: "소포가 7월 4일에 도착했습니다." },
                                                { en: "Are you available on Monday?", kr: "월요일에 시간 되시나요?" }
                                            ]
                                        },
                                        {
                                            prep: "in",
                                            usage: "월, 계절, 연도, 오전/오후 (도시, 나라, 공간 처럼 넓은 개념)",
                                            examples: [
                                                { en: "Revenue increased in 2026.", kr: "2026년에 수익이 증가했습니다." },
                                                { en: "We will launch the product in March.", kr: "우리는 3월에 제품을 출시할 것입니다." }
                                            ]
                                        },
                                        {
                                            prep: "for",
                                            usage: "(숫자가 포함된) 구체적인 기간",
                                            examples: [
                                                { en: "We have partnered with them for three years.", kr: "우리는 그들과 3년 동안 파트너했습니다." },
                                                { en: "Please hold the line for a moment.", kr: "잠시만 기다려 주세요." }
                                            ]
                                        },
                                        {
                                            prep: "during",
                                            usage: "특정 사건이나 기간의 명칭",
                                            examples: [
                                                { en: "Usage increased during the vacation.", kr: "휴가 기간 동안 사용량이 증가했습니다." },
                                                { en: "Please remain seated during the flight.", kr: "비행 중에는 자리에 앉아 계십시오." }
                                            ]
                                        },
                                        {
                                            prep: "since",
                                            usage: "과거 특정 시점 이후로 (완료형과 짝꿍)",
                                            examples: [
                                                { en: "We have improved quality since last year.", kr: "작년부터 품질을 개선해 왔습니다." },
                                                { en: "I haven't seen him since the conference.", kr: "컨퍼런스 이후로 그를 보지 못했습니다." }
                                            ]
                                        },
                                        {
                                            prep: "until / by",
                                            usage: "~까지 (지속 / 완료의 차이)",
                                            examples: [
                                                { en: "Wait until tomorrow.", kr: "내일까지 기다리세요. (계속)" },
                                                { en: "Finish it by tomorrow.", kr: "내일까지 끝내세요. (완료)" }
                                            ]
                                        },
                                        {
                                            prep: "throughout",
                                            usage: "~내내 (기간 전체에 걸쳐)",
                                            examples: [
                                                { en: "The office remains open throughout the year.", kr: "사무실은 일년 내내 엽니다." },
                                                { en: "He remained calm throughout the crisis.", kr: "그는 위기 내내 침착함을 유지했습니다." }
                                            ]
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col md:flex-row md:items-stretch gap-6 p-6 bg-white rounded-3xl border border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-lg transition-all group/card">
                                            {/* Left: Number & Preposition */}
                                            <div className="md:w-1/4 flex-shrink-0 flex flex-col justify-center border-b md:border-b-0 md:border-r border-sky-100 pb-4 md:pb-0 md:pr-6">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm shrink-0 group-hover/card:bg-sky-600 group-hover/card:text-white transition-colors">
                                                        {(i + 1).toString().padStart(2, '0')}
                                                    </div>
                                                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Time Prep</span>
                                                </div>
                                                <span className="font-black text-4xl text-sky-900">{item.prep}</span>
                                            </div>

                                            {/* Right: Meaning & Examples */}
                                            <div className="flex-1 flex flex-col justify-center">
                                                {/* Meaning Highlight */}
                                                <div className="mb-4">
                                                    <p className="text-lg font-bold text-slate-800 leading-snug">{item.usage}</p>
                                                </div>

                                                {/* Examples Section */}
                                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                                                    <div className="space-y-3">
                                                        {item.examples.map((ex, j) => (
                                                            <div key={j} className="flex gap-3 items-start">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                                                <div className="text-sm">
                                                                    <p className="text-slate-900 font-medium leading-relaxed">"{ex.en}"</p>
                                                                    <p className="text-slate-500 text-xs mt-0.5">{ex.kr}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 2: Place Prepositions */}
                    {activeTab === "place" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
                                02
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <MapPin className="w-8 h-8 text-teal-500" />
                                장소 및 위치 전치사 (Prepositions of Place)
                            </h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                <p className="mb-6">단순한 위치뿐만 아니라 비유적인 공간(부서, 분야 등)으로도 확장되어 출제됩니다.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { prep: "at", usage: "정확한 지점, 특정 장소", ex: "at the station, at the desk" },
                                        { prep: "on", usage: "표면 위, 층수", ex: "on the table, on the 5th floor" },
                                        { prep: "in", usage: "내부 공간, 넓은 지역", ex: "in the office, in Seoul" },
                                        { prep: "between", usage: "(둘) 사이에", ex: "between the two buildings" },
                                        { prep: "among", usage: "(셋 이상) 사이에", ex: "among the staff members" },
                                        { prep: "above / below", usage: "~보다 위에 / 아래에 (기준점)", ex: "above the average, below expectation" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col p-6 bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-all group/card">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="font-extrabold text-2xl text-teal-700">{item.prep}</span>
                                                <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 group-hover/card:bg-teal-500 group-hover/card:text-white transition-colors">
                                                    <span className="text-xs font-bold">{i + 1}</span>
                                                </div>
                                            </div>
                                            <p className="text-slate-800 font-bold mb-2 min-h-[3rem] items-center flex">{item.usage}</p>
                                            <p className="text-sm text-slate-500 bg-teal-50/50 p-3 rounded-lg border border-teal-50">
                                                {item.ex}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 3: Direction Prepositions */}
                    {activeTab === "direction" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-indigo-300 transition-all shadow-lg hover:shadow-indigo-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/30">
                                03
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <Navigation className="w-8 h-8 text-indigo-500" />
                                방향 및 이동 전치사 (Prepositions of Direction)
                            </h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                <p className="mb-6">어디론가 움직이거나 도달하는 느낌을 줄 때 사용합니다.</p>

                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { prep: "to", desc: "~로 (도착점 강조)", ex: "go to the office" },
                                        { prep: "toward", desc: "~쪽으로 (방향 강조)", ex: "walk toward the exit" },
                                        { prep: "from", desc: "~로부터 (출발점)", ex: "a letter from the manager" },
                                        { prep: "into", desc: "~안으로", ex: "get into the car" },
                                        { prep: "out of", desc: "~밖으로", ex: "step out of the building" },
                                        { prep: "through", desc: "~을 통과하여, ~을 내내", ex: "through the tunnel, through the year" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 p-4 bg-indigo-50/30 rounded-xl border border-indigo-100 hover:bg-white hover:border-indigo-200 transition-all">
                                            <div className="w-24 font-extrabold text-xl text-indigo-700 text-right">{item.prep}</div>
                                            <div className="h-8 w-px bg-indigo-200"></div>
                                            <div className="flex-1">
                                                <span className="font-bold text-slate-800 mr-2">{item.desc}</span>
                                                <span className="text-sm text-slate-500 italic">- {item.ex}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 4: Participial Prepositions */}
                    {activeTab === "participial" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-amber-300 transition-all shadow-lg hover:shadow-amber-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-amber-500/30">
                                04
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <Share2 className="w-8 h-8 text-amber-500" />
                                분사형 전치사 (Participial Prepositions)
                            </h2>
                            <div className="ml-8 space-y-10 text-slate-600 leading-relaxed">
                                <p className="mb-2">동사의 성질을 가진 <strong>-ing / -ed</strong> 형태지만, 굳어진 표현으로서 전치사처럼 쓰입니다.</p>

                                {/* Group 1: About */}
                                <div>
                                    <h3 className="text-lg font-black text-amber-700 mb-4 border-b border-amber-100 pb-2">1. '~에 관하여' (About의 의미)</h3>
                                    <p className="text-sm text-slate-500 mb-3">가장 출제 빈도가 높으며, 문맥상 '관련된 내용'을 나타낼 때 사용합니다.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {[
                                            { w: "Regarding", m: "~에 관하여 (가장 일반적)" },
                                            { w: "Concerning", m: "~에 관하여" },
                                            { w: "Pertaining to", m: "~에 속하는, ~에 관한 (to와 함께)" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                                                <div className="font-bold text-slate-900">{item.w}</div>
                                                <div className="text-xs text-slate-600 mt-1">{item.m}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Group 2: Including/Excluding */}
                                <div>
                                    <h3 className="text-lg font-black text-amber-700 mb-4 border-b border-amber-100 pb-2">2. 포함과 제외</h3>
                                    <p className="text-sm text-slate-500 mb-3">목록이나 범위를 설명할 때 자주 등장합니다.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {[
                                            { w: "Including", m: "~을 포함하여" },
                                            { w: "Excluding", m: "~을 제외하고" },
                                            { w: "Excepting", m: "~을 제외하고 (문두 사용)" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                                <div className="font-bold text-slate-900">{item.w}</div>
                                                <div className="text-xs text-slate-600 mt-1">{item.m}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Group 3: Time & Order */}
                                <div>
                                    <h3 className="text-lg font-black text-amber-700 mb-4 border-b border-amber-100 pb-2">3. 시간 및 순서 관련</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            { w: "Following", m: "~후에 (After의 의미로 매우 빈출)", ex: "Following the meeting, we had lunch." },
                                            { w: "Pending", m: "~을 기다리는 동안, ~까지 (미결 상태)", ex: "The flight is delayed pending weather clearance." },
                                            { w: "Starting / Beginning", m: "~부터 (특정 시점부터 시작)", ex: "The new rates apply starting next month." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                <div className="w-1/3 font-bold text-amber-600">{item.w}</div>
                                                <div className="flex-1 border-l border-slate-200 pl-4">
                                                    <div className="font-bold text-slate-800 text-sm">{item.m}</div>
                                                    {item.ex && <div className="text-xs text-slate-500 mt-0.5">"{item.ex}"</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Group 4: Others */}
                                <div>
                                    <h3 className="text-lg font-black text-amber-700 mb-4 border-b border-amber-100 pb-2">4. 기타 빈출 ing형 전치사</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {[
                                            { w: "Considering", m: "~을 고려하면 (=Given)" },
                                            { w: "Depending on", m: "~에 따라" },
                                            { w: "Leading to", m: "~로 이어지는 (결과/방향)" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 hover:bg-amber-50 transition-colors">
                                                <div className="font-bold text-slate-900">{item.w}</div>
                                                <div className="text-xs text-slate-600 mt-1">{item.m}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 5: Essential Prepositions */}
                    {activeTab === "essential" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-rose-300 transition-all shadow-lg hover:shadow-rose-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-rose-500/30">
                                05
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8 flex items-center gap-3">
                                <Bookmark className="w-8 h-8 text-rose-500" />
                                기타 필수 빈출 전치사
                            </h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                <p className="mb-6">토익에서는 특정 숙어처럼 쓰이는 전치사구들이 정답 확률이 높습니다. 주의 깊게 봐야 합니다.</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { prep: "despite / in spite of", meaning: "~에도 불구하고 (양보)", type: "Concession" },
                                        { prep: "due to / owing to / because of", meaning: "~때문에 (이유)", type: "Reason" },
                                        { prep: "instead of", meaning: "~대신에", type: "Alternative" },
                                        { prep: "prior to", meaning: "~ 이전에 (before와 동의어)", type: "Time" },
                                        { prep: "thanks to", meaning: "~덕분에 (이유/원인)", type: "Reason" },
                                        { prep: "according to", meaning: "~에 따르면 (출처)", type: "Source" }
                                    ].map((item, i) => (
                                        <div key={i} className="relative p-6 bg-white rounded-2xl border-l-4 border-rose-400 shadow-sm hover:shadow-md hover:translate-x-1 transition-all">
                                            <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-rose-300 border border-rose-100 px-2 py-1 rounded-full">
                                                {item.type}
                                            </div>
                                            <h3 className="text-xl font-black text-slate-800 mb-2 pr-8">{item.prep}</h3>
                                            <p className="text-rose-600 font-medium">{item.meaning}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-full shadow-sm text-xl">💡</div>
                                    <div>
                                        <h4 className="font-bold text-rose-800 mb-1">Tip</h4>
                                        <p className="text-sm text-rose-700">
                                            전치사 뒤에는 반드시 <strong>명사, 대명사, 동명사</strong>가 와야 합니다. <br />
                                            (접속사 뒤에는 주어+동사가 온다는 점과 구별하세요!)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
