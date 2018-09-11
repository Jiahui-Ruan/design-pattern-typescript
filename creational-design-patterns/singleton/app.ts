import { StatsTracker } from './stats-tracker';

let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`Widget Views: ${tracker.widgetViews}`);
console.log(`Button Clicks: ${tracker.buttonClicks}`);
console.log(`FB Shares: ${tracker.facebookShares}`);
console.log(`Twitter Shares: ${tracker.twitterShares}`);
