'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertCircle, Bookmark, Layers, Menu } from 'lucide-react';

const nounQuizData = [
    {
        id: 1,
        question: "The marketing director sent a detailed ------- regarding the upcoming product launch to all staff members.",
        options: ["propose", "proposal", "proposed", "proposing"],
        correct: 1,
        explanation: "형용사(detailed)의 수식을 받는 목적어 자리이므로 명사인 (B) proposal이 정답입니다."
    },
    {
        id: 2,
        question: "All employees are required to provide written ------- before taking a leave of absence.",
        options: ["confirmatory", "confirm", "confirmed", "confirmation"],
        correct: 3,
        explanation: "타동사 provide의 목적어이자 형용사(written)의 수식을 받는 명사 자리이므로 (D) confirmation이 정답입니다."
    },
    {
        id: 3,
        question: "Due to the recent economic downturn, many startup companies are facing financial -------.",
        options: ["difficulties", "difficult", "difficultly", "difficultying"],
        correct: 0,
        explanation: "형용사(financial)의 수식을 받는 명사 자리이므로 (A) difficulties가 정답입니다."
    },
    {
        id: 4,
        question: "------- for the annual charity gala must be submitted through the online portal by Friday.",
        options: ["Register", "Registered", "Registrations", "Registrying"],
        correct: 2,
        explanation: "문장의 주어 자리이므로 명사인 (C) Registrations가 정답입니다."
    },
    {
        id: 5,
        question: "We would like to express our sincere appreciation for your valuable ------- to the project.",
        options: ["contribute", "contributed", "contributing", "contribution"],
        correct: 3,
        explanation: "전치사 for의 목적어이자 형용사(valuable)의 수식을 받는 명사 자리이므로 (D) contribution이 정답입니다."
    },
    {
        id: 6,
        question: "The committee members reached a final ------- after discussing the budget for three hours.",
        options: ["decide", "decisive", "decision", "decidedly"],
        correct: 2,
        explanation: "타동사 reached의 목적어이자 형용사(final)의 수식을 받는 명사 자리이므로 (C) decision이 정답입니다."
    },
    {
        id: 7,
        question: "All visitors must obtain a security ------- before entering the research laboratory.",
        options: ["clear", "clearing", "clearance", "clearly"],
        correct: 2,
        explanation: "관사(a)와 명사(security) 뒤에 위치하여 복합명사(security clearance, 보안 인가)를 이루거나, 명사 자리이므로 (C) clearance가 정답입니다."
    },
    {
        id: 8,
        question: "Our company is seeking a professional ------- with at least five years of experience in accounting.",
        options: ["specialist", "specialize", "specialized", "special"],
        correct: 0,
        explanation: "형용사(professional)의 수식을 받는 사람 명사 자리이므로 (A) specialist가 정답입니다."
    },
    {
        id: 9,
        question: "The rapid ------- of the software industry has created many new job opportunities.",
        options: ["grow", "grown", "growth", "growing"],
        correct: 2,
        explanation: "형용사(rapid)의 수식을 받는 명사 자리이므로 (C) growth가 정답입니다."
    },
    {
        id: 10,
        question: "Please submit your ------- for the workshop by the end of the day.",
        options: ["attend", "attendance", "attentive", "attentively"],
        correct: 1,
        explanation: "소유격(your) 뒤의 명사 자리이므로 (B) attendance가 정답입니다."
    },
    {
        id: 11,
        question: "There is a significant ------- between the two marketing strategies proposed by the teams.",
        options: ["differ", "different", "difference", "differently"],
        correct: 2,
        explanation: "형용사(significant)의 수식을 받는 명사 자리이므로 (C) difference가 정답입니다."
    },
    {
        id: 12,
        question: "The manager expressed her ------- with the team's ability to meet the tight deadline.",
        options: ["satisfy", "satisfaction", "satisfactory", "satisfied"],
        correct: 1,
        explanation: "소유격(her) 뒤의 명사 자리이므로 (B) satisfaction이 정답입니다."
    }
];

