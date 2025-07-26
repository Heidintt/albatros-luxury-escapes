
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Star,
  MapPin,
  Calendar,
  Shield,
  Target,
  Eye,
  Compass
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years in Business", icon: Calendar },
    { number: "50+", label: "Countries Covered", icon: Globe },
    { number: "10,000+", label: "Happy Travelers", icon: Users },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, sharing our passion with every client to create unforgettable experiences."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your safety and security are our top priorities. We partner with trusted providers worldwide."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every detail, from planning to execution of your perfect journey."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Our worldwide network of local partners ensures authentic and seamless travel experiences."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ac",
      bio: "With 20+ years in the travel industry, Sarah founded Wanderlust Travel to share her passion for exploration."
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Michael ensures every trip runs smoothly with his attention to detail and operational expertise."
    },
    {
      name: "Emily Rodriguez",
      position: "Senior Travel Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Emily crafts personalized itineraries that capture the essence of each destination and traveler's dreams."
    },
    {
      name: "David Thompson",
      position: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "David leads our adventure travel division, bringing thrilling experiences safely to adventurous souls."
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started with a dream to make travel accessible and memorable for everyone."
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Extended our services to cover destinations across all continents."
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received 'Best Travel Agency' award from International Travel Association."
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched our digital platform for seamless booking and trip management."
    },
    {
      year: "2021",
      title: "Sustainable Travel",
      description: "Introduced eco-friendly travel options and carbon offset programs."
    },
    {
      year: "2024",
      title: "15th Anniversary",
      description: "Celebrating 15 years of creating extraordinary travel experiences."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
            alt="About us background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Wanderlust Travel
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Crafting extraordinary journeys for adventurous souls since 2009
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-indigo-100 text-indigo-600 mb-4">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                The Journey Began
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828" 
                  alt="Our story"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2009 by Sarah Johnson, Wanderlust Travel was born from a simple belief: everyone deserves to experience the wonder of travel. After years of corporate life, Sarah left her executive position to pursue her passion for exploration and sharing that joy with others.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What started as a small boutique travel agency has grown into a trusted partner for thousands of travelers worldwide. We've maintained our personal touch while expanding our expertise and destinations.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to be recognized as industry leaders in creating personalized, meaningful travel experiences that connect people with the world's most incredible destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To inspire and enable meaningful travel experiences that broaden perspectives, create lasting memories, and foster cultural understanding across the globe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the world's most trusted travel partner, known for creating extraordinary journeys that transform travelers and positively impact the destinations we visit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Authenticity, sustainability, and excellence guide every decision we make, ensuring each journey respects local cultures and preserves destinations for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-600 mb-4">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              15 Years of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our journey to becoming a trusted travel partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="ml-6">
                      <div className="text-blue-600 font-semibold text-sm">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have trusted us with their dream journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
