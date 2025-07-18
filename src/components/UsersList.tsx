import React from 'react';
import { Circles } from 'react-loader-spinner';

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

type Props = {
  users: User[];
  loading: boolean;
};

const UsersList: React.FC<Props> = ({ users, loading }) => {
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <Circles color="white" height={50} width={50} />
      </div>
    );
  }

  if (!users.length) {
    return (
      <p style={{ color: 'white', padding: '1rem', textAlign: 'center' }}>
        No users found.
      </p>
    );
  }

  return (
    <div
      style={{
        marginTop: '1rem',
        overflowX: 'auto',
        width: '100%',
        maxWidth: '1200px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '1rem',
        borderRadius: '10px',
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          color: 'white',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.75rem',
  fontWeight: 'bold',
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem',
};

export default UsersList;
