// Thay đổi ở phần Hero Section
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl">
    <Send className="mr-2 h-5 w-5" />
    Get In Touch
  </Button>
  <Button size="lg" variant="outline-white" className="px-8 py-6 text-lg rounded-full">
    <MessageCircle className="mr-2 h-5 w-5" />
    Live Chat
  </Button>
</div>

// Thay đổi ở phần Quick Actions
<div className="space-y-3">
  <Button 
    variant="outline-white" 
    className="w-full"
  >
    <MessageCircle className="w-4 h-4 mr-2" />
    Live Chat
  </Button>
  <Button 
    variant="outline-white" 
    className="w-full"
  >
    <Calendar className="w-4 h-4 mr-2" />
    Book Consultation
  </Button>
</div>
