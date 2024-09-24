// Importation des fonctions nécessaires depuis la bibliothèque de tests
import { render, screen } from '@testing-library/react'; // Importation de la fonction render et de l'objet screen pour effectuer des tests
import App from './App'; // Importation du composant App à tester

// Déclaration d'un test avec la fonction test
test('renders learn react link', () => {
  render(<App />); // Rendu du composant App dans le DOM pour le test
  const linkElement = screen.getByText(/learn react/i); // Recherche un élément dans le DOM contenant le texte "learn react" (insensible à la casse)
  expect(linkElement).toBeInTheDocument(); // Vérification que l'élément trouvé est présent dans le document
});

