import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

export async function main(propmt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: propmt,
  });
  return response.text;
}
