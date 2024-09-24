// src/UserList.js
import React, { useEffect, useState } from 'react'; // Importation des hooks React
import axios from 'axios'; // Importation de la bibliothèque Axios pour les requêtes HTTP

const UserList = () => { // Déclaration du composant fonctionnel UserList
  // Déclaration des états pour stocker la liste des utilisateurs, le chargement et les erreurs
  const [listOfUsers, setListOfUsers] = useState([]); // État pour stocker la liste des utilisateurs
  const [loading, setLoading] = useState(true); // État pour suivre le statut de chargement
  const [error, setError] = useState(null); // État pour stocker les erreurs

  useEffect(() => { // Hook useEffect pour effectuer une action lors du rendu du composant
    const fetchUsers = async () => { // Déclaration d'une fonction asynchrone pour récupérer les utilisateurs
      try {
        // Envoi d'une requête GET à l'API JSONPlaceholder pour récupérer les utilisateurs
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data); // Mise à jour de l'état avec les données reçues
      } catch (error) {
        setError(error); // En cas d'erreur, mise à jour de l'état avec l'erreur
      } finally {
        setLoading(false); // Changement du statut de chargement à faux, qu'il y ait une erreur ou non
      }
    };

    fetchUsers(); // Appel de la fonction pour récupérer les utilisateurs
  }, []); // Le tableau vide [] signifie que useEffect s'exécute une seule fois après le premier rendu

  // Affichage d'un message de chargement si loading est vrai
  if (loading) return <p>Chargement...</p>;
  // Affichage d'un message d'erreur si une erreur s'est produite
  if (error) return <p>Erreur : {error.message}</p>;

  return ( // Rendu du composant
    <div>
      <h1>Liste des Utilisateurs</h1> {/* Titre de la liste des utilisateurs */}
      <ul>
        {listOfUsers.map(user => ( // Itération sur la liste des utilisateurs
          <li key={user.id}> {/* Utilisation de l'ID de l'utilisateur comme clé unique */}
            <strong>{user.name}</strong> - {user.email} {/* Affichage du nom et de l'email de l'utilisateur */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; // Exportation du composant UserList pour l'utiliser dans d'autres fichiers
