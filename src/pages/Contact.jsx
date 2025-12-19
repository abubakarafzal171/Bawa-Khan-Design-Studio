import React from "react";
import ContactHero from "../components/contactpage/ContactHero";
import ContactInfo from "../components/contactpage/ContactInfo";
import ContactForm from "../components/contactpage/ContactForm";
import ContactMap from "../components/contactpage/ContactMap";
import HomeFaqs from "../components/homepage/HomeFaqs";

const Contact = () => (
  <div className="bg-gray-50 min-h-screen md:pt-30 pt-19">
    <ContactHero />

    <div className="max-w-7xl mx-auto py-14 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <ContactInfo />
      <div className="lg:col-span-2">
        <ContactForm />
      </div>
    </div>

    <ContactMap />
    <HomeFaqs/>
  </div>
);

export default Contact;
