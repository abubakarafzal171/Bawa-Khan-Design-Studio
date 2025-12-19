import React, { useState } from 'react';
import { Send } from 'lucide-react';


const ContactForm = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
projectType: 'Residential Construction',
message: ''
});


const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = (e) => {
e.preventDefault();
const text = `Hello Bawa Khan Design Studio,%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProject: ${formData.projectType}%0A%0AMessage: ${formData.message}`;
window.open(`https://wa.me/923224599393?text=${text}`, '_blank');
};


return (
<div className="bg-white p-8 rounded-xl shadow-sm border">
<h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input name="name" required placeholder="Full Name" className="border px-4 py-2 rounded" onChange={handleChange} />
<input name="phone" required placeholder="Phone Number" className="border px-4 py-2 rounded" onChange={handleChange} />
<input name="email" type="email" required placeholder="Email Address" className="border px-4 py-2 rounded md:col-span-2" onChange={handleChange} />
<select name="projectType" className="border px-4 py-2 rounded md:col-span-2" onChange={handleChange}>
<option>Residential Construction</option>
<option>Commercial Project</option>
<option>Interior Design</option>
<option>Renovation</option>
</select>
<textarea name="message" rows="4" required placeholder="Project Details" className="border px-4 py-2 rounded md:col-span-2" onChange={handleChange}></textarea>
<button type="submit" className="bg-orange-600 text-white py-3 rounded md:col-span-2 flex justify-center items-center gap-2">
<Send size={18} /> Send on WhatsApp
</button>
</form>
</div>
);
};


export default ContactForm;