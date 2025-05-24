
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Target, TrendingUp, User } from 'lucide-react';
import DashboardNavbar from '@/components/DashboardNavbar';

const AnalysisSetup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [channelMethod, setChannelMethod] = useState('manual');
  const [channels, setChannels] = useState('');
  const [analysisType, setAnalysisType] = useState('');
  const [customTask, setCustomTask] = useState('');

  const analysisTypes = [
    {
      id: 'leads',
      title: 'Поиск лидов',
      description: 'ИИ найдет потенциальных клиентов и контакты для бизнеса',
      icon: Search
    },
    {
      id: 'marketing',
      title: 'Маркетинговый анализ',
      description: 'Анализ контента, аудитории, активности и трендов',
      icon: TrendingUp
    },
    {
      id: 'advertising',
      title: 'Выбор каналов для рекламы',
      description: 'Подбор оптимальных каналов для размещения рекламы',
      icon: Target
    },
    {
      id: 'custom',
      title: 'Пользовательская задача',
      description: 'Опишите любую задачу, которую должен выполнить ИИ',
      icon: User
    }
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleStart = () => {
    // Здесь будет логика запуска анализа
    console.log('Запуск анализа с параметрами:', {
      channelMethod,
      channels,
      analysisType,
      customTask
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DashboardNavbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:text-blue-400 mb-4"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад в дашборд
          </Button>
          
          <h1 className="text-3xl font-bold text-white mb-2">Настройка анализа</h1>
          <p className="text-gray-300">Роудмап настройки ИИ-анализа Telegram каналов</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= stepNumber 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              {step === 1 && 'Шаг 1: Выбор каналов'}
              {step === 2 && 'Шаг 2: Выбор функции'}
              {step === 3 && 'Шаг 3: Подтверждение'}
            </CardTitle>
            <CardDescription className="text-gray-300">
              {step === 1 && 'Укажите каналы для анализа или включите автоматический поиск'}
              {step === 2 && 'Выберите задачу, которую должен выполнить ИИ'}
              {step === 3 && 'Проверьте настройки и запустите анализ'}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <RadioGroup value={channelMethod} onValueChange={setChannelMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="manual" id="manual" />
                    <Label htmlFor="manual" className="text-white">Указать конкретные каналы</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="auto" id="auto" />
                    <Label htmlFor="auto" className="text-white">Автоматический поиск каналов</Label>
                  </div>
                </RadioGroup>

                {channelMethod === 'manual' && (
                  <div className="space-y-2">
                    <Label htmlFor="channels" className="text-white">Ссылки на каналы</Label>
                    <Textarea
                      id="channels"
                      placeholder="Введите ссылки на Telegram каналы, каждую с новой строки..."
                      value={channels}
                      onChange={(e) => setChannels(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                      rows={5}
                    />
                    <p className="text-sm text-gray-400">
                      Пример: @channel1, @channel2, https://t.me/channel3
                    </p>
                  </div>
                )}

                {channelMethod === 'auto' && (
                  <div className="space-y-4">
                    <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-4">
                      <p className="text-blue-400 text-sm">
                        ИИ автоматически найдет и проанализирует релевантные каналы на основе ваших критериев поиска
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="keywords" className="text-white">Ключевые слова для поиска</Label>
                      <Input
                        id="keywords"
                        placeholder="IT, технологии, стартапы..."
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <RadioGroup value={analysisType} onValueChange={setAnalysisType}>
                  {analysisTypes.map((type) => (
                    <div key={type.id} className="flex items-start space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={type.id} className="text-white font-medium cursor-pointer">
                          <div className="flex items-center space-x-3 mb-2">
                            <type.icon className="h-5 w-5 text-blue-400" />
                            <span>{type.title}</span>
                          </div>
                        </Label>
                        <p className="text-gray-400 text-sm">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>

                {analysisType === 'custom' && (
                  <div className="space-y-2">
                    <Label htmlFor="customTask" className="text-white">Опишите вашу задачу</Label>
                    <Textarea
                      id="customTask"
                      placeholder="Подробно опишите, что должен анализировать и найти ИИ..."
                      value={customTask}
                      onChange={(e) => setCustomTask(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                      rows={4}
                    />
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-gray-700/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-white font-medium text-lg">Настройки анализа:</h3>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <span className="font-medium">Каналы:</span> {channelMethod === 'manual' ? 'Указанные вручную' : 'Автоматический поиск'}
                    </p>
                    
                    <p className="text-gray-300">
                      <span className="font-medium">Задача:</span> {
                        analysisTypes.find(type => type.id === analysisType)?.title || 'Не выбрана'
                      }
                    </p>
                    
                    {analysisType === 'custom' && customTask && (
                      <p className="text-gray-300">
                        <span className="font-medium">Описание задачи:</span> {customTask}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-4">
                  <p className="text-yellow-400 text-sm">
                    ⚡ Примерное время выполнения: 15-30 минут
                  </p>
                  <p className="text-yellow-400 text-sm">
                    💰 Стоимость анализа: ~$25-50 (зависит от количества каналов)
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={step === 1}
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад
              </Button>

              {step < 3 ? (
                <Button 
                  onClick={handleNext}
                  disabled={step === 1 && !channelMethod || step === 2 && !analysisType}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Далее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleStart}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Начать анализ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisSetup;
