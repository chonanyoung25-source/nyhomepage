'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertCircle, Menu } from 'lucide-react';

const verbQuizData = [
    {
        id: 1,
        question: "The new software system ------- by the IT department next month.",
        options: ["will install", "will be installed", "will have installed", "installs"],
        correct: 1,
        explanation: "소프트웨어는 '설치되는' 대상이므로 수동태가 필요합니다. 미래 시제이므로 (B) will be installed가 정답입니다."
    },
    {
        id: 2,
        question: "The marketing team ------- a comprehensive strategy for the product launch.",
        options: ["has developed", "have developed", "developing", "develops"],
        correct: 0,
        explanation: "주어 'The marketing team'은 단수 취급하므로 단수 동사인 (A) has developed가 정답입니다."
    },
    {
        id: 3,
        question: "All employees ------- to attend the mandatory training session tomorrow.",
        options: ["requires", "is required", "are required", "requiring"],
        correct: 2,
        explanation: "주어 'All employees'는 복수이며, '요구되는' 의미이므로 수동태 복수형인 (C) are required가 정답입니다."
    },
    {
        id: 4,
        question: "The company ------- significant growth over the past five years.",
        options: ["experienced", "has experienced", "will experience", "experiences"],
        correct: 1,
        explanation: "over the past five years는 현재완료의 대표적인 시간 표현이므로 (B) has experienced가 정답입니다."
    },
    {
        id: 5,
        question: "By the time you arrive, we ------- the meeting room.",
        options: ["prepared", "will prepare", "will have prepared", "have prepared"],
        correct: 2,
        explanation: "By the time은 미래완료 시제의 신호어입니다. (C) will have prepared가 정답입니다."
    }
];

function RotateCw(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
        </svg>
    )
}

