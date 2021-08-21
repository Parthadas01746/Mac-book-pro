function updateProductCost(product,value){
    var productCost = document.getElementById(product +"-cost");
    productCost.innerText = value;
}

document.getElementById("memoryBtn-1").addEventListener("click", function(){
    updateProductCost("memory", "50");
    updateTotalPrice();
})
document.getElementById("memoryBtn-2").addEventListener("click", function(){
    
    updateProductCost("memory","100" );
    updateTotalPrice();
})
document.getElementById("storageBtn-1").addEventListener("click", function(){
    
    updateProductCost("storage","0" );
    updateTotalPrice();
})
document.getElementById("storageBtn-2").addEventListener("click", function(){
    
    updateProductCost("storage","200" );
    updateTotalPrice();
})
document.getElementById("storageBtn-3").addEventListener("click", function(){
    
    updateProductCost("storage","300" );
    updateTotalPrice();
})
document.getElementById("deliveryBtn-1").addEventListener("click", function(){
    
    updateProductCost("delivery","50" );
    updateTotalPrice();
})
document.getElementById("deliveryBtn-2").addEventListener("click", function(){
    
    updateProductCost("delivery","950" );
    updateTotalPrice();
})


// Update Total price
function updateTotalPrice(){
    var bestPrice = parseFloat(document.getElementById("best-price").innerText);
    var memoryCost = parseFloat(document.getElementById("memory-cost").innerText);
    var storageCost = parseFloat(document.getElementById("storage-cost").innerText);
    var deliveryCost = parseFloat(document.getElementById("delivery-cost").innerText);
    var totalCost = document.getElementById("total-cost");
    var totalCost2 = document.getElementById("total-cost2");
    var updatedTotalCost = bestPrice +memoryCost +storageCost +deliveryCost;
    totalCost.innerText = updatedTotalCost;
    totalCost2.innerText = updatedTotalCost;
    console.log(updatedTotalCost);
}


// Apply promo code


// document.getElementById("apply-btn").addEventListener("click", function(){
//     var totalCost2 = parseFloat(document.getElementById("total-cost2"));
//     var totalCost2value = parseFloat(document.getElementById("total-cost2").innerText);
//  var promoCodeInput = document.getElementById("promo-code-input");
// var promoCodeInputValue = promoCodeInput.value;
//     if(promoCodeInputValue == "partha"){
//         var updated =totalCost2value +"80";
//         totalCost2.innerText = updated;
//     }
//     console.log(promoCodeInputValue)
// })

