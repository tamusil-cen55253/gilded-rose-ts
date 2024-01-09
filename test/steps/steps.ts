import { Given, When, Then } from '@cucumber/cucumber'
import { assert } from 'chai'
import { GildedRose, Item } from 'gilded-rose.ts'

let app: GildedRose
let originalSellIn: number
let originalQuality: number

function initItem(name: string, sellIn: number, quality: number) {
    const items: Item[] = [new Item(name, sellIn, quality)]
    app = new GildedRose(items)
    originalSellIn = sellIn
    originalQuality = quality
}

Given(/^an? (.+) with quality (\d+) to be sold by (\d+) days$/, (name, quality, sellIn) => {
    initItem(name, parseInt(sellIn), parseInt(quality))
})

Given(/^an? (.+) with quality (\d+) overdue by (\d+) days$/, (name, quality, overdue) => {
    initItem(name, -parseInt(overdue), parseInt(quality))
})

When(/^a day passes$/, () => {
    app.updateQuality()
})

Then(/^the quality should be decreased by (\d+)$/, (decrease) => {
    assert.equal(originalQuality - parseInt(decrease), app.items[0].quality)
})

Then(/^the quality should be increased by (\d+)$/, (increase) => {
    assert.equal(originalQuality + parseInt(increase), app.items[0].quality)
})

Then(/^the quality should be (\d+)$/, (quality) => {
    assert.equal(parseInt(quality), app.items[0].quality)
})

Then(/^the sell-by should be decreased by (\d+)$/, (decrease) => {
    assert.equal(originalSellIn - parseInt(decrease), app.items[0].sellIn)
})
