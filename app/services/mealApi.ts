/**
 * MealDB API service functions
 * Free API for food recipes and meals by country
 */

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export interface Country {
  strArea: string;
}

export interface Dish {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strMeasure16?: string;
  strMeasure17?: string;
  strMeasure18?: string;
  strMeasure19?: string;
  strMeasure20?: string;
  [key: string]: string | null | undefined;
}

/**
 * Fetch all available countries/areas
 */
export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/list.php?a=list`);

    if (!response.ok) throw new Error("Failed to fetch countries");

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

/**
 * Fetch dishes by country/area
 */
export const fetchDishesByCountry = async (country: string): Promise<Dish[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/filter.php?a=${encodeURIComponent(country)}`);

    if (!response.ok) throw new Error("Failed to fetch dishes");

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching dishes:", error);
    throw error;
  }
};

/**
 * Fetch full recipe details by meal ID
 */
export const fetchRecipeById = async (mealId: string): Promise<Recipe> => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${encodeURIComponent(mealId)}`);

    if (!response.ok) throw new Error("Failed to fetch recipe");

    const data = await response.json();

    if (!data.meals || data.meals.length === 0) {
      throw new Error("Recipe not found");
    }

    return data.meals[0];
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

/**
 * Helper function to parse ingredients from a recipe object
 */
export const parseIngredients = (recipe: Recipe): Array<{ ingredient: string; measure: string }> => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return ingredients;
};
