
import React, { useState, useCallback } from 'react';
import { generateSkillMapping } from './services/geminiService';
import { Button } from './components/Button';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CurriculumInputForm } from './components/CurriculumInputForm'; // New component

function App() {
  const [curriculumInput, setCurriculumInput] = useState<string>('');
  const [mappingResult, setMappingResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showCurriculumInput, setShowCurriculumInput] = useState<boolean>(false); // State to control view

  const handleStartExploring = useCallback(() => {
    setShowCurriculumInput(true);
    // Optionally reset other states if navigating back and forth
    setCurriculumInput('');
    setMappingResult('');
    setError(null);
    setIsLoading(false);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!curriculumInput.trim()) {
      setError('Please enter some curriculum text to analyze.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setMappingResult('');

    try {
      const result = await generateSkillMapping(curriculumInput);
      setMappingResult(result);
    } catch (err: any) {
      console.error('Failed to generate skill mapping:', err);
      setError(`Failed to generate skill mapping: ${err.message || 'Unknown error'}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  }, [curriculumInput]);

  const handleBrowseSkills = useCallback(() => {
    alert('Browse 2030 Skills functionality coming soon!');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
      <Header />

      <main className="flex-grow w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {!showCurriculumInput ? (
          <>
            <HeroSection
              onStartExploring={handleStartExploring}
              onBrowseSkills={handleBrowseSkills}
            />
            <StatsSection />
            <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 my-16 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Everything You Need to Future-Proof Learning
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our interactive tools help parents and kids understand the connection between
                today's education and tomorrow's success.
              </p>
              {/* More features could go here */}
            </section>
          </>
        ) : (
          <CurriculumInputForm
            curriculumInput={curriculumInput}
            onCurriculumChange={setCurriculumInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            mappingResult={mappingResult}
            onBack={() => setShowCurriculumInput(false)} // Added back button functionality
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
