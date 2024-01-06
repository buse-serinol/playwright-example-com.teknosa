import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.teknosa.com/');
  await page.locator('#ins-frameless-overlay').click();
  await page.locator('form[name="search_form_SearchBox"]').getByRole('button').nth(2).click();
  await page.getByPlaceholder('Ürün,kategori veya marka ara').fill('telefon');
  await page.getByLabel('Kelime Ara').click();
  await page.getByRole('heading', { name: '"telefon" için arama sonuçları' }).click();
  await page.getByPlaceholder('Marka ara', { exact: true }).click();
  await page.getByPlaceholder('Marka ara', { exact: true }).fill('samsung');
  await page.getByPlaceholder('Marka ara', { exact: true }).press('Enter');
  await page.locator('#brand2').check();
  await page.getByLabel('– 20.000 TL arası \n                                                                (5)').check();

  await page.getByRole('button', { name: 'Samsung' }).click();
  await page.getByRole('link', { name: 'Samsung Galaxy S21 FE 128GB' }).click();
  await page.getByRole('heading', { name: 'Samsung Galaxy S21 FE 128GB' }).click();
  await page.getByRole('button', { name: 'Sepete Ekle' }).click();
  await page.getByRole('link', { name: 'Sepetime Git' }).click();
  await page.locator('.prd-row-title').click();
  await page.getByRole('link', { name: 'Alışverişi Tamamla' }).click();
  await page.getByText('Teknosa’ya Hoş Geldiniz').click();
});