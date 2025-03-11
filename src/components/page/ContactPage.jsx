import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CONTACT_PAGE_CONTENT, COMPANY_CONTENT } from "@/content";

const FAQ = [
  {
    q: "What are your response times?",
    a: "We aim to respond to all inquiries within 24 business hours.",
  },
  {
    q: "Do you offer emergency support?",
    a: "Yes, for urgent matters please call our support line directly.",
  },
  {
    q: "Can I schedule an in-person meeting?",
    a: "Absolutely! Use this form to request an appointment or call us directly.",
  },
  {
    q: "What information should I include in my message?",
    a: "Please include your name, contact information, and details about your inquiry.",
  },
];

export const ContactPage = () => {
  const { hero, form, info } = CONTACT_PAGE_CONTENT;
  const { address, phone, email, hours } = COMPANY_CONTENT;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section with Animation */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 text-xl text-foreground-secondary max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form Card - Made to match the height of the right column */}
          <Card className="shadow-lg border-border/50 overflow-hidden h-full flex flex-col">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center text-2xl">
                <SendIcon className="mr-2 h-5 w-5" />
                {form.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow flex flex-col">
              {formStatus.submitted ? (
                <Alert
                  className={
                    formStatus.error
                      ? "bg-destructive/10"
                      : "bg-success/10 border-success"
                  }
                >
                  <div className="flex items-center">
                    {!formStatus.error && (
                      <CheckCircleIcon className="h-4 w-4 text-success mr-2" />
                    )}
                    <AlertDescription>{formStatus.message}</AlertDescription>
                  </div>
                </Alert>
              ) : (
                <form
                  className="space-y-6 flex-grow flex flex-col"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={form.fields.name}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={form.fields.email}
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2 flex-grow flex flex-col">
                    <Label htmlFor="message" className="font-medium">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={form.fields.message}
                      required
                      className="flex-grow min-h-32 transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full transition-all font-medium relative overflow-hidden group text-white mt-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <div className="grid grid-cols-1 gap-6 content-start h-full">
            <Card className="shadow-lg border-border/50">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center">
                  <UserIcon className="h-6 w-6" />
                  <CardTitle className="text-2xl ml-2">{info.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <address className="not-italic ml-2 text-foreground-secondary">
                      {fullAddress}
                    </address>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <a
                        href={`tel:${phone.replace(/\D/g, "")}`}
                        className="text-foreground-secondary hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <a
                        href={`mailto:${email}`}
                        className="text-foreground-secondary hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <h4 className="font-bold text-foreground mb-1">
                        Business Hours
                      </h4>
                      <div className="text-foreground-secondary">
                        <p>
                          <span className="font-medium">Mon-Fri:</span>{" "}
                          {hours.weekday}
                        </p>
                        <p>
                          <span className="font-medium">Saturday:</span>{" "}
                          {hours.saturday}
                        </p>
                        <p>
                          <span className="font-medium">Sunday:</span>{" "}
                          {hours.sunday}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Card */}
            <Card className="shadow-lg border-border/50 overflow-hidden">
              <div className="w-full h-64 bg-primary/10 flex items-center justify-center">
                <GoogleMaps />
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ or Additional Information Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-foreground-secondary">
              Find quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQ.map((faq, index) => (
              <Card
                key={index}
                className="shadow-sm hover:shadow transition-shadow"
              >
                <CardContent className="p-4">
                  <h3 className="text-foreground mb-2 font-bold">{faq.q}</h3>
                  <p className="text-foreground-secondary">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
