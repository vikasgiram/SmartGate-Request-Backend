const Request = require('../requestSchema.js');
const { acknowledgeMail } = require('../mails/acknowledgeMail.js');
const { newRequstMail } = require('../mails/newDemoReqest.js');
const validateRequest = require('../utils/validator.js');


exports.createRequest = async (req, res) => {
    const { firstName, lastName, email, organization, phone, offerings, message } = req.body;
    try {
        const { errors, isValid } = validateRequest({ firstName, lastName, email, organization, phone, message });
        if (!isValid) {
            return res.status(400).json({ errors });
        }
        const demo = await Request.find({ email });
        if (demo.length > 0) {
            return res.status(400).json({ message: 'You have already booked a demo' });
        }

        const request = new Request({ firstName , lastName,offerings, organization, email, phone, message });
        await request.save();
        await acknowledgeMail(firstName, email);
        await newRequstMail({ name: `${firstName} ${lastName}`, email,organization, phone, message });
        res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting request', error: error.message });
    }
}

exports.getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        if(!requests || requests.length === 0) {
            return res.status(404).json({ message: 'No requests found' });
        }
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requests', error: error.message });
    }
}
