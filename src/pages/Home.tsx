
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star, Compass, Heart, Globe, Mountain, Camera } from "lucide-react";
import { Link } from 'react-router-dom';

const Home = () => {
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

  const featuredDestinations = [
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
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
                <Link to="/destinations">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                    <Compass className="w-5 h-5 mr-2" />
                    Explore Destinations
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Our Services
                  </Button>
                </Link>
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
      <section className="py-20 bg-gray-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination) => (
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
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Unique Experiences
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
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
