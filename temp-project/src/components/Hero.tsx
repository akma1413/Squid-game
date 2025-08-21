import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">명문대생도 울고 갈</span>
          <span className="block text-[#D4AF37]">궁극의 서바이벌</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          네가 진짜 실력자라면 보여줘. 100명의 엘리트가 겨루는<br />
          <span className="text-[#D4AF37] font-semibold">"Prove You're Street Smart"</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            지금 지원하고 명문대를 이겨라
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' })}
          >
            게임 규칙 알아보기
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">100</div>
            <div className="text-gray-400">참가자</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">100만원+</div>
            <div className="text-gray-400">상금</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">5</div>
            <div className="text-gray-400">라운드</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
