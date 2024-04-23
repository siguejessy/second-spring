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

export async function addCategory(categoryName) {
  try {
    const response = await sendRequest('/api/categories', 'POST', { name: categoryName });
    return response;
  } catch (error) {
    console.error('Error adding category:', error.message);
    throw new Error('Failed to add category');
  }
}

export async function updateCategory(categoryId, categoryName) {
  try {
    const response = await sendRequest(`/api/categories/${categoryId}`, 'PUT', { name: categoryName });
    return response;
  } catch (error) {
    console.error(`Error updating category with ID ${categoryId}:`, error.message);
    throw new Error(`Failed to update category with ID ${categoryId}`);
  }
}

export async function deleteCategory(categoryId) {
  try {
    const response = await sendRequest(`/api/categories/${categoryId}`, 'DELETE');
    return response;
  } catch (error) {
    console.error(`Error deleting category with ID ${categoryId}:`, error.message);
    throw new Error(`Failed to delete category with ID ${categoryId}`);
  }
}

export async function addSubCategory(subCategoryName, categoryId) {
  try {
    const response = await sendRequest('/api/subcategories', 'POST', { name: subCategoryName, category: categoryId });
    return response;
  } catch (error) {
    console.error('Error adding sub-category:', error.message);
    throw new Error('Failed to add sub-category');
  }
}

export async function updateSubCategory(subCategoryId, subCategoryName) {
  try {
    const response = await sendRequest(`/api/subcategories/${subCategoryId}`, 'PUT', { name: subCategoryName });
    return response;
  } catch (error) {
    console.error(`Error updating sub-category with ID ${subCategoryId}:`, error.message);
    throw new Error(`Failed to update sub-category with ID ${subCategoryId}`);
  }
}

export async function deleteSubCategory(subCategoryId) {
  try {
    const response = await sendRequest(`/api/subcategories/${subCategoryId}`, 'DELETE');
    return response;
  } catch (error) {
    console.error(`Error deleting sub-category with ID ${subCategoryId}:`, error.message);
    throw new Error(`Failed to delete sub-category with ID ${subCategoryId}`);
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