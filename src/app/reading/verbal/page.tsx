'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Quote, Sparkles, Layers, CheckCircle2, ArrowRight, Activity, Infinity } from 'lucide-react';

export default function VerbalPage() {
    const [activeTab, setActiveTab] = useState<'to-infinitive' | 'gerund' | 'participle'>('to-infinitive');

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1e293b]">
            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/reading#part6" className="p-2 rounded-full hover:bg-slate-100 transition-colors group">
                            <ArrowLeft className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                        </Link>
                        <h1 className="text-2xl font-bold text-[#1e3a8a] tracking-tight">준동사 (Verbal)</h1>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center relative">
                    {/* Decorative blur behind title */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none" />

                    <div className="inline-flex items-center justify-center p-2 mb-4 bg-blue-50 rounded-full text-blue-600 font-bold text-sm tracking-widest uppercase">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Key Concept
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[#1e3a8a] mb-6 tracking-tighter relative z-10">
                        Verbal Concepts
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        동사의 성질을 가지면서도 다른 품사 역할을 하는<br />
                        <span className="text-blue-600 font-semibold">준동사</span>를 완벽하게 마스터하세요.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1.5 rounded-full inline-flex relative shadow-[0_2px_10px_rgba(30,58,138,0.1)] border border-slate-100">
                        <button
                            onClick={() => setActiveTab('to-infinitive')}
                            className={`relative px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${activeTab === 'to-infinitive'
                                ? 'bg-[#1e3a8a] text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                        >
                            to 부정사
                        </button>
                        <button
                            onClick={() => setActiveTab('gerund')}
                            className={`relative px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${activeTab === 'gerund'
                                ? 'bg-[#1e3a8a] text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                        >
                            동명사
                        </button>
                        <button
                            onClick={() => setActiveTab('participle')}
                            className={`relative px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${activeTab === 'participle'
                                ? 'bg-[#1e3a8a] text-white shadow-md'
                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                }`}
                        >
                            분사
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-2xl border border-slate-100 min-h-[600px] flex items-center justify-center relative overflow-hidden group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                    </div>

                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400 opacity-50" />

                    {activeTab === 'to-infinitive' && (
                        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-left space-y-8">

                            {/* Definition Banner */}
                            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] rounded-[32px] p-8 mb-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Infinity className="w-6 h-6 text-blue-200" />
                                            <h3 className="text-3xl font-black text-white tracking-tight">to 부정사</h3>
                                        </div>
                                        <p className="text-blue-100 font-medium">동사의 성질 + 명사·형용사·부사의 역할</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                                        <p className="text-white font-mono font-bold">to + V</p>
                                    </div>
                                </div>
                            </div>

                            {/* 1. Noun Usage */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 font-bold">N</div>
                                    <h4 className="text-xl font-bold text-slate-800">명사적 용법</h4>
                                </div>
                                <div className="space-y-8">
                                    {/* 1. Subject Role */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div> 1. 주어 역할 <span className="text-slate-500 text-sm font-normal">(~하는 것은)</span>
                                        </h5>
                                        <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                            문장의 맨 앞에서 주인공 역할을 합니다.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2">
                                            <p className="font-medium text-slate-700">To learn English is fun. <span className="text-slate-500 font-normal">(영어를 배우는 것은 재미있다.)</span></p>
                                            <p className="font-medium text-slate-700">To exercise every day is not easy. <span className="text-slate-500 font-normal">(매일 운동하는 것은 쉽지 않다.)</span></p>
                                        </div>

                                        {/* Tip */}
                                        <div className="ml-4 bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3">
                                            <div className="shrink-0 text-xl">💡</div>
                                            <div className="text-sm text-slate-700 w-full">
                                                <span className="font-bold text-yellow-800 block mb-1">팁 (가주어 It)</span>
                                                <p className="leading-relaxed mb-3">주어가 너무 길어지면 머리가 큰 가분수 문장이 되어버려요. 그래서 주어 자리에 가짜 주어 It을 세우고, 진짜 주어(to 부정사)는 뒤로 보내는 경우가 많습니다.</p>
                                                <div className="bg-white/60 p-2 rounded text-slate-800 font-medium border border-yellow-200/50 mb-4">
                                                    It is fun to learn English.
                                                </div>

                                                <div className="border-t border-yellow-200 pt-3 mt-3">
                                                    <span className="font-bold text-yellow-800 block mb-2">가주어/진주어 구조</span>
                                                    <div className="bg-white/80 p-2.5 rounded-lg border border-yellow-200/50 text-center mb-3">
                                                        <span className="font-serif italic text-yellow-900 font-bold">It</span> is <span className="text-yellow-700 font-bold">형용사</span> (to V / that S + V)
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {['difficult', 'hard', 'easy', 'possible', 'important', 'necessary', 'convenient', 'safe'].map((word) => (
                                                            <span key={word} className="px-3 py-1.5 bg-white rounded-lg text-slate-700 text-sm font-medium border-2 border-yellow-100 shadow-sm">
                                                                {word}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="overflow-hidden rounded-xl border border-yellow-200/60 shadow-sm bg-white">
                                                        <table className="w-full text-left text-sm">
                                                            <thead className="bg-yellow-50/50 text-yellow-900 border-b border-yellow-100">
                                                                <tr>
                                                                    <th className="p-3 font-bold whitespace-nowrap">형용사</th>
                                                                    <th className="p-3 font-bold">예문 (English)</th>
                                                                    <th className="p-3 font-bold">해석 (Korean)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-yellow-100/50">
                                                                {[
                                                                    { word: 'difficult', en: 'It is difficult to learn a new language.', ko: '외국어를 배우는 것은 어렵다.' },
                                                                    { word: 'important', en: 'It is important to exercise every day.', ko: '매일 운동하는 것은 중요하다.' },
                                                                    { word: 'safe', en: 'It is safe to cross the street here.', ko: '여기서 길을 건너는 것은 안전하다.' },
                                                                ].map((item) => (
                                                                    <tr key={item.word} className="hover:bg-yellow-50/30 transition-colors">
                                                                        <td className="p-3 font-bold text-slate-700 bg-yellow-50/10">{item.word}</td>
                                                                        <td className="p-3 text-slate-600 font-medium">{item.en}</td>
                                                                        <td className="p-3 text-slate-500 break-keep">{item.ko}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. Object Role */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div> 2. 목적어 역할 <span className="text-slate-500 text-sm font-normal">(~하는 것을)</span>
                                        </h5>
                                        <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                            동사의 대상이 되는 역할입니다. 주로 원하다, 희망하다, 계획하다 등의 동사 뒤에 옵니다.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-3">
                                            <p className="font-medium text-slate-700">I want to travel around the world. <span className="text-slate-500 font-normal block sm:inline sm:ml-1">(나는 세계 여행을 하는 것을 원한다.)</span></p>
                                            <p className="font-medium text-slate-700">We plan to visit the museum tomorrow. <span className="text-slate-500 font-normal block sm:inline sm:ml-1">(우리는 내일 박물관에 방문하는 것을 계획한다.)</span></p>
                                            <p className="font-medium text-slate-700">He decided to buy a new laptop. <span className="text-slate-500 font-normal block sm:inline sm:ml-1">(그는 새 노트북을 사는 것을 결정했다.)</span></p>
                                            <p className="font-medium text-slate-700">She promised to call me later. <span className="text-slate-500 font-normal block sm:inline sm:ml-1">(그녀는 나중에 나에게 전화하는 것을 약속했다.)</span></p>
                                        </div>

                                        {/* Key Verbs List */}
                                        <div className="ml-4 bg-blue-50 p-5 rounded-2xl border border-blue-100">
                                            <span className="font-bold text-blue-800 block mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                                to 부정사를 목적어로 취하는 3형식 동사
                                            </span>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {[
                                                    'aim', 'hope', 'need', 'fail',
                                                    'want', 'wish', 'would like',
                                                    'plan', 'promise', 'pretend', 'intend',
                                                    'desire', 'decide', 'determine', 'demand', 'decline',
                                                    'learn', 'refuse', 'manage',
                                                    'strive', 'swear', 'seek'
                                                ].map((verb) => (
                                                    <span key={verb} className="px-3 py-1.5 bg-white rounded-lg text-slate-700 text-sm font-medium border border-blue-100 shadow-sm">
                                                        {verb}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="overflow-hidden rounded-xl border border-blue-200/60 shadow-sm bg-white">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-blue-50/50 text-blue-900 border-b border-blue-100">
                                                        <tr>
                                                            <th className="p-3 font-bold whitespace-nowrap">동사</th>
                                                            <th className="p-3 font-bold">예문 (English)</th>
                                                            <th className="p-3 font-bold">해석 (Korean)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-blue-100/50">
                                                        {[
                                                            { word: 'hope', en: 'We hope to receive a positive response from the company.', ko: '우리는 회사로부터 긍정적인 답변을 받기를 희망한다.' },
                                                            { word: 'promise', en: 'He promised to submit the report on time.', ko: '그는 보고서를 제시간에 제출하겠다고 약속했다.' },
                                                            { word: 'strive', en: 'We strive to provide better user experiences.', ko: '우리는 더 나은 사용자 경험을 제공하기 위해 노력한다.' },
                                                        ].map((item) => (
                                                            <tr key={item.word} className="hover:bg-blue-50/30 transition-colors">
                                                                <td className="p-3 font-bold text-slate-700 bg-blue-50/10">{item.word}</td>
                                                                <td className="p-3 text-slate-600 font-medium">{item.en}</td>
                                                                <td className="p-3 text-slate-500 break-keep">{item.ko}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* 5th Form Verbs List */}
                                        <div className="ml-4 bg-indigo-50 p-5 rounded-2xl border border-indigo-100 mt-4">
                                            <span className="font-bold text-indigo-800 block mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                                                to 부정사를 목적격 보어로 취하는 5형식 동사
                                            </span>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {[
                                                    'require', 'remind', 'invite', 'instruct',
                                                    'cause', 'expect', 'enable', 'encourage',
                                                    'permit', 'advise', 'ask', 'allow'
                                                ].map((verb) => (
                                                    <span key={verb} className="px-3 py-1.5 bg-white rounded-lg text-slate-700 text-sm font-medium border border-indigo-100 shadow-sm">
                                                        {verb}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="overflow-hidden rounded-xl border border-indigo-200/60 shadow-sm bg-white">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-indigo-50/50 text-indigo-900 border-b border-indigo-100">
                                                        <tr>
                                                            <th className="p-3 font-bold whitespace-nowrap">동사</th>
                                                            <th className="p-3 font-bold">예문 (English)</th>
                                                            <th className="p-3 font-bold">해석 (Korean)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-indigo-100/50">
                                                        {[
                                                            { word: 'remind', en: 'Please remind me to check my email later.', ko: '나중에 이메일 확인하는 거 잊지 않게 나한테 좀 알려줘.' },
                                                            { word: 'encourage', en: 'The professor encouraged students to participate in the discussion.', ko: '교수는 학생들이 토론에 참여하도록 권장했다.' },
                                                            { word: 'ask', en: 'They asked him to lead the project team.', ko: '그들은 그에게 프로젝트 팀을 이끌어 달라고 요청했다.' },
                                                        ].map((item) => (
                                                            <tr key={item.word} className="hover:bg-indigo-50/30 transition-colors">
                                                                <td className="p-3 font-bold text-slate-700 bg-indigo-50/10">{item.word}</td>
                                                                <td className="p-3 text-slate-600 font-medium">{item.en}</td>
                                                                <td className="p-3 text-slate-500 break-keep">{item.ko}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Complement Role */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div> 3. 보어 역할 <span className="text-slate-500 text-sm font-normal">(~하는 것이다)</span>
                                        </h5>
                                        <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                            주어의 상태나 정체를 보충 설명해주는 역할입니다. 보통 be동사(am, are, is) 뒤에 옵니다.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2">
                                            <p className="font-medium text-slate-700">My dream is to be a singer. <span className="text-slate-500 font-normal">(내 꿈은 가수가 되는 것이다.)</span></p>
                                            <p className="font-medium text-slate-700">His hobby is to take pictures. <span className="text-slate-500 font-normal">(그의 취미는 사진을 찍는 것이다.)</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Adjective Usage */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold">Adj</div>
                                    <h4 className="text-xl font-bold text-slate-800">형용사적 용법</h4>
                                </div>
                                <div className="space-y-8">
                                    {/* 1. Noun Modification */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div> 1. 명사 수식 <span className="text-slate-500 text-sm font-normal">(~할, ~하는)</span>
                                        </h5>
                                        <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                            명사의 뒤에서 앞의 명사를 구체적으로 설명합니다.
                                        </p>
                                        <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2">
                                            <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
                                                <span className="text-slate-600 font-medium">한 덩어리</span>
                                                <span className="font-bold text-indigo-600">명사 앞</span>
                                            </div>
                                            <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
                                                <span className="text-slate-600 font-medium">두 덩어리 이상</span>
                                                <span className="font-bold text-indigo-600">명사 뒤 (후치 수식)</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. Major Patterns */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div> 2. 주요 패턴
                                        </h5>
                                        <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2">
                                            <div className="flex items-center gap-3 p-2">
                                                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">A</div>
                                                <span className="text-slate-700 font-medium">형용사 + to 부정사</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-2">
                                                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">B</div>
                                                <span className="text-slate-700 font-medium">부사 + 형용사 + to 부정사</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Nouns Modified by to-infinitive */}
                                    <div className="space-y-4">
                                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div> 3. 수식을 받는 명사들
                                        </h5>

                                        <div className="ml-4">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {[
                                                    { en: 'way', ko: '방법' },
                                                    { en: 'plan', ko: '계획' },
                                                    { en: 'ability', ko: '능력' },
                                                    { en: 'chance', ko: '기회' },
                                                    { en: 'opportunity', ko: '기회' },
                                                    { en: 'time', ko: '시간' },
                                                    { en: 'need', ko: '필요/요구' },
                                                    { en: 'effort', ko: '노력' },
                                                    { en: 'right', ko: '권리' },
                                                    { en: 'decision', ko: '결정' },
                                                    { en: 'intention', ko: '의도' },
                                                    { en: 'authority', ko: '권한' },
                                                ].map((item) => (
                                                    <span key={item.en} className="px-3 py-1.5 bg-indigo-50 rounded-lg text-indigo-900 text-sm font-medium border border-indigo-100 flex items-center gap-1.5">
                                                        <span className="font-bold">{item.en}</span>
                                                        <span className="text-indigo-400 text-xs">|</span>
                                                        <span className="text-indigo-700 opacity-90">{item.ko}</span>
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="overflow-hidden rounded-xl border border-indigo-200/60 shadow-sm bg-white">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-indigo-50/50 text-indigo-900 border-b border-indigo-100">
                                                        <tr>
                                                            <th className="p-3 font-bold whitespace-nowrap">명사</th>
                                                            <th className="p-3 font-bold">예문 (English)</th>
                                                            <th className="p-3 font-bold">해석 (Korean)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-indigo-100/50">
                                                        {[
                                                            { word: 'ability', en: 'He has the ability to lead a large team.', ko: '그는 큰 팀을 이끌 능력이 있다.' },
                                                            { word: 'effort', en: 'We should make an effort to reduce costs.', ko: '우리는 비용을 줄이기 위해 노력해야 한다.' },
                                                            { word: 'authority', en: 'She has the authority to sign the contract.', ko: '그녀는 계약서에 서명할 권한이 있다.' },
                                                        ].map((item) => (
                                                            <tr key={item.word} className="hover:bg-indigo-50/30 transition-colors">
                                                                <td className="p-3 font-bold text-slate-700 bg-indigo-50/10">{item.word}</td>
                                                                <td className="p-3 text-slate-600 font-medium">{item.en}</td>
                                                                <td className="p-3 text-slate-500 break-keep">{item.ko}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Adverb + Be to Usage */}
                            <div className="space-y-6">
                                {/* Adverb Usage */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 font-bold">Adv</div>
                                        <h4 className="text-xl font-bold text-slate-800">부사적 용법</h4>
                                    </div>
                                    <div className="space-y-8">
                                        {/* 1. Purpose */}
                                        <div className="space-y-4">
                                            <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                                <div className="w-2 h-2 rounded-full bg-purple-500"></div> 1. 목적 <span className="text-slate-500 text-sm font-normal">(~하기 위해서)</span>
                                            </h5>
                                            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                                어떤 행동을 하는 이유나 목적을 나타냅니다.
                                            </p>
                                            <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2">
                                                <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                    in order to V
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                    so as to V
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Result */}
                                        <div className="space-y-4">
                                            <h5 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                                                <div className="w-2 h-2 rounded-full bg-purple-500"></div> 2. 결과 <span className="text-slate-500 text-sm font-normal">(...해서 ~하다)</span>
                                            </h5>
                                            <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4">
                                                <div className="flex items-center gap-2 text-slate-700 font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                                    only to ... (결국 ~하게 되다)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Be to Usage */}
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-lg">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="text-lg font-bold">Be + to 부정사</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-4">명사/형용사 보어 역할</p>
                                    <div className="grid grid-cols-2 gap-2 text-sm font-medium text-center">
                                        <div className="bg-white/10 rounded-lg py-2">운명</div>
                                        <div className="bg-white/10 rounded-lg py-2">의무</div>
                                        <div className="bg-white/10 rounded-lg py-2">가능</div>
                                        <div className="bg-white/10 rounded-lg py-2">의도</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'gerund' && (
                        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-left space-y-8">

                            {/* Definition Banner */}
                            <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-[32px] p-8 mb-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <BookOpen className="w-6 h-6 text-teal-100" />
                                            <h3 className="text-3xl font-black text-white tracking-tight">동명사 (Gerund)</h3>
                                        </div>
                                        <p className="text-teal-50 font-medium">동사(V-ing)가 명사 역할 (~하는 것, 행위)</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                                        <p className="text-white font-mono font-bold">V-ing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* 1. Subject */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 1. 주어 <span className="text-slate-500 text-sm font-normal">(~하는 것은)</span>
                                    </h4>
                                    <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                        문장의 주어 자리에 위치하여 '~하는 것은/것이'로 해석됩니다. 단수 취급합니다.
                                    </p>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2 mt-4">
                                        <p className="font-medium text-slate-700">Reading books is a good habit. <span className="text-slate-500 font-normal">(책을 읽는 것은 좋은 습관이다.)</span></p>
                                        <p className="font-medium text-slate-700">Learning new languages opens up opportunities. <span className="text-slate-500 font-normal">(새로운 언어를 배우는 것은 기회를 열어준다.)</span></p>
                                        <p className="font-medium text-slate-700">Swimming in the ocean can be dangerous. <span className="text-slate-500 font-normal">(바다에서 수영하는 것은 위험할 수 있다.)</span></p>
                                    </div>
                                </div>

                                {/* 2. Transitive Object */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 2. 타동사의 목적어 <span className="text-slate-500 text-sm font-normal">(~하는 것을)</span>
                                    </h4>
                                    <div className="space-y-6">
                                        <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                            타동사의 뒤에서 목적어 역할을 수행합니다.
                                        </p>

                                        {/* Verbs taking Gerund */}
                                        <div className="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm ml-4">
                                            <h5 className="font-bold text-teal-800 block mb-3 text-sm">
                                                동명사를 목적어로 취하는 3형식 동사
                                            </h5>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {[
                                                    { en: 'mind', ko: '꺼리다' },
                                                    { en: 'enjoy', ko: '즐기다' },
                                                    { en: 'give up', ko: '포기하다' },
                                                    { en: 'admit', ko: '인정하다' },
                                                    { en: 'postpone', ko: '연기하다' },
                                                    { en: 'put off', ko: '미루다' },
                                                    { en: 'practice', ko: '연습하다' },
                                                    { en: 'suggest', ko: '제안하다' },
                                                    { en: 'finish', ko: '끝내다' },
                                                    { en: 'avoid', ko: '피하다' },
                                                    { en: 'recommend', ko: '추천하다' },
                                                    { en: 'risk', ko: '위험을 무릅쓰다' },
                                                    { en: 'deny', ko: '부인하다' },
                                                    { en: 'discontinue', ko: '중단하다' },
                                                    { en: 'dislike', ko: '싫어하다' },
                                                    { en: 'consider', ko: '고려하다' },
                                                ].map((item) => (
                                                    <span key={item.en} className="px-3 py-1.5 bg-teal-50 rounded-lg text-teal-900 text-sm font-medium border border-teal-100 flex items-center gap-1.5 hover:bg-teal-100 transition-colors">
                                                        <span className="font-bold">{item.en}</span>
                                                        <span className="text-teal-400 text-xs">|</span>
                                                        <span className="text-teal-700 opacity-90">{item.ko}</span>
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="overflow-hidden rounded-xl border border-teal-200/60 shadow-sm bg-white">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-teal-50/50 text-teal-900 border-b border-teal-100">
                                                        <tr>
                                                            <th className="p-3 font-bold whitespace-nowrap">동사</th>
                                                            <th className="p-3 font-bold">예문 (English)</th>
                                                            <th className="p-3 font-bold">해석 (Korean)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-teal-100/50">
                                                        {[
                                                            { word: 'practice', en: 'You should practice speaking English every day for TOEIC.', ko: '토익을 위해 매일 영어로 말하는 것을 연습해야 한다.' },
                                                            { word: 'avoid', en: 'Try to avoid using too many colors in your web design.', ko: '웹 디자인에서 너무 많은 색상을 사용하는 것을 피해라.' },
                                                            { word: 'deny', en: 'The politician denied receiving any money.', ko: '그 정치인은 어떤 돈도 받은 적이 없다고 부인했다.' },
                                                        ].map((item) => (
                                                            <tr key={item.word} className="hover:bg-teal-50/30 transition-colors">
                                                                <td className="p-3 font-bold text-slate-700 bg-teal-50/10">{item.word}</td>
                                                                <td className="p-3 text-slate-600 font-medium">{item.en}</td>
                                                                <td className="p-3 text-slate-500 break-keep">{item.ko}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Preposition Object */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 3. 전치사의 목적어
                                    </h4>
                                    <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                        전치사 뒤에는 반드시 명사나 동명사가 와야 합니다. (to 부정사 불가)
                                    </p>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2 mt-4">
                                        <p className="font-medium text-slate-700">He is good at playing the piano. <span className="text-slate-500 font-normal">(그는 피아노 치는 것을 잘한다.)</span></p>
                                        <p className="font-medium text-slate-700">She left without saying goodbye. <span className="text-slate-500 font-normal">(그녀는 작별 인사도 없이 떠났다.)</span></p>
                                        <p className="font-medium text-slate-700">We are interested in buying this house. <span className="text-slate-500 font-normal">(우리는 이 집을 사는 것에 관심이 있다.)</span></p>
                                    </div>
                                </div>

                                {/* 4. Complement */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 4. 보어 <span className="text-slate-500 text-sm font-normal">(~하는 것이다)</span>
                                    </h4>
                                    <p className="text-slate-600 pl-4 border-l-2 border-slate-200">
                                        주어의 상태나 정체를 설명하는 보어 역할을 합니다.
                                    </p>
                                    <div className="bg-white p-4 rounded-xl border border-slate-200 ml-4 space-y-2 mt-4">
                                        <p className="font-medium text-slate-700">My hobby is collecting stamps. <span className="text-slate-500 font-normal">(내 취미는 우표를 수집하는 것이다.)</span></p>
                                        <p className="font-medium text-slate-700">Seeing is believing. <span className="text-slate-500 font-normal">(보는 것이 믿는 것이다.)</span></p>
                                        <p className="font-medium text-slate-700">Her job is teaching English to children. <span className="text-slate-500 font-normal">(그녀의 직업은 아이들에게 영어를 가르치는 것이다.)</span></p>
                                    </div>
                                </div>

                                {/* 5. Idioms */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 5. 동명사 관용 표현
                                    </h4>
                                    <div className="space-y-8">
                                        {/* 1. to + ing */}
                                        <div className="space-y-3">
                                            <div>
                                                <h5 className="font-bold text-slate-700 flex items-center gap-2 text-base">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> [to + ~ing] 전치사 to가 포함된 표현
                                                </h5>
                                                <p className="text-xs text-slate-500 pl-4 mt-1">
                                                    to는 부정사가 아닌 전치사이므로 뒤에 명사나 동명사가 옵니다.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-xl border border-teal-100 ml-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                                {[
                                                    { en: 'look forward to ~ing', ko: '~하기를 고대하다' },
                                                    { en: 'object to ~ing', ko: '~하는 것에 반대하다' },
                                                    { en: 'contribute to ~ing', ko: '~하는 데 기여하다' },
                                                    { en: 'be used to ~ing', ko: '~하는 데 익숙하다' },
                                                    { en: 'be dedicated / devoted / committed to ~ing', ko: '~하는 데 전념/헌신하다' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="font-bold text-teal-700 min-w-[140px]">{item.en}</span>
                                                        <span className="text-slate-600 border-l border-slate-200 pl-2">{item.ko}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* 2. Common Phrases */}
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-slate-700 flex items-center gap-2 text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> [~ing] 자주 쓰이는 동명사 구문
                                            </h5>
                                            <div className="bg-white p-4 rounded-xl border border-teal-100 ml-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                                {[
                                                    { en: 'cannot help ~ing', ko: '~하지 않을 수 없다' },
                                                    { en: 'feel like ~ing', ko: '~하고 싶다' },
                                                    { en: 'be worth ~ing', ko: '~할 가치가 있다' },
                                                    { en: 'It is no use ~ing', ko: '~해도 소용없다' },
                                                    { en: 'go ~ing', ko: '~하러 가다 (예: go shopping)' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="font-bold text-teal-700 min-w-[140px]">{item.en}</span>
                                                        <span className="text-slate-600 border-l border-slate-200 pl-2">{item.ko}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* 3. Time/Money/Effort */}
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-slate-700 flex items-center gap-2 text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> [시간/돈/노력 관련] 표현
                                            </h5>
                                            <div className="bg-white p-4 rounded-xl border border-teal-100 ml-4 space-y-2 text-sm">
                                                {[
                                                    { en: 'spend 시간/돈 ~ing', ko: '~하는 데 시간/돈을 쓰다' },
                                                    { en: 'have difficulty / trouble (in) ~ing', ko: '~하는 데 어려움을 겪다' },
                                                    { en: 'be busy (in) ~ing', ko: '~하느라 바쁘다' },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <span className="font-bold text-teal-700 min-w-[200px]">{item.en}</span>
                                                        <span className="text-slate-600 border-l border-slate-200 pl-2">{item.ko}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Example Sentences */}
                                        <div className="ml-4 bg-teal-50/50 rounded-xl p-4 border border-teal-100/50">
                                            <h6 className="text-xs font-bold text-teal-800 uppercase tracking-wider mb-2">Example Sentences</h6>
                                            <ul className="space-y-2 text-sm text-slate-700">
                                                <li className="flex gap-2">
                                                    <span className="text-teal-500">•</span>
                                                    <span>I am <span className="font-bold text-teal-700">looking forward to meeting</span> you. (당신을 만나기를 고대합니다.)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-teal-500">•</span>
                                                    <span>She is <span className="font-bold text-teal-700">dedicated to improving</span> user experience. (그녀는 사용자 경험을 개선하는 데 전념하고 있다.)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-teal-500">•</span>
                                                    <span>I <span className="font-bold text-teal-700">have difficulty solving</span> this block puzzle. (나는 이 블록 퍼즐을 푸는 데 어려움을 겪고 있다.)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. Comparison */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-6">
                                        <div className="w-2.5 h-2.5 rounded-full bg-teal-500"></div> 6. 동명사와 명사의 구분법
                                    </h4>
                                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                                        <table className="w-full text-sm text-center">
                                            <thead className="bg-teal-50 text-teal-900 border-b border-teal-100">
                                                <tr>
                                                    <th className="p-3 font-bold">구분 기준</th>
                                                    <th className="p-3 font-bold text-teal-700">동명사 (V-ing)</th>
                                                    <th className="p-3 font-bold text-slate-600">명사 (Noun)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-3 font-bold text-slate-700 bg-slate-50/50">관사 (a/the)</td>
                                                    <td className="p-3 text-red-500 font-bold">X</td>
                                                    <td className="p-3 text-blue-500 font-bold">O</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-3 font-bold text-slate-700 bg-slate-50/50">동사 성격</td>
                                                    <td className="p-3 font-medium text-teal-600">유지 (목적어 가질 수 있음)</td>
                                                    <td className="p-3 text-slate-400">없음</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-3 font-bold text-slate-700 bg-slate-50/50">의미상 목적어</td>
                                                    <td className="p-3 text-blue-500 font-bold">O</td>
                                                    <td className="p-3 text-red-500 font-bold">X</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-3 font-bold text-slate-700 bg-slate-50/50">복수형</td>
                                                    <td className="p-3 text-red-500 font-bold">X (단수 취급)</td>
                                                    <td className="p-3 text-blue-500 font-bold">O (가능)</td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50">
                                                    <td className="p-3 font-bold text-slate-700 bg-slate-50/50">수식</td>
                                                    <td className="p-3 font-medium">부사 (Adverb)</td>
                                                    <td className="p-3 font-medium">형용사 (Adjective)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'participle' && (
                        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 text-left space-y-8">

                            {/* Definition Banner */}
                            <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-[32px] p-8 mb-12 shadow-xl relative overflow-hidden">
                                <div className="relative z-10 flex items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Layers className="w-6 h-6 text-purple-100" />
                                            <h3 className="text-3xl font-black text-white tracking-tight">분사 (Participle)</h3>
                                        </div>
                                        <p className="text-purple-50 font-medium">형용사 역할 (명사 수식)</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/10">
                                        <p className="text-white font-mono font-bold">Adjective</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* 1. Present Participle */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-6">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 1. 현재분사 (Active / 능동)
                                    </h4>

                                    <div className="space-y-8">
                                        {/* Basic Form */}
                                        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm ml-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm font-bold">형태</span>
                                                <span className="font-bold text-slate-700">V-ing</span>
                                            </div>
                                            <p className="text-slate-600 text-sm pl-1">
                                                '~하는', '~하고 있는' (능동/진행)의 의미를 가집니다.
                                            </p>
                                        </div>

                                        {/* Intransitive Verbs */}
                                        <div className="ml-4 space-y-2">
                                            <h5 className="font-bold text-purple-800 text-sm flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                자동사(6가지) + 현재분사
                                            </h5>
                                            <div className="overflow-hidden rounded-xl border border-purple-200/60 shadow-sm bg-white">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-purple-50/50 text-purple-900 border-b border-purple-100">
                                                        <tr>
                                                            <th className="p-3 font-bold whitespace-nowrap">분사 형태</th>
                                                            <th className="p-3 font-bold whitespace-nowrap">의미</th>
                                                            <th className="p-3 font-bold">자주 쓰이는 표현</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-purple-100/50">
                                                        {[
                                                            { word: 'rising', mean: '오르는', ex: 'rising prices (오르는 물가)' },
                                                            { word: 'remaining', mean: '남아 있는', ex: 'remaining work (남아 있는 업무)' },
                                                            { word: 'growing', mean: '성장하는, 증가하는', ex: 'growing demand (증가하는 수요)' },
                                                            { word: 'existing', mean: '기존의', ex: 'existing laws (기존 법률)' },
                                                            { word: 'participating', mean: '참가하는', ex: 'participating companies (참가 업체들)' },
                                                            { word: 'specializing', mean: '전문으로 하는', ex: 'a firm specializing in law (법률 전문 회사)' },
                                                        ].map((item) => (
                                                            <tr key={item.word} className="hover:bg-purple-50/30 transition-colors">
                                                                <td className="p-3 font-bold text-slate-700 bg-purple-50/10">{item.word}</td>
                                                                <td className="p-3 text-slate-600 font-medium">{item.mean}</td>
                                                                <td className="p-3 text-slate-500">{item.ex}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Modification Patterns */}
                                        <div className="ml-4 space-y-4">
                                            <h5 className="font-bold text-purple-800 text-sm flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                수식 구조 (Modification Patterns)
                                            </h5>

                                            <div className="grid gap-4">
                                                <div className="bg-white p-4 rounded-xl border border-purple-100">
                                                    <span className="text-xs font-bold text-purple-600 uppercase mb-2 block">General</span>
                                                    <p className="text-slate-700 font-medium">관사 + 형용사 + 명사</p>
                                                </div>

                                                <div className="bg-white p-4 rounded-xl border border-purple-100">
                                                    <span className="text-xs font-bold text-purple-600 uppercase mb-2 block">Pre-modification (전치 수식)</span>
                                                    <p className="text-slate-700 font-medium">관사/소유격 + <span className="text-purple-600">분사</span> + 명사</p>
                                                </div>

                                                <div className="bg-white p-4 rounded-xl border border-purple-100">
                                                    <span className="text-xs font-bold text-purple-600 uppercase mb-2 block">Post-modification (후치 수식)</span>
                                                    <p className="text-slate-700 font-medium mb-1">관사/소유격 + 명사 + <span className="text-purple-600">분사</span> + 단어...</p>
                                                    <p className="text-xs text-slate-500 pl-2 border-l border-slate-200 mt-2">
                                                        명사 뒤에서 수식하는 경우 (길어질 때)<br />
                                                        - 명사 + V-ing ...<br />
                                                        - 전치사구 / p.p. ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Complement Position */}
                                        <div className="ml-4 space-y-2">
                                            <h5 className="font-bold text-purple-800 text-sm flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                보어 자리
                                            </h5>
                                            <div className="bg-white p-4 rounded-xl border border-purple-100">
                                                <p className="text-slate-400 text-sm italic">Coming Soon...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Past Participle */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-6">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 2. 과거분사 (Passive / 수동)
                                    </h4>

                                    <div className="space-y-4">
                                        {/* Basic Form */}
                                        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm ml-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm font-bold">형태</span>
                                                <span className="font-bold text-slate-700">p.p. (Past Participle)</span>
                                            </div>
                                            <p className="text-slate-600 text-sm pl-1">
                                                '~된', '~해진' (수동/완료)의 의미를 가집니다.
                                            </p>
                                        </div>

                                        {/* Complement Position */}
                                        <div className="ml-4 space-y-2">
                                            <h5 className="font-bold text-purple-800 text-sm flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                                보어 자리
                                            </h5>
                                            <div className="bg-white p-4 rounded-xl border border-purple-100">
                                                <p className="text-slate-400 text-sm italic">Coming Soon...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Fixed -ing Forms */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 3. -ing로 형태가 굳어진 형용사
                                    </h4>
                                    <div className="overflow-hidden rounded-xl border border-purple-200/60 shadow-sm bg-white ml-4">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-purple-50/50 text-purple-900 border-b border-purple-100">
                                                <tr>
                                                    <th className="p-3 font-bold whitespace-nowrap">형용사 (~ing)</th>
                                                    <th className="p-3 font-bold whitespace-nowrap">의미</th>
                                                    <th className="p-3 font-bold">주요 수식 명사 (Collocation)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-purple-100/50">
                                                {[
                                                    { word: 'leading', mean: '가장 중요한, 선두적인', ex: 'experts (전문가), company (회사), role (역할)' },
                                                    { word: 'existing', mean: '기존의, 현재 사용되는', ex: 'law (법규), system (체계)' },
                                                    { word: 'lasting', mean: '지속적인, 영속적인', ex: 'impression (인상), relationship (관계)' },
                                                    { word: 'promising', mean: '유망한, 촉망되는', ex: 'engineers (엔지니어), candidate (후보자)' },
                                                    { word: 'demanding', mean: '요구가 많은 (힘든)', ex: 'job (일), professor (교수)' },
                                                    { word: 'missing', mean: '행방 불명된, 없어진', ex: 'luggage / baggage (수하물)' },
                                                    { word: 'emerging', mean: '최근 생겨난, 떠오르는', ex: 'market (시장), industry (산업)' },
                                                    { word: 'upcoming', mean: '곧 있을, 다가오는', ex: 'election (선거), seminar (세미나), issue (사안)' },
                                                    { word: 'rewarding', mean: '보람 있는', ex: 'experience (경험), career (경력)' },
                                                ].map((item) => (
                                                    <tr key={item.word} className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3 font-bold text-slate-700 bg-purple-50/10">{item.word}</td>
                                                        <td className="p-3 text-slate-600 font-medium">{item.mean}</td>
                                                        <td className="p-3 text-slate-500 break-keep">
                                                            {item.ex.split(', ').map((word, i) => (
                                                                <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded text-xs text-slate-600 mr-1 mb-1 border border-slate-200">
                                                                    {word}
                                                                </span>
                                                            ))}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 4. Fixed p.p. Forms */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 4. p.p.로 형태가 굳어진 형용사
                                    </h4>
                                    <div className="overflow-hidden rounded-xl border border-purple-200/60 shadow-sm bg-white ml-4">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-purple-50/50 text-purple-900 border-b border-purple-100">
                                                <tr>
                                                    <th className="p-3 font-bold whitespace-nowrap">형용사 (p.p.)</th>
                                                    <th className="p-3 font-bold whitespace-nowrap">의미</th>
                                                    <th className="p-3 font-bold">주요 수식 명사 (Collocation)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-purple-100/50">
                                                {[
                                                    { word: 'detailed', mean: '상세한', ex: 'instruction (지시), explanation (설명)' },
                                                    { word: 'written', mean: '서면으로 된', ex: 'permission (허가), test (시험)' },
                                                    { word: 'designated', mean: '지정된', ex: 'parking area (주차 구역), site (장소), date (날짜)' },
                                                    { word: 'skilled', mean: '숙련된, 노련한', ex: 'worker (근로자), accountant (회계사)' },
                                                    { word: 'distinguished', mean: '유명한, 성공한', ex: 'author (저자), scholar (학자)' },
                                                    { word: 'accomplished', mean: '기량이 뛰어난', ex: 'candidate (후보자), artist (예술가)' },
                                                    { word: 'renowned', mean: '유명한, 명성 있는', ex: 'writer (작가), engineer (엔지니어)' },
                                                    { word: 'damaged', mean: '하자가 생긴, 손상된', ex: 'goods (상품), property (재산)' },
                                                    { word: 'customized', mean: '요구에 맞춘 (주문 제작된)', ex: 'product (제품), system (체계)' },
                                                ].map((item) => (
                                                    <tr key={item.word} className="hover:bg-purple-50/30 transition-colors">
                                                        <td className="p-3 font-bold text-slate-700 bg-purple-50/10">{item.word}</td>
                                                        <td className="p-3 text-slate-600 font-medium">{item.mean}</td>
                                                        <td className="p-3 text-slate-500 break-keep">
                                                            {item.ex.split(', ').map((word, i) => (
                                                                <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded text-xs text-slate-600 mr-1 mb-1 border border-slate-200">
                                                                    {word}
                                                                </span>
                                                            ))}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 5. Emotion Adjectives */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 5. 감정 형용사
                                    </h4>
                                    <div className="ml-4 space-y-4">
                                        <div className="bg-purple-50 p-4 rounded-xl text-sm text-purple-900 leading-relaxed">
                                            <span className="font-bold bg-purple-100 px-1 rounded text-purple-700">POINT</span> 감정을 <span className="font-bold underline decoration-purple-400 decoration-2 underline-offset-2">유발하면</span> ~ing, 감정을 <span className="font-bold underline decoration-purple-400 decoration-2 underline-offset-2">느끼면</span> p.p.를 사용합니다.
                                        </div>

                                        <div className="overflow-hidden rounded-xl border border-purple-200/60 shadow-sm bg-white">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-purple-50/50 text-purple-900 border-b border-purple-100">
                                                    <tr>
                                                        <th className="p-3 font-bold whitespace-nowrap text-center text-purple-700">감정 유발 (사물 / -ing)</th>
                                                        <th className="p-3 font-bold whitespace-nowrap text-center text-purple-700">감정 느낌 (사람 / -ed)</th>
                                                        <th className="p-3 font-bold text-slate-700">의미</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-purple-100/50">
                                                    {[
                                                        { ing: 'pleasing', ed: 'pleased', mean: '기쁜, 만족스러운' },
                                                        { ing: 'exciting', ed: 'excited', mean: '신나는, 흥분된' },
                                                        { ing: 'satisfying', ed: 'satisfied', mean: '만족스러운, 만족한' },
                                                        { ing: 'disappointing', ed: 'disappointed', mean: '실망스러운, 실망한' },
                                                        { ing: 'interesting', ed: 'interested', mean: '흥미로운, 관심 있는' },
                                                        { ing: 'surprising', ed: 'surprised', mean: '놀라운, 놀란' },
                                                    ].map((item) => (
                                                        <tr key={item.ing} className="hover:bg-purple-50/30 transition-colors text-center">
                                                            <td className="p-3 font-bold text-purple-600 bg-purple-50/10">{item.ing}</td>
                                                            <td className="p-3 font-bold text-teal-600 bg-teal-50/10">{item.ed}</td>
                                                            <td className="p-3 text-slate-600 font-medium text-left bg-white">{item.mean}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* 6. Distinction */}
                                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 text-lg mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> 6. 동명사와 분사의 구분법
                                    </h4>
                                    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-white ml-4">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-slate-50 border-b border-slate-200">
                                                <tr>
                                                    <th className="p-3 font-bold text-slate-700 w-1/4">구분</th>
                                                    <th className="p-3 font-bold text-teal-700 w-[37.5%] bg-teal-50/50">동명사 (Gerund)</th>
                                                    <th className="p-3 font-bold text-purple-700 w-[37.5%] bg-purple-50/50">현재분사 (Present Participle)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-3 font-bold text-slate-600 bg-slate-50/30">역할/위치</td>
                                                    <td className="p-3 text-slate-600 bg-teal-50/10">
                                                        <span className="font-bold text-teal-600">명사 역할</span><br />
                                                        (주어, 목적어, 보어 자리)
                                                    </td>
                                                    <td className="p-3 text-slate-600 bg-purple-50/10">
                                                        <span className="font-bold text-purple-600">형용사 역할</span><br />
                                                        (명사 수식, 보어 자리)
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-3 font-bold text-slate-600 bg-slate-50/30">관사 사용</td>
                                                    <td className="p-3 text-slate-600 bg-teal-50/10">
                                                        앞에 관사(a, an, the)를 <br /><span className="text-red-500 font-bold">쓰지 않음</span>
                                                    </td>
                                                    <td className="p-3 text-slate-600 bg-purple-50/10">
                                                        앞에 관사를 <span className="text-blue-500 font-bold">쓸 수 있음</span><br />
                                                        (관사 + 형용사 + 명사)
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="p-3 font-bold text-slate-600 bg-slate-50/30">해석</td>
                                                    <td className="p-3 text-slate-600 bg-teal-50/10">
                                                        '~하는 것'
                                                    </td>
                                                    <td className="p-3 text-slate-600 bg-purple-50/10">
                                                        '~하는' (능동/진행)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
