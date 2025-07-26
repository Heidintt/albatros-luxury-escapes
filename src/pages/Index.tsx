
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
      title: "Khám Phá Thế Giới Cùng Chúng Tôi",
      subtitle: "Những hành trình khó quên, trải nghiệm độc đáo"
    },
    {
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      title: "Thiên Nhiên Hoang Dã Đang Chờ Bạn",
      subtitle: "Từ núi cao đến đại dương xanh thẳm"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      title: "Những Cuộc Phiêu Lưu Không Giới Hạn",
      subtitle: "Tạo nên những kỷ niệm đáng nhớ nhất"
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Thụy Sĩ Alps",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
      price: "45,900,000",
      duration: "7 ngày 6 đêm",
      rating: 4.9,
      description: "Khám phá vẻ đẹp hùng vĩ của dãy Alps"
    },
    {
      id: 2,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      price: "52,800,000",
      duration: "5 ngày 4 đêm",
      rating: 4.8,
      description: "Thiên đường nhiệt đới với nước biển trong vắt"
    },
    {
      id: 3,
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: "38,500,000",
      duration: "6 ngày 5 đêm",
      rating: 4.7,
      description: "Đất nước băng giá với Aurora borealis"
    }
  ];

  const experiences = [
    {
      icon: Mountain,
      title: "Phiêu Lưu Mạo Hiểm",
      description: "Leo núi, trekking và khám phá những địa điểm hoang dã"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Chụp ảnh những khoảnh khắc tuyệt đẹp nhất"
    },
    {
      icon: Globe,
      title: "Văn Hóa Bản Địa",
      description: "Trải nghiệm văn hóa độc đáo của từng vùng miền"
    },
    {
      icon: Compass,
      title: "Khám Phá Tự Do",
      description: "Lịch trình linh hoạt theo sở thích cá nhân"
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
              <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Trang Chủ</a>
              <a href="#destinations" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Điểm Đến</a>
              <a href="#tours" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Tours</a>
              <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Về Chúng Tôi</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">Liên Hệ</a>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Đặt Tour Ngay
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
                  Khám Phá Ngay
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Xem Lịch Trình
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
            <Badge className="bg-orange-100 text-orange-600 mb-4">Điểm Đến Nổi Bật</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Những Hành Trình Tuyệt Vời
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những điểm đến tuyệt đẹp nhất thế giới với dịch vụ chuyên nghiệp và trải nghiệm đẳng cấp
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
                      {destination.price}đ
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Yêu Thích
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
            <Badge className="bg-blue-100 text-blue-600 mb-4">Trải Nghiệm Độc Đáo</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi mang đến những trải nghiệm du lịch độc đáo và đáng nhớ nhất cho mỗi hành trình
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
              <div className="text-orange-100 text-lg">Năm Kinh Nghiệm</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-orange-100 text-lg">Điểm Đến</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-orange-100 text-lg">Khách Hàng Hài Lòng</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">4.9★</div>
              <div className="text-orange-100 text-lg">Đánh Giá Trung Bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn Sàng Cho Cuộc Phiêu Lưu Tiếp Theo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy để chúng tôi giúp bạn tạo nên những kỷ niệm đáng nhớ nhất trong cuộc đời
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              Tư Vấn Miễn Phí
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 text-lg">
              <Users className="w-5 h-5 mr-2" />
              Liên Hệ Ngay
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
                Đồng hành cùng bạn khám phá thế giới với những trải nghiệm độc đáo và đáng nhớ nhất.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Dịch Vụ</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tour Trong Nước</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tour Quốc Tế</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tour Honeymoon</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Tour Doanh Nghiệp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hỗ Trợ</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Trung Tâm Trợ Giúp</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Điều Khoản</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Chính Sách</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@wanderlusttravel.vn</p>
                <p>📱 1900 1234 567</p>
                <p>📍 123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Wanderlust Travel. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
