import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

export interface GeminiEnrichment {
  summary: string;
  keyPoints: string[];
  suggestedTags: string[];
}

export async function enrichWithGemini(
  title: string,
  description: string | null,
  url: string
): Promise<GeminiEnrichment> {
  if (!genAI) {
    return {
      summary: description || `Saved from ${new URL(url).hostname}`,
      keyPoints: [],
      suggestedTags: [],
    };
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Analyze this webpage and return ONLY valid JSON, no markdown or extra text:
{
  "summary": "string (2 sentences, what this page is about)",
  "keyPoints": ["string", "3-5 bullet takeaways"],
  "suggestedTags": ["string", "4-6 relevant tags, lowercase, single words or short phrases"]
}

Page title: ${title}
Page description: ${description || "N/A"}
URL: ${url}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const cleaned = text.replace(/^```\w*\n?|\n?```$/g, "").trim();
    const parsed = JSON.parse(cleaned) as GeminiEnrichment;
    return {
      summary: parsed.summary?.slice(0, 500) || "",
      keyPoints: Array.isArray(parsed.keyPoints) ? parsed.keyPoints.slice(0, 5) : [],
      suggestedTags: Array.isArray(parsed.suggestedTags)
        ? parsed.suggestedTags.slice(0, 6).map((t) => String(t).toLowerCase())
        : [],
    };
  } catch {
    return {
      summary: description || "",
      keyPoints: [],
      suggestedTags: [],
    };
  }
}
