// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

// Load client secrets from a local file.
const CREDENTIALS = JSON.parse(fs.readFileSync('credentials.json'));

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.GoogleAuth({
  credentials: CREDENTIALS,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = '1XSJckoAe40XMhbRQ0pt1X3wf9NmsGBfWm7i0OB2laR8';

// Route to handle registration data
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[username, password, email]],
      },
    });
    res.status(200).send('Registration data saved to Google Sheets');
  } catch (error) {
    console.error('Error saving data to Google Sheets:', error);
    res.status(500).send('Failed to save registration data');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
