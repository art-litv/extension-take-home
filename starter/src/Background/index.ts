import browser from 'webextension-polyfill';
import globalConsts from '../ContentScript/shared/constants';

const action = browser.action || browser.browserAction;

action.onClicked.addListener(async () => {
  await browser.tabs.create({ url: globalConsts.TARGET_URLS[0] });
});