export default function VerbsPage() {
    const [activeTab, setActiveTab] = useState("agreement");
    const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const tabs = [
        { id: "agreement", name: "수 일치" },
        { id: "voice", name: "태" },
        { id: "tense", name: "시제" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-200 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-50 to-transparent" />
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-indigo-100 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-indigo-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-indigo-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <RotateCw className="w-4 h-4" />
                        <span>Grammar Strategy 03</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-indigo-900 mb-6 tracking-tight">
                        VERBS
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                        수·태·시제의 3단계 검증으로 동사 형태 결정하기.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">
                    {/* Section 1: Subject-Verb Agreement */}
                    {activeTab === "agreement" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-indigo-300 transition-all shadow-lg hover:shadow-indigo-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/30">
                                01
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">수 일치 (Subject-Verb Agreement)</h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                {/* 기본 원칙 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        1. 기본 원칙: 주어의 수에 동사를 맞춘다
                                    </h3>
                                    <p className="mb-6">동사는 문장의 주어가 단수인지 복수인지에 따라 형태가 달라집니다.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                            <h4 className="font-bold text-indigo-900 mb-3">단수 주어 (Singular)</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                                                    <p>3인칭 단수 현재형: <strong className="text-indigo-700">-s/-es</strong> 붙임</p>
                                                </div>
                                                <div className="bg-white px-4 py-2 rounded-lg text-indigo-700 font-medium">
                                                    The manager <span className="underline">reviews</span> the report.
                                                </div>
                                                <div className="bg-white px-4 py-2 rounded-lg text-indigo-700 font-medium">
                                                    She <span className="underline">has</span> a meeting today.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                            <h4 className="font-bold text-purple-900 mb-3">복수 주어 (Plural)</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                                    <p>복수 현재형: <strong className="text-purple-700">원형</strong> 그대로</p>
                                                </div>
                                                <div className="bg-white px-4 py-2 rounded-lg text-purple-700 font-medium">
                                                    The managers <span className="underline">review</span> the report.
                                                </div>
                                                <div className="bg-white px-4 py-2 rounded-lg text-purple-700 font-medium">
                                                    They <span className="underline">have</span> a meeting today.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 단수 취급하는 주어 */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        2. 항상 단수 취급하는 주어 (Must Memorize!)
                                    </h3>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
                                        <div className="flex gap-3">
                                            <span className="text-2xl">⚠️</span>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-yellow-900 mb-3">토익 빈출 함정!</h4>
                                                <p className="text-sm text-yellow-800 mb-4">
                                                    아래 주어들은 <strong>복수처럼 보이지만 단수 취급</strong>합니다.
                                                </p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {[
                                                        { word: "each", ex: "Each employee has..." },
                                                        { word: "every", ex: "Every day is..." },
                                                        { word: "either / neither", ex: "Either option is..." },
                                                        { word: "one", ex: "One of them is..." },
                                                        { word: "-body / -one", ex: "Somebody knows..." },
                                                        { word: "-thing", ex: "Everything is..." },
                                                        { word: "the + 단수명사", ex: "The team has..." },
                                                        { word: "불가산 명사", ex: "Information is..." }
                                                    ].map((item, i) => (
                                                        <div key={i} className="bg-white p-3 rounded-lg">
                                                            <div className="font-bold text-indigo-700 mb-1">{item.word}</div>
                                                            <div className="text-xs text-slate-600">{item.ex}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 복수 취급 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        3. 항상 복수 취급하는 주어
                                    </h3>

                                    <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {[
                                                { word: "both", ex: "Both are correct." },
                                                { word: "many / few", ex: "Many have applied." },
                                                { word: "several", ex: "Several were damaged." },
                                                { word: "A and B", ex: "Tom and Mary are..." },
                                                { word: "people", ex: "People are waiting." },
                                                { word: "the + 복수명사", ex: "The employees are..." }
                                            ].map((item, i) => (
                                                <div key={i} className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                                                    <div className="font-bold text-purple-700 mb-2">{item.word}</div>
                                                    <div className="text-sm text-slate-600">{item.ex}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Quiz */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        4. 실전 문제 (Check-up Quiz)
                                    </h3>

                                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                        {(() => {
                                            const quiz = verbQuizData[currentQuestionIndex];
                                            const isAnswered = quizAnswers[quiz.id] !== undefined;
                                            const isCorrect = isAnswered && quizAnswers[quiz.id] === quiz.correct;

                                            return (
                                                <div key={quiz.id} className="animate-fade-in">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                                                Question {currentQuestionIndex + 1} / {verbQuizData.length}
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
                                                                    : 'bg-slate-50 text-slate-600 hover:bg-white hover:shadow-md hover:border-indigo-200 border border-transparent'
                                                                    }`}
                                                            >
                                                                <div className="flex items-center">
                                                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold transition-colors ${quizAnswers[quiz.id] === idx
                                                                        ? isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                                                                        : 'bg-slate-200 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'
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
                                                            onClick={() => setCurrentQuestionIndex(prev => Math.min(verbQuizData.length - 1, prev + 1))}
                                                            disabled={currentQuestionIndex === verbQuizData.length - 1}
                                                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${currentQuestionIndex === verbQuizData.length - 1
                                                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40'
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
                        </section>
                    )}

                    {/* Section 2: Voice */}
                    {activeTab === "voice" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-indigo-300 transition-all shadow-lg hover:shadow-indigo-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-500/30">
                                02
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">태 (Voice: Active vs Passive)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                {/* 능동태 vs 수동태 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        1. 능동태 vs 수동태 구분법
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                능동태 (Active Voice)
                                            </h4>
                                            <div className="space-y-3 text-sm">
                                                <p><strong>의미:</strong> 주어가 동작을 <span className="text-blue-700 font-bold">직접 수행</span></p>
                                                <p><strong>형태:</strong> 일반 동사</p>
                                                <div className="bg-white px-4 py-3 rounded-lg">
                                                    <div className="text-blue-700 font-medium mb-1">The company <span className="underline">hired</span> ten employees.</div>
                                                    <div className="text-xs text-slate-500">회사가 직원 10명을 고용했다.</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                            <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                                                <AlertCircle className="w-5 h-5" />
                                                수동태 (Passive Voice)
                                            </h4>
                                            <div className="space-y-3 text-sm">
                                                <p><strong>의미:</strong> 주어가 동작을 <span className="text-purple-700 font-bold">당하거나 받음</span></p>
                                                <p><strong>형태:</strong> be + p.p. (과거분사)</p>
                                                <div className="bg-white px-4 py-3 rounded-lg">
                                                    <div className="text-purple-700 font-medium mb-1">Ten employees <span className="underline">were hired</span> by the company.</div>
                                                    <div className="text-xs text-slate-500">직원 10명이 회사에 의해 고용되었다.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 수동태 형태 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        2. 수동태 시제별 형태
                                    </h3>

                                    <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-white shadow-sm">
                                        <table className="w-full text-sm">
                                            <thead className="bg-indigo-50 text-indigo-700 font-bold uppercase text-xs">
                                                <tr>
                                                    <th className="p-4 text-left">시제</th>
                                                    <th className="p-4 text-left">수동태 형태</th>
                                                    <th className="p-4 text-left">예시</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {[
                                                    { tense: "현재", form: "am/is/are + p.p.", ex: "is reviewed" },
                                                    { tense: "과거", form: "was/were + p.p.", ex: "was reviewed" },
                                                    { tense: "미래", form: "will be + p.p.", ex: "will be reviewed" },
                                                    { tense: "현재완료", form: "has/have been + p.p.", ex: "has been reviewed" },
                                                    { tense: "과거완료", form: "had been + p.p.", ex: "had been reviewed" },
                                                    { tense: "조동사", form: "조동사 + be + p.p.", ex: "should be reviewed" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                                                        <td className="p-4 font-medium text-slate-700">{row.tense}</td>
                                                        <td className="p-4 font-mono text-indigo-600">{row.form}</td>
                                                        <td className="p-4 text-slate-600">{row.ex}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 수동태가 많이 쓰이는 동사 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                                        3. 토익 빈출 수동태 동사
                                    </h3>

                                    <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                                        <div className="flex gap-3 mb-4">
                                            <span className="text-2xl">🎯</span>
                                            <div>
                                                <h4 className="font-bold text-red-900 mb-2">반드시 암기할 동사들</h4>
                                                <p className="text-sm text-red-800">아래 동사들은 토익에서 <strong>수동태로 자주 출제</strong>됩니다.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {[
                                                { v: "install", m: "설치되다" },
                                                { v: "distribute", m: "배포되다" },
                                                { v: "require", m: "요구되다" },
                                                { v: "recommend", m: "추천되다" },
                                                { v: "expect", m: "예상되다" },
                                                { v: "locate", m: "위치하다" },
                                                { v: "approve", m: "승인되다" },
                                                { v: "complete", m: "완료되다" },
                                                { v: "submit", m: "제출되다" },
                                                { v: "deliver", m: "배달되다" },
                                                { v: "postpone", m: "연기되다" },
                                                { v: "cancel", m: "취소되다" }
                                            ].map((item, i) => (
                                                <div key={i} className="bg-white p-3 rounded-lg border border-red-100">
                                                    <div className="font-bold text-indigo-700 text-sm">{item.v}</div>
                                                    <div className="text-xs text-slate-500">{item.m}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 3: Tense */}
                    {activeTab === "tense" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-indigo-300 transition-all shadow-lg hover:shadow-indigo-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-400/30">
                                03
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">시제 (Tense)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                {/* 시제 개요 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-400 rounded-full" />
                                        1. 시제 결정 원칙
                                    </h3>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
                                        <div className="flex gap-3">
                                            <span className="text-2xl">💡</span>
                                            <div>
                                                <h4 className="font-bold text-yellow-900 mb-2">시제 선택 전략</h4>
                                                <p className="text-sm text-yellow-800">
                                                    문장 내 <strong>시간 표현</strong>을 찾아 시제를 결정합니다.<br />
                                                    시간 표현이 없다면 <strong>문맥</strong>을 파악합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        {[
                                            {
                                                title: "현재 (Present)",
                                                signals: "always, usually, every day, now",
                                                ex: "The company always hires experienced staff."
                                            },
                                            {
                                                title: "과거 (Past)",
                                                signals: "yesterday, last week, ago, in 2020",
                                                ex: "We launched the product last month."
                                            },
                                            {
                                                title: "미래 (Future)",
                                                signals: "tomorrow, next week, soon, in the future",
                                                ex: "The meeting will start at 3 PM."
                                            },
                                            {
                                                title: "현재완료 (Present Perfect)",
                                                signals: "since, for, recently, already, yet, just",
                                                ex: "I have worked here for five years."
                                            },
                                            {
                                                title: "과거완료 (Past Perfect)",
                                                signals: "by the time, before, after",
                                                ex: "By 2020, we had expanded globally."
                                            },
                                            {
                                                title: "미래완료 (Future Perfect)",
                                                signals: "by (미래시점)",
                                                ex: "By next year, we will have completed the project."
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                                        <span className="font-bold text-indigo-600">{i + 1}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                                        <div className="mb-3">
                                                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">신호어:</span>
                                                            <span className="text-sm text-slate-600 ml-2">{item.signals}</span>
                                                        </div>
                                                        <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                                                            <span className="text-sm font-medium text-indigo-700">{item.ex}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 완료 시제 심화 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-indigo-400 rounded-full" />
                                        2. 완료 시제 핵심 포인트
                                    </h3>

                                    <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm">
                                        <div className="space-y-4">
                                            <div className="p-4 bg-indigo-50 rounded-xl">
                                                <h5 className="font-bold text-indigo-900 mb-2">현재완료 (have/has + p.p.)</h5>
                                                <ul className="text-sm space-y-2 text-slate-600">
                                                    <li>✓ <strong>경험:</strong> I have visited Paris twice.</li>
                                                    <li>✓ <strong>계속:</strong> She has worked here since 2015.</li>
                                                    <li>✓ <strong>완료:</strong> We have just finished the report.</li>
                                                    <li>✓ <strong>결과:</strong> He has lost his key. (지금도 없음)</li>
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-purple-50 rounded-xl">
                                                <h5 className="font-bold text-purple-900 mb-2">과거완료 (had + p.p.)</h5>
                                                <ul className="text-sm space-y-2 text-slate-600">
                                                    <li>✓ <strong>대과거:</strong> 과거보다 더 이전의 일</li>
                                                    <li>✓ When I arrived, the meeting <span className="text-purple-700 font-bold">had already started</span>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-24 text-center py-12 border-t border-slate-200">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em] mb-4">Grammar Mastery Series</p>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mb-6">The Core Balance-TOEIC</h4>
                    <div className="inline-flex items-center gap-4 text-xs font-bold text-slate-500 border border-slate-200 px-6 py-2 rounded-full bg-white shadow-sm">
                        <span>Verbs Guide</span>
                        <span className="text-indigo-600">完</span>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fadeIn 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
