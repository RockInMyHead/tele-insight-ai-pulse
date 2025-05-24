
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Settings, Play, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Settings,
      step: "1",
      title: "Настройка анализа",
      description: "Выберите каналы для анализа или включите автоматический поиск, определите задачу для ИИ"
    },
    {
      icon: CheckCircle,
      step: "2", 
      title: "Выбор функции",
      description: "Поиск лидов, маркетинговый анализ, подбор каналов для рекламы или ваша пользовательская задача"
    },
    {
      icon: Play,
      step: "3",
      title: "Запуск анализа",
      description: "ИИ начинает обработку данных и анализ выбранных Telegram каналов в режиме реального времени"
    },
    {
      icon: BarChart,
      step: "4",
      title: "Получение результатов",
      description: "Просматривайте детальную аналитику, отчеты и рекомендации в личном кабинете"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Как это работает
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Простой роудмап от настройки до получения результатов анализа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full relative">
                      <step.icon className="h-8 w-8 text-white" />
                      <div className="absolute -top-2 -right-2 bg-white text-gray-900 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
