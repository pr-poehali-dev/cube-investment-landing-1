import Icon from "@/components/ui/icon";

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: "Users",
      title: "Подписки",
      desc: "Для бригад, магазинов и производителей",
      revenue: "40%",
    },
    {
      icon: "Percent",
      title: "Комиссии",
      desc: "С продаж на маркетплейсе",
      revenue: "45%",
    },
    {
      icon: "Megaphone",
      title: "Реклама",
      desc: "Включая тендерную модель размещения",
      revenue: "15%",
    },
  ];

  const investmentDistribution = [
    { category: "Разработка", percentage: 30, color: "bg-blue-500" },
    { category: "Команда", percentage: 20, color: "bg-kub-green" },
    { category: "Маркетинг", percentage: 25, color: "bg-purple-500" },
    { category: "Логистика", percentage: 5, color: "bg-orange-500" },
    { category: "Операционные", percentage: 5, color: "bg-red-500" },
    { category: "Резерв", percentage: 15, color: "bg-gray-500" },
  ];

  return (
    <section className="kub-section bg-white">
      <div className="kub-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-kub-graphite mb-6">
            Бизнес-модель
          </h2>
          <p className="text-xl text-kub-medium-gray max-w-3xl mx-auto">
            Диверсифицированные источники дохода обеспечивают стабильный рост
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {revenueStreams.map((stream, index) => (
            <div
              key={index}
              className="kub-card text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-kub-green/10 rounded-2xl mb-6">
                <Icon name={stream.icon} className="text-kub-green" size={24} />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-kub-graphite mb-3">
                {stream.title}
              </h3>
              <p className="text-kub-medium-gray mb-4">{stream.desc}</p>
              <div className="text-2xl font-bold text-kub-green">
                {stream.revenue}
              </div>
            </div>
          ))}
        </div>

        {/* Investment Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold font-montserrat text-kub-graphite mb-8">
              Распределение инвестиций
            </h3>

            <div className="space-y-4">
              {investmentDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="font-medium text-kub-graphite">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-kub-graphite">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pie Chart Visual */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                {
                  investmentDistribution.reduce(
                    (acc, item, index) => {
                      const startAngle = acc.currentAngle;
                      const angle = (item.percentage / 100) * 360;
                      const endAngle = startAngle + angle;

                      const x1 =
                        50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 =
                        50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

                      const largeArcFlag = angle > 180 ? 1 : 0;
                      const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                      acc.paths.push(
                        <path
                          key={index}
                          d={pathData}
                          className={item.color.replace("bg-", "fill-")}
                          stroke="white"
                          strokeWidth="0.5"
                        />,
                      );

                      acc.currentAngle = endAngle;
                      return acc;
                    },
                    { paths: [], currentAngle: 0 },
                  ).paths
                }
              </svg>

              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-kub-graphite">
                    100 млн ₽
                  </div>
                  <div className="text-sm text-kub-medium-gray">Инвестиции</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
