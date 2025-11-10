export default function handler(req, res) {
  if (req.method === 'POST') {
    global.tips = global.tips || [];
    global.tips.push({ ...req.body, date: new Date() });
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    global.tips = global.tips || [];
    return res.status(200).json(global.tips.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }

  res.status(405).json({ error: 'Método não permitido' });
}
