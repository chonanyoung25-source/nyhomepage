'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookCheck, CheckCircle2, AlertCircle, Bookmark, Menu } from 'lucide-react';

const pronounQuizData = [
    {
        id: 1,
        question: "The committee members shared ------- opinions about the proposed changes.",
        options: ["they", "their", "them", "theirs"],
        correct: 1,
        explanation: "뒤에 명사(opinions)가 오므로 소유격인 (B) their가 정답입니다."
    },
    {
        id: 2,
        question: "Each employee must submit ------- expense report by Friday.",
        options: ["his or her", "their", "them", "theirs"],
        correct: 0,
        explanation: "Each는 단수 취급하므로 단수 소유격인 (A) his or her가 정답입니다."
    },
    {
        id: 3,
        question: "The manager asked the team to complete the project by -------.",
        options: ["they", "their", "them", "themselves"],
        correct: 3,
        explanation: "by + 재귀대명사(~ 스스로)의 관용 표현이므로 (D) themselves가 정답입니다."
    },
    {
        id: 4,
        question: "If you have any questions, please direct ------- to the customer service department.",
        options: ["they", "their", "them", "theirs"],
        correct: 2,
        explanation: "타동사 direct의 목적어 자리이므로 목적격인 (C) them이 정답입니다."
    },
    {
        id: 5,
        question: "The new policy will affect all employees, including ------- who work remotely.",
        options: ["they", "their", "those", "theirs"],
        correct: 2,
        explanation: "뒤에 관계절(who work remotely)이 오므로 지시대명사 (C) those가 정답입니다."
    }
];

