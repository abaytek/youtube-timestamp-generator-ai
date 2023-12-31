import { genAI } from "@/models/Gimini";
import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from 'youtube-transcript';

export async function POST(req: NextRequest, res: NextResponse) {
    const { url } = await req.json()
    const data = await YoutubeTranscript.fetchTranscript(url)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Please generate a generalized timestamp from the given array, the array contains objects, and the objects contains three elements, text, duration and offset. I want you to consider the offset as the amount of seconds in the video and needst to be converted into minutes, so divide offset by 60 and format it in minutes:seconds format, notice the one in the end of the array object offset divided by 60 is the length of the video.The timestamp needs to include key moments in from the text only. I want no bullet or text just the timestamps, The timestamp should include the specific time starting with 0:00 and go till the end of the video, maximum of 6 words and maximum 6 timstamps with key  moments only  for each key moment mentioned in the array.
    ${JSON.stringify(data).trim()}
    `
    const result = await model.generateContent(prompt);
    // Use streaming with text-only input
    // const result = await model.generateContentStream(prompt);
    // Use streaming with multi-turn conversations (like chat)
    // const result = await model.sendMessageStream(msg);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json(text)
    // return NextResponse.json(data)
}