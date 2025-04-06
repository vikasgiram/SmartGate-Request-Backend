const express = require('express');
const cors = require('cors');

const connectDB = require('./db.js');

const { documentationController } = require('./controller/documentationController.js');
const { createRequest, getRequests } = require('./controller/requestController.js');

connectDB();

const app = express();
const PORT =5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', documentationController);

app.post('/api/request', createRequest);
app.get('/api/requests', getRequests);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});