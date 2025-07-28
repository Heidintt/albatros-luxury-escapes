
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Calendar, 
  MapPin, 
  Users, 
  Camera, 
  Shield, 
  Star, 
  ArrowRight,
  CheckCircle,
  Clock,
  Heart,
  Globe
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on domestic and international flights with flexible booking options",
      features: ["24/7 support", "Free cancellation", "Best price guarantee"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Custom Itineraries",
      description: "Personalized travel plans crafted by our expert travel consultants",
      features: ["Tailored experiences", "Local insights", "Flexible scheduling"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Guided Tours",
      description: "Professional local guides for immersive cultural experiences",
      features: ["Expert guides", "Small groups", "Authentic experiences"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e420",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Group Travel",
      description: "Specially designed packages for families, friends, and corporate groups",
      features: ["Group discounts", "Custom activities", "Dedicated coordinator"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning moments with professional photography guidance",
      features: ["Pro photographer", "Best locations", "Equipment included"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for worry-free travels worldwide",
      features: ["Medical coverage", "Trip cancellation", "Emergency assistance"],
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const packages = [
    {
      name: "Explorer Package",
      price: "$1,299",
      duration: "5 days",
      includes: ["Flights", "Hotels", "Tours", "Meals"],
      popular: false
    },
    {
      name: "Adventure Package",
      price: "$2,499",
      duration: "7 days",
      includes: ["Flights", "Hotels", "Tours", "Meals", "Activities", "Guide"],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "$4,999",
      duration: "10 days",
      includes: ["Flights", "5-star Hotels", "Private Tours", "All Meals", "Spa", "Concierge"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      comment: "Amazing experience! The team planned everything perfectly.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b147"
    },
    {
      name: "Mike Chen",
      location: "California",
      rating: 5,
      comment: "Best travel service I've ever used. Highly recommend!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emma Wilson",
      location: "London",
      rating: 5,
      comment: "Professional service and incredible destinations. Will book again!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441057206919-63d19fac2369"
            alt="Travel services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Premium Travel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            From flight bookings to custom itineraries, we handle every detail of your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl">
              <Globe className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-full">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Everything You Need for Perfect Travel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive travel services designed to make your journey seamless and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Travel Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Carefully curated packages to suit every traveler's needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? 'border-2 border-orange-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-orange-500 my-4">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.duration}</p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from travelers who trusted us with their journeys
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team create the perfect travel experience for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Heart className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
