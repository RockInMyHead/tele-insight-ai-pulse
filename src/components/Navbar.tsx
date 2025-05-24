
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              TG<span className="text-blue-400">Analytics</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Возможности
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                Как работает
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Цены
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-400"
              onClick={() => navigate('/auth')}
            >
              Войти
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/auth')}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
