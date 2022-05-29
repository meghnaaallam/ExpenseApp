const incrementCounter=document.querySelector('#btnCounter');
incrementCounter.addEventListener("click",addExpenseToTotal,false);
const headingEl=document.querySelector("#showtotal");
const userInput=document.querySelector('#inputText');
const userDescInput=document.querySelector('#inputTextDesc');
//get ref to table
const expTable=document.querySelector('#expenseTable');
let totalExpense=0;
const allExpenses=[];

function addExpenseToTotal() {
const expenseItem={};
    const textAmount=userInput.value;
    const desc=inputTextDesc.value;
 console.log({desc,textAmount});


    const expense=parseInt(textAmount,10);
 
expenseItem.textDesc=desc;
expenseItem.amount=expense;
expenseItem.moment= new Date();
// console.log(expenseItem);
allExpenses.push(expenseItem);
console.clear();
console.table(allExpenses);
    totalExpense=totalExpense+expense;

   const someText=`Total: ${totalExpense}`
   headingEl.textContent=someText;

 

const allExpensesHTML= allExpenses.map(expense => createListItem(expense));

//delete item
function deleteItem(dateValue) {
    console.log('delete was called',dateValue);

    for(let i=0;i<allExpenses.length;i++) {
        if(allExpenses[i].moment.valueOf()===dateValue) {
            console.log('Item found', allExpenses[i]);
        }
    }
}

function createListItem({textDesc, amount, moment}) {
    return `<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
        ${textDesc}
            <small class="text-muted">${moment.toLocaleDateString('en-US',{year:'numeric', month:'long', day:'numeric'})}</small>
        </div>
        <div>
            <span class="px-5">
            ${amount}
            </span>
            <button type="button" 
            class="btn btn-outline-danger btn-sm"
            onclick="deleteItem(${moment.valueOf()})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </li>`
}

const joinedAllexp=allExpensesHTML.join("");

   expTable.innerHTML=joinedAllexp;
}