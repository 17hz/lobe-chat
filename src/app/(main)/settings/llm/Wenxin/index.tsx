'use client';

import { Wenxin } from '@lobehub/icons';
import { Input } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { KeyVaultsConfigKey } from '@/app/(main)/settings/llm/const';
import { GlobalLLMProviderKey } from '@/types/user/settings';

import ProviderConfig from '../components/ProviderConfig';

const providerKey: GlobalLLMProviderKey = 'wenxin';

const WenxinProvider = memo(() => {
  const { t } = useTranslation('modelProvider');

  return (
    <ProviderConfig
      apiKeyItems={[
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t(`${providerKey}.accessKeyId.placeholder`)}
            />
          ),
          desc: t(`${providerKey}.accessKeyId.desc`),
          label: t(`${providerKey}.accessKeyId.title`),
          name: [KeyVaultsConfigKey, providerKey, 'accessKeyId'],
        },
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t(`${providerKey}.secretAccessKey.placeholder`)}
            />
          ),
          desc: t(`${providerKey}.secretAccessKey.desc`),
          label: t(`${providerKey}.secretAccessKey.title`),
          name: [KeyVaultsConfigKey, providerKey, 'secretAccessKey'],
        },
      ]}
      checkModel={'ERNIE-4.0-8K'}
      provider={providerKey}
      title={<Wenxin.Combine size={32} type={'color'} />}
    />
  );
});

export default WenxinProvider;