export default function PronounsPage() {
    const [activeTab, setActiveTab] = useState("cases");
    const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const tabs = [
        { id: "cases", name: "인칭대명사" },
        { id: "demonstrative", name: "지시대명사" },
        { id: "indefinite", name: "부정대명사" }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-teal-200 overflow-x-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-50 to-transparent" />
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
                {/* Navigation Bar */}
                <nav className="flex justify-between items-center mb-12 sticky top-6 z-50">
                    <Link href="/reading/grammar" className="flex items-center gap-3 px-7 py-3 border border-teal-100 rounded-full bg-white/70 backdrop-blur-md hover:bg-white hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] transition-all group shadow-sm">
                        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-teal-600 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-teal-600 transition-colors">Back</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/50 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-teal-600 text-white shadow-md'
                                        : 'text-slate-500 hover:text-teal-600 hover:bg-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <button className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-teal-600 hover:border-teal-400 hover:shadow-md transition-all">
                        <Menu className="w-4 h-4" />
                    </button>
                </nav>

                {/* Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
                        <BookCheck className="w-4 h-4" />
                        <span>Grammar Strategy 02</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-teal-900 mb-6 tracking-tight">
                        PRONOUNS
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                        대명사 격 변화와 지칭 추론 완벽 가이드.
                    </p>
                </header>

                {/* Content Sections */}
                <div className="grid grid-cols-1 gap-12 min-h-[400px]">
                    {/* Section 1: Pronoun Cases */}
                    {activeTab === "cases" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
                                01
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">대명사 격 변화 (Pronoun Cases)</h2>
                            <div className="ml-8 space-y-8 text-slate-600 leading-relaxed">
                                {/* 인칭대명사 표 */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        1. 인칭대명사 격 변화표
                                    </h3>
                                    <p className="mb-6">인칭대명사는 문장에서의 역할에 따라 주격, 목적격, 소유격, 소유대명사로 변화합니다.</p>

                                    <div className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
                                        <table className="w-full text-sm">
                                            <thead className="bg-teal-50 text-teal-700 font-bold uppercase text-xs">
                                                <tr>
                                                    <th className="p-4 text-left" colSpan={2}>구분</th>
                                                    <th className="p-4">주격<br />(Subjective)</th>
                                                    <th className="p-4">소유격<br />(Possessive)</th>
                                                    <th className="p-4">목적격<br />(Objective)</th>
                                                    <th className="p-4">소유대명사<br />(Poss. Pronoun)</th>
                                                    <th className="p-4">재귀대명사<br />(Reflexive)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr className="bg-slate-50 text-slate-600 text-xs italic">
                                                    <td className="p-3 font-medium text-left" colSpan={2}>해석</td>
                                                    <td className="p-3 text-center">~은/는/이/가</td>
                                                    <td className="p-3 text-center">~의</td>
                                                    <td className="p-3 text-center">~을/를/에게</td>
                                                    <td className="p-3 text-center">~의 것</td>
                                                    <td className="p-3 text-center">~ 자신, 스스로</td>
                                                </tr>

                                                {/* 1인칭 */}
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-bold text-teal-800 bg-teal-50/50 text-center border-r border-teal-100" rowSpan={2}>1인칭</td>
                                                    <td className="p-4 font-medium text-slate-600">단수</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">I</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">my</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">me</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">mine</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">myself</td>
                                                </tr>
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-medium text-slate-600">복수</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">we</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">our</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">us</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">ours</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">ourselves</td>
                                                </tr>

                                                {/* 2인칭 */}
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-bold text-teal-800 bg-teal-50/50 text-center border-r border-teal-100" rowSpan={2}>2인칭</td>
                                                    <td className="p-4 font-medium text-slate-600">단수</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">you</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">your</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">you</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">yours</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">yourself</td>
                                                </tr>
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-medium text-slate-600">복수</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">you</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">your</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">you</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">yours</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">yourselves</td>
                                                </tr>

                                                {/* 3인칭 */}
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-bold text-teal-800 bg-teal-50/50 text-center border-r border-teal-100" rowSpan={4}>3인칭</td>
                                                    <td className="p-4 font-medium text-slate-600">단수 (남)</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">he</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">his</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">him</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">his</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">himself</td>
                                                </tr>
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-medium text-slate-600">단수 (여)</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">she</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">her</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">her</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">hers</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">herself</td>
                                                </tr>
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-medium text-slate-600">단수 (사물)</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">it</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">its</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">it</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">-</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">itself</td>
                                                </tr>
                                                <tr className="hover:bg-teal-50/30 transition-colors">
                                                    <td className="p-4 font-medium text-slate-600">복수</td>
                                                    <td className="p-4 text-center font-mono text-blue-600">they</td>
                                                    <td className="p-4 text-center font-mono text-teal-600">their</td>
                                                    <td className="p-4 text-center font-mono text-purple-600">them</td>
                                                    <td className="p-4 text-center font-mono text-indigo-600">theirs</td>
                                                    <td className="p-4 text-center font-mono text-orange-600">themselves</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 격별 설명 */}
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: "주격 (Subject)",
                                                color: "blue",
                                                desc: "동사 앞에서 주어 역할",
                                                ex: "I / he / she / they work.",
                                                rule: "be동사/일반동사 앞"
                                            },
                                            {
                                                title: "목적격 (Object)",
                                                color: "purple",
                                                desc: "동사/전치사 뒤에서 목적어 역할",
                                                ex: "for me / with him / call them",
                                                rule: "전치사 뒤, 타동사 뒤"
                                            },
                                            {
                                                title: "소유격 (Possessive)",
                                                color: "teal",
                                                desc: "뒤에 명사를 수식",
                                                ex: "my book / their office",
                                                rule: "반드시 뒤에 명사"
                                            },
                                            {
                                                title: "소유대명사 (Poss. Pronoun)",
                                                color: "indigo",
                                                desc: "단독으로 사용 (= 소유격 + 명사)",
                                                ex: "This is mine. (= my book)",
                                                rule: "뒤에 명사 없음"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-5 bg-${item.color}-50 rounded-2xl border border-${item.color}-100`}>
                                                <h4 className={`font-bold text-${item.color}-900 mb-2`}>{item.title}</h4>
                                                <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                                <div className={`text-sm font-medium text-${item.color}-700 bg-white px-3 py-2 rounded-lg mb-2`}>
                                                    예: {item.ex}
                                                </div>
                                                <div className="text-xs text-slate-500">
                                                    ✓ {item.rule}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 문장 내 역할과 자리 */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        2. 문장 내 역할과 자리 (Syntax Positions)
                                    </h3>
                                    <p className="mb-6 text-slate-600">
                                        대명사 문제는 해석보다 <strong className="text-teal-700">빈칸의 앞뒤 성분을 보고 자리를 찾는 것</strong>이 핵심입니다.
                                    </p>

                                    <div className="space-y-5">
                                        {[
                                            {
                                                num: "①",
                                                title: "주격: 주어 자리",
                                                position: "동사 앞",
                                                feature: "문장의 주인공 역할을 합니다.",
                                                example: "They will attend the seminar tomorrow.",
                                                color: "blue"
                                            },
                                            {
                                                num: "②",
                                                title: "소유격: 형용사 자리",
                                                position: "명사 바로 앞",
                                                feature: "단독으로 쓰일 수 없으며, 반드시 뒤에 수식받는 명사가 와야 합니다. (관사 a, an, the와 함께 쓰지 않음)",
                                                example: "Please submit your report by Friday. (your report = 소유격+명사)",
                                                color: "teal"
                                            },
                                            {
                                                num: "③",
                                                title: "목적격: 목적어 자리",
                                                position: "타동사 뒤 또는 전치사 뒤",
                                                feature: "동작의 대상이 됩니다.",
                                                example: "Ms. Lee called him yesterday. / I'm looking for it.",
                                                color: "purple"
                                            },
                                            {
                                                num: "④",
                                                title: "소유대명사: 명사 자리",
                                                position: "주어, 목적어, 보어 자리 (소유격+명사 역할을 한 번에 수행)",
                                                feature: "\"누구의 것\"이라는 의미이며, 뒤에 명사를 또 쓰지 않습니다.",
                                                example: "Your laptop is new, but mine is old. (mine = my laptop)",
                                                color: "indigo"
                                            },
                                            {
                                                num: "⑤",
                                                title: "재귀대명사: 목적어 또는 부사 자리",
                                                position: "재귀 용법: 주어와 목적어가 같을 때 (동사/전치사 뒤)",
                                                feature: "",
                                                example: "He cut himself while cooking.",
                                                color: "orange",
                                                hasExtra: true,
                                                extraPosition: "강조 용법: 주어나 목적어를 강조할 때 (문장 맨 끝 또는 강조 대상 뒤)",
                                                extraExample: "I built the website myself. (강조, 생략 가능)"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 bg-white rounded-2xl border border-${item.color}-100 hover:border-${item.color}-200 transition-all shadow-sm hover:shadow-md`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-10 h-10 rounded-xl bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                                                        <span className={`font-bold text-${item.color}-700 text-lg`}>{item.num}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className={`font-bold text-${item.color}-900 mb-3 text-lg`}>{item.title}</h4>

                                                        <div className="space-y-3">
                                                            <div className="flex items-start gap-2">
                                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[60px] mt-0.5">위치:</span>
                                                                <p className={`text-sm text-${item.color}-700 font-medium`}>{item.position}</p>
                                                            </div>

                                                            {item.feature && (
                                                                <div className="flex items-start gap-2">
                                                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[60px] mt-0.5">특징:</span>
                                                                    <p className="text-sm text-slate-600">{item.feature}</p>
                                                                </div>
                                                            )}

                                                            <div className="flex items-start gap-2">
                                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[60px] mt-0.5">Example:</span>
                                                                <div className={`flex-1 bg-${item.color}-50 px-4 py-2 rounded-lg border border-${item.color}-100`}>
                                                                    <p className={`text-sm font-medium text-${item.color}-800`}>{item.example}</p>
                                                                </div>
                                                            </div>

                                                            {item.hasExtra && (
                                                                <>
                                                                    <div className="flex items-start gap-2 mt-4">
                                                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[60px] mt-0.5">위치:</span>
                                                                        <p className={`text-sm text-${item.color}-700 font-medium`}>{item.extraPosition}</p>
                                                                    </div>
                                                                    <div className="flex items-start gap-2">
                                                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[60px] mt-0.5">Example:</span>
                                                                        <div className={`flex-1 bg-${item.color}-50 px-4 py-2 rounded-lg border border-${item.color}-100`}>
                                                                            <p className={`text-sm font-medium text-${item.color}-800`}>{item.extraExample}</p>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Check-up Quiz */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        3. 실전 문제 (Check-up Quiz)
                                    </h3>

                                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                        {(() => {
                                            const quiz = pronounQuizData[currentQuestionIndex];
                                            const isAnswered = quizAnswers[quiz.id] !== undefined;
                                            const isCorrect = isAnswered && quizAnswers[quiz.id] === quiz.correct;

                                            return (
                                                <div key={quiz.id} className="animate-fade-in">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                                                Question {currentQuestionIndex + 1} / {pronounQuizData.length}
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
                                                                    : 'bg-slate-50 text-slate-600 hover:bg-white hover:shadow-md hover:border-teal-200 border border-transparent'
                                                                    }`}
                                                            >
                                                                <div className="flex items-center">
                                                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold transition-colors ${quizAnswers[quiz.id] === idx
                                                                        ? isCorrect ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                                                                        : 'bg-slate-200 text-slate-500 group-hover:bg-teal-100 group-hover:text-teal-600'
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
                                                            onClick={() => setCurrentQuestionIndex(prev => Math.min(pronounQuizData.length - 1, prev + 1))}
                                                            disabled={currentQuestionIndex === pronounQuizData.length - 1}
                                                            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${currentQuestionIndex === pronounQuizData.length - 1
                                                                ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40'
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

                    {/* Section 2: Reflexive Pronouns */}
                    {activeTab === "reflexive" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-500/30">
                                02
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">재귀대명사 (Reflexive Pronouns)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        1. 재귀대명사 형태
                                    </h3>

                                    <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm mb-6">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {[
                                                { base: "I", ref: "myself" },
                                                { base: "you", ref: "yourself/yourselves" },
                                                { base: "he", ref: "himself" },
                                                { base: "she", ref: "herself" },
                                                { base: "it", ref: "itself" },
                                                { base: "we", ref: "ourselves" },
                                                { base: "they", ref: "themselves" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex flex-col items-center p-4 bg-teal-50 rounded-xl border border-teal-100">
                                                    <span className="text-sm text-slate-500 mb-1">{item.base}</span>
                                                    <span className="text-lg font-bold text-teal-700">{item.ref}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 mt-12">
                                        <span className="w-1.5 h-6 bg-teal-500 rounded-full" />
                                        2. 재귀대명사의 용법
                                    </h3>

                                    <div className="grid grid-cols-1 gap-6">
                                        {[
                                            {
                                                title: "재귀 용법 (Reflexive)",
                                                desc: "주어와 목적어가 동일한 경우",
                                                ex: "She introduced herself to the team.",
                                                note: "주어 = 목적어"
                                            },
                                            {
                                                title: "강조 용법 (Emphatic)",
                                                desc: "'바로 그 사람이, 직접'의 의미로 강조",
                                                ex: "The CEO himself attended the meeting.",
                                                note: "생략 가능하지만 강조"
                                            },
                                            {
                                                title: "관용 표현",
                                                desc: "by oneself (혼자서), for oneself (스스로)",
                                                ex: "Please complete the form by yourself.",
                                                note: "암기 필수"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-teal-200 transition-colors">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                        <span className="font-bold text-teal-600">{i + 1}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                                        <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                                        <div className="bg-teal-50 px-4 py-2 rounded-lg mb-2">
                                                            <span className="text-sm font-medium text-teal-700">예: {item.ex}</span>
                                                        </div>
                                                        <div className="text-xs text-teal-600">💡 {item.note}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 3: Demonstrative Pronouns */}
                    {activeTab === "demonstrative" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-400/30">
                                03
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">지시대명사 (Demonstrative Pronouns)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-400 rounded-full" />
                                        1. 지시대명사 종류
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            {
                                                title: "this / these",
                                                desc: "가까운 것 (단수 / 복수)",
                                                ex: "This is my office. / These are our products.",
                                                color: "blue"
                                            },
                                            {
                                                title: "that / those",
                                                desc: "먼 것, 앞서 언급한 것 (단수 / 복수)",
                                                ex: "That was a great presentation. / Those who attend...",
                                                color: "purple"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 bg-${item.color}-50 rounded-2xl border border-${item.color}-100`}>
                                                <h4 className={`font-bold text-${item.color}-900 mb-2 text-lg`}>{item.title}</h4>
                                                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                                                <div className="bg-white px-4 py-3 rounded-lg">
                                                    <span className={`text-sm font-medium text-${item.color}-700`}>{item.ex}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                                        <div className="flex gap-3">
                                            <span className="text-2xl">⚠️</span>
                                            <div>
                                                <h4 className="font-bold text-yellow-900 mb-2">토익 핵심 포인트</h4>
                                                <p className="text-sm text-yellow-800">
                                                    <strong>those who ~</strong> = ~하는 사람들 (복수)<br />
                                                    <strong>that of ~</strong> = ~의 것 (단수)
                                                </p>
                                                <div className="mt-3 bg-white px-3 py-2 rounded-lg text-sm text-yellow-900">
                                                    예: Those who complete the survey will receive a gift.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Section 4: Indefinite Pronouns */}
                    {activeTab === "indefinite" && (
                        <section className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] hover:border-teal-300 transition-all shadow-lg hover:shadow-teal-500/10 animate-fade-in-up">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-300 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-300/30">
                                04
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 ml-8">부정대명사 (Indefinite Pronouns)</h2>

                            <div className="ml-8 space-y-12 text-slate-600 leading-relaxed">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-teal-300 rounded-full" />
                                        1. 주요 부정대명사
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            {
                                                title: "one / ones",
                                                desc: "앞에 나온 명사를 대신",
                                                ex: "I need a pen. Do you have one?",
                                                note: "단수 / 복수"
                                            },
                                            {
                                                title: "another",
                                                desc: "또 다른 하나 (단수)",
                                                ex: "Please give me another.",
                                                note: "= an + other"
                                            },
                                            {
                                                title: "other / others",
                                                desc: "다른 것(들)",
                                                ex: "Some like this, others prefer that.",
                                                note: "기타 것들"
                                            },
                                            {
                                                title: "each / every",
                                                desc: "각각 / 모든 (단수 취급)",
                                                ex: "Each has its own benefits.",
                                                note: "단수 동사"
                                            },
                                            {
                                                title: "both / all",
                                                desc: "둘 다 / 모두 (복수 취급)",
                                                ex: "Both are acceptable.",
                                                note: "복수 동사"
                                            },
                                            {
                                                title: "some / any",
                                                desc: "몇몇 / 어떤 것",
                                                ex: "Some are damaged.",
                                                note: "긍정문 / 부정·의문문"
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="p-5 bg-white rounded-2xl border border-teal-100 hover:border-teal-300 transition-colors">
                                                <h4 className="font-bold text-teal-900 mb-2">{item.title}</h4>
                                                <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                                <div className="bg-teal-50 px-3 py-2 rounded-lg mb-2 text-sm text-teal-700">
                                                    {item.ex}
                                                </div>
                                                <div className="text-xs text-teal-600">💡 {item.note}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 bg-red-50 border border-red-100 rounded-2xl p-6">
                                        <div className="flex gap-3">
                                            <span className="text-2xl">🚨</span>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-red-900 mb-3">주의! 단수 vs 복수 취급</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                    <div className="bg-white p-4 rounded-lg">
                                                        <div className="font-bold text-green-700 mb-2">✓ 단수 취급</div>
                                                        <div className="space-y-1 text-slate-700">
                                                            <div>- each, every, either, neither</div>
                                                            <div>- one, another</div>
                                                            <div className="text-xs text-green-600 mt-2">→ 단수 동사 사용</div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-lg">
                                                        <div className="font-bold text-blue-700 mb-2">✓ 복수 취급</div>
                                                        <div className="space-y-1 text-slate-700">
                                                            <div>- both, many, few</div>
                                                            <div>- several, others</div>
                                                            <div className="text-xs text-blue-600 mt-2">→ 복수 동사 사용</div>
                                                        </div>
                                                    </div>
                                                </div>
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
                        <span>Pronouns Guide</span>
                        <span className="text-teal-600">完</span>
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
