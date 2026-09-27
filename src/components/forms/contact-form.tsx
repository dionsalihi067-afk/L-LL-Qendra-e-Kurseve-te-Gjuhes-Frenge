"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SITE } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Select an interest"),
  message: z.string().min(10, "Tell us a little more"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "" },
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.info("Contact submission", data);
    setSent(true);
    reset();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass space-y-5 rounded-[2rem] p-6 shadow-lift md:p-8"
        noValidate
      >
        {(
          [
            { id: "name", label: "Full name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "phone", label: "Phone (optional)", type: "tel" },
          ] as const
        ).map((field) => (
          <div key={field.id} className="relative">
            <input
              id={field.id}
              type={field.type}
              placeholder=" "
              className="peer w-full rounded-2xl border border-dark-navy/10 bg-white/80 px-4 pt-6 pb-2 text-sm outline-none transition focus:border-luxury-gold/60 focus:shadow-[0_0_0_4px_rgba(200,166,70,0.12)]"
              aria-invalid={!!errors[field.id as keyof FormValues]}
              {...register(field.id)}
            />
            <label
              htmlFor={field.id}
              className="pointer-events-none absolute top-2 left-4 text-[10px] tracking-[0.16em] text-dark-navy/40 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.16em] peer-focus:uppercase"
            >
              {field.label}
            </label>
            {errors[field.id as keyof FormValues] ? (
              <p className="mt-1 text-xs text-french-red" role="alert">
                {errors[field.id as keyof FormValues]?.message as string}
              </p>
            ) : null}
          </div>
        ))}

        <div>
          <label htmlFor="interest" className="mb-2 block text-xs tracking-[0.16em] text-dark-navy/45 uppercase">
            Interest
          </label>
          <select
            id="interest"
            className="w-full rounded-2xl border border-dark-navy/10 bg-white/80 px-4 py-3.5 text-sm outline-none focus:border-luxury-gold/60"
            {...register("interest")}
          >
            <option value="">Select a program</option>
            <option value="general">General French (A1–C2)</option>
            <option value="delf">DELF / DALF</option>
            <option value="private">Private Lessons</option>
            <option value="business">Business French</option>
            <option value="online">Online Classes</option>
            <option value="corporate">Corporate Training</option>
          </select>
          {errors.interest ? (
            <p className="mt-1 text-xs text-french-red" role="alert">
              {errors.interest.message}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <textarea
            id="message"
            rows={5}
            placeholder=" "
            className="peer w-full resize-none rounded-2xl border border-dark-navy/10 bg-white/80 px-4 pt-6 pb-2 text-sm outline-none focus:border-luxury-gold/60 focus:shadow-[0_0_0_4px_rgba(200,166,70,0.12)]"
            {...register("message")}
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute top-2 left-4 text-[10px] tracking-[0.16em] text-dark-navy/40 uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.16em] peer-focus:uppercase"
          >
            Message
          </label>
          {errors.message ? (
            <p className="mt-1 text-xs text-french-red" role="alert">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <MagneticButton type="submit" variant="gold" className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Send Message"}
        </MagneticButton>

        {sent ? (
          <p className="text-sm text-success" role="status">
            Merci! We&apos;ll reply within one business day.
          </p>
        ) : null}
      </form>

      <aside className="space-y-4">
        {[
          { icon: MapPin, label: "Visit", value: SITE.address },
          { icon: Mail, label: "Email", value: SITE.email },
          { icon: Phone, label: "Phone", value: SITE.phone },
          { icon: Clock, label: "Hours", value: "Mon–Sat · 08:00–20:00 CET" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex gap-4 rounded-[1.5rem] border border-white/60 bg-white/65 p-5 shadow-soft backdrop-blur"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-french-blue/8 text-french-blue">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-heading text-xs tracking-[0.18em] text-dark-navy/45 uppercase">
                {label}
              </p>
              <p className="mt-1 text-sm text-dark-navy">{value}</p>
            </div>
          </div>
        ))}

        <div className="overflow-hidden rounded-[1.5rem] border border-white/60 shadow-soft">
          <iframe
            title="L&LL location map"
            src="https://maps.google.com/maps?q=Louvre%20Paris&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-56 w-full grayscale-[30%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </aside>
    </div>
  );
}
