
import OpenAI from 'openai';
=======
import { Configuration, OpenAIApi } from 'openai';

export interface AnalysisParams {
  channels: string[];
  task: string;
  type: string;
}

export interface AnalysisResult {
  id: string;
  params: AnalysisParams;
  result: string;
  date: string;
}

const HISTORY_KEY = 'tiap_analysis_history';

function getApi() {
  const apiKey = import.meta.env.VITE_OPENAI_KEY;
  if (!apiKey) throw new Error('OPENAI key is missing');

  return new OpenAI({ apiKey });

  const config = new Configuration({ apiKey });
  return new OpenAIApi(config);

}

function getHistory(): AnalysisResult[] {
  const raw = localStorage.getItem(HISTORY_KEY);
  return raw ? (JSON.parse(raw) as AnalysisResult[]) : [];
}

function saveHistory(history: AnalysisResult[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export async function startAnalysis(params: AnalysisParams): Promise<AnalysisResult> {
  const api = getApi();
  const prompt = `Анализ Telegram каналов ${params.channels.join(', ')}. Задача: ${params.task}`;

  const resp = await api.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  const content = resp.choices[0]?.message?.content || '';

  const resp = await api.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });
  const content = resp.data.choices[0]?.message?.content || '';

  const res: AnalysisResult = {
    id: crypto.randomUUID(),
    params,
    result: content,
    date: new Date().toISOString(),
  };
  const history = getHistory();
  history.unshift(res);
  saveHistory(history);
  return res;
}

export function listAnalyses(): AnalysisResult[] {
  return getHistory();
}
