type MenuItem = { id: number; name: string; price: number };

type OrderItem = {
  id: number;
  pizza: MenuItem;
  status: "ordered" | "completed";
};

type OrderQueue = OrderItem[];

 
const menu: MenuItem[] = [];

let cashInRegister = 100;
let nextOrderId = 1;
let menuId = 1;
const orderQueue: OrderQueue = [];

function addNewPizza(pizzaObj: Omit<MenuItem, "id">): MenuItem {
  const newPizzaObj = { id: menuId++, ...pizzaObj };
  menu.push(newPizzaObj);
  return newPizzaObj; 
}

addNewPizza({ name: "Margherita", price: 8 });
addNewPizza({ name: "Pepperoni", price: 10 });
addNewPizza({ name: "Hawaiian", price: 10 });
addNewPizza({ name: "Veggie", price: 9 });

function placeOrder(pizzaName: string): OrderItem {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (selectedPizza) {
    cashInRegister += selectedPizza.price;
    const newOrder: OrderItem = {
      id: nextOrderId++,
      pizza: selectedPizza,
      status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
  } else {
    throw new Error(`Pizza not found with this name ${pizzaName}`);
  }
}

function completeOrder(orderId: number): OrderItem {
  const order = orderQueue.find((order) => order.id === orderId);
  if (order) {
    order.status = "completed";
    return order;
  } else {
    throw new Error("Not Found");
  }
}

type IdentifierProp = string | number;

function getPizzaDetail(identifier: IdentifierProp): MenuItem {
  let pizzaDetail: MenuItem | undefined;

  if (typeof identifier === "number") {
    pizzaDetail = menu.find((menuItem) => menuItem.id === identifier);
  } else if (typeof identifier === "string") {
    pizzaDetail = menu.find(
      (menuItem) => menuItem.name.toLowerCase === identifier.toLowerCase
    );
  } else {
    throw new TypeError(
      "Parameter `identifier` must be either string or number"
    );
  }

  if (!pizzaDetail) {
    throw new Error(`Pizza not found with this Identifier ${identifier}`);
  }

  return pizzaDetail;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

module.exports = { getPizzaDetail };
