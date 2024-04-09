function UserDetail({ user }) {
  return (
    <div className="user-detail">
      <h2>User Detail</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>ID:</strong> {user.id}</p>
    </div>
  );
}

export default UserDetail;
