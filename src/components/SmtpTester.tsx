import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

interface SmtpConfig {
  host: string;
  port: string;
  username: string;
  password: string;
  from: string;
  to: string;
  subject: string;
  message: string;
}

const SmtpTester = () => {
  const [config, setConfig] = useState<SmtpConfig>({
    host: '',
    port: '',
    username: '',
    password: '',
    from: '',
    to: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/test-smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Email sent successfully!');
      } else {
        toast.error(data.message || 'Failed to send email');
      }
    } catch (error) {
      toast.error('Server error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SMTP Tester</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="host" className="block">Host</label>
          <input
            id="host"
            type="text"
            name="host"
            value={config.host}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="port" className="block">Port</label>
          <input
            id="port"
            type="text"
            name="port"
            value={config.port}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={config.username}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={config.password}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="from" className="block">From</label>
          <input
            id="from"
            type="email"
            name="from"
            value={config.from}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="to" className="block">To</label>
          <input
            id="to"
            type="email"
            name="to"
            value={config.to}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={config.subject}
            onChange={handleChange}
            className="w-full border p-1"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            name="message"
            value={config.message}
            onChange={handleChange}
            className="w-full border p-1 h-24"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Test SMTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default SmtpTester;