export default function NounsPage() {
    const [activeTab, setActiveTab] = useState("positions");
    const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const tabs = [
        { id: "positions", name: "명사 자리" },
        { id: "countability", name: "가산/불가산" },
        { id: "types", name: "사람/사물 명사" },
        { id: "compounds", name: "복합 명사" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-200 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent" />
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Navigation Bar */}
                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-blue-100 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-blue-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-blue-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <Layers className="w-4 h-4" />
                        <span>Grammar Strategy 01</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-blue-900 mb-6 tracking-tight">
                        NOUNS
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                        절대 틀릴 수 없는 명사 식별 완벽 가이드.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">
                    {/* Section 1: Noun Positions */}
                    {activeTab === "positions" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-blue-300 transition-all shadow-lg hover:shadow-blue-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/30">
                                01
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">명사 자리 (Noun Positions)</h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                                        1. 명사의 역할과 위치
                                    </h3>
                                    <p className="mb-6">명사는 문장에서 주어(S), 목적어(O), 보어(C) 역할을 하며, 주로 다음과 같은 자리에 위치합니다.</p>

                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { title: "주어 자리", desc: "문장의 주체로서 동사 앞에 위치합니다.", ex: "Success requires hard work." },
                                            { title: "타동사의 목적어 자리", desc: "타동사의 동작 대상이 되어 동사 뒤에 위치합니다.", ex: "We received the confirmation." },
                                            { title: "전치사의 목적어 자리", desc: "전치사 뒤에 위치하여 전치사구를 이룹니다.", ex: "Thank you for your contribution." },
                                            { title: "보어 자리", desc: "주어나 목적어를 보충 설명하는 자리에 위치합니다. (주격 보어, 목적격 보어)", ex: "She became a doctor." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col md:flex-row md:items-start gap-4 p-5 bg-slate-50/80 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                                                <div className="flex items-center gap-3 md:w-1/3 flex-shrink-0">
                                                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs shadow-sm">
                                                        {i + 1}
                                                    </span>
                                                    <span className="font-bold text-slate-800">{item.title}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-slate-600 mb-2">{item.desc}</p>
                                                    <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                                                        예: {item.ex}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tip: Adjective Suffixes */}
                                    <div className="mt-6 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                            <span className="text-xl">💡</span>
                                            참고: 형용사 구별법 (접미사)
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {[
                                                { s: "-al", ex: "professional, personal" },
                                                { s: "-ive", ex: "productive, creative" },
                                                { s: "-ous", ex: "dangerous, cautious" },
                                                { s: "-able / -ible", ex: "available, reliable" },
                                                { s: "-ful / -less", ex: "careful, useless" },
                                                { s: "-ic / -ical", ex: "specific, critical" },
                                                { s: "-ent / -ant", ex: "confident, significant" }
                                            ].map((item, i) => (
                                                <div key={i} className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm">
                                                    <span className="font-bold text-indigo-600 block">{item.s}</span>
                                                    <span className="text-slate-500 text-xs">{item.ex}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sub-Section 2: Noun Formulas */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                                            2. 명사 공식 (Noun Formulas)
                                        </h3>
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Formula 1: Articles */}
                                            <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-3xl flex items-start justify-end p-3 text-blue-200 font-black text-3xl group-hover:text-blue-300 transition-colors">1</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">01</span>
                                                    관사 패턴
                                                </h4>
                                                <ul className="space-y-4">
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">1.1</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">관사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-blue-100 border border-blue-200 rounded text-blue-700 font-bold">명사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) <span className="font-bold text-slate-700">The decision</span> was final.
                                                        </p>
                                                    </li>
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">1.2</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">관사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-blue-100 border border-blue-200 rounded text-blue-700 font-bold">명사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 text-xs">전치사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) <span className="font-bold text-slate-700">The cost</span> of living is rising.
                                                        </p>
                                                    </li>
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">1.3</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">관사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 text-xs">부사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 text-xs">형용사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-blue-100 border border-blue-200 rounded text-blue-700 font-bold">명사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) <span className="font-bold text-slate-700">A surprisingly good result</span> was achieved.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Formula 2: Adjectives */}
                                            <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-3xl flex items-start justify-end p-3 text-indigo-200 font-black text-3xl group-hover:text-indigo-300 transition-colors">2</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">02</span>
                                                    형용사 수식
                                                </h4>
                                                <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <div className="flex items-center gap-2 text-sm justify-start flex-wrap">
                                                        <span className="font-bold text-slate-500 w-8">2</span>
                                                        <div className="flex flex-col items-center">
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 mb-1">형용사</span>
                                                            <span className="text-[10px] text-slate-400">(지시/수량)</span>
                                                        </div>
                                                        <span className="text-slate-300 text-xl font-light">+</span>
                                                        <span className="px-3 py-1 bg-indigo-100 border border-indigo-200 rounded text-indigo-700 font-bold">명사</span>
                                                    </div>
                                                    <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                        Ex) <span className="font-bold text-slate-700">Recent changes</span> were effective. / <span className="font-bold text-slate-700">These documents</span> are important.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Formula 3: Possessives */}
                                            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 rounded-bl-3xl flex items-start justify-end p-3 text-purple-200 font-black text-3xl group-hover:text-purple-300 transition-colors">3</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">03</span>
                                                    소유격 패턴
                                                </h4>
                                                <ul className="space-y-4">
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">3.1</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">소유격</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-purple-100 border border-purple-200 rounded text-purple-700 font-bold">명사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) <span className="font-bold text-slate-700">Her dedication</span> is impressive.
                                                        </p>
                                                    </li>
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">3.2</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">소유격</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 text-xs">부사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600 text-xs">형용사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-purple-100 border border-purple-200 rounded text-purple-700 font-bold">명사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) <span className="font-bold text-slate-700">Our recently updated policy</span> covers this.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Formula 4: Transitive Verbs */}
                                            <div className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-rose-50 rounded-bl-3xl flex items-start justify-end p-3 text-rose-200 font-black text-3xl group-hover:text-rose-300 transition-colors">4</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">04</span>
                                                    타동사 패턴
                                                </h4>
                                                <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <div className="flex items-center gap-2 text-sm justify-start flex-wrap">
                                                        <span className="font-bold text-slate-500 w-8">4</span>
                                                        <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">타동사</span>
                                                        <span className="text-slate-300 text-xl font-light">+</span>
                                                        <span className="px-3 py-1 bg-rose-100 border border-rose-200 rounded text-rose-700 font-bold">명사</span>
                                                        <span className="text-[10px] text-slate-400 self-end ml-1 mb-1">(목적어)</span>
                                                    </div>
                                                    <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                        Ex) We received <span className="font-bold text-slate-700">the confirmation</span>.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Formula 5: Prepositions */}
                                            <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-3xl flex items-start justify-end p-3 text-emerald-200 font-black text-3xl group-hover:text-emerald-300 transition-colors">5</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">05</span>
                                                    전치사 패턴
                                                </h4>
                                                <ul className="space-y-4">
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">5.1</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">전치사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-emerald-100 border border-emerald-200 rounded text-emerald-700 font-bold">명사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) Thank you for <span className="font-bold text-slate-700">your contribution</span>.
                                                        </p>
                                                    </li>
                                                    <li className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                        <div className="flex items-center gap-2 text-sm flex-wrap">
                                                            <span className="font-bold text-slate-500 w-8">5.2</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">전치사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-emerald-100 border border-emerald-200 rounded text-emerald-700 font-bold">명사</span>
                                                            <span className="text-slate-300">+</span>
                                                            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 text-xs">전치사</span>
                                                        </div>
                                                        <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                            Ex) In <span className="font-bold text-slate-700">observance</span> of the holiday.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Formula 6: Compound Nouns */}
                                            <div className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-3xl flex items-start justify-end p-3 text-amber-200 font-black text-3xl group-hover:text-amber-300 transition-colors">6</div>
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">06</span>
                                                    복합 명사
                                                </h4>
                                                <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                    <div className="flex items-center gap-2 text-sm justify-start flex-wrap">
                                                        <span className="font-bold text-slate-500 w-8">6</span>
                                                        <span className="px-3 py-1 bg-amber-100 border border-amber-200 rounded text-amber-700 font-bold">명사</span>
                                                        <span className="text-slate-300 text-xl font-light">+</span>
                                                        <span className="px-3 py-1 bg-amber-100 border border-amber-200 rounded text-amber-700 font-bold">명사</span>
                                                    </div>
                                                    <p className="text-sm text-slate-500 pl-10 border-l-2 border-slate-200 ml-2">
                                                        Ex) <span className="font-bold text-slate-700">Mask production</span> has increased. / <span className="font-bold text-slate-700">Customer satisfaction</span> is low.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sub-Section 3: Identification */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                                            3. 명사 구별법 (접미사)
                                        </h3>
                                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                            <p className="mb-6 text-slate-600">단어의 끝 모양(접미사)을 보고 명사임을 유추할 수 있습니다.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {[
                                                    { s: "-tion / -sion", ex: "information, decision" },
                                                    { s: "-ment", ex: "management, agreement" },
                                                    { s: "-ness", ex: "kindness, happiness" },
                                                    { s: "-ty / -ity", ex: "priority, ability" },
                                                    { s: "-ance / -ence", ex: "performance, difference" },
                                                    { s: "-ist / -er / -or", ex: "specialist, manager" },
                                                    { s: "-ce", ex: "advice, service, practice" },
                                                    { s: "-al", ex: "proposal, approval, arrival" },
                                                    { s: "-sy", ex: "courtesy, controversy" },
                                                    { s: "-sm", ex: "criticism, enthusiasm" }
                                                ].map((item, i) => (
                                                    <div key={i} className="relative p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors group">
                                                        <div className="absolute top-3 right-3 text-[10px] font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                                                            {String(i + 1).padStart(2, '0')}
                                                        </div>
                                                        <div className="font-bold text-blue-600 mb-1">{item.s}</div>
                                                        <div className="text-xs text-slate-500 break-words">{item.ex}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section 4: Check-up Quiz */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                                            4. 실전 문제 (Check-up Quiz)
                                        </h3>

                                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                            {(() => {
                                                const quiz = nounQuizData[currentQuestionIndex];
                                                const isAnswered = quizAnswers[quiz.id] !== undefined;
                                                const isCorrect = isAnswered && quizAnswers[quiz.id] === quiz.correct;

                                                return (
                                                    <div key={quiz.id} className="animate-fade-in">
                                                        <div className="flex justify-between items-center mb-6">
                                                            <div className="flex items-center gap-2">
                                                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                                                    Question {currentQuestionIndex + 1} / {nounQuizData.length}
                                                                </span>
                                                                {isAnswered && (
                                                                    <span className={`flex items-center gap-1 text-sm font-bold ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                                                                        {isCorrect ? (
                                                                            <>
                                                                                <CheckCircle2 className="w-4 h-4" />
                                                                                Correct
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <AlertCircle className="w-4 h-4" />
                                                                                Try Again
                                                                            </>
                                                                        )}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <div className="mb-8">
                                                            <p className="text-xl text-slate-800 font-medium leading-relaxed">
                                                                {quiz.question}
                                                            </p>
                                                        </div>

                                                        <div className="grid gap-3 mb-8">
                                                            {quiz.options.map((option, idx) => (
                                                                <button
                                                                    key={idx}
                                                                    onClick={() => setQuizAnswers(prev => ({ ...prev, [quiz.id]: idx }))}
                                                                    disabled={isCorrect}
                                                                    className={`w-full text-left px-6 py-4 rounded-xl text-base transition-all flex items-center justify-between group ${quizAnswers[quiz.id] === idx
                                                                        ? isCorrect
                                                                            ? 'bg-green-100 text-green-800 font-bold ring-2 ring-green-500 ring-offset-1'
                                                                            : 'bg-red-100 text-red-800 font-bold ring-2 ring-red-500 ring-offset-1'
                                                                        : 'bg-slate-50 text-slate-600 hover:bg-white hover:shadow-md hover:border-blue-200 border border-transparent'
                                                                        }`}
                                                                >
                                                                    <div className="flex items-center">
                                                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold transition-colors ${quizAnswers[quiz.id] === idx
                                                                            ? isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                                                                            : 'bg-slate-200 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                                                                            }`}>
                                                                            {(idx + 10).toString(36).toUpperCase()}
                                                                        </span>
                                                                        {option}
                                                                    </div>
                                                                    {quizAnswers[quiz.id] === idx && (
                                                                        isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-500" />
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </div>

                                                        {isAnswered && (
                                                            <div className={`mb-8 p-6 rounded-2xl text-sm leading-relaxed animate-fade-in ${isCorrect ? 'bg-green-50 border border-green-100 text-green-800' : 'bg-red-50 border border-red-100 text-red-800'}`}>
                                                                <p className="font-bold mb-2 flex items-center gap-2">
                                                                    <span>💡 해설</span>
                                                                </p>
                                                                {quiz.explanation}
                                                            </div>
                                                        )}

                                                        <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                                                            <button
                                                                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                                                disabled={currentQuestionIndex === 0}
                                                                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${currentQuestionIndex === 0
                                                                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                                                                    }`}
                                                            >
                                                                Previous
                                                            </button>
                                                            <button
                                                                onClick={() => setCurrentQuestionIndex(prev => Math.min(nounQuizData.length - 1, prev + 1))}
                                                                disabled={currentQuestionIndex === nounQuizData.length - 1}
                                                                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${currentQuestionIndex === nounQuizData.length - 1
                                                                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40'
                                                                    }`}
                                                            >
                                                                Next Question
                                                                <ArrowLeft className="w-4 h-4 rotate-180" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 2: Countable / Uncountable */}
                    {activeTab === "countability" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
                                02
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">가산 / 불가산 (Countability)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">

                                {/* 1. Countable vs Uncountable */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        1. 가산 명사 vs 불가산 명사: 기본 규칙
                                    </h3>
                                    <p className="mb-6">토익에서 가장 까다로운 부분 중 하나입니다. 빈칸 앞의 관사(a/an) 유무나 뒤의 복수형(-s) 가능 여부를 확인해야 합니다.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Countable */}
                                        <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm relative overflow-hidden group/card hover:shadow-md transition-all">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                                                <CheckCircle2 className="w-24 h-24 text-teal-600" />
                                            </div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                                                        <span className="font-bold text-teal-600">C</span>
                                                    </div>
                                                    <h4 className="font-bold text-teal-900 text-lg">가산 명사</h4>
                                                </div>
                                                <div className="text-sm space-y-3 mb-6">
                                                    <div className="flex items-start gap-2">
                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                                        <p><strong>단수:</strong> 반드시 관사(<span className="text-teal-600 font-bold">a/an/the</span>)나 소유격 필요. <span className="text-red-500 text-xs">(단독 사용 불가!)</span></p>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                                        <p><strong>복수:</strong> 뒤에 <span className="text-teal-600 font-bold">-s/-es</span>를 붙임. (이때 a/an 불가)</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {[
                                                        { w: "Approach", m: "접근법" },
                                                        { w: "Certificate", m: "증명서" },
                                                        { w: "Detail", m: "세부사항" },
                                                        { w: "Device", m: "장치" },
                                                        { w: "Discount", m: "할인" },
                                                        { w: "Earnings", m: "소득" },
                                                        { w: "Employee", m: "직원" },
                                                        { w: "Grant", m: "보조금" },
                                                        { w: "Item", m: "품목" },
                                                        { w: "Permit", m: "허가증" },
                                                        { w: "Profit", m: "이익" },
                                                        { w: "Refund", m: "환불" },
                                                        { w: "Report", m: "보고서" },
                                                        { w: "Representative", m: "대표자/직원" },
                                                        { w: "Response", m: "응답" },
                                                        { w: "Result", m: "결과" },
                                                        { w: "Solution", m: "해결책" },
                                                        { w: "Suggestion", m: "제안" },
                                                        { w: "Task", m: "업무" }
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex flex-col px-2 py-1 bg-teal-50 border border-teal-100 rounded">
                                                            <span className="text-xs font-bold text-teal-700">{item.w}</span>
                                                            <span className="text-[10px] text-teal-500">{item.m}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Uncountable */}
                                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group/card hover:shadow-md transition-all">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/card:opacity-10 transition-opacity">
                                                <AlertCircle className="w-24 h-24 text-slate-500" />
                                            </div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                                                        <span className="font-bold text-slate-500">U</span>
                                                    </div>
                                                    <h4 className="font-bold text-slate-900 text-lg">불가산 명사</h4>
                                                </div>
                                                <div className="text-sm space-y-3 mb-6">
                                                    <div className="flex items-start gap-2">
                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                                                        <p><strong>규칙:</strong> 셀 수 없으므로 <span className="text-red-500 font-bold">a/an 불가</span>, <span className="text-red-500 font-bold">복수형(-s) 불가</span>.</p>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                                                        <p><strong>특징:</strong> 항상 <span className="underline decoration-slate-300 decoration-2">단수 취급</span>합니다.</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                                                        <AlertCircle className="w-3 h-3" />
                                                        Must Memorize:
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {[
                                                            { w: "Access", m: "접근" },
                                                            { w: "Advice", m: "조언" },
                                                            { w: "Approval", m: "승인" },
                                                            { w: "Certification", m: "증명/인증" },
                                                            { w: "Equipment", m: "장비" },
                                                            { w: "Feedback", m: "피드백" },
                                                            { w: "Funding", m: "자금" },
                                                            { w: "Furniture", m: "가구" },
                                                            { w: "Information", m: "정보" },
                                                            { w: "Luggage", m: "수하물" },
                                                            { w: "Merchandise", m: "상품" },
                                                            { w: "News", m: "뉴스" },
                                                            { w: "Permission", m: "허가" },
                                                            { w: "Produce", m: "농산물" },
                                                            { w: "Stationery", m: "문구류" },
                                                            { w: "Work", m: "일/업무" }
                                                        ].map((item, i) => (
                                                            <div key={i} className="flex flex-col px-2 py-1 bg-slate-50 rounded border border-slate-100">
                                                                <span className="text-xs font-bold text-slate-700">{item.w}</span>
                                                                <span className="text-[10px] text-slate-400">{item.m}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Article Usage Table */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        2. 가산명사 vs 불가산명사 관사 사용법
                                    </h3>
                                    <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                                                <tr>
                                                    <th className="p-4 whitespace-nowrap">구분</th>
                                                    <th className="p-4 whitespace-nowrap">가산명사 (단수)</th>
                                                    <th className="p-4 whitespace-nowrap">가산명사 (복수)</th>
                                                    <th className="p-4 whitespace-nowrap">불가산명사</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 bg-white">
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">부정관사<br /><span className="text-xs font-normal text-slate-400">(a / an)</span></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">예: a book, an apple</div></td>
                                                    <td className="p-4 text-red-500 font-bold bg-red-50/30">사용 불가 (X)</td>
                                                    <td className="p-4 text-red-500 font-bold bg-red-50/30">사용 불가 (X)</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">정관사<br /><span className="text-xs font-normal text-slate-400">(the)</span></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">특정한 대상일 때</div></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">특정한 대상들일 때</div></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">특정한 양/개념일 때</div></td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">무관사<br /><span className="text-xs font-normal text-slate-400">(관사 없음)</span></td>
                                                    <td className="p-4 text-red-500 font-bold bg-red-50/30">사용 불가 (X)<div className="text-xs font-normal text-slate-500 mt-1">한정사 없이 단독 사용 불가</div></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">일반적인 사실/전체 언급</div></td>
                                                    <td className="p-4 text-teal-600 font-bold bg-teal-50/30">사용 가능 (O)<div className="text-xs font-normal text-slate-500 mt-1">일반적인 개념/전체 언급</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 3. Confusing Countable vs Uncountable */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        3. 헷갈리는 가산명사 vs 불가산 명사
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { c: "task", cm: "업무, 과제", u: "work", um: "일, 노동" },
                                            { c: "permit", cm: "허가증", u: "permission", um: "허가" },
                                            { c: "certificate", cm: "증명서", u: "certification", um: "증명, 인증" },
                                            { c: "seat", cm: "좌석", u: "seating", um: "좌석 배치/수용력" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                                                <div className="flex-1 text-center border-r border-slate-100 pr-4">
                                                    <div className="text-xs font-bold text-teal-500 mb-1">가산 (Countable)</div>
                                                    <div className="font-bold text-slate-800 text-lg mb-0.5">{item.c}</div>
                                                    <div className="text-xs text-slate-500">{item.cm}</div>
                                                </div>
                                                <div className="flex-1 text-center pl-4">
                                                    <div className="text-xs font-bold text-red-500 mb-1">불가산 (Uncountable)</div>
                                                    <div className="font-bold text-slate-800 text-lg mb-0.5">{item.u}</div>
                                                    <div className="text-xs text-slate-500">{item.um}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Collective Nouns Trap */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        4. 함정 피하기: 집합 명사 (Collective Nouns)
                                    </h3>
                                    <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="p-3 bg-white rounded-full text-2xl shadow-sm">🚨</div>
                                            <div>
                                                <h4 className="font-bold text-red-900 text-lg mb-1">개별 vs 전체 (Individual vs Collective)</h4>
                                                <p className="text-red-800 text-sm opacity-90">개별 항목은 <span className="font-bold">가산</span>이지만, 그것을 통칭하는 집합 명사는 <span className="font-bold">불가산</span>인 경우가 많습니다.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { c: "a machine", cm: "기계 한 대", u: "machinery", um: "기계류 전반" },
                                                { c: "a scene", cm: "장면", u: "scenery", um: "풍경" },
                                                { c: "a bag / suitcase", cm: "가방", u: "luggage / baggage", um: "수하물" },
                                                { c: "a coin / bill", cm: "동전/지폐", u: "money / cash", um: "돈/현금" },
                                                { c: "a permit", cm: "허가증", u: "permission", um: "허가" },
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center bg-white rounded-xl p-3 border border-red-100 shadow-sm">
                                                    <div className="flex-1 text-center border-r border-slate-100 pr-3">
                                                        <div className="font-bold text-teal-600 text-sm">{item.c}</div>
                                                        <div className="text-xs text-slate-400">{item.cm}</div>
                                                    </div>
                                                    <div className="px-3 text-slate-300 font-bold text-xs">VS</div>
                                                    <div className="flex-1 text-center pl-3">
                                                        <div className="font-bold text-red-600 text-sm">{item.u}</div>
                                                        <div className="text-xs text-slate-400">{item.um}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Check-up Quiz Placeholder */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        5. 실전 문제 (Check-up Quiz)
                                    </h3>
                                    <div className="bg-slate-50 border-2 border-dashed border-teal-200 rounded-2xl p-12 text-center">
                                        <div className="w-16 h-16 bg-teal-100 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Bookmark className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-700 mb-2">Quiz Comes Here</h4>
                                        <p className="text-slate-500">실전 문제가 곧 업데이트될 예정입니다.</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    )}

                    {/* Section 3: Person / Object Nouns */}
                    {activeTab === "types" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-indigo-300 transition-all shadow-lg hover:shadow-indigo-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/30">
                                03
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 ml-8">사람 vs 사물 명사 (Person vs Object)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">

                                {/* 1. Suffixes */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                        1. 주요 접미사로 구분하기
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                                            <div className="font-bold text-indigo-900 mb-2">사람 명사</div>
                                            <div className="text-sm text-indigo-700 font-mono mb-2">-er, -or, -ist, -ant, -ent, -ee</div>
                                            <p className="text-xs text-slate-500">manager, supervisor, specialist, assistant, employee</p>
                                        </div>
                                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                                            <div className="font-bold text-slate-900 mb-2">사물/개념 명사</div>
                                            <div className="text-sm text-slate-700 font-mono mb-2">-tion, -ment, -ness, -ty, -ance</div>
                                            <p className="text-xs text-slate-500">information, agreement, happiness, reality, guidance</p>
                                        </div>
                                    </div>
                                </div>


                                {/* 2. Pairs List */}

                                {/* 3. Pairs List */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                        2. 빈출 사람 vs 사물 짝꿍 리스트
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { p: "accountant (회계사)", o: "account (계좌) / accounting (회계)" },
                                            { p: "applicant (지원자)", o: "application (지원서)" },
                                            { p: "architect (건축가)", o: "architecture (건축)" },
                                            { p: "assistant (비서/보조)", o: "assistance (도움)" },
                                            { p: "associate (동료/직원)", o: "association (협회/제휴)" },
                                            { p: "attendee / attendant (참석자/안내원)", o: "attendance (참석)" },
                                            { p: "candidate (후보자)", o: "candidacy (입후보)" },
                                            { p: "correspondent (통신원)", o: "correspondence (서신)" },
                                            { p: "developer (개발자)", o: "development (개발)" },
                                            { p: "expert (전문가)", o: "expertise (전문지식)" },
                                            { p: "founder (설립자)", o: "foundation (재단/설립)" },
                                            { p: "investor (투자가)", o: "investment (투자)" },
                                            { p: "manager (관리자)", o: "management (경영/관리)" },
                                            { p: "manufacturer (제조업체)", o: "manufacturing (제조)" },
                                            { p: "participant (참석자)", o: "participation (참석)" },
                                            { p: "photographer (사진사)", o: "photography (사진업)" },
                                            { p: "representative (대표자)", o: "representation (대표/묘사)" },
                                            { p: "resident (거주자)", o: "residence (거주)" },
                                            { p: "supplier (공급업체)", o: "supply (공급)" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col sm:flex-row sm:items-center bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors">
                                                <div className="flex-1 p-3 bg-indigo-50/30 text-indigo-900 font-bold border-b sm:border-b-0 sm:border-r border-indigo-100 text-sm">
                                                    {item.p}
                                                </div>
                                                <div className="flex-1 p-3 text-slate-700 text-sm font-medium">
                                                    {item.o}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. Countability Table */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                        3. 사람 명사 vs 사물 명사 수 일치 정리
                                    </h3>
                                    <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                                                <tr>
                                                    <th className="p-4 whitespace-nowrap">구분</th>
                                                    <th className="p-4 whitespace-nowrap">사람 명사 (Person)</th>
                                                    <th className="p-4 whitespace-nowrap">사물 명사 (Object)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 bg-white">
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">가산 단수</td>
                                                    <td className="p-4 text-indigo-700 font-bold bg-indigo-50/30">a participant, a manager</td>
                                                    <td className="p-4 text-slate-700 font-medium">a tool, a machine, a bag</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">가산 복수</td>
                                                    <td className="p-4 text-indigo-700 font-bold bg-indigo-50/30">participants, managers</td>
                                                    <td className="p-4 text-slate-700 font-medium">tools, machines, bags</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 font-bold text-slate-600 border-r border-slate-50">불가산</td>
                                                    <td className="p-4 text-slate-400 font-medium italic bg-slate-50/30">(해당 없음 - 항상 가산 명사)</td>
                                                    <td className="p-4 text-red-600 font-bold bg-red-50/30">equipment, machinery, luggage</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 4. Confusing Words */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                        4. 헷갈리기 쉬운 특수 형태 (-ive / -ant)
                                    </h3>


                                    <div className="mt-6 overflow-hidden border border-slate-200 rounded-xl">
                                        <table className="w-full text-sm text-left">
                                            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                                                <tr>
                                                    <th className="p-4 whitespace-nowrap w-24">접미사</th>
                                                    <th className="p-4 whitespace-nowrap">단어 (Word)</th>
                                                    <th className="p-4 whitespace-nowrap">의미 (Meaning)</th>
                                                    <th className="p-4 whitespace-nowrap">참고 사항</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 bg-white">
                                                {/* -al */}
                                                <tr className="hover:bg-slate-50/50">
                                                    <td rowSpan={3} className="p-4 font-bold text-indigo-600 bg-indigo-50/10 border-r border-slate-100 align-top">-al</td>
                                                    <td className="p-4 font-bold text-slate-800">proposal</td>
                                                    <td className="p-4 text-slate-600">제안(서)</td>
                                                    <td className="p-4 text-xs text-slate-400">명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">arrival</td>
                                                    <td className="p-4 text-slate-600">도착</td>
                                                    <td className="p-4 text-xs text-slate-400">명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">approval</td>
                                                    <td className="p-4 text-slate-600">승인</td>
                                                    <td className="p-4 text-xs text-slate-400">명사</td>
                                                </tr>

                                                {/* -ive */}
                                                <tr className="border-t border-slate-100 hover:bg-slate-50/50">
                                                    <td rowSpan={5} className="p-4 font-bold text-indigo-600 bg-indigo-50/10 border-r border-slate-100 align-top">-ive</td>
                                                    <td className="p-4 font-bold text-slate-800">initiative</td>
                                                    <td className="p-4 text-slate-600">계획, 주도권</td>
                                                    <td className="p-4 text-xs text-slate-400">명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">alternative</td>
                                                    <td className="p-4 text-slate-600">대안 / 대체 가능한</td>
                                                    <td className="p-4 text-xs text-slate-400">명사 / 형용사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">objective</td>
                                                    <td className="p-4 text-slate-600">목표 / 객관적인</td>
                                                    <td className="p-4 text-xs text-slate-400">명사 / 형용사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">representative</td>
                                                    <td className="p-4 text-slate-600">대표(자) / 대표하는</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사 (가산) / 형용사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">executive</td>
                                                    <td className="p-4 text-slate-600">임원</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사</td>
                                                </tr>

                                                {/* -ant/-ent */}
                                                <tr className="border-t border-slate-100 hover:bg-slate-50/50">
                                                    <td rowSpan={4} className="p-4 font-bold text-indigo-600 bg-indigo-50/10 border-r border-slate-100 align-top">-ant<br />-ent</td>
                                                    <td className="p-4 font-bold text-slate-800">assistant</td>
                                                    <td className="p-4 text-slate-600">보조자</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">resident</td>
                                                    <td className="p-4 text-slate-600">거주자</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">president</td>
                                                    <td className="p-4 text-slate-600">회장</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-4 font-bold text-slate-800">recipient</td>
                                                    <td className="p-4 text-slate-600">수령인</td>
                                                    <td className="p-4 text-xs text-slate-400">사람 명사</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 5. Check-up Quiz Placeholder */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
                                        5. 실전 문제 (Check-up Quiz)
                                    </h3>
                                    <div className="bg-slate-50 border-2 border-dashed border-indigo-200 rounded-2xl p-12 text-center">
                                        <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Bookmark className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-700 mb-2">Quiz Comes Here</h4>
                                        <p className="text-slate-500">실전 문제가 곧 업데이트될 예정입니다.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 4: Compound Nouns */}
                    {activeTab === "compounds" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/10 mb-20 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-cyan-500/30">
                                04
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-8 ml-8">복합 명사 (Compound Nouns)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">

                                {/* 1. Principle */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                                        1. 복합 명사의 형성 원리
                                    </h3>
                                    <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-6">
                                        <p className="mb-4">복합 명사를 이해할 때 반드시 기억해야 할 두 가지 핵심 규칙이 있습니다.</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-xl shadow-sm border border-cyan-100">
                                                <div className="font-bold text-cyan-800 mb-2">① 뒤의 명사가 핵심</div>
                                                <p className="text-sm mb-2">전체 단어의 성격(단수/복수)과 기본 의미는 <strong>뒤에 오는 명사</strong>가 결정합니다.</p>
                                                <div className="text-xs bg-slate-50 p-2 rounded text-slate-600">
                                                    Ex: safety <span className="text-indigo-600 font-bold">standards</span><br />
                                                    (안전 기준들 → 기준이 여러 개)
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl shadow-sm border border-cyan-100">
                                                <div className="font-bold text-cyan-800 mb-2">② 앞의 명사는 형용사 역할</div>
                                                <p className="text-sm mb-2">앞의 명사는 형용사처럼 뒤의 명사를 수식하며, <strong>보통 단수 형태</strong>를 유지합니다.</p>
                                                <div className="text-xs bg-slate-50 p-2 rounded text-slate-600">
                                                    Ex: <span className="line-through text-red-400">shoes</span> store (X) → <span className="text-indigo-600 font-bold">shoe</span> store (O)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Frequent List */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                                        2. 토익 빈출 복합 명사 리스트
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {[
                                            {
                                                cat: "비즈니스, 전략 및 재무 (Business & Finance)",
                                                list: [
                                                    { w: "marketing strategy", m: "마케팅 전략" },
                                                    { w: "advertising campaign", m: "광고 캠페인" },
                                                    { w: "budget surplus", m: "예산 흑자" },
                                                    { w: "budget estimate", m: "예산 추정치" },
                                                    { w: "sales figures", m: "매출 수치" },
                                                    { w: "application form", m: "신청서" }
                                                ]
                                            },
                                            {
                                                cat: "채용 및 인사 (Employment & HR)",
                                                list: [
                                                    { w: "job applicant", m: "취업 지원자" },
                                                    { w: "job vacancy [opening]", m: "일자리 공석" },
                                                    { w: "sales associate", m: "영업 사원" },
                                                    { w: "performance evaluation", m: "인사 고과" },
                                                    { w: "identification card", m: "신분증" },
                                                    { w: "attendance record", m: "출석부" }
                                                ]
                                            },
                                            {
                                                cat: "시설, 안전 및 허가 (Facility, Safety & Permits)",
                                                list: [
                                                    { w: "safety regulations", m: "안전 규정" },
                                                    { w: "safety equipment", m: "안전 장비" },
                                                    { w: "safety procedure", m: "안전 절차" },
                                                    { w: "research facility", m: "연구 시설" },
                                                    { w: "building management", m: "건물 관리" },
                                                    { w: "building permit", m: "건물 허가증" },
                                                    { w: "parking permit", m: "주차 허가증" },
                                                    { w: "expiration date", m: "만료일" }
                                                ]
                                            },
                                            {
                                                cat: "고객, 여행 및 기타 (Customer, Travel & Others)",
                                                list: [
                                                    { w: "client satisfaction", m: "고객 만족" },
                                                    { w: "customer service", m: "고객 서비스" },
                                                    { w: "retail store [location]", m: "소매점 [지점]" },
                                                    { w: "admission fee", m: "입장료" },
                                                    { w: "replacement component", m: "교체 부품" },
                                                    { w: "travel budget", m: "여행 예산" },
                                                    { w: "travel itinerary", m: "여행 일정표" },
                                                    { w: "baggage allowance", m: "수하물 허용 한도" }
                                                ]
                                            }
                                        ].map((group, i) => (
                                            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-50 px-5 py-3 font-bold text-slate-700 text-sm border-b border-slate-200">
                                                    {group.cat}
                                                </div>
                                                <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                                                    {group.list.map((item, j) => (
                                                        <div key={j} className="flex flex-col">
                                                            <span className="font-bold text-cyan-900 text-sm">{item.w}</span>
                                                            <span className="text-xs text-slate-500">{item.m}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. Exceptions */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                                        3. 예외적인 '복수형' 앞 명사 (-s)
                                    </h3>
                                    <div className="p-5 bg-red-50/50 border border-red-100 rounded-2xl">
                                        <p className="mb-4 text-sm text-red-800">관용적으로 <strong>-s</strong>가 붙은 채로 쓰이는 예외들입니다. 고득점을 위해 따로 암기해야 합니다.</p>
                                        <div className="flex flex-wrap gap-3">
                                            {[
                                                { w: "sales representative", m: "영업 사원" },
                                                { w: "savings account", m: "저축 계좌" },
                                                { w: "customs clearance", m: "통관" },
                                                { w: "earnings growth", m: "수익 성장" },
                                                { w: "human resources", m: "인사부" }
                                            ].map((item, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-white border border-red-200 text-red-700 font-bold rounded-lg text-sm shadow-sm">
                                                    {item.w} <span className="font-normal text-red-400 text-xs">({item.m})</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Trap */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                                        4. Part 5 오답 함정 피하기 (형용사 vs 명사)
                                    </h3>
                                    <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Question Example</div>
                                            <div className="font-serif text-lg text-slate-800 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                The company provides a ______ certificate.
                                            </div>
                                            <div className="flex gap-4 text-sm font-mono">
                                                <span className="text-green-600 font-bold">(A) safety</span>
                                                <span className="text-slate-400 line-through">(B) safely</span>
                                                <span className="text-slate-400 line-through">(C) safest</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6 text-sm">
                                            <p className="mb-2"><strong className="text-cyan-700">해설:</strong> 보통 빈칸이 명사 앞이면 형용사 자리라고 생각하기 쉽지만, 여기서는 '안전한 증서'가 아니라 <strong>'안전 수료증'</strong>이라는 하나의 개념이므로 명사인 (A)가 정답입니다.</p>
                                            <div className="bg-yellow-50 p-3 rounded-lg text-yellow-900 text-xs">
                                                <strong>Tip:</strong><br />
                                                형용사+명사 = 명사의 <strong>상태</strong> 설명<br />
                                                명사+명사 = 명사의 <strong>용도/목적</strong> 설명
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5. Check-up Quiz Placeholder */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                                        5. 실전 문제 (Check-up Quiz)
                                    </h3>
                                    <div className="bg-slate-50 border-2 border-dashed border-cyan-200 rounded-2xl p-12 text-center">
                                        <div className="w-16 h-16 bg-cyan-100 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Bookmark className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-700 mb-2">Quiz Comes Here</h4>
                                        <p className="text-slate-500">실전 문제가 곧 업데이트될 예정입니다.</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div >
    );
}
