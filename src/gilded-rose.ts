export class Item {
    constructor(
        public name: string,
        public sellIn: number,
        public quality: number
    ) {
    }
}

export class GildedRose {
    constructor(public items: Item[] = []) {
    }

    updateQuality() {
        this.items.forEach((item) => {
            if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    this.adjustQuality(item, -1);
                }
            } else {
                if (item.quality < 50) {
                    item.quality++;
                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn < 11) {
                            this.adjustQuality(item, 1);
                        }
                        if (item.sellIn < 6) {
                            this.adjustQuality(item, 1);
                        }
                    }
                }
            }
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.sellIn--;
            }
            if (item.sellIn < 0) {
                if (item.name != 'Aged Brie') {
                    if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.name != 'Sulfuras, Hand of Ragnaros') {
                            this.adjustQuality(item, -1);
                        }
                    } else {
                        item.quality = 0;
                    }
                } else {
                    this.adjustQuality(item, 1);
                }
            }
        })
    }

    private adjustQuality(item: Item, adjustment: -1 | 1) {
        if (item.quality < 50 && adjustment === 1) {
            item.quality += adjustment;
        } else if (item.quality > 0 && adjustment === -1) {
            item.quality += adjustment;
        }
    }
}
