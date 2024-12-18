const UserTable = ({ users, setSelectedUser, setUpdatedProfile }) => {
    return (
      <table className="min-w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Roles</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId} className="text-center">
              <td className="p-2 border">{user.userId}</td>
              <td className="p-2 border">{user.firstName} {user.lastName}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.roles.join(', ')}</td>
              <td className="p-2 border">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setUpdatedProfile({
                      firstName: user.firstName,
                      lastName: user.lastName,
                      profilePictureUrl: user.profilePictureUrl,
                    });
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;
  