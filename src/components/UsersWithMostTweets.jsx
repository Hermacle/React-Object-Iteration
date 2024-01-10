import usersData from "../data/usersData";

// Option 6: Afficher les utilisateurs avec le plus grand nombre de tweets.
function UsersWithMostTweets() {
  return (
    <div>
      {Object.entries(usersData).sort(([, a], [, b]) => b.tweets.length - a.tweets.length).map(([username, userData]) => (
        <div key={userData.profile.id}>
          <h4>{username}</h4>
          <p>Nombre de tweets : {userData.tweets.length}</p>
        </div>
      ))}
    </div>
  )
}
export default UsersWithMostTweets;