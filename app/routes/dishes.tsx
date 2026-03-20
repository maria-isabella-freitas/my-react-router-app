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
      <h1>Dishes</h1>
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredDishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Dishes;
