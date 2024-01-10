import usersData from "../data/usersData";

// Option 2: Afficher seulement les tweets d'un utilisateur spécifique avec son profil.
function SpecificUser() {
  return (
    <div>
      {usersData.Twitter.profile.userName}
      {usersData.Twitter.tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
        </div>
      ))}
    </div>
  );
}
export default SpecificUser;