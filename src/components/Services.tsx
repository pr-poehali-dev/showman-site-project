import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Heart",
      title: "Свадьбы",
      description:
        "Превращу ваш особенный день в сказку. Традиции, современность и море эмоций!",
      features: ["Церемония", "Банкет", "Танцы до утра"],
    },
    {
      icon: "Building",
      title: "Корпоративы",
      description:
        "Сплочу команду и создам атмосферу успеха. От презентаций до веселых конкурсов!",
      features: ["Награждения", "Тимбилдинг", "Развлечения"],
    },
    {
      icon: "Gift",
      title: "Дни рождения",
      description:
        "Сделаю праздник незабываемым для именинника и гостей любого возраста!",
      features: ["Детские праздники", "Юбилеи", "Тематические вечеринки"],
    },
    {
      icon: "Sparkles",
      title: "Особые события",
      description:
        "Крестины, выпускные, открытия — любое событие станет ярким и запоминающимся!",
      features: ["Торжественные мероприятия", "Презентации", "Фестивали"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Услуги ведущего
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональное ведение мероприятий любого масштаба и формата
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
