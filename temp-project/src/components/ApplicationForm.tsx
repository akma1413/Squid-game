import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from './Button';
import Input from './Input';

// 폼 유효성 검사 스키마
const formSchema = z.object({
  name: z.string().min(2, '이름은 2글자 이상이어야 합니다').optional(),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().regex(/^01[0-9]-\d{4}-\d{4}$/, '올바른 전화번호 형식을 입력해주세요 (예: 010-1234-5678)'),
  interest: z.enum(['high', 'medium', 'low'], {
    required_error: '참가 희망도를 선택해주세요'
  })
});

type FormData = z.infer<typeof formSchema>;

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // TODO: Supabase API 연동
      console.log('Form data:', data);
      
      // 임시 성공 처리
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => setSubmitSuccess(false), 3000);
      
    } catch (error) {
      setSubmitError('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="application-form" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 p-12 rounded-2xl border border-[#D4AF37]/30">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
              대기 리스트 등록 완료!
            </h2>
            <p className="text-gray-300 mb-6">
              참가 신청이 성공적으로 접수되었습니다.<br />
              이메일로 추가 안내사항을 보내드리겠습니다.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                친구들에게도 이 기회를 알려주세요!
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="sm">카카오톡 공유</Button>
                <Button variant="outline" size="sm">URL 복사</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className="py-20 bg-[#0D0D0D]">
      <div className="max-w-2xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#D4AF37]">참가 신청</span>
          </h2>
          <p className="text-xl text-gray-300">
            명문대생들과 겨뤄볼 준비가 되었나요?<br />
            지금 바로 지원하고 도전해보세요.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="이름 (선택사항)"
              name="name"
              type="text"
              placeholder="홍길동"
              register={register}
              error={errors.name?.message}
            />

            <Input
              label="이메일 주소"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              register={register}
              error={errors.email?.message}
            />

            <Input
              label="전화번호"
              name="phone"
              type="tel"
              placeholder="010-1234-5678"
              required
              register={register}
              error={errors.phone?.message}
            />

            {/* Interest Level Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                참가 희망도 <span className="text-[#D7263D]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'high', label: '높음', description: '반드시 참가하고 싶다' },
                  { value: 'medium', label: '보통', description: '기회가 되면 참가하고 싶다' },
                  { value: 'low', label: '낮음', description: '상황을 봐서 결정한다' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-3 bg-gray-700 rounded-lg border border-gray-600 hover:border-[#D4AF37] cursor-pointer transition-colors">
                    <input
                      type="radio"
                      value={option.value}
                      {...register('interest')}
                      className="mr-3 text-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                    <div>
                      <div className="font-medium text-white">{option.label}</div>
                      <div className="text-sm text-gray-400">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.interest && (
                <p className="mt-1 text-sm text-[#D7263D]">{errors.interest.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? '제출 중...' : '참가 신청하기'}
              </Button>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="mt-4 p-4 bg-[#D7263D]/10 border border-[#D7263D]/30 rounded-lg">
                <p className="text-[#D7263D] text-center">{submitError}</p>
              </div>
            )}

            {/* Privacy Notice */}
            <div className="text-center">
              <p className="text-sm text-gray-400">
                제출된 정보는 참가자 모집 목적으로만 사용되며, 
                <span className="text-[#D4AF37]">개인정보처리방침</span>에 따라 보호됩니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
