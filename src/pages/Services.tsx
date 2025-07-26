
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Hotel, 
  Car, 
  Camera, 
  Mountain, 
  Users, 
  Shield, 
  Clock,
  Star,
  Globe,
  Heart,
  Map
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on international and domestic flights with flexible booking options.",
      features: ["Price Match Guarantee", "24/7 Support", "Free Cancellation", "Seat Selection"]
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Handpicked hotels, resorts, and unique stays worldwide.",
      features: ["Luxury Resorts", "Boutique Hotels", "Vacation Rentals", "Best Price Guarantee"]
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Complete ground transportation solutions for your journey.",
      features: ["Airport Transfers", "Car Rentals", "Private Drivers", "Group Transportation"]
    },
    {
      icon: Camera,
      title: "Guided Tours",
      description: "Expert-led tours with local insights and exclusive access.",
      features: ["Professional Guides", "Small Groups", "VIP Access", "Cultural Immersion"]
    }
  ];

  const specializedServices = [
    {
      icon: Mountain,
      title: "Adventure Travel",
      description: "Thrilling adventures for the bold and adventurous souls.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306"
    },
    {
      icon: Heart,
      title: "Honeymoon Packages",
      description: "Romantic getaways crafted for newlyweds and couples.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      icon: Users,
      title: "Group Travel",
      description: "Corporate retreats, family reunions, and group adventures.",
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3"
    },
    {
      icon: Globe,
      title: "Cultural Tours",
      description: "Deep dive into local cultures and traditions worldwide.",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for peace of mind during your travels."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are in the world."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Carefully vetted partners and premium service standards."
    },
    {
      icon: Map,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your preferences."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-teal-600 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05" 
            alt="Services background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our Premium Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your journey seamless and unforgettable
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Core Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Everything You Need for Travel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to execution, we handle every aspect of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Specialized Tours</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tailored Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized travel packages designed for unique experiences and special occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white self-start">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              The Wanderlust Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from other travel agencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our simple 4-step process to create your perfect trip
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Share your travel dreams and preferences with us" },
              { step: "2", title: "Planning", desc: "We create a custom itinerary just for you" },
              { step: "3", title: "Booking", desc: "Secure your reservations with our best rates" },
              { step: "4", title: "Travel", desc: "Enjoy your journey with 24/7 support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-white/80">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us plan your perfect adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
