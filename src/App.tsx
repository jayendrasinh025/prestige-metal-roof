/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { TimeOfDay } from './data/roofingData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { QuoteForm } from './components/QuoteForm';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');
  const [preselectedService, setPreselectedService] = useState<string | null>(null);
  const [preselectedProject, setPreselectedProject] = useState<string | null>(null);

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectServiceForQuote = useCallback(
    (serviceName: string) => {
      setPreselectedService(serviceName);
      handleNavigate('quote');
    },
    [handleNavigate]
  );

  const handleRequestProjectQuote = useCallback(
    (projectTitle: string) => {
      setPreselectedProject(projectTitle);
      handleNavigate('quote');
    },
    [handleNavigate]
  );

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F4F5F7] flex flex-col">
      <Navbar onNavigate={handleNavigate} />

      <main className="flex-1">
        <Hero
          timeOfDay={timeOfDay}
          onToggleTimeOfDay={setTimeOfDay}
          onNavigate={handleNavigate}
        />

        <About onNavigate={handleNavigate} />

        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        <WhyChooseUs onNavigate={handleNavigate} />

        <Projects onRequestProjectQuote={handleRequestProjectQuote} />

        <Process onNavigate={handleNavigate} />

        <QuoteForm
          preselectedService={preselectedService}
          preselectedProject={preselectedProject}
        />

        <FinalCta onNavigate={handleNavigate} />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onSelectServiceForQuote={handleSelectServiceForQuote}
      />
    </div>
  );
}
