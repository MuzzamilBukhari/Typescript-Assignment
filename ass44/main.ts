// function to make sandwich
function orderSandwich(...items: string[]) {
  console.log("\nYou've ordered a sandwich with the following items:\n");
  items.forEach((item) => {
    console.log(`- ${item} `);
  });
}

orderSandwich("cheese", "tomato");
orderSandwich("tomato", "egg", "lettuce", "mayonnaise");
orderSandwich("tomato", "egg", "lettuce");
