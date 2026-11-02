"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ContentStatusBadge } from "@/components/demo/ContentStatusBadge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import { contactFormCopy } from "@/content/contact";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  location: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  location: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const { errors: messages } = contactFormCopy;

  if (!values.name.trim()) errors.name = messages.name;
  if (!values.email.trim()) errors.email = messages.emailRequired;
  else if (!emailPattern.test(values.email.trim())) {
    errors.email = messages.emailInvalid;
  }
  if (!values.phone.trim()) errors.phone = messages.phone;
  if (!values.service) errors.service = messages.service;
  if (!values.location.trim()) errors.location = messages.location;
  if (!values.message.trim()) errors.message = messages.messageRequired;
  else if (values.message.trim().length < 20) {
    errors.message = messages.messageShort;
  }

  return errors;
}

const fieldClassName = cn(
  "w-full min-h-11 border border-grey-300 bg-white px-3 py-2 font-sans text-base text-navy-800",
  "placeholder:text-grey-500",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
);

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });
    setStatus("success");
    setValues(initialValues);
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col gap-5 border border-grey-300 bg-grey-50 p-6"
        role="status"
        aria-live="polite"
      >
        <ContentStatusBadge variant="simulated" />
        <Heading level={3} className="gap-0">
          Simulasi terkirim
        </Heading>
        <p className="text-pretty text-base leading-relaxed text-grey-600">
          {contactFormCopy.successMessage}
        </p>
        <div>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStatus("idle")}
          >
            Isi formulir lagi
          </Button>
        </div>
      </div>
    );
  }

  const { fields } = contactFormCopy;

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Heading level={2} className="gap-0">
          {contactFormCopy.heading}
        </Heading>
        <ContentStatusBadge variant="simulated" />
      </div>
      <p className="text-pretty text-base leading-relaxed text-grey-600">
        {contactFormCopy.lead}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Field
          id="contact-name"
          label={fields.name.label}
          error={errors.name}
        >
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            className={fieldClassName}
            placeholder={fields.name.placeholder}
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field
          id="contact-email"
          label={fields.email.label}
          error={errors.email}
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClassName}
            placeholder={fields.email.placeholder}
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field
          id="contact-phone"
          label={fields.phone.label}
          error={errors.phone}
        >
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClassName}
            placeholder={fields.phone.placeholder}
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>

        <Field
          id="contact-service"
          label={fields.service.label}
          error={errors.service}
        >
          <select
            id="contact-service"
            name="service"
            className={fieldClassName}
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
          >
            {fields.service.options.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id="contact-budget" label={fields.budget.label}>
          <select
            id="contact-budget"
            name="budget"
            className={fieldClassName}
            value={values.budget}
            onChange={(event) => updateField("budget", event.target.value)}
          >
            {fields.budget.options.map((option) => (
              <option key={option.value || "empty"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="contact-location"
          label={fields.location.label}
          error={errors.location}
        >
          <input
            id="contact-location"
            name="location"
            className={fieldClassName}
            placeholder={fields.location.placeholder}
            value={values.location}
            onChange={(event) => updateField("location", event.target.value)}
            aria-invalid={Boolean(errors.location)}
          />
        </Field>
      </div>

      <Field
        id="contact-message"
        label={fields.message.label}
        error={errors.message}
      >
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className={cn(fieldClassName, "min-h-32 py-3")}
          placeholder={fields.message.placeholder}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
      </Field>

      <div>
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="min-h-11 w-full sm:w-auto"
        >
          {status === "submitting"
            ? contactFormCopy.submittingLabel
            : contactFormCopy.submitLabel}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-sans text-sm font-medium text-navy-800">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
