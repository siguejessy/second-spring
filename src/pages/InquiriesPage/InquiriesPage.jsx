import React, { useState, useEffect } from 'react';
import * as inquiriesAPI from '../../utilities/inquiries-api';
import Inquiry from '../../components/Inquiry/Inquiry';
import './InquiriesPage.css';

const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    async function fetchInquiries() {
      try {
        const fetchedInquiries = await inquiriesAPI.getAllForAdmin();
        setInquiries(fetchedInquiries);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    }

    fetchInquiries();
  }, []);

  return (
    <div className="inquiries-page">
      <h2>Inquiries</h2>
      <div className="inquiries-list">
        {inquiries.map((inquiry) => (
          <Inquiry key={inquiry._id} inquiry={inquiry} />
        ))}
      </div>
    </div>
  );
};

export default InquiriesPage;