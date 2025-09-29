const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage();
  await page.setViewport({ width: 3840, height: 2160 });
  await page.goto('file:///Users/moe/Desktop/financial_agent/docs/international_coffee_day_post.html');
  await page.screenshot({ path: 'coffee_day_image.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved as coffee_day_image.png');
})();
