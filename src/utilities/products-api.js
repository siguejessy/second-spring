import sendRequest from './send-request';

export async function getAll() {
  try {
    const response = await sendRequest('/api/products');
    return response;
  } catch (error) {
    console.error('Error fetching all products:', error.message);
    throw new Error('Failed to fetch all products');
  }
}

export async function getProductById(productId) {
  try {
    const response = await sendRequest(`/api/products/${productId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error.message);
    throw new Error(`Failed to fetch product with ID ${productId}`);
  }
}

export async function getProductByName(productName) {
  try {
    const response = await sendRequest(`/api/products?name=${productName}`);
    return response;
  } catch (error) {
    console.error(`Error fetching product with name ${productName}:`, error.message);
    throw new Error(`Failed to fetch product with name ${productName}`);
  }
}

export async function createProduct(productData) {
  try {
    const response = await sendRequest('/api/products', 'POST', productData);
    return response;
  } catch (error) {
    console.error('Error creating product:', error.message);
    throw new Error('Failed to create product');
  }
}

export async function updateProduct(productId, productData) {
  try {
    const response = await sendRequest(`/api/products/${productId}`, 'PUT', productData);
    return response;
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error.message);
    throw new Error(`Failed to update product with ID ${productId}`);
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await sendRequest(`/api/products/${productId}`, 'DELETE');
    return response;
  } catch (error) {
    console.error(`Error deleting product with ID ${productId}:`, error.message);
    throw new Error(`Failed to delete product with ID ${productId}`);
  }
}


export async function getAdminProducts() {
  try {
    const response = await sendRequest('/api/products/admin');
    return response;
  } catch (error) {
    console.error('Error fetching admin products:', error.message);
    throw new Error('Failed to fetch admin products');
  }
}