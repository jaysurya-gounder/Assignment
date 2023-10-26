// Store Product
const products = [
    {
        id: 1,
        productInfo: { src: "./images/curology-cleaner.jpg", pname: "Curology Cleaner" },
        price: 450,
        quantity: 1
    },
    {
        id: 2,
        productInfo: { src: "./images/apple-watch.jpg", pname: "Apple Watch" },
        price: 1099,
        quantity: 1
    },
    {
        id: 3,
        productInfo: { src: "./images/nike-shoe.jpg", pname: "Nike Shoe" },
        price: 800,
        quantity: 1
    },
    {
        id: 4,
        productInfo: { src: "./images/raybon-sunglasses.jpg", pname: "Raybon Sunglasses" },
        price: 500,
        quantity: 1
    },
    {
        id: 5,
        productInfo: { src: "./images/vinta-bag.jpg", pname: "Vinta Bag" },
        price: 1000,
        quantity: 1
    }
];

// Function to calculate subtotal for a single item
function calculateSubtotal(item) {
    return item.price * item.quantity;
}

// Function to render items and their subtotals
function renderItems() {
    let itemList = document.getElementById("cart-items");
    let totalPrice = 0;

    itemList.innerHTML = ""; // Clear the list

    products.forEach(function (item, index) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${item.productInfo.src}"/><h4>${item.productInfo.pname}</h4></td>
            <td><input type="number" value="${item.quantity}" id="quantity${index}" onchange="updateQuantity(${index})" min="1" max="10"/></td>
            <td>${item.price}</td>
            <td id="subtotal${index}">${calculateSubtotal(item).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
          `;
        itemList.appendChild(tr);
        totalPrice += calculateSubtotal(item);
    });

    document.getElementById("total").textContent = totalPrice.toFixed(2);
}

// Function to update quantity and recalculate subtotal
function updateQuantity(index) {
    var quantityInput = document.getElementById(`quantity${index}`);
    products[index].quantity = parseInt(quantityInput.value, 10);
    document.getElementById(`subtotal${index}`).textContent = calculateSubtotal(products[index]).toFixed(2);
    renderItems();
}

// Function to remove an item from the array and update the display
function removeItem(index) {
    products.splice(index, 1);
    renderItems();
}

// Initial rendering of items
renderItems();

