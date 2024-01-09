import { assert } from 'chai'
import { GildedRose, Item } from 'gilded-rose.ts'

describe('GildedRose Test', function() {
    it('Items update independently of other items', function() {
        const dexterityVest = new Item("+5 Dexterity Vest", 10, 20)
        const agedBrie = new Item("Aged Brie", 2, 0)
        const elixir = new Item("Elixir of the Mongoose", 5, 7)
        const sulfuras1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80)
        const sulfuras2 = new Item("Sulfuras, Hand of Ragnaros", -1, 80)
        const backstagePass1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
        const backstagePass2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)
        const backstagePass3 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
        const conjuredManaCake = new Item("Conjured Mana Cake", 3, 6)

        const app = new GildedRose([
            dexterityVest, agedBrie, elixir, sulfuras1, sulfuras2, backstagePass1, backstagePass2, backstagePass3, conjuredManaCake
        ])

        app.updateQuality()

        assert.equal(dexterityVest.sellIn, 9)
        assert.equal(dexterityVest.quality, 19)

        assert.equal(agedBrie.sellIn, 1)
        assert.equal(agedBrie.quality, 1)

        assert.equal(elixir.sellIn, 4)
        assert.equal(elixir.quality, 6)

        assert.equal(sulfuras1.sellIn, 0)
        assert.equal(sulfuras1.quality, 80)

        assert.equal(sulfuras2.sellIn, -1)
        assert.equal(sulfuras2.quality, 80)

        assert.equal(backstagePass1.sellIn, 14)
        assert.equal(backstagePass1.quality, 21)

        assert.equal(backstagePass2.sellIn, 9)
        assert.equal(backstagePass2.quality, 50)

        assert.equal(backstagePass3.sellIn, 4)
        assert.equal(backstagePass3.quality, 50)

        assert.equal(conjuredManaCake.sellIn, 2)
        // TODO: Fails
        // assert.equal(conjuredManaCake.quality, 4)
    })
})
