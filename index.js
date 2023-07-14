const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.connectOverCDP("http://localhost:9222");
    const defaultContext = browser.contexts()[0];
    const page = defaultContext.pages()[1];
    await page.bringToFront();

    await page.goto('https://test.ptdcloud.com/');
    await page.goto('https://test.ptdcloud.com/front');
    await page.getByRole('link', { name: '登录' }).click();
    await page.getByPlaceholder('请输入用户名').click();
    await page.getByPlaceholder('请输入用户名').fill('ptdtest');
    await page.getByPlaceholder('请输入用户名').press('Tab');
    await page.getByPlaceholder('请输入密码').fill('123456');
    await page.getByRole('button', { name: '登录' }).click();
    await page.locator('.yidun_intelli-tips').click();
    await page.getByPlaceholder('请输入密码').click();
    await page.locator('.passwordCss').click();
    await page.getByPlaceholder('请输入密码').fill('ibi603613');
    await page.getByRole('button', { name: '登录' }).click();
    await page.locator('.yidun_intelli-icon').click();


})();
