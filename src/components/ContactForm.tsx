import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  organization: string;
  location: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  organization: '',
  location: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@ssem.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Fleet Booking Request - ${form.name}`,
          _template: 'table',
          'Contact Person': form.name,
          'Official Email': form.email,
          'Company / Organization': form.organization || 'Not specified',
          'Corridor / Route': form.location || 'Not specified',
          'Haulage Requirements': form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        throw new Error('Non-OK response');
      }
    } catch {
      // Fallback: If offline or blocked by ad-blocker, open user's email client directly to info@ssem.in
      const mailtoUrl = `mailto:info@ssem.in?subject=${encodeURIComponent(
        `Transport Booking Request - ${form.name}`
      )}&body=${encodeURIComponent(
        `Contact Person: ${form.name}\nEmail: ${form.email}\nCompany: ${form.organization || 'N/A'}\nCorridor: ${form.location || 'N/A'}\n\nHaulage Requirements:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
      setForm(initialForm);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <CheckCircle2 size={48} className="contact-form__success-icon" />
        <h3>Transport Inquiry Transmitted</h3>
        <p>
          Thank you for reaching out. Your specifications have been forwarded directly to our
          fleet contracting desk at <strong>info@ssem.in</strong>. Our operations team will review
          your haulage requirements and get in touch promptly.
        </p>
        <button
          className="btn btn--primary"
          onClick={() => setSubmitted(false)}
          type="button"
        >
          Submit Another Transport Request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__header">
        <h3 className="contact-form__title">Fleet & Transport Booking Inquiry</h3>
        <p className="contact-form__subtitle">
          Submit specifications for full truckload freight, aggregate haulage, tipper fleet deployment, or machinery transport.
        </p>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-name">Contact Person / Manager *</label>
          <input
            id="cf-name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            placeholder="e.g. Ramesh Chandra"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-email">Official Email Address *</label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            placeholder="logistics@company.com"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-org">Company / Contractor Name</label>
          <input
            id="cf-org"
            type="text"
            value={form.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
            placeholder="e.g. EPC Contractor / Infrastructure Developer"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="cf-location">Origin / Destination Corridor</label>
          <input
            id="cf-location"
            type="text"
            value={form.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="e.g. Quarry / Bhind to Agra Highway Corridor"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">Haulage Tonnage & Requirements *</label>
        <textarea
          id="cf-message"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          placeholder="Estimated MT per day, type of material (aggregates, bitumen, earth), number of trucks needed, duration..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <span>Transmitting Request...</span>
            <Loader2 size={16} className="contact-form__spinner" />
          </>
        ) : (
          <>
            <span>Transmit Transport Request</span>
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
