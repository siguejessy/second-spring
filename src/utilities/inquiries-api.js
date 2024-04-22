import sendRequest from './send-request';

export async function createInquiry(inquiryData) {
  return await sendRequest('/api/inquiries', 'POST', inquiryData);
}

export async function getAllForUser() {
  try {
    const response = await sendRequest('/api/inquiries');
    return response;
  } catch (error) {
    console.error('Error fetching inquiries for user:', error.message);
    throw new Error('Failed to fetch inquiries for user');
  }
}

export async function getAllForAdmin() {
  try {
    const response = await sendRequest('/api/admin/inquiries');
    return response;
  } catch (error) {
    console.error('Error fetching inquiries for admin:', error.message);
    throw new Error('Failed to fetch inquiries for admin');
  }
}
