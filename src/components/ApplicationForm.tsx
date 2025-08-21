"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from './Button';
import { COPY } from '@/content/copy';
import { formSchema, FormData } from '@/types/form';

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
      // TODO: Supabase 연동
      console.log('Form data:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error: unknown) {
      setSubmitError(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 bg-[#0B0B0C]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {COPY.apply.title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-300">
            {COPY.apply.sub}
          </p>
        </div>
        
        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#D6B25E]/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                {COPY.apply.fields.name}
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="홍길동"
                className="w-full px-4 py-3 bg-[#0B0B0C] border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D6B25E] focus:border-transparent transition-all duration-200"
              />
              {errors.name && <span className="text-[#D05454] text-sm">{errors.name.message}</span>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                {COPY.apply.fields.email}
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-[#0B0B0C] border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D6B25E] focus:border-transparent transition-all duration-200"
              />
              {errors.email && <span className="text-[#D05454] text-sm">{errors.email.message}</span>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                {COPY.apply.fields.phone}
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                placeholder="010-1234-5678"
                className="w-full px-4 py-3 bg-[#0B0B0C] border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D6B25E] focus:border-transparent transition-all duration-200"
              />
              {errors.phone && <span className="text-[#D05454] text-sm">{errors.phone.message}</span>}
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
                aria-label="{COPY.apply.cta} 버튼"
              >
                {COPY.apply.cta}
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-neutral-400">
                {COPY.apply.privacy}
              </p>
            </div>
          </form>
          
          {submitSuccess && (
            <div className="mt-6 p-4 bg-[#D6B25E]/10 border border-[#D6B25E]/30 rounded-lg text-center">
              <p className="text-[#D6B25E] font-medium">참가 신청이 완료되었습니다!</p>
            </div>
          )}
          
          {submitError && (
            <div className="mt-6 p-4 bg-[#D05454]/10 border border-[#D05454]/30 rounded-lg text-center">
              <p className="text-[#D05454] font-medium">{submitError}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
