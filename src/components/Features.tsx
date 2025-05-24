
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, Target, User, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Поиск лидов",
      description: "Автоматический поиск и анализ потенциальных клиентов в Telegram каналах с использованием ИИ-алгоритмов",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Маркетинговый анализ",
      description: "Глубокая аналитика контента, аудитории, активности и трендов для принятия обоснованных решений",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Выбор каналов для рекламы",
      description: "ИИ подбирает оптимальные каналы для размещения рекламы на основе вашей целевой аудитории",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: User,
      title: "Пользовательские задачи",
      description: "Настройте ИИ для выполнения любых специфических задач анализа - просто опишите что нужно",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Быстрый анализ",
      description: "Получайте результаты анализа в режиме реального времени благодаря оптимизированным алгоритмам",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Полная конфиденциальность и безопасность ваших данных с шифрованием корпоративного уровня",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Возможности платформы
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мощные инструменты ИИ-аналитики для комплексного исследования Telegram каналов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
