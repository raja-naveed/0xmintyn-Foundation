'use client';
import { FC, FormEvent, useState } from 'react';

import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { CONTACT_FORM_FIELDS, CONTACT_FORM_DEFAULT_STATE, CONTACT_INFO } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(CONTACT_FORM_DEFAULT_STATE);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Here you would typically send the form data to an API
    alert('Thank you for your message! We will get back to you soon.');
    setForm(CONTACT_FORM_DEFAULT_STATE);
  };

  return (
    <section id="contact" className="border-t border-gray-1 bg-gradient-to-b py-[5vw] md:py-[6vw]">
      <SectionOpacity classes="z-2">
        <SectionTitle title="CONTACT." classes="px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw] z-10" />
        <p className="px-[5vw] md:px-[4vw] pt-[2vw] md:pt-[2.5vw] text-[1.4vw] md:text-[2.2vw] text-text-1/80 mb-[3.5vw] md:mb-[4.5vw] leading-[1.6] max-w-[90%]">
          Ready to join our mission? Have questions about our programs? We&apos;d love to hear from you. Reach out to us and let&apos;s build a more equitable future together.
        </p>

        <div className="px-[5vw] md:px-[4vw] grid grid-cols-1 md:grid-cols-2 gap-[3.5vw] md:gap-[4.5vw]">
          {/* Contact Form */}
          <div>
            <h3 className="text-[2.2vw] md:text-[3.5vw] font-bold text-primary mb-[1.5vw] md:mb-[2.5vw]">
              Send us a Message
            </h3>
            <form className="flex flex-col space-y-[1.8vw] md:space-y-[2.2vw]" onSubmit={handleSubmit}>
              {CONTACT_FORM_FIELDS.map((field) => (
                <div key={field.name} className={field.classes || 'w-full'}>
                  <label htmlFor={field.name} className="block mb-[0.4vw] md:mb-[0.6vw] text-[1.1vw] md:text-[1.8vw] text-text-1/80">
                    {field.label}
                  </label>
                  <input
                    type={field.type || 'text'}
                    id={field.name}
                    name={field.name}
                    value={form[field.name as keyof typeof form] as string}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                    className="w-full h-[3.2vw] md:h-[4.5vw] rounded-[0.2vw] border-[0.1vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw] text-[1.1vw] md:text-[1.8vw] text-text-1 focus:outline-none focus:border-primary transition-colors"
                    required={field.required}
                  />
                </div>
              ))}
              <div className="w-full">
                <label htmlFor="message" className="block mb-[0.4vw] md:mb-[0.6vw] text-[1.1vw] md:text-[1.8vw] text-text-1/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full min-h-[9vw] md:min-h-[13vw] rounded-[0.2vw] border-[0.1vw] border-primary/80 bg-transparent px-[1vw] py-[0.8vw] text-[1.1vw] md:text-[1.8vw] text-text-1 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                title="Send Message"
                classes="px-[2.5vw] py-[1vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80 self-start"
                btnClasses=""
              />
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[2.2vw] md:text-[3.5vw] font-bold text-primary mb-[1.5vw] md:mb-[2.5vw]">
              Connect With Us
            </h3>
            <div className="space-y-[2vw] md:space-y-[2.5vw]">
              <div>
                <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-text-1 mb-[0.8vw] md:mb-[1.2vw]">
                  Email
                </h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[1.2vw] md:text-[2vw] text-primary hover:text-primary/80 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div>
                <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-text-1 mb-[0.8vw] md:mb-[1.2vw]">
                  Social Media
                </h4>
                <div className="space-y-[0.6vw] md:space-y-[1vw]">
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/80">
                    <strong className="text-primary">Twitter/X:</strong> {CONTACT_INFO.social.twitter}
                  </p>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/80">
                    <strong className="text-primary">LinkedIn:</strong> {CONTACT_INFO.social.linkedin}
                  </p>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/80">
                    <strong className="text-primary">GitHub:</strong> {CONTACT_INFO.social.github}
                  </p>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/80">
                    <strong className="text-primary">Discord:</strong> {CONTACT_INFO.social.discord}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-text-1 mb-[0.8vw] md:mb-[1.2vw]">
                  Locations
                </h4>
                <ul className="space-y-[0.6vw] md:space-y-[1vw]">
                  {CONTACT_INFO.locations.map((location, index) => (
                    <li key={index} className="text-[1.2vw] md:text-[2vw] text-text-1/80">
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;

