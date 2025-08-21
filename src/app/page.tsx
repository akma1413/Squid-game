import React from 'react';
import Hero from '@/components/Hero';
import Why from '@/components/Why';
import Skills from '@/components/Skills';
import Prize from '@/components/Prize';
import FAQ from '@/components/FAQ';
import ApplicationForm from '@/components/ApplicationForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0C]">
      <Hero />
      <Why />
      <Skills />
      <Prize />
      <FAQ />
      <ApplicationForm />
    </main>
  );
}
