import React, { useState, useEffect } from 'react';
import { getInquiries } from '../../utilities/inquiries-api';
import * as Inquiry from '../../components/CardInquiry/CardInquiry';

const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const data = await getInquiries();
        setInquiries(data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <div>
      <h2>Inquiries</h2>
      {inquiries.map((inquiry) => (
        <Inquiry key={inquiry._id} inquiry={inquiry} />
      ))}
    </div>
  );
};

export default InquiriesPage;