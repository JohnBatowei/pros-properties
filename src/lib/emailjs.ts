import emailjs from '@emailjs/browser';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID_CONTACT = 'YOUR_TEMPLATE_ID';
const TEMPLATE_ID_INSPECTION = 'YOUR_INSPECTION_TEMPLATE_ID';
const TEMPLATE_ID_AFFILIATE = 'YOUR_AFFILIATE_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendContactForm = async (data: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, data, PUBLIC_KEY);
};

export const sendInspectionForm = async (data: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID_INSPECTION, data, PUBLIC_KEY);
};

export const sendAffiliateForm = async (data: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID_AFFILIATE, data, PUBLIC_KEY);
};

export const WHATSAPP_NUMBER = '2347054962230';
<<<<<<< HEAD
export const WHATSAPP_MESSAGE = `Hello, I'm interested in starting a property investment plan with Pros Properties! 🏠

How can you help me today?

1️⃣ Start a Property Investment
2️⃣ Learn About Contribution Plans
=======
export const WHATSAPP_MESSAGE = `Thank you for contacting Pros Properties! 🏠

How can we help you today?

1️⃣ Book an Inspection
2️⃣ Learn About Investment Plans
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
3️⃣ Become an Affiliate Partner
4️⃣ General Enquiry

Please select an option or type your message.`;

export const getWhatsAppLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || WHATSAPP_MESSAGE)}`;
