
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      content: 'andile.reeman@gmail.com',
      action: 'mailto:andile.reeman@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+27 65 607 1416',
      action: 'tel:+27656071416'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Salt River, Cape Town, Western Cape, South Africa',
      action: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Subject: ${formData.subject || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:andile.reeman@gmail.com?subject=${subject}&body=${body}`;
    
    try {
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with the message pre-filled.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-navy-dark mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-blue max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how I can help bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold font-poppins text-navy-dark mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-dark mb-1">{info.title}</h4>
                    <a
                      href={info.action}
                      className="text-gray-blue hover:text-coral transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8776087684684!2d18.4654976!3d-33.9355441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5da9e064bb0d%3A0x9b3a3e1d2ae8e8b8!2sSalt%20River%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salt River, Cape Town Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                    placeholder="+27 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-coral focus:ring-2 focus:ring-coral/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full md:w-auto btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Opening Email...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
