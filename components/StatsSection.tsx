
import React from 'react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="text-indigo-700 text-4xl mb-3">{icon}</div>
    <p className="text-4xl font-bold text-gray-900 mb-1">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export const StatsSection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 py-12">
      <Stat
        icon={
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v4m0 0l-4-4m4 4l4-4M12 4v4m0 0l-4 4m4-4l4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        }
        value="50+"
        label="Future Skills"
      />
      <Stat
        icon={
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        }
        value="12"
        label="Core Subjects"
      />
      <Stat
        icon={
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
          </svg>
        }
        value="2030"
        label="Ready"
      />
    </section>
  );
};
