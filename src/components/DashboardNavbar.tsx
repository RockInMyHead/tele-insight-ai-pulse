
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/lib/auth';
import { LogOut, User, Settings } from 'lucide-react';

const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate('/dashboard')}>
              TG<span className="text-blue-400">Analytics</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Дашборд
              </button>
              <button 
                onClick={() => navigate('/analysis-setup')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Новый анализ
              </button>
              <a href="#reports" className="text-gray-300 hover:text-white transition-colors">
                Отчеты
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
              <User className="h-4 w-4 mr-2" />
              Профиль
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
              <Settings className="h-4 w-4 mr-2" />
              Настройки
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:text-red-400"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
