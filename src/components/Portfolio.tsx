import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const testimonials = [
    {
      name: "Анна и Дмитрий",
      event: "Свадьба",
      text: "Михаил сделал нашу свадьбу незабываемой! Все гости были в восторге от программы.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop",
    },
    {
      name: "ООО 'Прогресс'",
      event: "Корпоратив",
      text: "Профессиональный подход и отличное чувство юмора. Коллектив был в восторге!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop",
    },
    {
      name: "Семья Петровых",
      event: "Юбилей 50 лет",
      text: "Михаил учел все наши пожелания и создал теплую атмосферу семейного праздника.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop",
    },
  ];

  const stats = [
    { number: "500+", label: "Проведенных мероприятий" },
    { number: "8", label: "Лет опыта" },
    { number: "100%", label: "Довольных клиентов" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Что говорят о работе те, кто уже доверил мне свои праздники
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-orange-50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.event}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-purple-600">
                    {testimonial.event}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
