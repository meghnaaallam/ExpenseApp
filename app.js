//get the btn element
const incrementCounter=document.querySelector('#btnCounter');

//listen to the click event
incrementCounter.addEventListener("click",addExpenseToTotal,false);

//get the heading element
const headingEl=document.querySelector("#showtotal");

//read input value from user.
const userInput=document.querySelector('#inputText');
//for desc
const userDescInput=document.querySelector('#inputTextDesc');
//get ref to table
const expTable=document.querySelector('#expenseTable');

let totalExpense=0;
let allExpenses=[];

function addExpenseToTotal() {
const expenseItem={};

//getting input value 
    const textAmount=userInput.value;
    //getting input value of description
    const desc=inputTextDesc.value;
 console.log({desc,textAmount});

//convert it to number
    const expense=parseInt(textAmount,10);
 
expenseItem.textDesc=desc;
expenseItem.amount=expense;
expenseItem.moment= new Date();
// console.log(expenseItem);
allExpenses.push(expenseItem);
console.clear();
console.table(allExpenses);

//adding value to totalexpenses
    totalExpense=totalExpense+expense;

   const someText=`Total: ${totalExpense}`

   //set the heading ele
   headingEl.textContent=someText;


const allExpensesHTML= allExpenses.map(expense => createListItem(expense));
const joinedAllexp=allExpensesHTML.join("");

   expTable.innerHTML=joinedAllexp;
}

//view layer
function createListItem({textDesc, amount, moment}) {
    return `<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
        ${textDesc}
            <small class="text-muted">${getDate(moment)}</small>
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


//delete item
function deleteItem(dateValue) {
    // const newarr=[];
    // console.log('delete was called',dateValue);

    // for(let i=0;i<allExpenses.length;i++) {
    //     if(allExpenses[i].moment.valueOf()!==dateValue) {
    //         newarr.push(allExpenses[i]);
    let newTotalExpense = 0;
    const newArr = allExpenses.filter((exp)=>{
        if(exp.moment.valueOf() !== dateValue)
        {
            newTotalExpense = newTotalExpense + exp.amount 
            return exp
        }
    })
    // So that allExpense is updated
    allExpenses = newArr
    renderList(newArr)
    // So that totalExpense is updated
    totalExpense = newTotalExpense
    headingEl.textContent = `Total Expense: ${totalExpense}`
    }


function renderList(arrOfList) {
    const allExpensesHTML= arrOfList.map(expense => createListItem(expense));
    const joinedAllexp=allExpensesHTML.join('');
   expTable.innerHTML=joinedAllexp;
}

//getting the date 
function getDate(momento) {
return momento.toLocaleDateString('en-US', {
year:'numeric', 
month:'long', 
day:'numeric',
});
}