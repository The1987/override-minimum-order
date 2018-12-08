
//Js Link Test //
console.log('If you can see this the link is working');


//Custom Preference //
var customPreference = "OVER"
console.log(customPreference);


//Promo Code //
function addPromoCode() {

    var promo = document.getElementById("promo-code-box").value;
    console.log(promo);

    if (promo == customPreference) {
        event.preventDefault();
        alert('Custom Preference Entered');

        //Remove disabled attribute from checkout button //
        // document.getElementById("promo-code-box").removeAttribute("disabled");
        document.getElementById("checkout-button").removeAttribute("disabled");
        alert('Attribute Removed');

        // Get the Checkout Button ID and store in variable //
        var box = document.getElementById("checkout-button");
        //Remove class from Checkout Button
        box.className -= "checkout-primary";

        //Add class to Checkout Button
        box.className += " checkout-secondary";
    }
    else {
        console.log('Next Time Man!');
    }
};

// When button is clicked
function checkoutButtonFunction() {
    console.log('Checkout button has been clicked');
    alert('You may proceed to the next page!');
};

//Minimum Order Value //
var minOrder = 40;
console.log('Minimum Order Value is ', minOrder);
//On page load function will fire off //
function minOrderFunction() {
    //Grab ID and replace with var minOrder //
    document.getElementById('minOrderValue').innerHTML = minOrder;
};
