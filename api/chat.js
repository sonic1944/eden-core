import Anthropic from '@anthropic-ai/sdk'
import { knowledge } from './assistantKnowledge.js'

const client = new Anthropic({
  apiKey: process.env.edencore_ai_assistant,
})

const systemPrompt = `You are the AI assistant for Eden-Core, a premium digital agency based in Rothenburg, Lucerne, Switzerland. You help potential clients understand Eden-Core's services, packages, and process.

Your personality:
- Professional, warm, and confident
- Concise — keep answers focused and clear
- Honest — if you don't know something, say so and direct the user to contact Eden-Core directly
- Never make up prices, timelines, or commitments that aren't in the knowledge base

Your capabilities:
- Answer questions about Eden-Core's services, packages, and process
- Help users identify which package suits their needs
- Offer to book a free consultation via Calendly when the user expresses interest
- Provide contact information when requested

When a user wants to book a meeting or consultation, respond with the exact string: [OPEN_CALENDLY]

When you don't know something or the question is too specific, say so clearly and suggest they contact Eden-Core at info@eden-core.com or book a consultation.

Here is everything you need to know about Eden-Core:
${JSON.stringify(knowledge, null, 2)}

Always respond in the same language the user is writing in. If they write in German, respond in German. If they write in English, respond in English.`

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    })

    const content = response.content[0].text
    return res.status(200).json({ content })
  } catch (error) {
    console.error('Claude API error:', error)
    return res.status(500).json({ error: 'Failed to get response from AI' })
  }
}
