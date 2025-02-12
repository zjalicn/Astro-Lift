import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help with all your tech needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>
            <form className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">
                  123 Tech Street, Seattle, WA 98101
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">help@techfixpro.com</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-6 w-6 text-blue-600" />
                <div className="ml-3 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
