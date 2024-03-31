import playwright from 'playwright';
import express from 'express';
import path from 'path';

var screenshotsDir = './screenshots';

const app = express();

const filename = 'screenshot.png';

app.use(express.static(screenshotsDir, { index: filename }));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port: ${port}`));

const browser = await playwright.chromium.connect(process.env.BROWSER_PLAYWRIGHT_ENDPOINT);
const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://www.example.com/');
await page.screenshot({ path: path.join(screenshotsDir, filename) });

await browser.close();
