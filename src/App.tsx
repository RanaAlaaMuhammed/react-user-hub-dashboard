import React, { useState, useEffect } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import AddNewUser from './components/AddNewUser';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Background from './components/Background';

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false); // stop loading after data is fetched
      });
  }, []);

  const handleAddUser = (newUser: { name: string; email: string; companyName: string }) => {
    const newId = users.length + 1;
    const user: User = {
      id: newId,
      name: newUser.name,
      email: newUser.email,
      company: { name: newUser.companyName },
    };
    const updatedUsers = [user, ...users];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim().toLowerCase();
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(trimmedTerm)
    );
    setFilteredUsers(results);
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1, padding: '2rem', color: 'white' }}>
        <Header />
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
          onReset={handleReset}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <UsersList users={filteredUsers} loading={loading} />
          <AddNewUser onAddUser={handleAddUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
