import React from 'react';

export default function Concept() {
  const rounds = [
    {
      number: 1,
      title: "지식의 문",
      description: "기본 상식과 논리력 테스트",
      icon: "🧠"
    },
    {
      number: 2,
      title: "팀워크의 시련",
      description: "협력과 소통 능력 검증",
      icon: "🤝"
    },
    {
      number: 3,
      title: "전략의 미로",
      description: "전략적 사고와 판단력",
      icon: "🎯"
    },
    {
      number: 4,
      title: "체력의 한계",
      description: "지구력과 집중력 테스트",
      icon: "💪"
    },
    {
      number: 5,
      title: "최종 결전",
      description: "종합 능력과 운명의 순간",
      icon: "🏆"
    }
  ];

  return (
    <section id="concept" className="py-20 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#D4AF37]">5라운드</span>의 도전
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            각 라운드마다 다른 능력이 요구되는 종합 서바이벌 게임.<br />
            지식, 팀워크, 전략, 체력, 그리고 운명까지 모든 것을 걸고 싸워라.
          </p>
        </div>

        {/* Rounds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rounds.map((round, index) => (
            <div 
              key={round.number}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#D4AF37] transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-6xl mb-4">{round.icon}</div>
              <div className="text-2xl font-bold text-[#D4AF37] mb-2">
                Round {round.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {round.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {round.description}
              </p>
            </div>
          ))}
        </div>

        {/* Game Concept */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D7263D]/10 p-8 rounded-2xl border border-[#D4AF37]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                왜 "Street Smart"인가?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                교실에서 배운 지식만으로는 부족하다. 진짜 실력자는 
                <span className="text-[#D4AF37] font-semibold">실생활의 지혜</span>와 
                <span className="text-[#D4AF37] font-semibold">순간의 판단력</span>을 
                갖추고 있다.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  이론과 실전의 조화
                </li>
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  압박감 속에서의 냉정함
                </li>
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  예측 불가능한 상황 대처
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🎭</div>
              <p className="text-[#D4AF37] font-semibold text-lg">
                "가면을 벗고 진짜 실력을 보여줘"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
