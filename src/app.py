# app.py
from flask import Flask, request, jsonify
from flask_mysql import MySQL
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
mysql = MySQL(app)


def get_db_connection():
    conn = mysql.connect()
    return conn


@app.route('/customers', methods=['GET'])
def get_customers():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers")
    customers = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(customers)

@app.route('/customers/<int:id>', methods=['GET'])
def get_customer(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM customers WHERE id = %s", (id,))
    customer = cursor.fetchone()
    cursor.close()
    conn.close()
    if customer:
        return jsonify(customer)
    else:
        return jsonify({"error": "Customer not found"}), 404

@app.route('/customers', methods=['POST'])
def create_customer():
    data = request.get_json()
    name = data['name']
    email = data['email']
    phone = data.get('phone')
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO customers (name, email, phone) VALUES (%s, %s, %s)", (name, email, phone))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Customer created"}), 201

@app.route('/customers/<int:id>', methods=['PUT'])
def update_customer(id):
    data = request.get_json()
    name = data['name']
    email = data['email']
    phone = data.get('phone')
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE customers SET name = %s, email = %s, phone = %s WHERE id = %s", (name, email, phone, id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Customer updated"}), 200

@app.route('/customers/<int:id>', methods=['DELETE'])
def delete_customer(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM customers WHERE id = %s", (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Customer deleted"}), 200


@app.route('/products', methods=['GET'])
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(products)

@app.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM products WHERE id = %s", (id,))
    product = cursor.fetchone()
    cursor.close()
    conn.close()
    if product:
        return jsonify(product)
    else:
        return jsonify({"error": "Product not found"}), 404

@app.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    name = data['name']
    price = data['price']
    stock = data.get('stock', 0)
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO products (name, price, stock) VALUES (%s, %s, %s)", (name, price, stock))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Product created"}), 201

@app.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    data = request.get_json()
    name = data['name']
    price = data['price']
    stock = data.get('stock', 0)
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE products SET name = %s, price = %s, stock = %s WHERE id = %s", (name, price, stock, id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Product updated"}), 200

@app.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM products WHERE id = %s", (id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Product deleted"}), 200


@app.route('/orders', methods=['GET'])
def get_orders():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders")
    orders = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(orders)

@app.route('/orders/<int:id>', methods=['GET'])
def get_order(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM orders WHERE id = %s", (id,))
    order = cursor.fetchone()
    cursor.close()
    conn.close()
    if order:
        return jsonify(order)
    else:
        return jsonify({"error": "Order not found"}), 404

@app.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    customer_id = data['customer_id']
    order_items = data['items']  
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO orders (customer_id) VALUES (%s)", (customer_id,))
    order_id = cursor.lastrowid
    for item in order_items:
        cursor.execute("INSERT INTO order_items (order_id, product_id, quantity) VALUES (%s, %s, %s)",
                       (order_id, item['product_id'], item['quantity']))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Order created"}), 201

# Add more routes as needed...

if __name__ == '__main__':
    app.run(debug=True)
