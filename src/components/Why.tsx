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
        </div>
        
        {/* 새로운 구조화된 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COPY.why.body.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-[#D6B25E]/20 hover:border-[#D6B25E]/40 transition-all duration-300 group">
              <div className="text-center">
                {/* 아이콘 또는 번호 */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D6B25E] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                
                {/* 텍스트 내용 */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed">
                  {item}
                </h3>
                
                {/* 추가 설명 (선택사항) */}
                <p className="text-neutral-400 text-sm md:text-base">
                  {index === 0 && "실제 경험을 바탕으로 한 전략과 노하우"}
                  {index === 1 && "엘리트 교육과 업계 경험을 겸비한 참가자"}
                  {index === 2 && "게임에 대한 깊은 이해와 열정을 가진 참가자"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
