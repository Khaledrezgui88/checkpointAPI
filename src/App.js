// Importation des bibliothèques nécessaires
import React from 'react'; // Importation de la bibliothèque React pour créer des composants
import './App.css'; // Importation du fichier CSS pour styliser l'application
import UserList from './UserList'; // Importation du composant UserList pour l'utiliser dans l'application

// Déclaration du composant fonctionnel App
function App() {
  return ( // Rendu du composant App
    <div className="App"> {/* Conteneur principal de l'application avec une classe CSS */}
      <header className="App-header"> {/* En-tête de l'application avec une classe CSS */}
        <UserList /> {/* Inclusion du composant UserList pour afficher la liste des utilisateurs */}
      </header>
    </div>
  );
}

export default App; // Exportation du composant App pour qu'il soit accessible depuis d'autres fichiers
