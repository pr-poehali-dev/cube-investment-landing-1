import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentAmount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="kub-section bg-white">
      <div className="kub-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-kub-graphite mb-6">
              Оставьте заявку на инвестиции
            </h2>
            <p className="text-xl text-kub-medium-gray">
              Станьте частью строительной революции уже сегодня
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-montserrat text-kub-graphite mb-6">
                  Свяжитесь с нами
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-kub-green/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-kub-green" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-kub-graphite">
                        Email
                      </div>
                      <div className="text-kub-medium-gray">
                        invest@kub-platform.ru
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-kub-green/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-kub-green" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-kub-graphite">
                        Телефон
                      </div>
                      <div className="text-kub-medium-gray">
                        +7 (495) 123-45-67
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-kub-green/10 rounded-lg flex items-center justify-center">
                      <Icon
                        name="MessageSquare"
                        className="text-kub-green"
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-kub-graphite">
                        Telegram
                      </div>
                      <div className="text-kub-medium-gray">@kub_invest</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-kub-green/5 rounded-xl">
                <h4 className="font-bold text-kub-graphite mb-3">
                  Преимущества раннего инвестирования:
                </h4>
                <ul className="space-y-2 text-kub-medium-gray">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-kub-green" size={16} />
                    <span>Привилегированные условия</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-kub-green" size={16} />
                    <span>Участие в стратегических решениях</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-kub-green" size={16} />
                    <span>Максимальная доходность</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="kub-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="investmentAmount">Размер инвестиции</Label>
                  <Input
                    id="investmentAmount"
                    name="investmentAmount"
                    placeholder="Например: 10 млн ₽"
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-kub-green hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-xl"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentForm;
