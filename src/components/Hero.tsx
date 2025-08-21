"use client";

import React from 'react';
import Button from './Button';
import { COPY } from '@/content/copy';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0B0B0C] overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-screen-lg mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {COPY.hero.headline}
        </h1>
        
        {/* Subtitle */}
        <p className="mt-5 text-2xl md:text-3xl text-neutral-300 mb-6 max-w-3xl mx-auto">
          {COPY.hero.sub}
        </p>
        
        {/* Slogan */}
        <p className="mt-2 text-xl md:text-3xl font-bold text-amber-300/80 mb-8">
          {COPY.hero.slogan}
        </p>
        
        {/* 통계 배지 제거 */}
        
        {/* CTA Buttons */}
        <div className="mt-8 flex gap-3 justify-center items-center flex-col sm:flex-row">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="{COPY.hero.ctaPrimary} 버튼"
          >
            {COPY.hero.ctaPrimary}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="{COPY.hero.ctaSecondary} 버튼"
          >
            {COPY.hero.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
