import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5';

// --- Configuration & Data Structure ---

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  
];

const contactInfo = {
  // Corporate Dark Blue color
  BRAND_BLUE: '#04366A', 
  
  address: [
    { icon: IoLocationSharp, text: "Ghana: Fudiji Avenue - Kissiman Estates" },
    { icon: IoLocationSharp, text: <>UAE: (Area)<b>Hor Al Anz Al Safiya Building</b></> } 
  ],
  email: { 
    icon: IoMail, 
    text: "partners@krestoncoopers.com", 
    linkValue: "partners@krestoncoopers.com" 
  },
  phone: [
    { 
      icon: IoCall, 
      display: "GH: +233 24 275 4688", 
      linkValue: "+233242754688" 
    },
    { 
      icon: IoCall, 
      display: <>UAE: <b>+971 55 286 6413</b></>, 
      linkValue: "+971552866413" 
    }
  ]
};

// --- Reusable Components ---

const FooterLinkColumn = ({ title, links }) => (
  // Use responsive margin to prevent overlap on small screens
  <div className="mt-8 sm:mt-0">
    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6" style={{ color: contactInfo.BRAND_BLUE }}>{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-blue-900 transition duration-200 text-sm sm:text-base"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon: Icon, display, linkValue, type = 'text' }) => {
    let href = '#';
    const isLink = type === 'email' || type === 'phone';

    if (type === 'email') {
        href = `mailto:${linkValue}`;
    } else if (type === 'phone') {
        href = `tel:${linkValue}`;
    }
    
    // The content wrapper allows for proper hover state on the link
    const content = (
        <span className="text-gray-600 text-sm sm:text-base">
            {display}
        </span>
    ); 

    return (
      <div className="flex items-start space-x-3 mb-4">
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: contactInfo.BRAND_BLUE }} />
        {isLink ? (
            <a href={href} className="hover:text-blue-900 transition duration-200">
                {content}
            </a>
        ) : (
            // Non-link content is wrapped in the same structure for alignment
            <div className="pt-0.5">{content}</div>
        )}
      </div>
    );
};


// --- Main Footer Component ---

export default function Footer() {
  const brandBlue = contactInfo.BRAND_BLUE;
  const bgColor = '#D3D8DD'; 

  return (
    <footer className="bg-gray-200 border-t border-gray-300" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid: Stacks on mobile, 2 columns on small screens, 3 columns on medium/desktop */}
        <div 
          className="
            grid grid-cols-1 gap-y-10 gap-x-8 py-12 
            sm:grid-cols-2 sm:gap-y-12 
            md:grid-cols-3 md:py-16
          "
        >
          
          {/* 1. About Column */}
          <div className="pr-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: brandBlue }}>About</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-sm">
              We understand that you want to work with pragmatic people who know your industry and can offer an objective perspective to help you make those important business decisions.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
             
              <a 
                href="https://www.linkedin.com/company/kreston-coopersllc/?originalSubdomain=ae" // Placeholder for LinkedIn link
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md transition duration-300`}
                style={{ color: brandBlue, border: `1px solid ${brandBlue}20` }}
              >
                <FaLinkedinIn className="h-12 w-12 hover:text-blue-700" />
              </a>
             
              <a 
                href="https://www.instagram.com/krestoncoopers_uae/" 
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md transition duration-300`}
                style={{ color: brandBlue, border: `1px solid ${brandBlue}20` }}
              >
                <FaInstagram className="h-4 w-4 hover:text-pink-600" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          {/* 3. Contact Us Column */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: brandBlue }}>Contact Us</h3>
            
            {/* Addresses */}
            {contactInfo.address.map((item, index) => (
                <ContactItem key={`addr-${index}`} icon={item.icon} display={item.text} />
            ))}

            {/* Divider */}
            <div className="my-3 border-t border-gray-400 max-w-xs"></div>

            {/* Email */}
            <ContactItem 
                icon={contactInfo.email.icon} 
                display={contactInfo.email.text} 
                linkValue={contactInfo.email.linkValue} 
                type="email" 
            />

            {/* Phone Numbers */}
            {contactInfo.phone.map((item, index) => (
                <ContactItem 
                    key={`phone-${index}`} 
                    icon={item.icon} 
                    display={item.display} 
                    linkValue={item.linkValue} 
                    type="phone" 
                />
            ))}
          </div>
        </div>
        
        {/* --- Developer Signature --- */}
        <div className="border-t border-gray-300 pt-4 pb-4 text-center text-xs sm:text-sm text-gray-600">
          Copyright &copy; {new Date().getFullYear()} Kreston Coopers. All rights reserved. Developed by 
          <a 
            href="https://www.instagram.com/anastlayjeh/"
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-gray-800 hover:text-blue-900 transition duration-200 ml-1"
          >
            Anas.dev
          </a>
        </div>
        
      </div>
    </footer>
  );
}