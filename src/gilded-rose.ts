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
            let adjustment: number = 0;
            if (item.name == 'Aged Brie') {
                adjustment = 1;
            } else if(item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (item.sellIn <= 5) {
                    adjustment = 3;
                } else if (item.sellIn <= 10) {
                    adjustment = 2;
                } else {
                    adjustment = 1;
                }
            } else {
               adjustment = -1;
            }

            // Půlnoc!!!
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                this.adjustQuality(item, adjustment);
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
