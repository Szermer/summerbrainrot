const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Check background color
  const bodyStyles = await page.evaluate(() => {
    const body = document.body;
    const computedStyles = window.getComputedStyle(body);
    return {
      backgroundColor: computedStyles.backgroundColor,
      backgroundImage: computedStyles.backgroundImage,
    };
  });

  console.log('\n=== BODY BACKGROUND STYLES ===');
  console.log('Background Color:', bodyStyles.backgroundColor);
  console.log('Background Image:', bodyStyles.backgroundImage);

  // Check if CSS custom properties are defined
  const cssVariables = await page.evaluate(() => {
    const root = document.documentElement;
    const computedStyles = window.getComputedStyle(root);
    return {
      '--color-brand-light': computedStyles.getPropertyValue('--color-brand-light'),
      '--color-brand-primary': computedStyles.getPropertyValue('--color-brand-primary'),
    };
  });

  console.log('\n=== CSS CUSTOM PROPERTIES ===');
  Object.entries(cssVariables).forEach(([key, value]) => {
    console.log(`${key}: ${value || 'NOT DEFINED'}`);
  });

  // Check "Apply Now" button
  const applyButtonStyles = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button, a'));
    const applyButton = buttons.find(el => 
      el.textContent && el.textContent.includes('Apply Now')
    );
    
    if (applyButton) {
      const computedStyles = window.getComputedStyle(applyButton);
      return {
        found: true,
        backgroundColor: computedStyles.backgroundColor,
        color: computedStyles.color,
      };
    }
    return { found: false };
  });

  console.log('\n=== "APPLY NOW" BUTTON STYLES ===');
  if (applyButtonStyles.found) {
    console.log('Background Color:', applyButtonStyles.backgroundColor);
    console.log('Text Color:', applyButtonStyles.color);
  } else {
    console.log('Apply Now button not found');
  }

  // Take a screenshot
  await page.screenshot({ path: 'local-screenshot.png', fullPage: false });
  console.log('\n=== SCREENSHOT ===');
  console.log('Screenshot saved as local-screenshot.png');

  await browser.close();
})();