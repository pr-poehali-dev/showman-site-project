import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Дмитрий Шпарук
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-purple-200">
            Ведущий мероприятий и шоумен
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl">
            Превращаю любое мероприятие в незабываемое шоу! Свадьбы,
            корпоративы, дни рождения — каждый праздник станет особенным с
            профессиональным ведущим.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Calendar" className="mr-2" />
              Забронировать дату
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть видео
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 p-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Дмитрий Шпарук - ведущий мероприятий"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
              <Icon name="Mic" size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
