const { expect } = require('playwright/test')

class LoginPage {
  async navigateToHomePageUK() {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('https://www.directferries.co.uk/')
    await page.getByLabel('dismiss cookie message').click()
  }

  async navigateToMyAccountPage() {
    await page.setViewportSize({ width: 1600, height: 1200 })
    await page.goto('https://account.directferries.com/?culture=en-GB')
  }

  async specialOffersLink() {
    await page.click('#specialOffers > a')
  }

  async changeLanguage(language) {
    const debug = page.getByLabel('Language Dropdown')
    await debug.focus()

    await page.getByLabel('Language Dropdown').dispatchEvent('click')
    await page.locator('#langDropdown li').filter({ hasText: language }).click();
    await page.screenshot({
      path: 'screenshots/screenshot-' + language + '.png'})
  }

  async submitLoginWithParameters(email, bookingRef) {
    await page.getByPlaceholder('Email address').fill(email)
    await page.getByPlaceholder('DFPxxxxxxxxx').fill(bookingRef)
    await page.getByRole('button', { name: 'Manage my booking' }).click()
  }

  async bookingDetailsOutbound(passengers, vehicle) {
    const passengerNo = page.locator(
      '#outbound-details [data-qa="passenger-count"] .df-ticket-specifics-total',)
    const vehicleNo = page.locator(
      '#outbound-details [data-qa="vehicle-count"] .df-ticket-specifics-total',)
    await expect(passengerNo).toContainText(passengers)
    await expect(vehicleNo).toContainText(vehicle)
  }

  async bookingDetailsReturn(passengers, vehicle) {
    const passengerNo = page.locator(
      '#return-details [data-qa="passenger-count"] .df-ticket-specifics-total',)
    const vehicleNo = page.locator(
      '#return-details [data-qa="vehicle-count"] .df-ticket-specifics-total',)
    await expect(passengerNo).toContainText(passengers)
    await expect(vehicleNo).toContainText(vehicle)
  }

  async bookingVehicleName(vechicleName) {
    const vechicle = page.locator('[data-qa="vehicle-make-model"]',)
  await expect(vechicle).toContainText(vechicleName)
  }

  async leadPassenger(leadName) {
    const lead = page.locator('[data-qa="passenger1-details"]',)
    await expect(lead).toContainText(leadName)
  }

  async outboardSailingDetails() {
    await page.click('text=View outbound sailing details')
  }

  async otherPassenger(otherName) {
    const other = page.locator('[data-qa="passenger2-details"]',)
    await expect(other).toContainText(otherName)
    await page.screenshot({
      path: 'screenshots/screenshot-' + otherName+ '.png'})
  }
}
module.exports = { LoginPage }
