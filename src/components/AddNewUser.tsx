import React, { useState } from 'react';

type NewUser = {
  name: string;
  email: string;
  companyName: string;
};

type Props = {
  onAddUser: (user: NewUser) => void;
};

const AddNewUser: React.FC<Props> = ({ onAddUser }) => {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    email: '',
    companyName: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, companyName } = formData;

    if (!name || !email || !companyName) {
      alert('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    onAddUser(formData); // Call parent to add user
    setSuccessMessage('✅ User added successfully!');
    setFormData({ name: '', email: '', companyName: '' });

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '1rem',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '500px',
        margin: '2rem auto 0',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems:'center'
      }}
    >
      <h2>Add New User</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          padding: '0.75rem',
          backgroundColor: '#00c851',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Add
      </button>

      {successMessage && (
        <p style={{ color: '#00ffb3', fontStyle: 'italic', marginTop: '0.5rem' }}>
          {successMessage}
        </p>
      )}
    </form>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '0.75rem',
  borderRadius: '6px',
  border: 'none',
  fontSize: '1rem',
  width:'15vw'
};

export default AddNewUser;
