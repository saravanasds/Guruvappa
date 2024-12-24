import React, { useState } from "react";

const AlumniDetails = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        photo: null,
        name: "",
        batch: "",
        position: "",
        journey: "",
    });
    const [error, setError] = useState("");
    const [fileError, setFileError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 524288) { // 0.5 MB in bytes
                setFileError("File size must be less than 0.5 MB.");
                setFormData({ ...formData, photo: null });
            } else {
                setFileError("");
                setFormData({ ...formData, photo: file });
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for required fields
        if (!formData.photo || !formData.name || !formData.batch || !formData.position || !formData.journey) {
            setError("All fields are required.");
            return;
        }

        // Check photo size (maximum 0.5 MB)
        if (formData.photo.size > 0.5 * 1024 * 1024) {
            setFileError("Photo size should not exceed 0.5 MB.");
            return;
        }

        setError("");

        // Prepare form data for submission
        const formPayload = new FormData();
        formPayload.append("photo", formData.photo);
        formPayload.append("name", formData.name);
        formPayload.append("batch", formData.batch);
        formPayload.append("position", formData.position);
        formPayload.append("journey", formData.journey);

        try {
            const response = await fetch("http://localhost:5000/api/admin/addAlumni", {
                method: "POST",
                body: formPayload,
            });

            if (!response.ok) {
                throw new Error("Failed to submit the form.");
            }

            const result = await response.json();
            console.log("Form submitted successfully:", result);

            // Reset the form and close it
            setFormData({ photo: null, name: "", batch: "", position: "", journey: "" });
            setShowForm(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("Something went wrong. Please try again.");
        }
    };


    return (
        <div className="w-full min-h-screen bg-gray-50 text-gray-800">
            <div className="w-[90%] mx-auto py-10 px-6">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-700">
                        Guruvappa School Alumni Network
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Building bridges for a stronger, more connected fraternity.
                    </p>
                </header>

                {/* Content */}
                {/* Steps to Achieve This */}
                <section className="w-full mb-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Steps to Achieve This</h2>
                    <div className="w-full flex justify-center items-start gap-6">
                        <div className="w-[50%] flex flex-col gap-3 ">
                            {/* Database Design */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    1. Database Design and Development
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Batch-wise: Graduation years and major events.</li>
                                    <li>Profession-wise: Occupation, industry, and expertise.</li>
                                    <li>City-wise: Geographical locations for networking opportunities.</li>
                                </ul>
                            </div>
                            {/* Data Collection */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    2. Data Collection
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Outreach Campaign: Use emails, social media, and WhatsApp groups.</li>
                                    <li>Google Forms: Simple forms for data submission.</li>
                                    <li>Social Media Analysis: Use LinkedIn or Facebook for details.</li>
                                </ul>
                            </div>
                            {/* Engagement Initiatives */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    3. Engagement Initiatives
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Host reunions, city meetups, and webinars.</li>
                                    <li>Launch mentorship programs for juniors.</li>
                                    <li>Create a newsletter highlighting alumni updates.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-[50%] flex flex-col gap-3 ">
                            {/* Digital Infrastructure */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    4. Digital Infrastructure
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Develop a secure online portal or mobile app.</li>
                                    <li>Enable search and filter options by batch, profession, and city.</li>
                                </ul>
                            </div>
                            {/* Regular Communication */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    5. Regular Communication
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Send updates via email and social media.</li>
                                    <li>Share success stories and upcoming events.</li>
                                </ul>
                            </div>
                            {/* Recognition Programs */}
                            <div className="p-4 bg-white shadow rounded-md">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    6. Recognition Programs
                                </h3>
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>Acknowledge prominent alumni in newsletters or events.</li>
                                    <li>Create awards for contributions to the school.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to Action */}
                <section className="text-center mt-10">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        Join the Alumni Network Today!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Become a part of Guruvappa School's growing alumni network. Stay connected, share your journey with us, and make a difference!
                    </p>
                    <button
                        className="px-6 py-3 text-xl font-bold bg-blue-700 text-white rounded-lg shadow hover:bg-blue-600 transition"
                        onClick={() => setShowForm(true)}
                    >
                        Join Us
                    </button>
                </section>

                {/* Form Modal */}
                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-6 w-[80%] max-w-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Share Your Details</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium">Photo <span className="font-normal">(Max: 0.5 MB)</span></label>
                                    {fileError && <p className="text-red-600 text-sm">{fileError}</p>}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="w-full mt-1 border rounded-md p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full mt-1 border rounded-md p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Batch <span className="font-normal">(example: 2015-2016)</span></label>
                                    <input
                                        type="text"
                                        name="batch"
                                        value={formData.batch}
                                        onChange={handleChange}
                                        className="w-full mt-1 border rounded-md p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Position</label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className="w-full mt-1 border rounded-md p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium">Your Journey</label>
                                    <textarea
                                        name="journey"
                                        value={formData.journey}
                                        onChange={handleChange}
                                        className="w-full mt-1 border rounded-md p-2"
                                        rows="4"
                                        required
                                    />
                                </div>
                                {error && <p className="text-red-600 text-sm">{error}</p>}
                                <div className="flex justify-end space-x-4 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlumniDetails;
