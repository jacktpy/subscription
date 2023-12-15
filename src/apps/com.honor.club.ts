import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.honor.club',
  name: '荣耀俱乐部',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13625346',
    },
  ],
});
