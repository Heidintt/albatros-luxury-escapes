
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  MapPin, Calendar, Users, Star, Compass, Heart, Globe, Mountain, Camera, 
  Phone, Mail, Clock, Award, Shield, Headphones, Plane, Map, 
  Quote, ArrowRight, Play, CheckCircle, TrendingUp
} from "lucide-react";
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Discover Extraordinary Adventures",
      subtitle: "Premium travel experiences crafted for the discerning explorer",
      cta: "Start Your Journey"
    },
    {
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      title: "Luxury Mountain Expeditions",
      subtitle: "Conquer peaks with world-class guides and premium accommodations",
      cta: "Explore Mountains"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      title: "Tropical Paradise Getaways",
      subtitle: "Escape to pristine beaches and crystal-clear waters",
      cta: "Book Paradise"
    },
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      title: "Cultural Heritage Tours",
      subtitle: "Immerse yourself in ancient traditions and timeless beauty",
      cta: "Discover Culture"
    }
  ];

  const featuredDestinations = [
    {
      id: 1,
      name: "Swiss Alps Adventure",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      price: "$3,890",
      originalPrice: "$4,500",
      duration: "8 days 7 nights",
      rating: 4.9,
      reviews: 127,
      description: "Luxury alpine experience with helicopter tours and Michelin-starred dining",
      highlights: ["Helicopter Tours", "5-Star Hotels", "Private Guide"],
      difficulty: "Moderate",
      groupSize: "8-12 people"
    },
    {
      id: 2,
      name: "Maldives Ultimate Luxury",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      price: "$5,320",
      originalPrice: "$6,200",
      duration: "6 days 5 nights",
      rating: 4.8,
      reviews: 203,
      description: "Overwater villas with private butler service and world-class spa",
      highlights: ["Overwater Villa", "Private Butler", "Spa Treatments"],
      difficulty: "Relaxing",
      groupSize: "2-4 people"
    },
    {
      id: 3,
      name: "Iceland Northern Lights",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: "$4,420",
      originalPrice: "$5,100",
      duration: "7 days 6 nights",
      rating: 4.7,
      reviews: 156,
      description: "Chase the Aurora Borealis with expert photographers and luxury lodges",
      highlights: ["Aurora Hunting", "Photo Workshop", "Luxury Lodges"],
      difficulty: "Easy",
      groupSize: "6-10 people"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Absolutely incredible experience! The attention to detail and luxury accommodations exceeded all expectations. Our guide was knowledgeable and the itinerary was perfectly planned.",
      trip: "Swiss Alps Adventure"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Maldives trip was pure magic. Every moment was carefully curated, from the overwater villa to the private dining experiences. Simply unforgettable!",
      trip: "Maldives Ultimate Luxury"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Witnessing the Northern Lights was a dream come true. The photography workshops were excellent and the luxury lodges provided perfect comfort after long days exploring.",
      trip: "Iceland Northern Lights"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia",
      excerpt: "Discover untouched paradise destinations that most travelers never find...",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop",
      author: "Travel Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Destinations"
    },
    {
      id: 2,
      title: "Luxury Travel Trends 2024",
      excerpt: "The future of high-end travel includes sustainable luxury and unique experiences...",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=250&fit=crop",
      author: "Sarah Wilson",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Travel Tips"
    },
    {
      id: 3,
      title: "Photography Guide: Capturing Northern Lights",
      excerpt: "Professional tips from our expert photographers on getting the perfect aurora shot...",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      author: "Mike Photography",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Photography"
    }
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book 3 months in advance and save up to 25%",
      discount: "25% OFF",
      validUntil: "April 30, 2024",
      terms: "Valid for select destinations"
    },
    {
      id: 2,
      title: "Group Booking Discount",
      description: "Travel with 6+ friends and enjoy exclusive rates",
      discount: "30% OFF",
      validUntil: "Year Round",
      terms: "Minimum 6 travelers"
    },
    {
      id: 3,
      title: "Honeymoon Package",
      description: "Romantic getaways with special amenities",
      discount: "20% OFF",
      validUntil: "Dec 31, 2024",
      terms: "Plus complimentary upgrades"
    }
  ];

  const whyChooseUs = [
    {
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop",
      title: "25+ Years Experience",
      description: "Industry-leading expertise with award-winning service since 1999"
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=300&fit=crop",
      title: "100% Protected",
      description: "Full financial protection and comprehensive travel insurance included"
    },
    {
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop",
      title: "24/7 Support",
      description: "Round-the-clock assistance from our dedicated travel specialists"
    },
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop",
      title: "Local Experts",
      description: "Native guides with deep knowledge of destinations and cultures"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      title: "Luxury Standards",
      description: "Handpicked accommodations and experiences meeting highest quality standards"
    },
    {
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop",
      title: "Global Network",
      description: "Partnerships worldwide ensuring seamless travel experiences"
    }
  ];

  const travelExperiences = [
    {
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
      title: "Adventure Expeditions",
      description: "Thrilling outdoor adventures for adrenaline seekers",
      tours: "23 Tours Available"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      title: "Cultural Immersion",
      description: "Deep dive into local traditions and authentic experiences",
      tours: "18 Tours Available"
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop",
      title: "Luxury Retreats",
      description: "Ultimate relaxation in world's most exclusive destinations",
      tours: "15 Tours Available"
    },
    {
      image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400&h=600&fit=crop",
      title: "Wildlife Safaris",
      description: "Encounter magnificent wildlife in their natural habitats",
      tours: "12 Tours Available"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Hero background"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-400 mb-6 text-lg px-4 py-2">
                Premium Travel Experiences
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
                <Link to="/destinations">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl">
                    <Compass className="w-6 h-6 mr-3" />
                    {heroSlides[currentSlide].cta}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-10 py-6 text-xl">
                  <Play className="w-6 h-6 mr-3" />
                  Watch Our Story
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">120+</div>
                  <div className="text-gray-300">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">25K+</div>
                  <div className="text-gray-300">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.9★</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-orange-500 w-12' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Travel Experiences Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-6 text-lg px-4 py-2">
              Travel Experiences
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Explore Our World
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Immerse yourself in breathtaking destinations and unforgettable experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {travelExperiences.map((experience, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-gray-200 mb-2">{experience.description}</p>
                    <Badge className="bg-orange-500 text-white">
                      {experience.tours}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Limited Time: Save up to 30% on Group Bookings!</span>
            </div>
            <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              View Offers
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Destinations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-orange-100 text-orange-600 mb-6 text-lg px-4 py-2">
              Handpicked Destinations
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Luxury Travel Experiences
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the world's most extraordinary destinations with our premium, all-inclusive packages
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <Badge className="bg-orange-500 text-white shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {destination.rating} ({destination.reviews})
                    </Badge>
                    <Badge className="bg-green-500 text-white shadow-lg">
                      SAVE ${(parseInt(destination.originalPrice.replace('$', '').replace(',', '')) - parseInt(destination.price.replace('$', '').replace(',', ''))).toLocaleString()}
                    </Badge>
                  </div>
                  <div className="absolute top-6 right-6">
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-black/50 text-white border-0">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{destination.groupSize}</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="w-4 h-4 mr-2" />
                      <span>{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Premium Location</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold text-orange-500">{destination.price}</span>
                        <span className="text-lg text-gray-400 line-through">{destination.originalPrice}</span>
                      </div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    View Details & Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg">
                Explore All Destinations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Travel Images */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-blue-100 text-blue-600 mb-6 text-lg px-4 py-2">
              Why Choose Us
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Unmatched Excellence
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We've been crafting extraordinary travel experiences for over two decades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-600 mb-6 text-lg px-4 py-2">
              Client Testimonials
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              What Our Travelers Say
            </h2>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/1">
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-10">
                      <Quote className="w-12 h-12 text-orange-400 mb-6" />
                      <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.location}</p>
                            <p className="text-orange-500 font-medium">{testimonial.trip}</p>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Exclusive Offers
            </h2>
            <p className="text-2xl text-orange-100 max-w-3xl mx-auto">
              Limited-time deals on our most popular destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-orange-200 mb-2">{offer.discount}</div>
                  <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                  <p className="text-orange-100">{offer.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <p className="text-sm text-orange-200 mb-1">Valid until: {offer.validUntil}</p>
                    <p className="text-xs text-orange-300">{offer.terms}</p>
                  </div>
                  <Button className="bg-white text-orange-500 hover:bg-orange-100">
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Blog */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-6 text-lg px-4 py-2">
              Travel Insights
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Latest Travel Stories
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Expert insights, destination guides, and travel inspiration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready for Your Dream Adventure?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Let our travel specialists create a personalized itinerary just for you
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">hello@luxurytravel.com</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-semibold mb-2">Available</h3>
                <p className="text-gray-300">24/7 Support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl">
                  <MapPin className="w-6 h-6 mr-3" />
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-10 py-6 text-xl">
                  <Users className="w-6 h-6 mr-3" />
                  About Our Company
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
