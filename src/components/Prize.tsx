"use client";

import React from 'react';
import Button from './Button';
import { COPY } from '@/content/copy';

export default function Prize() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0C]">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {COPY.prize.title}
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {COPY.prize.lines.map((line, index) => (
              <p key={index} className="text-lg md:text-xl text-neutral-300">
                {line}
              </p>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="{COPY.apply.cta} 버튼"
          >
            {COPY.apply.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
