import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';


const ContactInfo = () => (
<div className="bg-white p-8 rounded-xl shadow-sm border space-y-6">
<h3 className="text-2xl font-bold text-slate-800">Get In Touch</h3>


<div className="flex gap-4">
<Phone className="text-orange-600" />
<div>
<p className="font-semibold">Phone</p>
<p>+92 322 4599393</p>
</div>
</div>


<div className="flex gap-4">
<Mail className="text-blue-600" />
<div>
<p className="font-semibold">Email</p>
<p>bawakhandesignstudio@gmail.com</p>
</div>
</div>


<div className="flex gap-4">
<MapPin className="text-green-600" />
<div>
<p className="font-semibold">Address</p>
<p>Chishtian Road, Bahawalnagar</p>
</div>
</div>


<div className="flex gap-4">
<Clock className="text-purple-600" />
<div>
<p className="font-semibold">Working Hours</p>
<p>Mon – Sat: 9:00 AM – 6:00 PM</p>
</div>
</div>
</div>
);


export default ContactInfo;