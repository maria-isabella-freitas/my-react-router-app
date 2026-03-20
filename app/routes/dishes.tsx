import { useState } from "react";
import { Link } from "react-router";
import { fetchBreeds } from "../services/mealApi";

export async function clientLoader() {
  const data = await fetchDishes();
  return data;
}

const Dishes = ({ loaderData }) => {
  const dishes = loaderData;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = dishes.filter((dish) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      dish.name.toLowerCase().includes(searchLower) ||
      (dish.origin && dish.origin.toLowerCase().includes(searchLower)) ||
      dish.temperament.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      <h1>Cat Breed Directory</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search breeds by name, origin, or temperament..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div>
        {filteredBreeds.length === 0 ? (
          <p className="no-results">No breeds found matching your search.</p>
        ) : (
          filteredBreeds.map((breed) => (
            <Link
              to={`/breeds/${breed.id}`}
              key={breed.id}
              className="breed-card"
            >
              <h2>{breed.name}</h2>
              <p>
                <strong>Origin:</strong> {breed.origin}
              </p>
              <p>
                <strong>Temperament:</strong> {breed.temperament}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CatBreeds;
