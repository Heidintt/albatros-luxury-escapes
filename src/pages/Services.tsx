
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Clock,
  Shield,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  Globe
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      title: "Flight Booking",
      description: "Best deals on international and domestic flights with flexible booking options and 24/7 support.",
      features: ["Price Match Guarantee", "24/7 Support", "Free Cancellation", "Seat Selection"],
      price: "From $299",
      popular: true
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      title: "Luxury Accommodation",
      description: "Handpicked hotels, resorts, and unique stays worldwide with exclusive amenities.",
      features: ["5-Star Hotels", "Boutique Resorts", "Private Villas", "Best Price Guarantee"],
      price: "From $189/night",
      popular: false
    },
    {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      title: "Premium Transportation",
      description: "Complete ground transportation solutions with luxury vehicles and professional drivers.",
      features: ["Airport Transfers", "Luxury Car Rentals", "Private Chauffeurs", "Group Transportation"],
      price: "From $79",
      popular: false
    },
    {
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
      title: "Expert Guided Tours",
      description: "Professional guides with local insights and exclusive access to hidden gems.",
      features: ["Local Experts", "Small Groups", "VIP Access", "Cultural Immersion"],
      price: "From $149",
      popular: false
    }
  ];

  const specializedServices = [
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      title: "Adventure & Expedition",
      description: "Thrilling adventures for the bold souls seeking extraordinary experiences in nature's playground.",
      highlights: ["Mountain Climbing", "Safari Tours", "Extreme Sports", "Wilderness Camping"],
      duration: "3-14 days"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Romantic Getaways",
      description: "Intimate escapes and honeymoon packages crafted for couples seeking romance.",
      highlights: ["Private Dinners", "Spa Treatments", "Sunset Cruises", "Luxury Suites"],
      duration: "3-7 days"
    },
    {
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3",
      title: "Corporate & Group Travel",
      description: "Seamless group experiences for corporate retreats, team building, and family reunions.",
      highlights: ["Event Planning", "Team Activities", "Conference Facilities", "Group Discounts"],
      duration: "2-10 days"
    },
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      title: "Cultural Heritage Tours",
      description: "Deep dive into local cultures, traditions, and historical sites with expert historians.",
      highlights: ["Historical Sites", "Local Artisans", "Traditional Cuisine", "Cultural Workshops"],
      duration: "5-12 days"
    }
  ];

  const serviceProcess = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We listen to your travel dreams and preferences to understand your perfect journey.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      step: "02", 
      title: "Custom Planning",
      description: "Our experts craft a personalized itinerary tailored to your interests and budget.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      step: "03",
      title: "Seamless Booking",
      description: "We handle all reservations and arrangements with our exclusive partner network.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      step: "04",
      title: "Journey Support",
      description: "Enjoy your adventure with round-the-clock support and local assistance.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Full travel insurance and emergency support wherever you go.",
      stat: "99.9% Coverage"
    },
    {
      icon: Clock,
      title: "24/7 Concierge Service",
      description: "Round-the-clock assistance and support team ready to help.",
      stat: "Available Always"
    },
    {
      icon: Star,
      title: "Premium Quality Standards",
      description: "Carefully vetted partners and premium service excellence.",
      stat: "5-Star Rated"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide network of trusted local partners.",
      stat: "120+ Countries"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
            alt="Premium travel services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 text-lg px-4 py-2">
            Premium Travel Services
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Extraordinary
            <span className="block gradient-text">Journey Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            From flight bookings to luxury accommodations, we handle every detail 
            to create seamless and unforgettable travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 text-lg px-4 py-2">
              Core Services
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need
              <span className="block text-primary">for Perfect Travel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From planning to execution, we handle every aspect of your journey with precision and care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="relative">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg group">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
            <Badge className="bg-blue-100 text-blue-600 mb-4 text-lg px-4 py-2">
              Specialized Experiences
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tailored Adventures
              <span className="block text-blue-600">for Every Passion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unique travel experiences designed for special interests and unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30 px-3 py-1">
                      {service.duration}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg mb-6 text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-white text-black hover:bg-white/90 px-6 py-2 group">
                      Discover More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4 text-lg px-4 py-2">
              Our Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How We Create
              <span className="block text-purple-600">Your Perfect Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 4-step process ensures every detail is perfectly planned and executed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-square">
                    <img 
                      src={process.image} 
                      alt={process.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 text-lg px-4 py-2">
              Why Choose Wanderlust
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              The Wanderlust
              <span className="block text-primary">Difference</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              What sets us apart from other travel agencies and makes us the preferred choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/80 to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">{item.stat}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828" 
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Start Your
            <span className="block text-primary">Dream Journey?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a personalized consultation and let our experts craft your perfect adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
              View All Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
