"use client";

import React from 'react';
import { COPY } from '@/content/copy';

export default function FAQ() {
  return (
    <section className="py-20 bg-[#0B0B0C]">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            자주 묻는 질문
          </h2>
        </div>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {COPY.faq.map((item, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-[#D6B25E]/20">
              <h3 className="text-white font-bold mb-3">{item.q}</h3>
              <p 
                className="text-neutral-300"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
