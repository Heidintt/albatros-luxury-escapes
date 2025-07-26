
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Users, Star, Plane, Camera, Mountain, Compass, Heart, Globe } from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Explore the World with Us",
      subtitle: "Unforgettable journeys, unique experiences"
    },
    {
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      title: "Wild Nature Awaits You",
      subtitle: "From high mountains to deep blue oceans"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      title: "Unlimited Adventures",
      subtitle: "Creating the most memorable experiences"
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      price: "$2,890",
      duration: "7 days 6 nights",
      rating: 4.9,
      description: "Discover the majestic beauty of the Alps"
    },
    {
      id: 2,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      price: "$3,320",
      duration: "5 days 4 nights",
      rating: 4.8,
      description: "Tropical paradise with crystal clear waters"
    },
    {
      id: 3,
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: "$2,420",
      duration: "6 days 5 nights",
      rating: 4.7,
      description: "Land of ice and fire with Aurora Borealis"
    }
  ];

  const experiences = [
    {
      icon: Mountain,
      title: "Adventure Travel",
      description: "Mountain climbing, trekking and exploring wild destinations"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture the most beautiful moments of your journey"
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Experience unique cultures of different regions"
    },
    {
      icon: Compass,
      title: "Custom Exploration",
      description: "Flexible itineraries tailored to your preferences"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-800">Wanderlust Travel</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#destinations" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Destinations</a>
              <a href="#tours" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Tours</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Hero background"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Itinerary
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-orange-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Featured Destinations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Amazing Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the world's most beautiful destinations with professional service and premium experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-500">
                      {destination.price}
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Add to Wishlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Unique Experiences</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide unique and unforgettable travel experiences for every journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <experience.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{experience.title}</h3>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-orange-100 text-lg">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-orange-100 text-lg">Destinations</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-orange-100 text-lg">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">4.9★</div>
              <div className="text-orange-100 text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create the most memorable experiences of your lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
              <Users className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Plane className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">Wanderlust Travel</span>
              </div>
              <p className="text-gray-300 mb-4">
                Join us in exploring the world with unique and memorable experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Domestic Tours</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">International Tours</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Honeymoon Packages</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Corporate Tours</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@wanderlusttravel.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 123 Adventure St, Explorer City, EX 12345</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Wanderlust Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
