import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  // Mock data for the links
  const quickLinks = [
    { title: 'Home', href: '#' },
    { title: 'Solutions', href: '#' },
    { title: 'Why Choose us', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Privacy Policy', href: '#' },
  ];

  const secondaryLinks = [
    { title: 'Services', href: '#' },
    { title: 'Who We are', href: '#' },
    { title: 'Testimonials', href: '#' },
    { title: 'Connect with us', href: '#' },
  ];

  // Helper component for link section
  const LinkSection = ({ title, links }) => (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold mb-5 text-white">{title}</h3>
      <div className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-[--color-text-gray] hover:text-[--color-primary] transition duration-300 text-sm"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 1. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Quick Links</h3>
            <div className="flex space-x-12">
              <div className="flex flex-col space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[--color-text-gray] hover:text-[--color-primary] transition duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col space-y-3">
                {secondaryLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-[--color-text-gray] hover:text-[--color-primary] transition duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Connect with us */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">Connect with us</h3>
            <div className="flex flex-col space-y-4 text-sm text-[--color-text-gray]">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="text-lg mr-2 mt-0.5 flex-shrink-0 text-[--color-primary]" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, provident.
                </p>
              </div>

              {/* Emails */}
              <a
                href="mailto:"
                className="flex items-center hover:text-[--color-primary] transition duration-300"
              >
                <Mail className="text-lg mr-2 flex-shrink-0 text-[--color-primary]" />
                Lorem, ipsum dolor.
              </a>
              <a
                href="mailto:"
                className="flex items-center hover:text-[--color-primary] transition duration-300"
              >
                <Mail className="text-lg mr-2 flex-shrink-0 text-[--color-primary]" />
                Lorem ipsum dolor sit.
              </a>

              {/* Phone */}
              <a
                href="tel:+9190980980"
                className="flex items-center hover:text-[--color-primary] transition duration-300"
              >
                <Phone className="text-lg mr-2 flex-shrink-0 text-[--color-primary]" />
                Lorem, ipsum dolor.
              </a>
            </div>
          </div>

          {/* 3. Follow us & Newsletter */}
          <div className="md:col-span-2">
            {/* Follow Us */}
            <h3 className="text-lg font-semibold mb-5 text-white">Follow us on</h3>
            <div className="flex space-x-3 mb-8">
              {/* Social Icons */}
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[--color-primary] hover:bg-[--color-secondary] transition duration-300"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <h3 className="text-lg font-semibold mb-5 text-white">
              Newsletter Subscription
            </h3>
            <p className="text-sm text-[--color-text-gray] mb-4">
              Subscribe to our newsletter to receive the latest news and updates on Zeboto.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-start">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 px-4 w-full sm:w-64 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] text-[--color-text-deep]"
              />
              <button
                type="submit"
                className="py-2 px-6 bg-[#333333] hover:bg-[--color-primary] text-white font-medium rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </div>

            {/* Checkbox and Privacy */}
            <div className="mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox text-[--color-primary] rounded border-gray-300 h-4 w-4 mr-2"
                />
                <span className="text-[--color-text-gray] text-xs">
                  By continuing, you accept the{' '}
                  <a href="#" className="underline hover:text-[--color-primary]">
                    privacy policy
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
