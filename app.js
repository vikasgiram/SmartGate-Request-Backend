const express = require('express');
const cors = require('cors');

const connectDB = require('./db.js');
const Request = require('./requestSchema.js');
const { acknowledgeMail } = require('./mails/acknowledgeMail.js');
const { newRequstMail } = require('./mails/newDemoReqest.js');

const validateRequest = require('./utils/validator.js');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Smart Gate API is running');
});

app.post('/api/request', async (req, res) => {
    const { firstName, lastName, email, organization, phone, message } = req.body;
    try {
        const { errors, isValid } = validateRequest({ firstName, lastName, email, organization, phone, message });
        if (!isValid) {
            return res.status(400).json({ errors });
        }
        
        const request = new Request({ firstName , lastName, organization, email, phone, message });
        await request.save();
        await acknowledgeMail(firstName, email);
        await newRequstMail({ name: `${firstName} ${lastName}`, email,organization, phone, message });
        res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting request', error: error.message });
    }
});
app.get('/api/requests', async (req, res) => {
    try {
        const requests = await Request.find();
        if(!requests || requests.length === 0) {
            return res.status(404).json({ message: 'No requests found' });
        }
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requests', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});