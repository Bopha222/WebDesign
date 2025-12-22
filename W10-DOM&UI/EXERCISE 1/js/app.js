let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
let item3 = document.getElementById("item3");
container2.appendChild(item3);

//  2- Remove item 4
// YOUR CODE !!
let item4 = document.rgetElementById("item4");
item4.remove();

   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
let item10 = document.createElement("div");
item10.id = "item10";
item10.textContent = "Item 10";
container3.appendChild(item10);


//  4- Set all items located in a blue container to red
// YOUR CODE !!
let blueContainers = document.querySelectorAll(".blue");
blueContainers.forEach(container => {
    let items = container.children; 
    for (let item of items) {
        item.style.backgroundColor = "red";
    }
});

//  5- Set the text color of container 2 items to green
// YOUR CODE !!
let container2Items = container2.children;
for (let item of container2Items) {
    item.style.color = "green";
}