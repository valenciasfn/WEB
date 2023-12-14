<?php

namespace app\Models;

include "app/Config/DatabaseConfig.php";

use app\Config\DatabaseConfig;
use mysqli;

class Product extends DatabaseConfig
{
    public $conn;

    public function __construct()
    {
        // CONNECT KE DATABASE MYSQL
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // PROSES MENAMPILKAN SEMUA DATA
    public function findAll()
    {
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];

        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    // PROSES MENAMPILAN DATA DENGAN ID
    public function findById($id)
    {
        $sql = "SELECT * FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    // PROSES INSERT DATA
    public function create($data)
    {
        $productName = $data['product_name'];
        $idCategory = $data['id_category'];
    
        $query = "INSERT INTO products (product_name, id_category) VALUES (?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("si", $productName, $idCategory);
        $stmt->execute();
        $stmt->close();
    }
    
    // PROSES UPDATE DATA DENGAN ID
    public function update($data, $id)
    {
        $productName = $data['product_name'];
        $categoryId = $data['id_category'];
    
        $query = "UPDATE products SET product_name = ?, id_category = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
    
        if ($stmt && $stmt->bind_param("sii", $productName, $categoryId, $id) && $stmt->execute() && $stmt->affected_rows > 0) {

        }
    
        $stmt->close();
        $this->conn->close();
    }
    
    // PROSES DELETE DATA DENGAN ID
    public function destroy($id)
    {
        $query = "DELETE FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        // huruf "i" berarti parameter pertama adalah integer
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }

    public function findAllWithCategories()
{
    $sql = "SELECT products.*, categories.category
    FROM products
    INNER JOIN categories ON products.id_category = categories.id_category";

    $result = $this->conn->query($sql);
    $this->conn->close();
    $data = [];

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    return $data;
}

}