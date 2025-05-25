
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { DollarSign, TrendingUp, Users, BarChart, Plus, Eye } from 'lucide-react';
import DashboardNavbar from '@/components/DashboardNavbar';
import { listAnalyses, AnalysisResult } from '@/lib/telegramAnalysis';

const Dashboard = () => {
  const navigate = useNavigate();
  const [budget] = useState(1500);
  const [used] = useState(450);
  const [analyses, setAnalyses] = useState<AnalysisResult[]>([]);

  useEffect(() => {
    setAnalyses(listAnalyses());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DashboardNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Личный кабинет</h1>
          <p className="text-gray-300">Управляйте анализом и просматривайте результаты</p>
        </div>

        {/* Budget and Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Бюджет</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${budget}</div>
              <p className="text-xs text-gray-400">
                Использовано: ${used}
              </p>
              <Progress value={(used / budget) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Всего анализов</CardTitle>
              <BarChart className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-gray-400">
                +3 за последний месяц
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Найдено лидов</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,247</div>
              <p className="text-xs text-gray-400">
                Качественных контактов
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Активных анализов</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-400">
                В процессе выполнения
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Analyses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Последние анализы</CardTitle>
                    <CardDescription className="text-gray-300">
                      История ваших ИИ-анализов Telegram каналов
                    </CardDescription>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => navigate('/analysis-setup')}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Новый анализ
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyses.length === 0 && (
                    <p className="text-gray-400">Нет сохраненных анализов</p>
                  )}
                  {analyses.map((analysis) => (
                    <div
                      key={analysis.id}
                      className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-white mb-1">
                          {analysis.params.task}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {analysis.params.type}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>Каналов: {analysis.params.channels.length}</span>
                          <span>Дата: {analysis.date}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                          {analysis.result}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" className="text-white border-gray-600">
                        <Eye className="mr-2 h-4 w-4" />
                        Просмотр
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Быстрые действия</CardTitle>
                <CardDescription className="text-gray-300">
                  Часто используемые функции
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start bg-blue-600/20 border border-blue-600/30 text-blue-400 hover:bg-blue-600/30"
                  onClick={() => navigate('/analysis-setup')}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Новый анализ
                </Button>
                
                <Button 
                  className="w-full justify-start bg-purple-600/20 border border-purple-600/30 text-purple-400 hover:bg-purple-600/30"
                  variant="outline"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Поиск лидов
                </Button>
                
                <Button 
                  className="w-full justify-start bg-green-600/20 border border-green-600/30 text-green-400 hover:bg-green-600/30"
                  variant="outline"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Маркетинг анализ
                </Button>
                
                <Button 
                  className="w-full justify-start bg-orange-600/20 border border-orange-600/30 text-orange-400 hover:bg-orange-600/30"
                  variant="outline"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Отчеты
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
