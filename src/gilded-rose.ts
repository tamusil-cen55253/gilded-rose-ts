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
                const adjustment = this.getQualityAdjustment(item);
                this.adjustQuality(item, adjustment);
                item.sellIn--;
            })
    }

    private getQualityAdjustment(item: Item) {
        switch (item.name) {
            case 'Aged Brie':
                return item.sellIn <= 0 ? 2 : 1;
            case 'Backstage passes to a TAFKAL80ETC concert':
                if (item.sellIn <= 0) return -item.quality;
                if (item.sellIn <= 5) return 3;
                if (item.sellIn <= 10) return 2;
                return 1;
            case 'Conjured Mana Cake':
                return item.sellIn <= 0 ? -4 : -2;
            default:
                return item.sellIn <= 0 ? -2 : -1;
        }
    }

    private adjustQuality(item: Item, adjustment: number) {
        item.quality = Math.max(0, Math.min(item.quality + adjustment, 50));
    }
}
