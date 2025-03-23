import browser from 'webextension-polyfill';

import { initReactApp } from './app';
import globalConsts from './shared/constants';

try {
  console.debug(`Starting v${browser.runtime.getManifest().version}:`, { url: window.location.href });

  if (window.location.href.startsWith(globalConsts.TARGET_URL)) {
    initReactApp();
  }
} catch (error) {
  console.error('Render error:', error);
}
