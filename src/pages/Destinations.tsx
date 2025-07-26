
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, MapPin, Camera, Plane, Filter } from "lucide-react";

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const categories = ['All', 'Adventure', 'Luxury', 'Cultural', 'Beach', 'Mountain', 'City'];
  const regions = ['All', 'Asia', 'Europe', 'America', 'Africa', 'Oceania'];

  const destinations = [
    {
      id: 1,
      name: "Swiss Alps Adventure",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      price: "$2,890",
      duration: "7 days 6 nights",
      rating: 4.9,
      reviews: 156,
      category: "Adventure",
      region: "Europe",
      groupSize: "8-12 people",
      highlights: ["Matterhorn Peak", "Jungfraujoch", "Scenic Train Rides"]
    },
    {
      id: 2,
      name: "Maldives Luxury Resort",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      price: "$3,320",
      duration: "5 days 4 nights",
      rating: 4.8,
      reviews: 203,
      category: "Luxury",
      region: "Asia",
      groupSize: "2-4 people",
      highlights: ["Overwater Villas", "Private Beach", "Spa Treatments"]
    },
    {
      id: 3,
      name: "Iceland Northern Lights",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: "$2,420",
      duration: "6 days 5 nights",
      rating: 4.7,
      reviews: 89,
      category: "Adventure",
      region: "Europe",
      groupSize: "6-10 people",
      highlights: ["Aurora Borealis", "Blue Lagoon", "Golden Circle"]
    },
    {
      id: 4,
      name: "Tokyo Cultural Experience",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      price: "$1,850",
      duration: "5 days 4 nights",
      rating: 4.6,
      reviews: 142,
      category: "Cultural",
      region: "Asia",
      groupSize: "4-8 people",
      highlights: ["Traditional Temples", "Sushi Making", "Mount Fuji Day Trip"]
    },
    {
      id: 5,
      name: "Santorini Sunset Romance",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      price: "$2,150",
      duration: "4 days 3 nights",
      rating: 4.9,
      reviews: 187,
      category: "Luxury",
      region: "Europe",
      groupSize: "2 people",
      highlights: ["Oia Village", "Wine Tasting", "Private Yacht Tour"]
    },
    {
      id: 6,
      name: "Bali Adventure Package",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      price: "$1,650",
      duration: "6 days 5 nights",
      rating: 4.5,
      reviews: 98,
      category: "Adventure",
      region: "Asia",
      groupSize: "6-12 people",
      highlights: ["Volcano Hiking", "Rice Terraces", "Temple Tours"]
    },
    {
      id: 7,
      name: "New York City Explorer",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      price: "$1,980",
      duration: "4 days 3 nights",
      rating: 4.4,
      reviews: 156,
      category: "City",
      region: "America",
      groupSize: "4-8 people",
      highlights: ["Broadway Shows", "Central Park", "Statue of Liberty"]
    },
    {
      id: 8,
      name: "Safari Kenya Adventure",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94",
      price: "$3,850",
      duration: "8 days 7 nights",
      rating: 4.8,
      reviews: 124,
      category: "Adventure",
      region: "Africa",
      groupSize: "4-6 people",
      highlights: ["Masai Mara", "Big Five Safari", "Maasai Village Visit"]
    },
    {
      id: 9,
      name: "Sydney Harbor Luxury",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "$2,750",
      duration: "5 days 4 nights",
      rating: 4.7,
      reviews: 89,
      category: "Luxury",
      region: "Oceania",
      groupSize: "2-6 people",
      highlights: ["Opera House Tour", "Harbor Bridge Climb", "Blue Mountains"]
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const categoryMatch = selectedCategory === 'All' || dest.category === selectedCategory;
    const regionMatch = selectedRegion === 'All' || dest.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828" 
            alt="Destinations background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore breathtaking locations around the world with our expertly crafted travel experiences
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-800">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white min-w-32"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white min-w-32"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
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
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {destination.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {destination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      <Star className="w-4 h-4 inline mr-1 fill-orange-400 text-orange-400" />
                      {destination.rating} ({destination.reviews} reviews)
                    </div>
                    <div className="text-2xl font-bold text-orange-500">
                      {destination.price}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                      <Plane className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more destinations.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our travel experts create a custom itinerary just for you. Contact us today!
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
            Request Custom Trip
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
