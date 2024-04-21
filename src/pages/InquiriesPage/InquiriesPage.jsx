import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./InquiriesPage.css";
import { getUser } from "../../utilities/users-service";
import * as inquiriesAPI from "../../utilities/inquiries-api";
import Inquiry from "../../components/Inquiry/Inquiry";

export default function InquiriesPage({ user, setUser }) {
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const handleFilter = (category) => {
    setFilteredInquiries(inquiries.filter((inquiry) => inquiry.category === category));
  };

  return (
    <main className="InquiriesPage">
      <aside>
        <h1>INQUIRIES</h1>
          inquiries={filteredInquiries}
          handleFilter={handleFilter}
      </aside>
      <Inquiry inquiries={filteredInquiries} />

    </main>
  );
}