import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// We use process.env.API_KEY directly. 
// The Vite build process (configured in vite.config.ts) will replace this string 
// with the actual environment variable value during the build.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiAdvice = async (
  question: string, 
  language: string,
  context: string
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const prompt = `
      You are an expert cooperative society consultant helping Yashbhai with his project "Jan Kalyan Sankul".
      Current Project Context: ${context}
      
      The user is asking a question in this language code: ${language}.
      Please answer in the same language.
      Keep the answer concise, encouraging, and legally accurate for India (Gujarat).
      
      User Question: ${question}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Sorry, I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the advisor. Please try again later.";
  }
};