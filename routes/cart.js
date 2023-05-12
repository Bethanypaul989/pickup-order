// check if there are any items in the cart
if (empty($_SESSION['cart'])) {
  //If there are no items in the cart, CREATE NEW ORDER
  $sql = "INSERT INTO Orders (customer_id) VALUES ('$customer_id')";
  $result = mysqli_query($connection, $sql);
  //Get the order ID of the newly created order
  $order_id = mysqli_insert_id($connection);
} else {
  //If there are items in the cart, USE EXISTING ID
  $order_id = $_SESSION['order_id'];
}


//Loop through each item in the cart & add it to the shopping cart table
foreach($_SESSION['cart'] as $item) {
  $food_id = $item['food_id'];
  $quantity = $item['quantity'];
  //Add the food item to the shopping cart table and reference the order (ID)
  $sql = "INSERT INTO Shopping_cart (order_id, food_id, quantity) VALUES ('$order_id', '$food_id', '$quantity')";
  $result = mysqli_query($connection, $sql);
}

// First, check if there are any items in the cart for the logged in user
$sql = "SELECT * FROM Shopping_cart WHERE customer_id = '$customer_id'";
$result = mysqli_query($connection, $sql);

