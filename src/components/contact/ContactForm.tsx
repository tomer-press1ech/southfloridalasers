"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

const initialFormData: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  productInterest: "",
  message: "",
};

const subjectOptions = [
  "General Inquiry",
  "Product Information",
  "Request a Quote",
  "Technical Support",
  "Other",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
  }

  if (isSubmitted) {
    return (
      <Card hover={false} className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
          <svg
            className="h-8 w-8 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-text-secondary mb-8 max-w-sm">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={handleReset}>
          Send Another
        </Button>
      </Card>
    );
  }

  return (
    <Card hover={false}>
      <h2 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-text-secondary">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-surface px-4 py-3 text-text-primary focus:border-laser-blue focus:outline-none focus:ring-1 focus:ring-laser-blue/50 transition-colors ${
                errors.subject ? "border-error focus:border-error focus:ring-error/50" : "border-border"
              }`}
            >
              <option value="" disabled>
                Select a subject
              </option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.subject && <p className="text-sm text-error">{errors.subject}</p>}
          </div>
        </div>

        <Textarea
          label="Message"
          name="message"
          placeholder="Tell us about your project or question..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={5}
          required
        />

        {submitError && (
          <div className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-error">
            {submitError}
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
