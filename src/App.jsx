import React from 'react';
import AllTweets from './components/AllTweets';
import SpecificUser from './components/SpecificUser';
import AllProfiles from './components/AllProfiles';
import TweetsWithCriteria from './components/TweetsWithCriteria';
import UsersWithMostFollowers from './components/UsersWithMostFollowers';
import UsersWithMostTweets from './components/UsersWithMostTweets';
import TwitterUser from './components/TwitterUser';

function App() {
  return (
    <>
      <h1>React-Object-Iteration</h1>
      {/* Option 1: Afficher tous les tweets de tous les utilisateurs ensemble. */}
      <div>
        <h3>All Tweets</h3>
        <AllTweets />
      </div><hr />
      {/* Option 2: Afficher seulement les tweets d'un utilisateur spécifique avec son profil. */}
      <div>
        <h3>Specific User</h3>
        <SpecificUser />
      </div><hr />
      {/* Option 3: Afficher les profils de tous les utilisateurs avec leurs informations */}
      <div>
        <h3>All Profiles</h3>
        <AllProfiles />
      </div><hr />
      {/* Option 4: Afficher les tweets de tous les utilisateurs en fonction de critères spécifiques (par exemple, le nombre de likes, le nombre de commentaires, etc.). */}
      <div>
        <h3>Tweets With Criteria</h3>
        <TweetsWithCriteria />
      </div><hr />
      {/* Option 5: Afficher les utilisateurs avec le plus grand nombre de followers. */}
      <div>
        <h3>Users With Most Followers</h3>
        <UsersWithMostFollowers />
      </div><hr />
      {/* Option 6: Afficher les utilisateurs avec le plus grand nombre de tweets. */}
      <div>
        <h3>Users With Most Tweets</h3>
        <UsersWithMostTweets />
      </div><hr />
      {/* Option 7: Afficher l'utilisateur "Twitter" avec son nombre de tweets. */}
      <div>
        <h3>Twitter User</h3>
        <TwitterUser />
      </div> 
    </>
  );
}

export default App;