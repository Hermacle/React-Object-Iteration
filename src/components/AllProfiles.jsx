import usersData from "../data/usersData";

// Option 3: Afficher les profils de tous les utilisateurs avec leurs informations.
function AllProfiles() {
  return (
    <div>
      {Object.values(usersData).map((userData) => (
        <div key={userData.profile.id}>
          <h4>{userData.profile.author}</h4>
          <p>{userData.profile.userName} - {userData.profile.tags}</p>
        </div>
      ))}
    </div>
  )
}
export default AllProfiles;