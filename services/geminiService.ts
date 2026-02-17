
import { GoogleGenAI } from "@google/genai";
import { CASE_STUDY_PROMPT } from "../constants.tsx";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getConsultingAdvice = async (userMessage: string) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: CASE_STUDY_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my supply chain data repository right now. Please try again in a moment.";
  }
};
