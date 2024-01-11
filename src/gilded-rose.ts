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
            if (item.name == 'Aged Brie') {
                this.adjustQuality(item, 1);
            } else if(item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                let adjustment: number;
                if (item.sellIn <= 5) {
                    adjustment = 3;
                } else if (item.sellIn <= 10) {
                    adjustment = 2;
                } else {
                    adjustment = 1;
                }
                this.adjustQuality(item, adjustment);
            } else {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    this.adjustQuality(item, -1);
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

    private adjustQuality(item: Item, adjustment: number) {
        item.quality = Math.max(0, Math.min(item.quality + adjustment, 50));
    }
}
