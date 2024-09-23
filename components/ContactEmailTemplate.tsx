import React from 'react';

interface ContactEmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({ subject, email, message }) => {
  return (
    <div className="font-sans">
      <table className="w-full max-w-600 mx-auto" cellPadding="0" cellSpacing="0" role="presentation">
        <tr>
          <td className="p-8 bg-gray-100">
            <table className="w-full" cellPadding="0" cellSpacing="0" role="presentation">
              <tr>
                <td className="bg-white p-8 rounded shadow-lg">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">New Contact Message</h1>
                  <p className="text-gray-700 mb-6">You have received a new message from your website contact form.</p>
                  
                  <table className="w-full mb-6" cellPadding="0" cellSpacing="0" role="presentation">
                    <tr>
                      <td className="py-2 text-gray-600 font-semibold w-1/4">Email:</td>
                      <td className="py-2 text-gray-800">{email}</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-600 font-semibold w-1/4">Subject:</td>
                      <td className="py-2 text-gray-800">{subject}</td>
                    </tr>
                  </table>
                  
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Message:</h2>
                  <p className="text-gray-700 whitespace-pre-wrap mb-6">{message}</p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-600">
                      This email was sent from your website contact form. Please reply directly to this email to respond to {email}.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ContactEmailTemplate;