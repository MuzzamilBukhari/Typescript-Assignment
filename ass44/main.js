// function to make sandwich
function orderSandwich(items) {
    console.log("\nYou've ordered a sandwich with the following items:\n");
    items.forEach(function (item) {
        console.log("- ".concat(item, " "));
    });
}
orderSandwich(["cheese", "tomato"]);
orderSandwich(["tomato", "egg", "lettuce", "mayonnaise"]);
orderSandwich(["tomato", "egg", "lettuce"]);
