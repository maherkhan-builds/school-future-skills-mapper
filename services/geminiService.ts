
import { GoogleGenAI } from '@google/genai';

// The core prompt that guides the Gemini model in its analysis.
const CORE_GEMINI_PROMPT = `
Please act as an expert in education, future trends, and skill development for children. Your task is to analyze a given school curriculum and provide insights into its alignment with skills projected to be essential by 2030.

Follow these steps precisely:

1.  **Concise Checklist (3-7 bullets):** Outline your approach to analyzing and mapping the provided curriculum to future (2030) skills.
2.  **Curriculum Assessment:** Based on the curriculum provided, assess its relevance to skills projected to be essential in 2030. Identify key strengths and weaknesses.
3.  **Future Skill Mapping:** List specific 2030 skills (e.g., Critical Thinking, Digital Literacy, Adaptability, Collaboration, Creative Problem-Solving, AI Literacy, Data Fluency) and map how elements of the provided curriculum either contribute to or fall short of developing these skills. Provide clear examples for each mapping.
4.  **Actionable Recommendations:** Generate 3-5 actionable recommendations for aligning the curriculum with 2030 skills. Each recommendation should be specific, practical, and measurable.
5.  **Validation and Adjustment:** Explain how these recommendations ensure logical consistency and address identified gaps. Adjust any recommendations if inconsistencies or missing aspects are found during this internal validation step.

Please present your response clearly, using markdown headings for each section.
`;

export async function generateSkillMapping(curriculumText: string): Promise<string> {
  // CRITICAL: Create a new GoogleGenAI instance right before making an API call
  // to ensure it always uses the most up-to-date API key from the dialog.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const fullPrompt = `Here is the curriculum:\n\n${curriculumText}\n\n${CORE_GEMINI_PROMPT}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Using gemini-3-pro-preview for complex reasoning and structured output
      contents: [{ parts: [{ text: fullPrompt }] }],
      config: {
        // Optional: configure thinking budget for more detailed reasoning if needed
        // thinkingConfig: { thinkingBudget: 1000 },
        temperature: 0.7, // Adjust temperature for creativity vs. focus
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 2048, // Ensure enough tokens for a comprehensive response
      },
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error('Gemini API returned an empty response.');
    }
    return resultText;
  } catch (error: any) {
    if (error.message.includes('API key must be selected')) {
      console.error('API Key Error: User needs to select an API key.');
      // Handle API key selection for Veo/Gemini 3 Pro Image models if necessary,
      // though for text-only, process.env.API_KEY should ideally be pre-configured.
      // If this were a video/image pro app, we'd use:
      // await window.aistudio.openSelectKey();
      // throw new Error('A paid API key is required. Please select one.');
    } else if (error.message.includes('Requested entity was not found.')) {
        // This specific error can indicate an issue with the API key after selection.
        // If window.aistudio.openSelectKey were used, this would be the place to trigger it again.
        throw new Error('There was an issue with the API key or model access. Please ensure your API key is valid and has access to the model.');
    }
    console.error('Error calling Gemini API:', error);
    throw new Error(`Error communicating with AI: ${error.message || 'Unknown API error'}`);
  }
}
