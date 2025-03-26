let btn = document.querySelector("button");
let item = document.querySelector("input");
let show = document.querySelector("ul");

function storeItem(){
    let itemInput = item.value;
    item.value = "";

    return itemInput;
}

function createDeleteButton(){
    let btn1 = document.createElement("button");
    btn1.textContent = "delete";
    btn1.classList.toggle("btn1");
    return btn1;
}

function createList(){
    let showItem = document.createElement("li");
    showItem.classList.toggle("list");
    showItem.textContent = storeItem(item);
    show.appendChild(showItem);
    return showItem;
}

btn.addEventListener("click", () => {

    let showItem = createList();

    let deleteButton = createDeleteButton();
    showItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        showItem.remove();
    });

    item.focus();


});


