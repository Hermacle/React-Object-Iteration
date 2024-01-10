import React from 'react';
import AllTweets from './components/AllTweets';
import SpecificUser from './components/SpecificUser';
import AllProfiles from './components/AllProfiles';

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
    </>
  );
}

export default App;