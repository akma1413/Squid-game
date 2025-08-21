import React from 'react';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Prize from '@/components/Prize';
import ApplicationForm from '@/components/ApplicationForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Hero />
      <Concept />
      <Prize />
      <ApplicationForm />
    </main>
  );
}
