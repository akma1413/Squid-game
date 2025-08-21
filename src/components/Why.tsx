"use client";

import React from 'react';
import { COPY } from '@/content/copy';

export default function Why() {
  return (
    <section className="py-20 bg-[#0B0B0C]">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {COPY.why.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            {COPY.why.sub}
          </p>
          <div className="space-y-3">
            {COPY.why.body.map((line, index) => (
              <p key={index} className="text-lg md:text-xl text-neutral-300">
                {line}
              </p>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COPY.why.bullets.map((item, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-[#D6B25E]/20">
              <div className="text-[#D6B25E] text-2xl mb-3" aria-hidden="true">✓</div>
              <p className="text-lg md:text-xl text-white font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
