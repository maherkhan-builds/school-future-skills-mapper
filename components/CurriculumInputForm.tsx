
import React from 'react';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';

interface CurriculumInputFormProps {
  curriculumInput: string;
  onCurriculumChange: (input: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  error: string | null;
  mappingResult: string;
  onBack: () => void; // Added onBack prop
}

export const CurriculumInputForm: React.FC<CurriculumInputFormProps> = ({
  curriculumInput,
  onCurriculumChange,
  onSubmit,
  isLoading,
  error,
  mappingResult,
  onBack,
}) => {
  return (
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 my-8 mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">
          Map Your Curriculum to Future Skills
        </h2>
        <Button appearance="outlined" onClick={onBack} disabled={isLoading} className="text-sm py-2 px-4">
          Back to Home
        </Button>
      </div>

      <div className="mb-8">
        <label htmlFor="curriculum" className="block text-lg font-medium text-gray-700 mb-2">
          Enter your school's curriculum details here:
        </label>
        <textarea
          id="curriculum"
          className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 ease-in-out resize-y"
          rows={10}
          value={curriculumInput}
          onChange={(e) => onCurriculumChange(e.target.value)}
          placeholder="E.g., 'Grade 5 Science: Learning about ecosystems, plant life cycles, and simple machines. Students will conduct experiments and analyze results...'"
          aria-label="Curriculum input text area"
          disabled={isLoading}
        ></textarea>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="sticky bottom-0 bg-white p-4 -mx-6 sm:-mx-8 lg:-mx-10 border-t border-gray-200 flex justify-center">
        <Button appearance="secondary" onClick={onSubmit} disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner />
              Analyzing...
            </>
          ) : (
            'Generate Future Skill Map'
          )}
        </Button>
      </div>

      {mappingResult && (
        <section className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-4">
            Future Skill Mapping Results
          </h3>
          <div className="prose max-w-none text-gray-800 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
            {mappingResult}
          </div>
        </section>
      )}
    </div>
  );
};
