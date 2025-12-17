import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { DEAL_ANALYSIS_SYSTEM_PROMPT } from '@/lib/prompts'; // This imports the file you just made

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: DEAL_ANALYSIS_SYSTEM_PROMPT,
    messages: [
      { role: 'user', content: prompt },
    ],
  });

  return result.toDataStreamResponse();
}
