import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'rating-stencil-component',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
      bundles: [
        { components: ['my-rating-component'] }
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
