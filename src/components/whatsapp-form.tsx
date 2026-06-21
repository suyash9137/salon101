"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export const SERVICES = [
  'Haircut',
  'Hair Styling',
  'Hair Color',
  'Facial',
  'Bridal Package',
  'Other',
];

interface WhatsAppFormProps {
  onSuccess?: () => void;
  title?: string;
  buttonText?: string;
}

export default function WhatsAppForm({ 
  onSuccess, 
  title = "Book an Appointment",
  buttonText = "Send Message"
}: WhatsAppFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0],
    date: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-]+$/.test(formData.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!formData.date) newErrors.date = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const whatsappLink = generateWhatsAppLink(
        formData.name,
        formData.phone,
        formData.service,
        formData.date,
        formData.notes
      );
      window.open(whatsappLink, '_blank', 'noopener,noreferrer');
      setFormData({ name: '', phone: '', service: SERVICES[0], date: '', notes: '' });
      if (onSuccess) onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {title && (
        <h3 className="font-heading text-3xl text-deep-espresso mb-8">{title}</h3>
      )}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-taupe mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`block w-full rounded-border border-muted-taupe/20 px-4 py-3 text-body focus:border-ivory focus:ring-2 focus:ring-ivory/20 bg-warm-cream/50 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Your full name"
            required
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-taupe mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`block w-full rounded-border border-muted-taupe/20 px-4 py-3 text-body focus:border-ivory focus:ring-2 focus:ring-ivory/20 bg-warm-cream/50 ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+31 6 12345678"
            required
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-muted-taupe mb-1">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`block w-full rounded-border border-muted-taupe/20 px-4 py-3 text-body focus:border-ivory focus:ring-2 focus:ring-ivory/20 bg-warm-cream/50 ${errors.service ? 'border-red-500' : ''}`}
            required
          >
            {SERVICES.map(service => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-sm text-red-500 mt-1">{errors.service}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-muted-taupe mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`block w-full rounded-border border-muted-taupe/20 px-4 py-3 text-body focus:border-ivory focus:ring-2 focus:ring-ivory/20 bg-warm-cream/50 ${errors.date ? 'border-red-500' : ''}`}
            required
          />
          {errors.date && (
            <p className="text-sm text-red-500 mt-1">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-muted-taupe mb-1">
            Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className={`block w-full rounded-border border-muted-taupe/20 px-4 py-3 text-body focus:border-ivory focus:ring-2 focus:ring-ivory/20 bg-warm-cream/50 ${errors.notes ? 'border-red-500' : ''}`}
            rows={3}
            placeholder="Any special requests or questions..."
          />
          {errors.notes && (
            <p className="text-sm text-red-500 mt-1">{errors.notes}</p>
          )}
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(197, 189, 182, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-8 py-4 rounded-button bg-deep-espresso text-ivory font-body text-label-md tracking-widest uppercase transition-all duration-300 mt-8"
      >
        {buttonText}
      </motion.button>
    </form>
  );
}
