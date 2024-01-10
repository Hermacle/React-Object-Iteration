import usersData from "../data/usersData";

// Option 4: Afficher les tweets de tous les utilisateurs en fonction de critères spécifiques (par exemple, le nombre de likes, le nombre de commentaires, etc.).
function TweetsWithCriteria() {
  return (
    <div>
      <i>Tweets en fonction de critères spécifiques</i>
      {Object.values(usersData).map((userData) => (
        <div key={userData.profile.id}>
          <h4>{userData.profile.userName}</h4>
          {userData.tweets.filter((tweet) => tweet.likeCount > 100).map((tweet) => (
            <div key={tweet.id}>
              <p>{tweet.text}</p>
              <p>Nombre de likes : {tweet.likeCount}</p>
              <p>Nombre de commentaires : {tweet.commentCount}</p>
            </div> 
          ))} -------------
        </div>
      ))}
    </div>
  )
}
export default TweetsWithCriteria;