const puppeteer = require("puppeteer");

(async () => {
  try {
    //browser initiate
    let browser = await puppeteer.launch({
      args: ["--start-maximized"],
      headless: false,
    });
    // opens a new blank page
    let page = await browser.newPage();

    // resize the browser
    await page.setViewport({ width: 1366, height: 768 });

    // navigate to url and wait until page loads completely
    await page.goto("url", {
      waitUntil: "networkidle0",
    });

    // close the browser
    await browser.close();
  } catch (e) {
    console.log(e);
  }
})();
