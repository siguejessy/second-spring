import sendRequest from './send-request';

export async function getAllCategories() {
  try {
    const response = await sendRequest('/api/categories');
    return response;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    throw new Error('Failed to fetch categories');
  }
}

export async function getCategoryById(categoryId) {
  try {
    const response = await sendRequest(`/api/categories/${categoryId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching category with ID ${categoryId}:`, error.message);
    throw new Error(`Failed to fetch category with ID ${categoryId}`);
  }
}

export async function getCategoryByName(categoryName) {
  try {
    const response = await sendRequest(`/api/categories/name/${categoryName}`);
    return response;
  } catch (error) {
    console.error(`Error fetching category with name ${categoryName}:`, error.message);
    throw new Error(`Failed to fetch category with name ${categoryName}`);
  }
}

export async function getSubCategoriesByCategoryId(categoryId) {
  try {
    const response = await sendRequest(`/api/categories/${categoryId}/subcategories`);
    return response;
  } catch (error) {
    console.error(`Error fetching sub-categories for category with ID ${categoryId}:`, error.message);
    throw new Error(`Failed to fetch sub-categories for category with ID ${categoryId}`);
  }
}

export async function getAllTags() {
  try {
    const response = await sendRequest('/api/tags');
    return response;
  } catch (error) {
    console.error('Error fetching tags:', error.message);
    throw new Error('Failed to fetch tags');
  }
}