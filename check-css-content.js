const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  console.log('Navigating to https://summerbrainrot-com.web.app...');
  
  // Intercept CSS file response
  const cssContent = {};
  page.on('response', async response => {
    const url = response.url();
    if (url.includes('.css')) {
      try {
        const text = await response.text();
        cssContent[url] = text;
      } catch (e) {
        console.log(`Could not read CSS from ${url}`);
      }
    }
  });

  await page.goto('https://summerbrainrot-com.web.app', { waitUntil: 'networkidle0' });

  // Check if our custom CSS is present
  console.log('\n=== CSS FILES LOADED ===');
  Object.keys(cssContent).forEach(url => {
    console.log(`\nCSS File: ${url}`);
    const content = cssContent[url];
    
    // Check for our custom properties
    const hasCreemVar = content.includes('--cream');
    const hasWarmBlueVar = content.includes('--warmblue');
    const hasF4EFEC = content.includes('#F4EFEC') || content.includes('#f4efec');
    const has2545D3 = content.includes('#2545D3') || content.includes('#2545d3');
    const hasGradient = content.includes('linear-gradient');
    
    console.log(`Contains --cream variable: ${hasCreemVar}`);
    console.log(`Contains --warmblue variable: ${hasWarmBlueVar}`);
    console.log(`Contains #F4EFEC: ${hasF4EFEC}`);
    console.log(`Contains #2545D3: ${has2545D3}`);
    console.log(`Contains gradient: ${hasGradient}`);
    
    // Show first 500 characters of CSS
    console.log('\nFirst 500 characters of CSS:');
    console.log(content.substring(0, 500) + '...');
  });

  // Check computed styles on specific elements
  const heroStyles = await page.evaluate(() => {
    const hero = document.querySelector('section');
    if (hero) {
      const computed = window.getComputedStyle(hero);
      return {
        backgroundColor: computed.backgroundColor,
        backgroundImage: computed.backgroundImage
      };
    }
    return null;
  });

  console.log('\n=== HERO SECTION STYLES ===');
  if (heroStyles) {
    console.log('Background Color:', heroStyles.backgroundColor);
    console.log('Background Image:', heroStyles.backgroundImage);
  } else {
    console.log('Hero section not found');
  }

  await browser.close();
})();