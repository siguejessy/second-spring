import sendRequest from './send-request';

const BASE_URL = "/api/products";

export async function index() {
  try {
    return sendRequest(BASE_URL);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw new Error("Failed to fetch products");
  }
}

export async function display() {
  try {
    return sendRequest(`${BASE_URL}/product`);
  } catch (error) {
    console.error("Error displaying product:", error.message);
    throw new Error("Failed to display product");
  }
}

export async function createProduct(product) {
  try {
    return sendRequest(`${BASE_URL}/new`, "POST", product);
  } catch (error) {
    console.error("Error creating product:", error.message);
    throw new Error("Failed to create product");
  }
}

export async function deleteProduct(productId) {
  try {
    return sendRequest(`${BASE_URL}/${productId}`, "DELETE");
  } catch (error) {
    console.error("Error deleting product:", error.message);
    throw new Error("Failed to delete product");
  }
}

export async function updateProduct(product) {
  try {
    console.log(product, "api");
    return sendRequest(`${BASE_URL}/${product.id}`, "PUT", product);
  } catch (error) {
    console.error("Error updating product:", error.message);
    throw new Error("Failed to update product");
  }
}
