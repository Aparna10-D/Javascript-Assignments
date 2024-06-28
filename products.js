class Product{
    constructor(productName, price, brand){
        this.productName= productName;
        this.price = price;
        this.brand=brand;
    }
    details = function showProduct(){
        return ['JBL Flip4 Bluetooth speaker','35000','JBL'];
    }
    printDetails(){
        console.log(`Product purchased is ${this.productName} of brand ${this.brand} costs Rs.${this.price}`); 
    }
    showDiscountedPrice(amount){
        console.log(`Price on discount: Rs.${amount}`)
    }
}
let obj = new Product('JBL FLIP4 Bluetooth speaker','35000','JBL');
let obj2 = new Product();
obj.printDetails();
obj2.showDiscountedPrice('32000');
