
// update productCost

function updateProductCost(product,value){
    var productCost = document.getElementById(product +"-cost");
    productCost.innerText = value;
}

document.getElementById("memoryBtn-1").addEventListener("click", function(){
    updateProductCost("memory", "0");
    updateTotalPrice();
})
document.getElementById("memoryBtn-2").addEventListener("click", function(){
    
    updateProductCost("memory","180" );
    updateTotalPrice();
})
document.getElementById("storageBtn-1").addEventListener("click", function(){
    
    updateProductCost("storage","0" );
    updateTotalPrice();
})
document.getElementById("storageBtn-2").addEventListener("click", function(){
    
    updateProductCost("storage","100" );
    updateTotalPrice();
})
document.getElementById("storageBtn-3").addEventListener("click", function(){
    
    updateProductCost("storage","180" );
    updateTotalPrice();
})
document.getElementById("deliveryBtn-1").addEventListener("click", function(){
    
    updateProductCost("delivery","0" );
    updateTotalPrice();
})
document.getElementById("deliveryBtn-2").addEventListener("click", function(){
    
    updateProductCost("delivery","20" );
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
   
}






// Apply promo code


document.getElementById("apply-btn").addEventListener("click", function(){
    var totalCost2 = document.getElementById("total-cost2");
    
    var totalCost2value = parseFloat(totalCost2.innerText);
 var promoCodeInput = document.getElementById("promo-code-input");
var promoCodeInputValue = promoCodeInput.value;
var applyBtn = document.getElementById("apply-btn");
    if(promoCodeInputValue == "stevekaku"){
        var updated =totalCost2value * 0.8;
        totalCost2.innerText = updated;
        promoCodeInput.value = "";
        applyBtn.setAttribute("disabled", true);
       
    }
    else{
        alert("please input valid promo code");
    }
    
})





