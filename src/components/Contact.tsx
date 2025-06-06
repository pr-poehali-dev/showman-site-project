import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+79781257181",
      description: "Звоните в любое время",
    },
    {
      icon: "MapPin",
      title: "Локация",
      value: "Москва и МО",
      description: "Работаем по всему региону",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Ежедневно 9:00-22:00",
      description: "Консультации бесплатно",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Обсудим детали вашего мероприятия и создадим незабываемый праздник
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={info.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    <p className="text-orange-200 font-medium">{info.value}</p>
                    <p className="text-sm text-purple-300">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Почему выбирают меня?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span>Индивидуальный подход к каждому мероприятию</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span>Профессиональное оборудование включено</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span>Гарантия качества и пунктуальность</span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  <span>Бесплатная консультация и планирование</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Заказать мероприятие
              </CardTitle>
              <CardDescription className="text-purple-200">
                Заполните форму, и я свяжусь с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>

              <div>
                <Label htmlFor="event" className="text-white">
                  Тип мероприятия
                </Label>
                <Input
                  id="event"
                  placeholder="Свадьба, корпоратив, день рождения..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
              </div>

              <div>
                <Label htmlFor="date" className="text-white">
                  Дата мероприятия
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="bg-white/20 border-white/30 text-white"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">
                  Дополнительная информация
                </Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите о ваших пожеланиях..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[100px]"
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
