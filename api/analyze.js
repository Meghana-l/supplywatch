export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const userMessage = req.body.messages?.[0]?.content || '';

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_KEY}`
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [{ role: 'user', content: userMessage }],
        max_tokens: 800,
        temperature: 0.3
      })
    });

    const data = await response.json();
    console.log('Groq raw response:', JSON.stringify(data));

    const text = data.choices?.[0]?.message?.content || '';

    res.status(200).json({
      content: [{ type: 'text', text }]
    });
  } catch (err) {
    console.log('Error:', err.message);
    res.status(500).json({ error: 'Analysis failed', detail: err.message });
  }
}
