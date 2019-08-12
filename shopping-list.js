function ShoppingFactory(){
    const budgetAmount = []

    function listBudget(budgetItem){
       var myBudget = budgetItem;
        if(!budgetAmount.includes(myBudget)){
            budgetAmount.push(myBudget)
        }
    }

    function getListBudget(){
        return budgetAmount;
    }

    function listSelection(selected){
        customerList = []

    }



  return{
    listBudget,
    getListBudget,
    listSelection
  }
}