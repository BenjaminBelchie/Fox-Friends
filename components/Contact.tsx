import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
  const [fromAddress, setFromAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const result = await axios.post('/api/sendMessage', {
      from: fromAddress,
      subject: subject,
      message: message,
    });
    console.log(result);
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Do you want a personalised or custom product? Let me know.
        </p>
        <form
          action="#"
          onSubmit={() => {
            sendMessage();
          }}
          className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={fromAddress}
              onChange={e => {
                setFromAddress(e.target.value);
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
              placeholder="name@myemail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={e => {
                setSubject(e.target.value);
              }}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Your name and idea"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 ">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe what you would like and I'll get back to you."></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-blue-600">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
