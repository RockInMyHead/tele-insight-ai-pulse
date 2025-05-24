
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-600/30">
              🚀 ИИ-аналитика нового поколения
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Анализируйте <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Telegram каналы
            </span> <br />
            с помощью ИИ
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Наша платформа использует продвинутый искусственный интеллект для глубокого анализа 
            Telegram каналов, поиска лидов, маркетинговой аналитики и выполнения любых 
            пользовательских задач
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4"
              onClick={() => navigate('/auth')}
            >
              Начать анализ
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4"
            >
              Посмотреть демо
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600/20 p-4 rounded-full">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">10,000+</div>
            <div className="text-gray-400">Проанализированных каналов</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600/20 p-4 rounded-full">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Точность анализа</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600/20 p-4 rounded-full">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Мониторинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
