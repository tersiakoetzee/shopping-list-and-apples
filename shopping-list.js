function ShoppingFactory() {
  const budgetAmount = [];
  const errorMessage = "";

  function listBudget(item,total) {
    if (!item.includes(total)) {
      budgetAmount.push(item)
    }
  }

  function getListBudget() {
    return budgetAmount;
  }

 

  function itemBudget(total) {
    const maxItem = getListBudget
    if (total >= maxItem) {
       errorMessage = "Budget Total Reached"
    }

  }

  function budgetError() {
    return errorMessage
  }


  return {
    listBudget,
    getListBudget,
    // listSelection,
    itemBudget,
    budgetError
  }
}