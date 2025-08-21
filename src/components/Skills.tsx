"use client";

import React from 'react';
import { COPY } from '@/content/copy';

export default function Skills() {
  return (
    <section className="py-20 bg-[#0B0B0C]">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {COPY.skills.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {COPY.skills.desc}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {COPY.skills.items.slice(0, 4).map((skill, index) => (
            <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg border border-[#D6B25E]/20 text-center">
              <div className="text-[#D6B25E] text-3xl mb-2" aria-hidden="true">🎯</div>
              <p className="text-lg md:text-xl text-white font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
