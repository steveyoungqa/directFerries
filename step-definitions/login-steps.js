const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login.page')
const { chromium, firefox } = require('playwright')
const { expect } = require('playwright/test')

const loginPage = new LoginPage()

Given('I visit the Direct Ferries UK home page', async function () {
  await loginPage.navigateToHomePageUK()
})

Given('I visit the Direct Ferries UK My Account page',  { timeout: 22000 },  async function () {
  await loginPage.navigateToMyAccountPage()
});


Then('I navigate to the Special Offers page', async function () {
  await loginPage.specialOffersLink()
})

Then('I change the language of the site to {string}',
  async function (language) {
    await loginPage.changeLanguage(language)
  },
)

Then('I Login with Email {string} and Booking Ref of {string}', async function (email, bookingRef) {
 await loginPage.submitLoginWithParameters(email, bookingRef)
});

Then('the My Booking page has {string} passengers and {string} Vehicle for the Outboud Sailing', async function (passengers, vehicle) {
  await loginPage.bookingDetailsOutbound(passengers, vehicle)
});

Then('the My Booking page has {string} passengers and {string} Vehicle for the Return Sailing', async function (passengers, vehicle) {
  await loginPage.bookingDetailsReturn(passengers, vehicle)
});

Then('I navigate to the Outboud Sailing details page', async function () {
  await page.locator('[data-qa="return-view-booking"]').click();
});

Then('the Vehicle is shown as {string}', async function (vehicleName) {
  await loginPage.bookingVehicleName(vehicleName)
});

Then('the Lead Passenger is {string}', async function (leadPassenger) {
  await loginPage.leadPassenger(leadPassenger)
});

Then('I navigate to View Outboud Sailing Details', async function () {
  await loginPage.outboardSailingDetails()
})

Then('the Other Passenger is {string}', async function (otherPassenger) {
  await loginPage.otherPassenger(otherPassenger)
});







