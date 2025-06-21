import Icon from "@/components/ui/icon";

const ProjectDescription = () => {
  const problems = [
    {
      icon: "AlertTriangle",
      title: "Недоверие",
      desc: "Клиенты не знают качество работ",
    },
    {
      icon: "Shield",
      title: "Мошенники",
      desc: "Много недобросовестных подрядчиков",
    },
    {
      icon: "Package",
      title: "Некачественные материалы",
      desc: "Сложно найти проверенных поставщиков",
    },
  ];

  const solutions = [
    {
      icon: "CheckCircle",
      title: "Проверенные бригады",
      desc: "Рейтинговая система и отзывы",
    },
    {
      icon: "Truck",
      title: "Централизованная логистика",
      desc: "Единая система доставки материалов",
    },
    {
      icon: "Store",
      title: "Маркетплейс с API",
      desc: "Интеграция всех участников рынка",
    },
  ];

  return (
    <section className="kub-section bg-kub-light-gray">
      <div className="kub-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-montserrat text-kub-graphite mb-6">
            О проекте КУБ
          </h2>
          <p className="text-xl text-kub-medium-gray max-w-4xl mx-auto leading-relaxed">
            КУБ — это экосистема, объединяющая строительные бригады, магазины,
            производителей стройматериалов и покупателей на одной платформе по
            всей стране.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <div className="animate-slide-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                <Icon name="X" className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-kub-graphite mb-4">
                Проблемы рынка
              </h3>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <Icon
                      name={problem.icon}
                      className="text-red-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kub-graphite mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-kub-medium-gray text-sm">
                      {problem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="animate-slide-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Icon name="Check" className="text-kub-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-kub-graphite mb-4">
                Решения КУБ
              </h3>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-kub-green"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon
                      name={solution.icon}
                      className="text-kub-green"
                      size={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-kub-graphite mb-1">
                      {solution.title}
                    </h4>
                    <p className="text-kub-medium-gray text-sm">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
