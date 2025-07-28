import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Adventure Street", "Explorer City, EX 12345", "United States"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "24/7 Emergency Line"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@wanderlusttravel.com", "support@wanderlusttravel.com", "bookings@wanderlusttravel.com"],
      color: "from-orange-400 to-orange-600"
    },
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Adventure Street, NY 10001",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
    },
    {
      city: "Los Angeles",
      address: "456 Sunset Boulevard, LA 90028",
      phone: "+1 (555) 987-6543",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9"
    },
    {
      city: "London",
      address: "789 Travel Lane, London SW1A 1AA",
      phone: "+44 20 7946 0958",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Travel planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Let's Plan Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">
              Dream Trip
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to start your next adventure? We're here to help plan your perfect journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl">
              <Send className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full">
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <Badge className="bg-teal-100 text-teal-600 mb-4">Plan Your Trip</Badge>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      Tell Us About Your Dream Destination
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and our travel experts will get back to you within 24 hours with a personalized quote.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Destination
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Where would you like to go?"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Travel Date
                        </label>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Travelers
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3-5 People</option>
                          <option value="6-10">6-10 People</option>
                          <option value="10+">10+ People</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="">Select Budget</option>
                          <option value="1000-2500">$1,000 - $2,500</option>
                          <option value="2500-5000">$2,500 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="10000+">$10,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us more about your trip
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                        placeholder="Any special requests, interests, or questions..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send My Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-teal-600"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-teal-600"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Visit Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit one of our offices or meet with our travel experts in person
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={office.image} 
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {office.city}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-teal-500" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-teal-500" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white">
                    <Globe className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "How far in advance should I book?",
              "What's included in your packages?",
              "Do you handle visas?",
              "Can I make changes to my booking?",
              "What's your cancellation policy?"
            ].map((question, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
