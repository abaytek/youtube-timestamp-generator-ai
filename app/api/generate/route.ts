import { genAI } from "@/models/Gimini";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Write a story about a magic backpack."
    // const result = await model.generateContent(prompt);
    // Use streaming with text-only input
    const result = await model.generateContentStream(prompt);
    // Use streaming with multi-turn conversations (like chat)
    // const result = await model.sendMessageStream(msg);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json(text)
}