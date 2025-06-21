import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const InvestmentConditions = () => {
  const conditions = [
    {
      icon: "Coins",
      title: "Минимальный вклад",
      value: "5 млн ₽",
      desc: "Стартовая сумма для участия",
    },
    {
      icon: "PieChart",
      title: "Предлагаемая доля",
      value: "1% - 20%",
      desc: "В зависимости от размера инвестиции",
    },
    {
      icon: "Handshake",
      title: "Условия",
      value: "Гибкие",
      desc: "Для стратегических инвесторов",
    },
  ];

  const advantages = [
    "Первый на рынке строительных маркетплейсов",
    "Высокая потребность в цифровизации отрасли",
    "Потенциал стать строительным Ozon или Wildberries",
    "Опытная команда с экспертизой в строительстве и IT",
    "Масштабируемая бизнес-модель по всей России",
  ];

  return (
    <section className="kub-section bg-kub-light-gray">
      <div className="kub-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-kub-graphite mb-6">
            Инвестиционные условия
          </h2>
          <p className="text-xl text-kub-medium-gray max-w-3xl mx-auto">
            Присоединяйтесь к революции в строительной индустрии
          </p>
        </div>

        {/* Investment Conditions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {conditions.map((condition, index) => (
            <div
              key={index}
              className="kub-card text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-kub-green/10 rounded-2xl mb-6">
                <Icon
                  name={condition.icon}
                  className="text-kub-green"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-kub-graphite mb-2">
                {condition.title}
              </h3>
              <div className="text-2xl font-bold text-kub-green mb-3">
                {condition.value}
              </div>
              <p className="text-kub-medium-gray text-sm">{condition.desc}</p>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold font-montserrat text-kub-graphite mb-8">
              Преимущества проекта
            </h3>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-kub-green rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <p className="text-kub-graphite">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-kub-green hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Icon name="TrendingUp" className="mr-2" size={20} />
                Получить инвестиционную презентацию
              </Button>
            </div>
          </div>

          {/* Market Visual */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold font-montserrat text-kub-graphite mb-6 text-center">
              Потенциал рынка
            </h4>

            <div className="space-y-6">
              <div className="text-center p-6 bg-kub-green/5 rounded-xl">
                <div className="text-3xl font-bold text-kub-green mb-2">
                  12 трлн ₽
                </div>
                <div className="text-kub-medium-gray">
                  Объем строительного рынка РФ
                </div>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  2.5%
                </div>
                <div className="text-kub-medium-gray">
                  Наша целевая доля через 5 лет
                </div>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  300 млрд ₽
                </div>
                <div className="text-kub-medium-gray">Потенциальный оборот</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentConditions;
