
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Globe,
  Users,
  Star,
  MapPin,
  Award,
  Target,
  Eye,
  Compass
} from "lucide-react";

const About = () => {
  const stats = [
    { 
      number: "15+", 
      label: "Years in Business", 
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
    { 
      number: "50+", 
      label: "Countries Covered", 
      icon: Globe,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    { 
      number: "10,000+", 
      label: "Happy Travelers", 
      icon: Users,
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      number: "4.9", 
      label: "Average Rating", 
      icon: Star,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    }
  ];

  const values = [
    {
      title: "Passion for Travel",
      description: "We live and breathe travel, sharing our passion with every client to create unforgettable experiences.",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Trust & Safety",
      description: "Your safety and security are our top priorities. We partner with trusted providers worldwide.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every detail, from planning to execution of your perfect journey.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Global Expertise",
      description: "Our worldwide network of local partners ensures authentic and seamless travel experiences.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "https://https://img.freepik.com/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg?t=st=1753662002~exp=1753665602~hmac=94e85322e23c2d4c02949d5f5f083785c5e535ffb84e91091695ee8fc238d2f6&w=1800",
      bio: "With 20+ years in the travel industry, Sarah founded Wanderlust Travel to share her passion for exploration.",
      destination: "Santorini, Greece"
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Michael ensures every trip runs smoothly with his attention to detail and operational expertise.",
      destination: "Tokyo, Japan"
    },
    {
      name: "Emily Rodriguez",
      position: "Senior Travel Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Emily crafts personalized itineraries that capture the essence of each destination and traveler's dreams.",
      destination: "Patagonia, Chile"
    },
    {
      name: "David Thompson",
      position: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "David leads our adventure travel division, bringing thrilling experiences safely to adventurous souls.",
      destination: "Nepal Himalayas"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started with a dream to make travel accessible and memorable for everyone.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Extended our services to cover destinations across all continents.",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received 'Best Travel Agency' award from International Travel Association.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched our digital platform for seamless booking and trip management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      year: "2021",
      title: "Sustainable Travel",
      description: "Introduced eco-friendly travel options and carbon offset programs.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },
    {
      year: "2024",
      title: "15th Anniversary",
      description: "Celebrating 15 years of creating extraordinary travel experiences.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
    }
  ];

  const missionVision = [
    {
      title: "Our Mission",
      description: "To inspire and enable meaningful travel experiences that broaden perspectives, create lasting memories, and foster cultural understanding across the globe.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Our Vision",
      description: "To be the world's most trusted travel partner, known for creating extraordinary journeys that transform travelers and positively impact the destinations we visit.",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Our Values",
      description: "Authenticity, sustainability, and excellence guide every decision we make, ensuring each journey respects local cultures and preserves destinations for future generations.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42d" 
            alt="About us background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm">
              About Wanderlust Travel
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Crafting Dreams Into
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              15 years of creating extraordinary journeys for adventurous souls who dare to explore the world's hidden treasures
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Our Story
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-orange-100 text-orange-600 mb-4">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                The Journey Began
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small dream to a global adventure company
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
                    alt="Our story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full opacity-20"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2009 by Sarah Johnson, Wanderlust Travel was born from a simple belief: everyone deserves to experience the wonder of travel. After years of corporate life, Sarah left her executive position to pursue her passion for exploration and sharing that joy with others.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a small boutique travel agency has grown into a trusted partner for thousands of travelers worldwide. We've maintained our personal touch while expanding our expertise and destinations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to be recognized as industry leaders in creating personalized, meaningful travel experiences that connect people with the world's most incredible destinations.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Award-Winning Service</div>
                    <div className="text-gray-600">Recognized globally for excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-600 mb-4">Our Foundation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide every journey we create
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {missionVision.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-80`}></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-600 mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-80`}></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-600 mb-4">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <div className="text-xs text-orange-400 font-medium mb-1">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {member.destination}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-orange-400 font-medium text-sm mb-2">{member.position}</p>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline with Images */}
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

          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <div className="text-blue-600 font-semibold text-sm">{milestone.year}</div>
                        <h3 className="text-2xl font-bold text-gray-800">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" 
            alt="CTA background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied travelers who have trusted us with their dream journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Planning Your Adventure
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
