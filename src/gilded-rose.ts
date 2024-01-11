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
        this.items
            .filter((item) => item.name !== 'Sulfuras, Hand of Ragnaros')
            .forEach((item) => {
                let adjustment: number = 0;
                if (item.name == 'Aged Brie') {
                    adjustment = item.sellIn <= 0 ? 2 : 1;
                } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.sellIn <= 0) {
                        adjustment = -item.quality;
                    } else if (item.sellIn <= 5) {
                        adjustment = 3;
                    } else if (item.sellIn <= 10) {
                        adjustment = 2;
                    } else {
                        adjustment = 1;
                    }
                } else {
                    adjustment = item.sellIn <= 0 ? -2 : -1;
                }

                this.adjustQuality(item, adjustment);
                item.sellIn--;
            })
    }

    private adjustQuality(item: Item, adjustment: number) {
        item.quality = Math.max(0, Math.min(item.quality + adjustment, 50));
    }
}
