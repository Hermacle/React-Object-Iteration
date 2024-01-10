import usersData from "../data/usersData";

// Option 1: Afficher tous les tweets de tous les utilisateurs ensemble.
function AllTweets(){
 return (
    <div>
      {Object.values(usersData).map((userData) => (
        <div key={userData.profile.id}>
          {userData.tweets.map((tweet) => (
            <div key={tweet.id}>
              <p>{tweet.text}</p>
              <p>Comment : {tweet.commentCount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default AllTweets;