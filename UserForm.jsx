function UserForm({ onAddUser }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    if (!name) return;
    
    onAddUser({ id: Date.now(), name });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" className="input" />
      <button type="submit" className="button">Add User</button>
    </form>
  );
}

export default UserForm;
