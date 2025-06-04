const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text()
    });
  });

  // Collect page errors
  const pageErrors = [];
  page.on('pageerror', error => {
    pageErrors.push(error.toString());
  });

  console.log('Navigating to https://summerbrainrot-com.web.app...');
  await page.goto('https://summerbrainrot-com.web.app', { waitUntil: 'networkidle0' });

  // Check background color
  const bodyStyles = await page.evaluate(() => {
    const body = document.body;
    const computedStyles = window.getComputedStyle(body);
    return {
      backgroundColor: computedStyles.backgroundColor,
      backgroundImage: computedStyles.backgroundImage,
      background: computedStyles.background
    };
  });

  console.log('\n=== BODY BACKGROUND STYLES ===');
  console.log('Background Color:', bodyStyles.backgroundColor);
  console.log('Background Image:', bodyStyles.backgroundImage);
  console.log('Background (full):', bodyStyles.background);

  // Check if CSS custom properties are defined
  const cssVariables = await page.evaluate(() => {
    const root = document.documentElement;
    const computedStyles = window.getComputedStyle(root);
    return {
      '--cream': computedStyles.getPropertyValue('--cream'),
      '--warmblue': computedStyles.getPropertyValue('--warmblue'),
      '--background': computedStyles.getPropertyValue('--background'),
      '--foreground': computedStyles.getPropertyValue('--foreground'),
      '--primary': computedStyles.getPropertyValue('--primary')
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
        tagName: applyButton.tagName,
        className: applyButton.className,
        backgroundColor: computedStyles.backgroundColor,
        color: computedStyles.color,
        backgroundImage: computedStyles.backgroundImage,
        background: computedStyles.background
      };
    }
    return { found: false };
  });

  console.log('\n=== "APPLY NOW" BUTTON STYLES ===');
  if (applyButtonStyles.found) {
    console.log('Button found!');
    console.log('Tag:', applyButtonStyles.tagName);
    console.log('Classes:', applyButtonStyles.className);
    console.log('Background Color:', applyButtonStyles.backgroundColor);
    console.log('Text Color:', applyButtonStyles.color);
    console.log('Background Image:', applyButtonStyles.backgroundImage);
    console.log('Background (full):', applyButtonStyles.background);
  } else {
    console.log('Apply Now button not found');
  }

  // Check if globals.css is loaded
  const stylesheets = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    return links.map(link => ({
      href: link.href,
      loaded: link.sheet !== null
    }));
  });

  console.log('\n=== LOADED STYLESHEETS ===');
  stylesheets.forEach(sheet => {
    console.log(`${sheet.loaded ? '✓' : '✗'} ${sheet.href}`);
  });

  // Check for any inline styles on body or root
  const inlineStyles = await page.evaluate(() => {
    return {
      bodyStyle: document.body.getAttribute('style'),
      htmlStyle: document.documentElement.getAttribute('style'),
      hasStyleTags: document.querySelectorAll('style').length
    };
  });

  console.log('\n=== INLINE STYLES ===');
  console.log('Body inline style:', inlineStyles.bodyStyle || 'None');
  console.log('HTML inline style:', inlineStyles.htmlStyle || 'None');
  console.log('Number of <style> tags:', inlineStyles.hasStyleTags);

  // Console messages
  console.log('\n=== CONSOLE MESSAGES ===');
  if (consoleMessages.length === 0) {
    console.log('No console messages');
  } else {
    consoleMessages.forEach(msg => {
      console.log(`[${msg.type}] ${msg.text}`);
    });
  }

  // Page errors
  console.log('\n=== PAGE ERRORS ===');
  if (pageErrors.length === 0) {
    console.log('No page errors');
  } else {
    pageErrors.forEach(error => {
      console.log(error);
    });
  }

  // Take a screenshot for visual inspection
  await page.screenshot({ path: 'site-screenshot.png', fullPage: false });
  console.log('\n=== SCREENSHOT ===');
  console.log('Screenshot saved as site-screenshot.png');

  await browser.close();
})();