import { useUserState } from "./userContext/UserContext";

function UserDetail() {
  const { selectedUser } = useUserState();

  return selectedUser && (
    <div className="user-detail">
      <h2>User Detail</h2>
      <p><strong>Name:</strong> {selectedUser?.name}</p>
      <p><strong>ID:</strong> {selectedUser?.id}</p>
    </div>
  );
}

export default UserDetail;
