import {test, expect} from '@playwright/test'

var homePage = 'http://localhost:3000';
var aboutPage = 'http://localhost:3000/about';
var gradesPage = 'https://localhost:3000/grades';



test.beforeAll(async () => {
    console.log('before tests');
})

test.afterAll(async () => {
    console.log('After tests')
})

test.describe('Head tag area', () => {
    test('Contains the head tag and its contents', async ({ page }) => {
        await page.goto(homePage);
        await expect(page).toHaveTitle('Example #1');

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app');

        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href', "/favicon.ico");
    })
})

