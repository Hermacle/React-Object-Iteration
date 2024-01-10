import usersData from "../data/usersData";

// Option 5: Afficher les utilisateurs avec le plus grand nombre de followers.
function UsersWithMostFollowers() {
  return (
    <div>
      {Object.entries(usersData).sort(([, a], [, b]) => b.profile.followers - a.profile.followers).map(([username, userData]) => (
        <div key={userData.profile.id}>
          <h4>{username}</h4>
          <p>Nombre de followers : {userData.profile.followers}</p>
        </div>
      ))}
    </div>
  )
}
export default UsersWithMostFollowers;