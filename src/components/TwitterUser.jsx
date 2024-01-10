import usersData from "../data/usersData";

// Option 7: Afficher l'utilisateur "Twitter" avec son nombre de tweets.
function TwitterUser() {
  return (
    <div>
      <h4>{usersData.Twitter.profile.userName}</h4>
      <p>Nombre de tweets : {usersData.Twitter.tweets.length}</p>
    </div>
  )
}
export default TwitterUser;