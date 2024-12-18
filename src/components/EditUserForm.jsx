const EditUserForm = ({
    updatedProfile,
    setUpdatedProfile,
    handleUpdateProfile,
    setSelectedUser,
  }) => {
    return (
      <div className="border p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Edit User</h2>
        <input
          type="text"
          placeholder="First Name"
          value={updatedProfile.firstName}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, firstName: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={updatedProfile.lastName}
          onChange={(e) =>
            setUpdatedProfile({ ...updatedProfile, lastName: e.target.value })
          }
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Profile Picture URL"
          value={updatedProfile.profilePictureUrl}
          onChange={(e) =>
            setUpdatedProfile({
              ...updatedProfile,
              profilePictureUrl: e.target.value,
            })
          }
          className="border p-2 mb-5 w-full"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleUpdateProfile}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => setSelectedUser(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };
  
  export default EditUserForm;
  