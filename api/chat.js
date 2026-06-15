// Vercel Serverless Function — yeh aapki API key ko CHHUPAKAR rakhta hai.
// Browser kabhi key nahi dekhta. Browser sirf is function se baat karta hai.

export default async function handler(req, res) {
  // sirf POST allow karo
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // API key Vercel ke environment se aati hai (code mein likhi nahi hai)
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return res.status(500).json({ error: "API key set nahi hai. Vercel settings mein GEMINI_API_KEY daalein." });
  }

  try {
    const { system, messages } = req.body;

    // Gemini ke format mein convert karo
    const contents = (messages || []).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const body = {
      contents,
      systemInstruction: system ? { parts: [{ text: system }] } : undefined,
      generationConfig: { maxOutputTokens: 1000, temperature: 0.7 },
    };

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
      API_KEY;

    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await r.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || "Gemini error" });
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("\n") ||
      "Sorry, jawab nahi mil paya. Dobara try karein.";

    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: "Server error: " + e.message });
  }
}
