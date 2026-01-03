import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.txt');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(INQUIRIES_FILE)) {
  fs.writeFileSync(INQUIRIES_FILE, '');
}

app.post('/api/submit-inquiry', (req, res) => {
  console.log('Received inquiry submission request');
  console.log('Request body:', JSON.stringify(req.body, null, 2));

  try {
    const { name, email, phone, project, plotPreference, visitDate, message } = req.body;

    if (!name || !email || !phone) {
      console.error('Validation failed: Missing required fields');
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    const timestamp = new Date().toISOString();
    const inquiry = `
${'='.repeat(80)}
INQUIRY SUBMISSION
${'='.repeat(80)}
Submitted At: ${timestamp}
Name: ${name}
Email: ${email}
Phone: ${phone}
Project Interest: ${project || 'Not specified'}
Plot Preference: ${plotPreference || 'Not specified'}
Preferred Visit Date: ${visitDate || 'Not specified'}
Message: ${message || 'No message provided'}
${'='.repeat(80)}

`;

    fs.appendFileSync(INQUIRIES_FILE, inquiry);
    console.log(`✓ Inquiry successfully saved from: ${name} (${email})`);
    console.log(`✓ File location: ${INQUIRIES_FILE}`);

    res.json({ success: true, message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to save inquiry: ' + error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Inquiries will be saved to: ${INQUIRIES_FILE}`);
});
