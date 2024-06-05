import {
  Anthropic,
  Claude,
  DeepSeek,
  Gemini,
  Google,
  Groq,
  Minimax,
  Mistral,
  Moonshot,
  OpenRouter,
  Perplexity,
  Tongyi,
  ZeroOne,
  Zhipu,
} from '@lobehub/icons';
import { Divider } from 'antd';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

import { useAzureProvider } from '@/app/(main)/settings/llm/Azure';
import { useBedrockProvider } from '@/app/(main)/settings/llm/Bedrock';
import { useOllamaProvider } from '@/app/(main)/settings/llm/Ollama';
import { useOpenAIProvider } from '@/app/(main)/settings/llm/OpenAI';
import { ModelProvider } from '@/libs/agent-runtime';

const AnthropicBrand = () => {
  const { isDarkMode } = useTheme();
  return <Anthropic.Text color={isDarkMode ? undefined : Claude.colorPrimary} size={15} />;
};

const MoonshotBrand = () => {
  const theme = useTheme();
  return (
    <Moonshot.Combine
      color={theme.isDarkMode ? theme.colorText : Moonshot.colorPrimary}
      size={22}
    />
  );
};

const GroqBrand = () => {
  const theme = useTheme();

  return <Groq.Text color={theme.isDarkMode ? theme.colorText : Groq.colorPrimary} size={20} />;
};

const GoogleBrand = () => (
  <Flexbox align={'center'} gap={8} horizontal>
    <Google.BrandColor size={22} />
    <Divider style={{ margin: '0 4px' }} type={'vertical'} />
    <Gemini.Combine size={22} type={'color'} />
  </Flexbox>
);

export const useProviderList = () => {
  const azureProvider = useAzureProvider();
  const ollamaProvider = useOllamaProvider();
  const openAIProvider = useOpenAIProvider();
  const bedrockProvider = useBedrockProvider();

  return [
    openAIProvider,
    ollamaProvider,
    azureProvider,
    {
      checkModel: 'gemini-pro',
      id: ModelProvider.Google,
      proxyUrl: {
        placeholder: 'https://generativelanguage.googleapis.com',
      },
      title: <GoogleBrand />,
    },
    {
      checkModel: 'claude-3-haiku-20240307',
      id: ModelProvider.Anthropic,
      proxyUrl: {
        placeholder: 'https://api.anthropic.com',
      },
      title: <AnthropicBrand />,
    },
    bedrockProvider,
    {
      checkModel: 'gemma-7b-it',
      id: ModelProvider.Groq,
      proxyUrl: {
        placeholder: 'https://api.groq.com/openai/v1',
      },
      title: <GroqBrand />,
    },
    {
      checkModel: 'mistralai/mistral-7b-instruct:free',
      id: ModelProvider.OpenRouter,
      modelList: { showModelFetcher: true },
      title: <OpenRouter.Combine iconProps={{ color: OpenRouter.colorPrimary }} size={20} />,
    },
    {
      checkModel: 'qwen-turbo',
      id: ModelProvider.Qwen,
      modelList: { showModelFetcher: true },
      title: <Tongyi.Combine extra={'千问'} size={26} type={'color'} />,
    },
    {
      checkModel: 'deepseek-chat',
      id: ModelProvider.DeepSeek,
      modelList: { showModelFetcher: true },
      title: <DeepSeek.Combine size={28} type={'color'} />,
    },
    {
      checkModel: 'abab5.5s-chat',
      id: ModelProvider.Minimax,
      title: <Minimax.Combine size={32} type={'color'} />,
    },
    {
      checkModel: 'open-mistral-7b',
      id: ModelProvider.Mistral,
      title: <Mistral.Combine size={26} type={'color'} />,
    },
    {
      checkModel: 'moonshot-v1-8k',
      id: ModelProvider.Moonshot,
      title: <MoonshotBrand />,
    },
    {
      checkModel: 'pplx-7b-chat',
      id: ModelProvider.Perplexity,
      proxyUrl: {
        placeholder: 'https://api.perplexity.ai',
      },
      title: <Perplexity.Combine size={24} type={'color'} />,
    },
    {
      checkModel: 'glm-3-turbo',
      id: 'zhipu',
      title: <Zhipu.Combine size={32} type={'color'} />,
    },
    {
      checkModel: 'yi-34b-chat-0205',
      id: ModelProvider.ZeroOne,
      title: <ZeroOne.Text size={20} />,
    },
  ];
};
