import React from 'react';
import Button from './Button';

export default function Prize() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#D4AF37]">상금</span>과 
            <span className="text-[#D7263D]">네트워킹</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            승리만이 전부가 아니다. 이 게임에서 얻을 수 있는 것은 
            돈보다 더 가치 있는 것들이다.
          </p>
        </div>

        {/* Prize Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Prize Details */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 p-8 rounded-2xl border border-[#D4AF37]/30">
              <h3 className="text-3xl font-bold text-[#D4AF37] mb-4">
                🏆 상금 구조
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">1등</span>
                  <span className="text-[#D4AF37] text-2xl font-bold">100만원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">2등</span>
                  <span className="text-[#D4AF37] text-xl font-bold">50만원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">3등</span>
                  <span className="text-[#D4AF37] text-lg font-bold">30만원</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">특별상</span>
                  <span className="text-[#D4AF37] text-lg font-bold">20만원</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#D4AF37]/10 rounded-lg">
                <p className="text-[#D4AF37] text-sm">
                  * 총 상금 200만원 + 추가 특별상
                </p>
              </div>
            </div>
          </div>

          {/* Networking Value */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#D7263D]/20 to-[#D7263D]/5 p-8 rounded-2xl border border-[#D7263D]/30">
              <h3 className="text-3xl font-bold text-[#D7263D] mb-4">
                🌐 네트워킹 가치
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-[#D7263D] text-xl">💼</span>
                  <div>
                    <h4 className="text-white font-semibold">업계 인맥 구축</h4>
                    <p className="text-gray-300 text-sm">명문대 동문들과의 네트워킹</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#D7263D] text-xl">🎯</span>
                  <div>
                    <h4 className="text-white font-semibold">스카우트 기회</h4>
                    <p className="text-gray-300 text-sm">우수 참가자 우대 채용</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#D7263D] text-xl">📈</span>
                  <div>
                    <h4 className="text-white font-semibold">커리어 성장</h4>
                    <p className="text-gray-300 text-sm">실력 인증 및 포트폴리오</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D7263D]/10 p-8 rounded-2xl border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              이제 당신의 차례입니다
            </h3>
            <p className="text-gray-300 mb-6">
              상금도 좋지만, 진짜 가치는 이 게임을 통해 얻는 
              <span className="text-[#D4AF37] font-semibold">자신감</span>과 
              <span className="text-[#D4AF37] font-semibold">네트워크</span>입니다.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              지금 지원하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
