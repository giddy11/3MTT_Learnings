let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((res, rej) =>{
        if(is_shop_open){
            setTimeout(() => {
                res(work());
            }, time);
        }
        else {
            rej(console.log("Shop isn't opened yet"));
        }
    });
};

// Chain the order promises
order(2000, ()=> console.log(`${stocks.fruits[0]} was selected`))
.then(()=> {
    return order(2000, ()=> console.log('production has started'));
})
.then(()=> {
    return order(2000, ()=> console.log('the fruit was chopped'));
})
.then(()=> {
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`));
})
.then(()=> {
    return order(1000, ()=> console.log(`ice cream placed on ${stocks.holder[0]}`));
})
.then(()=> {
    return order(1000, ()=> console.log(`${stocks.toppings[0]} was added as a topping`));
})
.then(()=> {
    return order(1000, ()=> console.log('Ice cream was served'));
})
.catch(()=>{
    console.log("Customer left");
})
.finally(()=>{
    console.log("Day ended, shop is closed");
});
