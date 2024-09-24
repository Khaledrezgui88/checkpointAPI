// Importation des bibliothèques nécessaires
import React from 'react'; // Importation de la bibliothèque React pour créer des composants
import ReactDOM from 'react-dom/client'; // Importation de ReactDOM pour gérer le rendu des composants dans le DOM
import './index.css'; // Importation du fichier CSS pour styliser l'application
import App from './App'; // Importation du composant App, qui est le point d'entrée de l'application
import reportWebVitals from './reportWebVitals'; // Importation de la fonction pour mesurer les performances de l'application

// Création de la racine du DOM à l'aide de ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Obtention de l'élément avec l'ID 'root' pour y attacher l'application

// Rendu de l'application dans la racine du DOM
root.render(
  <React.StrictMode> {/* Mode strict qui active des vérifications supplémentaires pour les composants */}
    <App /> {/* Rendu du composant App */}
  </React.StrictMode>
);

// Commentaire sur la fonction de mesure de performance
// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour consigner les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analytique. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals(); // Appel de la fonction pour démarrer la mesure des performances

