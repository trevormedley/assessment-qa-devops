
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays bots', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    driver.sleep(1000)
    const botDiv = await driver.findElement(By.className('bot-card outline'))
    const displayed = await botDiv.isDisplayed()
    driver.sleep(2500)
    expect(displayed).toBe(true)
})

test('All bots are showing when pressing See All Bots button', async () => {
    const button = await driver.findElement(By.id('see-all'))
    await button.click()
    const allBotCardsDiv = await driver.findElement(By.id('all-bots'))
    const displayed = await allBotCardsDiv.isDisplayed()
    await driver.sleep(2500)
    expect(displayed).toBe(true)
})

