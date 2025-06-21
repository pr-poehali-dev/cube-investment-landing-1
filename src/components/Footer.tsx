import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="kub-gradient text-white py-16">
      <div className="kub-container">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-kub-green rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold font-montserrat">КУБ</span>
              </div>
              <span className="text-2xl font-bold font-montserrat">
                КУБ — строим будущее
              </span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Первая всероссийская строительная платформа и маркетплейс.
              Объединяем всех участников строительного рынка на единой цифровой
              платформе.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-kub-green transition-colors"
                >
                  О проекте
                </a>
              </li>
              <li>
                <a
                  href="#business"
                  className="hover:text-kub-green transition-colors"
                >
                  Бизнес-модель
                </a>
              </li>
              <li>
                <a
                  href="#invest"
                  className="hover:text-kub-green transition-colors"
                >
                  Инвестиции
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-kub-green transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-montserrat mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} />
                <span>invest@kub-platform.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MessageSquare" size={16} />
                <span>@kub_invest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            © 2024 КУБ. Все права защищены.
          </div>
          <div className="flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-kub-green transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-kub-green transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
