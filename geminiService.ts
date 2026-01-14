
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getFragranceAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I apologize, I am unable to provide recommendations at this moment. Please visit our boutique for assistance.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am experiencing a technical difficulty. Elegance takes time; please try again shortly.";
  }
};
