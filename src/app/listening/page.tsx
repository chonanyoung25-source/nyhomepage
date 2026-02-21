'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Headphones, Mic2, Volume2, Radio, PlayCircle, Star, Sparkles, ChevronRight, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ListeningPage() {
    const sections = [
        {
            id: "part1",
            title: "Part 1",
            subtitle: "PHOTOGRAPH",
            description: "사진 묘사. 짧고 명확한 문체와 상태/동작의 핵심을 포착하세요.",
            icon: <PlayCircle className="w-6 h-6" />,
            color: "cyan"
        },
        {
            id: "part2",
            title: "Part 2",
            subtitle: "QUESTION & RESPONSE",
            description: "질의 응답. 의문사와 핵심 동사를 놓치지 않는 순발력이 필수입니다.",
            icon: <Radio className="w-6 h-6" />,
            color: "blue"
        },
        {
            id: "part3",
            title: "Part 3",
            subtitle: "SHORT CONVERSATIONS",
            description: "짧은 대화. 2~3인 대화의 흐름과 화자의 의도를 파악하세요.",
            icon: <Headphones className="w-6 h-6" />,
            color: "indigo"
        },
        {
            id: "part4",
            title: "Part 4",
            subtitle: "SHORT TALKS",
            description: "짧은 담화. 독백의 핵심 정보와 세부 사항을 논리적으로 연결하세요.",
            icon: <Mic2 className="w-6 h-6" />,
            color: "purple"
        }
    ];

    return (
        <main className="min-h-screen bg-[#050508] text-white font-sans overflow-hidden selection:bg-blue-500/30">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Sound Waves Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20 flex items-end justify-center gap-1 px-4">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-blue-500 w-1 rounded-t-full"
                            style={{
                                height: `${Math.random() * 100}%`,
                                animation: `wave ${1 + Math.random()}s ease-in-out infinite alternate`,
                                animationDelay: `${Math.random()}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Header Nav */}
                <nav className="flex justify-between items-center mb-24">
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-400 hover:text-white rounded-full bg-white/5 border border-white/5 hover:border-white/10 px-6">
                            <ArrowLeft className="w-4 h-4 mr-2" /> EXIT
                        </Button>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Audio Learning System</span>
                    </div>
                </nav>

                {/* Hero section */}
                <div className="flex flex-col items-center text-center mb-32">
                    <div className="relative group mb-8">
                        <div className="absolute -inset-8 bg-blue-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="w-24 h-24 bg-blue-600/10 border border-blue-500/30 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Headphones className="w-12 h-12 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                        LISTENING
                    </h1>

                    <p className="max-w-2xl text-lg md:text-2xl text-slate-400 font-light leading-relaxed">
                        실전 응급처치부터 정밀 분석까지.<br />
                        <span className="text-blue-400 font-bold">The Core Balance</span>의 입체적 사운드 트레이닝으로 귀를 뚫어보세요.
                    </p>
                </div>

                {/* Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
                    {sections.map((section, idx) => (
                        <div
                            key={section.id}
                            className="group relative bg-[#0F0F1A]/50 backdrop-blur-xl border border-white/5 rounded-[40px] p-10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        {section.icon}
                                    </div>
                                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                                        Phase {idx + 1}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-3xl font-black text-white mb-2">{section.title}</h3>
                                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-4">{section.subtitle}</p>
                                    <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                                        {section.description}
                                    </p>

                                    <Button variant="outline" className="rounded-xl border-white/10 text-slate-400 group-hover:border-blue-500/50 group-hover:text-white group-hover:bg-blue-500/10 transition-all">
                                        Coming Soon <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-white/5 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 tracking-tight">귀가 뚫리는 가장 빠른 길</h2>
                    <p className="text-slate-400 mb-10 relative z-10 max-w-xl mx-auto">
                        다국적 발음(영국, 호주, 캐나다 등)과 실제 시험장의 소음까지 완벽하게 재구성한 트레이닝 데이터가 준비되고 있습니다.
                    </p>
                    <div className="flex justify-center gap-4 relative z-10">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-10 h-14 font-bold text-lg">
                            Notify Me
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes wave {
                    from { height: 10%; }
                    to { height: 100%; }
                }
            `}</style>
        </main>
    );
}
