const testDatabase = async () => {
    try {
      // Create a new customer
      const newCustomer = await Customer.create({
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
      });
  
      console.log("Customer created:", newCustomer);
  
      // Create a new product
      const newProduct = await Product.create({
        product_name: "Laptop",
        product_description: "15-inch laptop",
        price: 999.99,
        stock_quantity: 10,
      });
  
      console.log("Product created:", newProduct);
  
      // Create a new order
      const newOrder = await Order.create({
        customer_id: newCustomer.customer_id,
        total_amount: 1599.98,
        order_status: "Shipped",
      });
  
      console.log("Order created:", newOrder);
  
      // Add items to the order
      await OrderItem.create({
        order_id: newOrder.order_id,
        product_id: newProduct.product_id,
        quantity: 1,
        price: 999.99,
      });
  
      console.log("OrderItem created.");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  testDatabase();
  