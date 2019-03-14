//2. Encapsulating the family of algorithm
interface PriceCalculate {
    calculatePrice(tagPrice: number): number;
}

//1. Family of algorithm
class TaxIncluded implements PriceCalculate {
    taxPercentage: number;
    constructor(tax: number){
        this.taxPercentage = tax;
    }
    calculatePrice(amount: number): number {
        return amount * this.taxPercentage + amount;
    }
}

//1. Family of algorithm
class DutyFree implements PriceCalculate {
    dutyFreeDiscount: number;
    constructor(discountPercentage: number){
        this.dutyFreeDiscount = discountPercentage;
    }
    calculatePrice(amount: number): number {
        return amount - amount * this.dutyFreeDiscount ;
    }
}

class Item {
    priceCalculator: PriceCalculate;
    price: number;
    constructor(price: number, priceCalculator: PriceCalculate){
        this.price = price;
        this.setPriceCalculator(priceCalculator);
    }
    calculatePrice(): number {
        return this.priceCalculator.calculatePrice(this.price);
    }
    setPriceCalculator(priceCalculator: PriceCalculate){
        this.priceCalculator = priceCalculator;
    }
}

//3. Make those algorithms interchangable
let watch = new Item(100, new TaxIncluded(0.15));
console.log(watch.calculatePrice())
watch = new Item(100, new DutyFree(0.15));
console.log(watch.calculatePrice())

//Another example would sorting
//All I want is to sort, but depends on the fields of sorting I will decide which one
//Calculate direction. We have one method but we could have direction by walk, car, etc