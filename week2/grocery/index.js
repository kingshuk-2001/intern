const grocInput = document.querySelector('.groc-input')
const grocPriceInput = document.querySelector('.groc-price')
const addButton = document.querySelector('.groc-button')
const grocList = document.querySelector('.groc-list')
const filterOption = document.querySelector('.filter-groc')


document.addEventListener('DOMContentLoaded', getGrocItems)
addButton.addEventListener('click', addgroc);
grocList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterGrocItems)


function addgroc(event) {
    event.preventDefault();
    console.log('hello');
    const grocDiv = document.createElement("div");
    grocDiv.classList.add("groc");

    const newgroc = document.createElement('li');
    const grocPrice = document.createElement('li');
    grocPrice.innerText = grocPriceInput.value;
    newgroc.innerText = grocInput.value;
    newgroc.classList.add('groc-item');
    grocDiv.appendChild(newgroc);
    grocDiv.appendChild(grocPrice);

    saveGrocItems([grocInput.value,grocPriceInput.value]);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    grocDiv.appendChild(completedButton)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    grocDiv.appendChild(trashButton)


    grocList.appendChild(grocDiv);
    grocInput.value = "";
    grocPriceInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const grocitem = item.parentElement;
        removeGrocItems(grocitem);
        grocitem.remove();
    }

    if (item.classList[0] === "complete-btn") {
        const grocitem = item.parentElement;
        grocitem.classList.toggle("completed")
    }

}

function filterGrocItems(e) {
    const items = grocList.childNodes;
    console.log(items);
    items.forEach(function (item) {
        switch (e.target.value) {
            case "all":
                item.style.display = "flex";
                break;
            case "completed":
                if (item.classList.contains("completed")) {
                    console.log(item);
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!item.classList.contains("completed")) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
                break;
        }

    })
}


function saveGrocItems(item) {
    let groc;
    if (localStorage.getItem('groc') === null) {
        groc = [];
    }
    else {
        groc = JSON.parse(localStorage.getItem('groc'))
    }
    groc.push(item);
    localStorage.setItem("groc", JSON.stringify(groc));
}

function getGrocItems() {
    let groc;
    if (localStorage.getItem('groc') === null) {
        groc = [];
    }
    else {
        groc = JSON.parse(localStorage.getItem('groc'))
    }
    groc.forEach(function (item) {
        const grocDiv = document.createElement("div");
        grocDiv.classList.add("groc");
        
        const grocPrice = document.createElement('li');
        grocPrice.innerText = item[1]
        const newgroc = document.createElement('li');
        newgroc.innerText = item[0]
        newgroc.classList.add('groc-item');
        grocDiv.appendChild(newgroc);
        grocDiv.appendChild(grocPrice);
        
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        grocDiv.appendChild(completedButton)

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        grocDiv.appendChild(trashButton)
        grocList.appendChild(grocDiv);
    })

}

function removeGrocItems(item){
    let groc;
    if (localStorage.getItem('groc') === null) {
        groc = [];
    }
    else {
        groc = JSON.parse(localStorage.getItem('groc'))
    }
    const index = item.children[0].innerText;  
    var dex
    for(let g of groc){
        if(g[0] == index){
         
            dex = groc.indexOf(g)
        }
    }
    groc.splice(dex, 1)
 
    localStorage.setItem("groc", JSON.stringify(groc));
} 