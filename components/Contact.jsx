"use client";
import { useState } from 'react';
import { createContactMessage } from '../sanity/lib/sanity-utils';

function Contact () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try { 
      await createContactMessage(name, email, issue);

      setName('');
      setEmail('');
      setIssue('');
      window.alert('Issue Sent');
    } catch (error) {
      console.error('Error submitting form:', error.message);
      window.alert('Error Submitting Form');
    } finally { 
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-md shadow-md max-w-xl mx-auto px-6 mt-10">
      <h1 className="text-3xl text-primary font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700 font-bold">Name:</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="block border border-gray-300 rounded-md w-full py-2 px-4 mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 font-bold">Email:</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="block border border-gray-300 rounded-md w-full py-2 px-4 mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="issue" className="text-gray-700 font-bold">Describe Your Issue:</label>
            <textarea 
              id="issue"
              name="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Enter your issue"
              className="block border border-gray-300 rounded-md w-full py-2 px-4 mt-2 resize-none"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center">
            <button 
              className="bg-primary text-white py-2 px-6 rounded-lg mt-3 mb-8 hover:opacity-80"
              disabled={isLoading}
            >
              { isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
    </div>
  )

}

export default Contact;
