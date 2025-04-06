


exports.documentationController = async (req, res) => {

    const documentation = {
        service: "Smart Gate Demo Request API",
        description: "Microservice for handling demo requests for Smart Gate products",
        endpoints: [
            {
                path: "/api/request",
                method: "POST",
                description: "Submit a new demo request",
                requiredFields: {
                    firstName: {
                        type: "string",
                        minLength: 3,
                        maxLength: 20,
                        pattern: "Letters only (a-zA-Z)",
                        required: true
                    },
                    lastName: {
                        type: "string",
                        minLength: 3,
                        maxLength: 20,
                        pattern: "Letters only (a-zA-Z)",
                        required: true
                    },
                    email: {
                        type: "string",
                        format: "email",
                        required: true,
                        unique: true
                    },
                    organization: {
                        type: "string",
                        maxLength: 50,
                        pattern: "Alphanumeric with spaces",
                        required: true
                    },
                    phone: {
                        type: "string",
                        minLength: 10,
                        maxLength: 15,
                        pattern: "Valid international phone number",
                        required: true
                    },
                    message: {
                        type: "string",
                        minLength: 10,
                        maxLength: 500,
                        required: true
                    },
                    offerings: {
                        type: "array",
                        items: {
                            type: "string",
                            enum: [
                                "Ai-based Video Analytics",
                                "Identity-based People Flow",
                                "Mobile/Face-based Access Control",
                                "Visitor management"
                            ]
                        },
                        required: true
                    }
                },
                exampleRequest: {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    organization: "ACME Corp",
                    phone: "+1234567890",
                    message: "I'm interested in learning more about your products",
                    offerings: ["Ai-based Video Analytics", "Visitor management"]
                },
                responses: {
                    success: {
                        status: 201,
                        body: { message: "Request submitted successfully" }
                    },
                    error: {
                        status: 400,
                        body: { errors: { field: "Error message" } }
                    }
                }
            },
            {
                path: "/api/requests",
                method: "GET",
                description: "Get all demo requests (admin use)",
                responses: {
                    success: {
                        status: 200,
                        body: "Array of request objects"
                    }
                }
            }
        ],
        notes: [
            "Email must be unique - only one demo request per email",
            "Phone number must be in international format",
            "All fields are required unless otherwise specified"
        ]
    };
    res.json(documentation);
}