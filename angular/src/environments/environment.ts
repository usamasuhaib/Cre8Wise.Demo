import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Cre8Wise',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44348/',
    redirectUri: baseUrl,
    clientId: 'Cre8Wise_App',
    responseType: 'code',
    scope: 'offline_access Cre8Wise',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44348',
      rootNamespace: 'Cre8Wise',
    },
  },
} as Environment;
