function UserList({ users, onSelectUser, onDeleteUser }) {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul style={{ display: "flex", flexDirection: "column", gap: ".5rem"}}>
        {users.map(user => (
          <li key={user.id} style={{ display: "flex", gap: ".5rem"}}>
            <span style={{cursor: "pointer"}} onClick={() => onSelectUser(user.id)} className="user-name">{user.name}</span>
            <button onClick={() => onDeleteUser(user.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
