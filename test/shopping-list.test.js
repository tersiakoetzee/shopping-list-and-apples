describe("shopping list factory", function() {


    it("should set the amount entered for budget", function() {
        var factoryShop = ShoppingFactory()
        
        factoryShop.listBudget("R30.00");
		
		assert.deepEqual(["R30.00"],factoryShop.getListBudget());

    });
    
    it("should put selected item into shopping list", function() {
        var factoryShop = ShoppingFactory()
        
        factoryShop.listBudget("bread");
        factoryShop.listBudget("milk");
        factoryShop.listBudget("eggs");
		
		assert.deepEqual(["bread", "milk","eggs"],factoryShop.getListBudget());

    });
    
    it("should return warning selected items exceeded", function() {
        var factoryShop = ShoppingFactory()
        
        factoryShop.listBudget("R30.00");
        factoryShop.listBudget("R30.00");
		
		assert.equal("Budget Total Reached", factoryShop.budgetError());

    });

});
