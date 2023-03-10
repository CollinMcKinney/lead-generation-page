import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const HOST_NAME = '0.0.0.0';
const LEAD_GEN_PAGE_PORT = process.env.LEAD_GEN_PAGE_PORT || 8080;
const SENDINBLUE_API_KEY = process.env.SENDINBLUE_API_KEY;
const SENDINBLUE_LIST_ID = parseInt(process.env.SENDINBLUE_LIST_ID);

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve the static files
app.use(express.static('public'));

// Handle form submission
app.post('/subscribe', async (req, res) => {
	try {
		const { email } = req.body;

		// Send a request to the SendinBlue API to add the email to the list
		const response = await fetch('https://api.sendinblue.com/v3/contacts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': SENDINBLUE_API_KEY
			},
			body: JSON.stringify({
				email: email,
				listIds: [SENDINBLUE_LIST_ID],
				updateEnabled: true
			})
		});

		// Handle the response from the API
		const responseData = await response.json();
		if (response.ok) {
			res.status(200).send({ success: true });
		} else {
			throw new Error(responseData.message);
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, message: error.message });
  }
});

// Handle all other GET requests by sending the index.html file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filename));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

// Start the server
app.listen(LEAD_GEN_PAGE_PORT, HOST_NAME, () => {
  console.log(`Server listening on: http://${HOST_NAME}:${LEAD_GEN_PAGE_PORT} (external port may differ if served from a Docker container.)`);
});
