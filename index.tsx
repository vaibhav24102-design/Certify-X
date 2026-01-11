import React, { useState } from "react";

const IndexPage: React.FC = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    supervisorName: "",
    startDate: "",
    endDate: "",
    focusedOn: "",
    contributedTowards: "",
  });

  const supervisors = [
    "Dr. Abhishek Sharma",
    "Dr. Amit Kumar Agrawal",
    "Dr. Anurag Singh",
    "Dr. Aruna Shukla",
    "Dr. Avantika Singh",
    "Dr. Bipin Chandra Mandi",
    "Dr. Chandra Shekhar Nishad",
    "Dr. Deepika Gupta",
    "Dr. Kavita Jaiswal",
    "Dr. Krishanand Vishwakarma",
    "Dr. Kumar Gaurav Atram",
    "Dr. Lakhindar Murmu",
    "Dr. Maifuz Ali",
    "Dr. Mallikarjun Rao K",
    "Dr. Manoj Kumar Majumder",
    "Dr. Mithilesh Kumar Chaube",
    "Dr. Punya Prasanna Paltani",
    "Dr. Rajarshi Mahapatra",
    "Dr. Ramkrishna Bandi",
    "Dr. Ruhul Amin",
    "Dr. Sachchida Nand Mishra",
    "Dr. Santosh Kumar",
    "Dr. Satyanarayan Vollala",
    "Dr. Shailesh Khapre",
    "Dr. Shashi Tiwari",
    "Dr. Shrivishal Tripathi",
    "Dr. Sresha Yadav",
    "Dr. Srinivasa K. G.",
    "Dr. Vijaya J",
    "Dr. Vinay Kumar"
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Details saved successfully!");
  };

  return (
    <div style={styles.page}>
      {/* IIIT Logo */}
      <img
src="data:image/jpeg;base64,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"
alt="IIIT Naya Raipur Logo"
        style={styles.logo}
      />

      {/* Form Box */}
      <div style={styles.container}>
        <h2 style={styles.header}>
          Provide your correct details for the certificate generation
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* STUDENT ID */}
          <label style={styles.label}>STUDENT ID</label>
          <input
            type="text"
            name="studentId"
            placeholder="Enter your provided ID"
            value={formData.studentId}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* STUDENT NAME */}
          <label style={styles.label}>STUDENT NAME</label>
          <input
            type="text"
            name="studentName"
            placeholder="Enter your full name"
            value={formData.studentName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* SUPERVISOR NAME */}
          <label style={styles.label}>SUPERVISOR NAME</label>
          <select
            name="supervisorName"
            value={formData.supervisorName}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Supervisor</option>
            {supervisors.map((sup, index) => (
              <option key={index} value={sup}>
                {sup}
              </option>
            ))}
          </select>

          {/* START DATE */}
          <label style={styles.label}>INTERNSHIP STARTING DATE</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* END DATE */}
          <label style={styles.label}>INTERNSHIP ENDING DATE</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {/* FOCUSED ON */}
          <label style={styles.label}>FOCUSED ON</label>
          <textarea
            name="focusedOn"
            placeholder="In which field you have focused !!"
            value={formData.focusedOn}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          {/* CONTRIBUTED TOWARDS */}
          <label style={styles.label}>CONTRIBUTED TOWARDS</label>
          <textarea
            name="contributedTowards"
            placeholder="Towards which you have given your contribution !!"
            value={formData.contributedTowards}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.submitButton}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
    position: "relative",
    paddingTop: "40px",
    fontFamily: "Arial, sans-serif",
    overflowY:"scroll"
  },
  logo: {
    position: "absolute",
    top: "20px",
    right: "120px",
    width: "200px",
  },
  container: {
    width: "100%",
    maxWidth: "650px",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    margin: "80px auto 0",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "31px",
    fontWeight: "bold",
    color:"maroon"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "22px",
    fontWeight: "bold",
marginTop:"20px"  },
  input: {
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "30px",
  },
  submitButton: {
    marginTop: "15px",
    padding: "12px",
    fontSize: "15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
};

export default IndexPage;
