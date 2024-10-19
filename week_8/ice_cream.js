let order = (call_production) => {
    console.log("order placed, pls call production");

    setTimeout(() => {
        console.log("order placed, pls call production");
    }, 3000);

    call_production();
};

let production = () => {

    setTimeout(() => {
        console.log("order received, starting production");
    }, 4000);
};

let serve = (ice_cream_served) => {
    console.log("Icecream served to customer");

    ice_cream_served();
};

let payment = () => {
    console.log("Payment has been made. THank you");
};

order(production);
serve(payment);