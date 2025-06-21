import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="kub-gradient text-white min-h-screen flex items-center">
      <div className="kub-container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-kub-green rounded-2xl mb-6">
              <span className="text-3xl font-bold font-montserrat text-white">
                КУБ
              </span>
            </div>
          </div>

          {/* Slogan */}
          <h1 className="text-5xl lg:text-7xl font-bold font-montserrat mb-6 leading-tight">
            КУБ — строим будущее
          </h1>

          {/* Call to Action */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Вложитесь в первый строительный маркетплейс в России
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-kub-green hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Инвестировать в КУБ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-kub-graphite px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Презентация проекта
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat text-kub-green mb-2">
                100 млн ₽
              </div>
              <div className="text-gray-300">Запрашиваемые инвестиции</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat text-kub-green mb-2">
                3-5 лет
              </div>
              <div className="text-gray-300">Горизонт окупаемости</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-montserrat text-kub-green mb-2">
                700 млн ₽
              </div>
              <div className="text-gray-300">Планируемая выручка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
