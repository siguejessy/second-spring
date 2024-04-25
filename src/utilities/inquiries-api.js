import sendRequest from './send-request'; // Import the sendRequest function

const BASE_URL = "/api/inquiries";

const sendInquiry = async (inquiryData) => {
  try {
    const response = await sendRequest(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    if (!response.ok) {
      throw new Error('Failed to send inquiry');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to send inquiry. Please try again.');
  }
};

const getInquiries = async () => {
  try {
    const response = await sendRequest(BASE_URL, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch inquiries');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Failed to fetch inquiries. Please try again.');
  }
};





export { sendInquiry, getInquiries };
