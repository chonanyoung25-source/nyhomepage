'use client';

import { ArrowLeft, BookOpen, User, ClipboardCheck, ArrowRight, Brain, Layers, Sparkles, Bookmark, GraduationCap, Search, ChevronDown, Bookmark as BookmarkIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AiChip from '@/components/ai-chip';

// --- Color Themes Map (Restored for Sections) ---
const COLOR_THEMES: { [key: string]: { border: string, hoverBorder: string, text: string, iconStyle: string, glow: string, gradientFrom: string, iconBg: string, iconBorder: string } } = {
  cyan: { border: 'border-cyan-200', hoverBorder: 'hover:border-cyan-400', text: 'text-cyan-700', iconStyle: 'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-100', glow: 'shadow-md shadow-cyan-100', gradientFrom: 'from-cyan-50/50', iconBg: 'bg-cyan-50', iconBorder: 'border-cyan-100' },
  teal: { border: 'border-teal-200', hoverBorder: 'hover:border-teal-400', text: 'text-teal-700', iconStyle: 'text-teal-600 bg-teal-50 group-hover:bg-teal-100', glow: 'shadow-md shadow-teal-100', gradientFrom: 'from-teal-50/50', iconBg: 'bg-teal-50', iconBorder: 'border-teal-100' },
  purple: { border: 'border-purple-200', hoverBorder: 'hover:border-purple-400', text: 'text-purple-700', iconStyle: 'text-purple-600 bg-purple-50 group-hover:bg-purple-100', glow: 'shadow-md shadow-purple-100', gradientFrom: 'from-purple-50/50', iconBg: 'bg-purple-50', iconBorder: 'border-purple-100' },
  violet: { border: 'border-violet-200', hoverBorder: 'hover:border-violet-400', text: 'text-violet-700', iconStyle: 'text-violet-600 bg-violet-50 group-hover:bg-violet-100', glow: 'shadow-md shadow-violet-100', gradientFrom: 'from-violet-50/50', iconBg: 'bg-violet-50', iconBorder: 'border-violet-100' },
  fuchsia: { border: 'border-fuchsia-200', hoverBorder: 'hover:border-fuchsia-400', text: 'text-fuchsia-700', iconStyle: 'text-fuchsia-600 bg-fuchsia-50 group-hover:bg-fuchsia-100', glow: 'shadow-md shadow-fuchsia-100', gradientFrom: 'from-fuchsia-50/50', iconBg: 'bg-fuchsia-50', iconBorder: 'border-fuchsia-100' },
  pink: { border: 'border-pink-200', hoverBorder: 'hover:border-pink-400', text: 'text-pink-700', iconStyle: 'text-pink-600 bg-pink-50 group-hover:bg-pink-100', glow: 'shadow-md shadow-pink-100', gradientFrom: 'from-pink-50/50', iconBg: 'bg-pink-50', iconBorder: 'border-pink-100' },
  emerald: { border: 'border-emerald-200', hoverBorder: 'hover:border-emerald-400', text: 'text-emerald-700', iconStyle: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-100', glow: 'shadow-md shadow-emerald-100', gradientFrom: 'from-emerald-50/50', iconBg: 'bg-emerald-50', iconBorder: 'border-emerald-100' },
  lime: { border: 'border-lime-200', hoverBorder: 'hover:border-lime-400', text: 'text-lime-700', iconStyle: 'text-lime-600 bg-lime-50 group-hover:bg-lime-100', glow: 'shadow-md shadow-lime-100', gradientFrom: 'from-lime-50/50', iconBg: 'bg-lime-50', iconBorder: 'border-lime-100' },
  blue: { border: 'border-blue-200', hoverBorder: 'hover:border-blue-400', text: 'text-blue-700', iconStyle: 'text-blue-600 bg-blue-50 group-hover:bg-blue-100', glow: 'shadow-md shadow-blue-100', gradientFrom: 'from-blue-50/50', iconBg: 'bg-blue-100/50', iconBorder: 'border-blue-100' },
  indigo: { border: 'border-indigo-200', hoverBorder: 'hover:border-indigo-400', text: 'text-indigo-700', iconStyle: 'text-indigo-600 bg-indigo-50 group-hover:bg-indigo-100', glow: 'shadow-md shadow-indigo-100', gradientFrom: 'from-indigo-50/50', iconBg: 'bg-indigo-50', iconBorder: 'border-indigo-100' },
};

// --- Component: Hero Card (Simplified Rectangular) ---
const MainCategoryCard = ({
  title, icon: Icon, themeColor, href, description, delay = 0, imageSrc, listItems
}: {
  title: string, icon: any, themeColor: string, href: string, description?: string, delay?: number, imageSrc?: string, listItems?: { label: string; href: string }[]
}) => {
  const themes: { [key: string]: { border: string, text: string, bg: string, accent: string, hover: string, desc: string } } = {
    navy: { border: "border-white/10", text: "text-white", bg: "bg-gradient-to-b from-[#0f172a] via-[#1B3051] to-[#2563eb]", accent: "bg-white", hover: "hover:shadow-2xl hover:shadow-blue-900/40 hover:brightness-110", desc: "text-blue-100/80" },
    blue: { border: "border-white/10", text: "text-white", bg: "bg-gradient-to-b from-[#1e3a8a] via-[#2563eb] to-[#3b82f6]", accent: "bg-white", hover: "hover:shadow-2xl hover:shadow-blue-600/30 hover:brightness-110", desc: "text-blue-50/90" },
    lightBlue: { border: "border-white/10", text: "text-white", bg: "bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#93c5fd]", accent: "bg-white", hover: "hover:shadow-2xl hover:shadow-blue-400/20 hover:brightness-110", desc: "text-white" },
    cyan: { border: "border-cyan-200", text: "text-cyan-700", bg: "bg-cyan-50/50", accent: "bg-cyan-500", hover: "hover:border-cyan-400 hover:shadow-cyan-100", desc: "text-slate-500" },
    purple: { border: "border-purple-200", text: "text-purple-700", bg: "bg-purple-50/50", accent: "bg-purple-500", hover: "hover:border-purple-400 hover:shadow-purple-100", desc: "text-slate-500" },
    pink: { border: "border-pink-200", text: "text-pink-700", bg: "bg-pink-50/50", accent: "bg-pink-500", hover: "hover:border-pink-400 hover:shadow-pink-100", desc: "text-slate-500" },
  };

  const theme = themes[themeColor];

  return (
    <div className="w-full">
      <div
        className={`group relative w-full h-[400px] ${theme.bg} ${theme.border} ${theme.hover} transition-all duration-500 rounded-[40px] shadow-xl overflow-hidden hover:-translate-y-2 flex flex-col pt-8 pb-10 px-10`}
        style={{ animation: `fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${delay}ms`, opacity: 0 }}
      >
        <Link href={href} className="absolute inset-0 z-0" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Top Right "시작하기" Button */}
          <div className="absolute top-2 right-0 pointer-events-auto">
            <Link href={href} className="group/start-btn flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[13px] font-black transition-all backdrop-blur-md shadow-lg">
              <span>시작하기</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/start-btn:translate-x-1" />
            </Link>
          </div>

          <Link href={href}>
            <h3 className={`text-4xl font-black tracking-tight ${theme.text} mb-4 leading-tight pt-2 pr-20`}>
              {title}
            </h3>
          </Link>

          {/* Animated Moving Bar */}
          <div className="relative w-full h-1.5 bg-black/10 rounded-full overflow-hidden mb-8">
            <div className={`absolute top-0 left-0 h-full ${theme.accent} w-[15%] rounded-full animate-scrub-bar`} />
          </div>

          <p className={`${theme.desc} font-medium text-lg leading-relaxed max-w-[90%] mb-auto`}>
            {description}
          </p>

          {/* List Items at the bottom */}
          {listItems && (
            <div className="flex flex-col gap-7 mt-6">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group/item">
                  <span className="text-white/70 font-mono text-[15px] tracking-wide group-hover/item:text-white transition-colors">
                    // {item.label}
                  </span>
                  <Link href={item.href} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-[11px] font-bold text-white uppercase tracking-tighter">
                    <span>GO</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decorative Background Image (if props.imageSrc exists) */}
        {imageSrc && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-7 w-[92%] h-[180px] z-0 pointer-events-none rounded-[32px] overflow-hidden mix-blend-screen opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

export default function VocabularyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testingSubCards = [
    { title: 'Flashcards', subtitle: '반복 학습으로 장기 기억 완성', icon: Layers, color: 'pink', href: '/flashcards/selection' },
    { title: 'AI Vocab Quiz', subtitle: 'AI가 생성하는 고난도 어휘 퀴즈', icon: Sparkles, color: 'indigo', href: '/vocabulary-quiz' }
  ];
  const personalizationSubCards = [
    { title: 'Bookmark Mgmt', subtitle: '중요 단어 북마크', icon: Bookmark, color: 'blue', href: '/bookmarks' },
    { title: 'Dashboard', subtitle: '학습 통계', icon: GraduationCap, color: 'indigo', href: '/dashboard' },
    { title: 'Smart Search', subtitle: '빠른 단어 검색', icon: Search, color: 'violet', href: '/smart-search' }
  ];

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-cyan-500/30 flex flex-col">
      {/* === HERO SECTION (Launcher Screen) === */}
      <section className="relative h-screen w-full flex flex-col p-6 md:p-12 lg:p-20 shrink-0">
        {/* Header Area */}
        <div className="w-full max-w-[1800px] mx-auto animate-fade-in pt-0 z-20 px-6">
          {/* Top Navigation Bar - Minimal Top Margin */}
          <nav className="absolute top-4 right-6 md:top-6 md:right-20 inline-flex items-center gap-12 z-30">
            {[
              { label: 'Main', href: '/' },
              { label: 'Structure', href: '#' },
              { label: 'Vocabulary', href: '/vocabulary', active: true },
              { label: 'Listening', href: '#' },
              { label: 'Reading', href: '#' },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`text-xl font-bold tracking-tight transition-all duration-300 ${item.active
                  ? 'text-slate-900'
                  : 'text-slate-400 hover:text-slate-900'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Left Content - Reset Shift */}
            <div className="flex flex-col gap-6 relative z-20 transition-transform md:translate-y-6">
              {/* Top Badge Icon/Pill */}
              <div className="flex items-center">
                <div className="inline-flex items-center px-7 py-2.5 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white text-[15px] font-black uppercase tracking-[0.25em] shadow-xl shadow-blue-900/40 border border-white/10">
                  Vocabulary
                </div>
              </div>

              <h1 className="font-black tracking-tighter leading-tight drop-shadow-sm flex items-center gap-4 flex-wrap">
                <span className="text-[#1e3a8a] text-5xl md:text-7xl">Vocabulary 학습</span>
                <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-blue-600 stroke-[3]" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1e3a8a] text-5xl md:text-7xl">
                  AI 성적 예측 시스템
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-slate-900" />
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed">
                합격까지 남은 거리, AI가 계산해 드립니다.<br />
                목표 점수까지 부족한 어휘량이 얼마인지,<br />
                어떤 파트의 단어를 더 보강해야 하는지 명확한 가이드를 제시합니다.
              </p>
            </div>

            {/* Right Content: AI Chip (User Uploaded Image) - Adjusted Size to avoid overlap */}
            <div className="relative group/chip flex-1 flex justify-center md:justify-end max-w-xl scale-125 md:scale-[1.8] origin-center md:origin-right mt-12 md:mt-0 translate-x-12 md:translate-x-32 md:translate-y-16 z-10 overflow-visible"
              style={{ perspective: '3000px', transformStyle: 'preserve-3d' }}>

              {/* Orbit Set 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none"
                style={{ transformStyle: 'preserve-3d' }}>
                <div
                  className="absolute inset-0 border-[2.5px] border-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.8),0_0_80px_rgba(37,99,235,0.4),inset_0_0_20px_rgba(255,255,255,0.5)]"
                  style={{
                    animation: 'orbit 5s linear infinite',
                    transformStyle: 'preserve-3d'
                  }}
                />
              </div>

              {/* Orbit Set 2 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none"
                style={{ transform: 'translate(-50%, -50%) rotateY(45deg)', transformStyle: 'preserve-3d' }}>
                <div
                  className="absolute inset-0 border-[2px] border-white/90 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.7),0_0_60px_rgba(37,99,235,0.3)]"
                  style={{
                    animation: 'orbit 8s linear infinite reverse',
                    transformStyle: 'preserve-3d'
                  }}
                />
              </div>

              {/* Glowing Blue Orb (Fixed at the Red Circle area, always in front) */}
              <div className="absolute top-[42%] left-[-10%] md:left-[0%] pointer-events-none z-30"
                style={{ transform: 'translateZ(200px)', transformStyle: 'preserve-3d' }}>
                <div
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full shadow-[0_0_50px_rgba(56,189,248,0.7),0_0_100px_rgba(56,189,248,0.4)]"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #f0f9ff, #7dd3fc, #38bdf8)',
                  }}
                />
              </div>

              {/* The Image (Static Middle Layer) */}
              <div className="relative z-10 transition-all duration-700 group-hover/chip:translate-y-[-10px]"
                style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
                <img
                  src="/images/ai-chip-v3.png"
                  alt="AI Chip"
                  className="w-64 md:w-[450px] h-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: THE 3 CARDS - Positioned at the bottom */}
        <div className="mt-auto w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-0 z-10 transform transition-transform md:-translate-y-12">
          <MainCategoryCard
            title="Core Learning"
            icon={BookOpen}
            themeColor="navy"
            href="#core-learning"
            description="TOEIC 빈출 어휘 1,350개를 마스터하는 핵심 학습 경로입니다."
            delay={100}
            imageSrc="/images/core-learning-v2.png"
          />
          <MainCategoryCard
            title="Testing & Review"
            icon={ClipboardCheck}
            themeColor="blue"
            href="#testing-review"
            description="학습한 단어를 완벽하게 장기 기억으로 전환하세요."
            delay={200}
            listItems={[
              { label: '단어 테스트 진행', href: '/vocabulary-quiz' },
              { label: '오답노트 확인', href: '/dashboard' },
              { label: '즐겨찾기 단어 학습', href: '/bookmarks' }
            ]}
          />
          <MainCategoryCard
            title="Personalization"
            icon={User}
            themeColor="lightBlue"
            href="#personalization"
            delay={300}
            imageSrc="/images/personalization.png"
          />
        </div>

        {/* Main Menu Button - Overlay at the bottom left */}
        <div className="absolute bottom-10 left-10 md:left-20 z-20">
          <Link href="/" className="group relative">
            <div className="relative flex items-center gap-6 bg-[#333a4d]/90 hover:bg-[#3d455c] backdrop-blur-md transition-all duration-300 py-4 px-7 rounded-[24px] shadow-2xl border border-white/10">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
                <ArrowLeft className="w-5 h-5 text-blue-400 transition-transform group-hover:-translate-x-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-black tracking-tight leading-none mb-1">Main Menu</span>
                <span className="text-slate-400 text-xs font-medium tracking-wide">Return to Homepage</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {/* === CONTENT SECTIONS (Restored) === */}

      {/* 1. Core Learning */}
      <section id="core-learning" className="relative py-32 z-10 px-6 max-w-7xl mx-auto border-t border-slate-200 bg-white overflow-hidden rounded-[80px] my-20 shadow-sm">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="mb-20 relative z-10">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">Phase 01</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 animate-gradient-x bg-[length:200%_auto] drop-shadow-[0_0_25px_rgba(37,99,235,0.2)]">CORE LEARNING</span>
          </h2>
          <p className="text-[#1e3a8a] font-bold text-lg tracking-wide max-w-xl leading-relaxed">
            각 Phase를 완료하고 완벽한 Core로 등극해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          {/* Card 1: Core Vocabulary */}
          <Link href="/core-learning" className="group relative min-h-[400px] rounded-[40px] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[42px] blur opacity-30 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full bg-white rounded-[40px] overflow-hidden p-8 md:p-12 flex flex-col justify-between border border-slate-100">
              {/* Content logic restored from previous steps... */}
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-12">
                <BookOpen className="w-80 h-80 text-blue-500" />
              </div>
              <div className="z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-4 text-[#1e3a8a]">Core Vocabulary</h3>
                <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-sm group-hover:text-slate-900 transition-colors">TOEIC 빈출 어휘 1,350개를 완벽하게 마스터하세요.</p>
                <div className="mt-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-50 border border-blue-200 group-hover:bg-blue-100 transition-all">
                    <span className="text-sm font-bold text-blue-700 tracking-widest uppercase">Start Learning</span>
                    <ArrowRight className="w-4 h-4 text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Confusable Words */}
          <Link href="/confusable-words" className="group relative min-h-[400px] rounded-[40px] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-[42px] blur opacity-30 group-hover:opacity-100 transition duration-500" />
            <div className="relative h-full bg-white rounded-[40px] overflow-hidden p-8 md:p-12 flex flex-col justify-between border border-slate-100">
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12">
                <Brain className="w-80 h-80 text-cyan-500" />
              </div>
              <div className="z-10">
                <h3 className="text-4xl md:text-5xl font-black mb-4 text-[#1e3a8a]">Confusable Words</h3>
                <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-sm group-hover:text-slate-900 transition-colors">의미가 비슷해 헷갈리는 단어들을 명확히 구분하세요.</p>
                <div className="mt-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-50 border border-cyan-200 group-hover:bg-cyan-100 transition-all">
                    <span className="text-sm font-bold text-cyan-700 tracking-widest uppercase">Master Now</span>
                    <ArrowRight className="w-4 h-4 text-cyan-700" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 2. Testing & Review */}
      <section id="testing-review" className="relative py-32 z-10 px-6 max-w-7xl mx-auto border-t border-slate-200 bg-white overflow-hidden rounded-[80px] my-20 shadow-sm">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="mb-20 relative z-10">
          <p className="text-purple-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">Phase 02</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 animate-gradient-x bg-[length:200%_auto]">TESTING & REVIEW</span>
          </h2>
          <p className="text-[#1e3a8a] font-bold text-lg tracking-wide max-w-xl leading-relaxed">실전 감각을 키우는 체계적인 복습 시스템을 경험하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-4xl">
          {testingSubCards.map((card, idx) => {
            const styles: { [key: string]: any } = {
              purple: { iconText: 'text-purple-600', iconBg: 'bg-purple-50', btn: 'bg-purple-50 border-purple-200 text-purple-700' },
              pink: { iconText: 'text-pink-600', iconBg: 'bg-pink-50', btn: 'bg-pink-50 border-pink-200 text-pink-700' },
              indigo: { iconText: 'text-indigo-600', iconBg: 'bg-indigo-50', btn: 'bg-indigo-50 border-indigo-200 text-indigo-700' }
            };
            const s = styles[card.color] || styles['purple'];
            return (
              <Link key={idx} href={card.href} className="group relative min-h-[380px] rounded-[32px] transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-full bg-white rounded-[32px] overflow-hidden p-8 flex flex-col justify-between border border-slate-100 shadow-sm">
                  <div className="z-10">
                    <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-6 shadow-sm border border-slate-50`}>
                      <card.icon className={`w-7 h-7 ${s.iconText}`} />
                    </div>
                    <h3 className="text-2xl font-black mb-3 text-slate-800">{card.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{card.subtitle}</p>
                  </div>
                  <div className={`mt-auto inline-flex items-center gap-3 px-6 py-3 rounded-xl border group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs ${s.btn}`}>
                    <span>Start Test</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Personalization */}
      <section id="personalization" className="relative py-32 z-10 px-6 max-w-7xl mx-auto border-t border-slate-200 bg-white overflow-hidden rounded-[80px] my-20 shadow-sm">
        <div className="mb-20 relative z-10">
          <p className="text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">Phase 03</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient-x bg-[length:200%_auto]">PERSONALIZATION</span>
          </h2>
          <p className="text-[#1e3a8a] font-bold text-lg tracking-wide max-w-xl leading-relaxed">오직 당신만을 위한 맞춤형 학습 데이터를 제공합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {personalizationSubCards.map((card, idx) => (
            <Link key={idx} href={card.href} className="group relative min-h-[380px] rounded-[40px] transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-full bg-white rounded-[40px] overflow-hidden p-8 flex flex-col justify-between border border-slate-100 shadow-sm">
                <div className="flex justify-between items-start z-10 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">
                    <card.icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>
                <div className="z-10">
                  <h3 className="text-2xl font-black mb-3 text-[#1e3a8a]">{card.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{card.subtitle}</p>
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold text-blue-700 uppercase tracking-widest group-hover:translate-x-1 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-200 relative z-10 bg-white">
        <p className="text-xs font-mono text-slate-400 tracking-[0.5em] uppercase">Raiqa Labs Vocabulary System v2.0</p>
      </footer>

      <style jsx global>{`
        @keyframes fadeUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes floating { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes orbit {
          0% { transform: rotateX(75deg) rotateZ(0deg); }
          100% { transform: rotateX(75deg) rotateZ(360deg); }
        }
        @keyframes orbit-ball {
          0% { transform: rotateX(-75deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(-75deg) rotateY(360deg) rotateZ(0deg); }
        }
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes scrub-bar {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(670%); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-float-slow { animation: floating 4s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% auto; }
        .animate-scrub-bar { 
          animation: scrub-bar 2.5s linear infinite !important; 
          will-change: transform;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}
