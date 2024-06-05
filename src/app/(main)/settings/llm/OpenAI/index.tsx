'use client';

import { OpenAI } from '@lobehub/icons';
import { memo } from 'react';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import ProviderConfig from '../components/ProviderConfig';

export const useOpenAIProvider = () => {
  const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);
  return {
    modelList: { showModelFetcher: true },
    provider: 'openai',
    proxyUrl: showOpenAIProxyUrl && {
      placeholder: 'https://api.openai.com/v1',
    },
    showApiKey: showOpenAIApiKey,
    title: <OpenAI.Combine size={24} />,
  };
};

const OpenAIProvider = memo(() => {
  const { showOpenAIProxyUrl, showOpenAIApiKey } = useServerConfigStore(featureFlagsSelectors);

  return (
    <ProviderConfig
      modelList={{ showModelFetcher: true }}
      provider={'openai'}
      proxyUrl={
        showOpenAIProxyUrl && {
          placeholder: 'https://api.openai.com/v1',
        }
      }
      showApiKey={showOpenAIApiKey}
      title={<OpenAI.Combine size={24} />}
    />
  );
});

export default OpenAIProvider;
