/**
 * Cat API service functions
 * Centralizes all API calls to the cat API
 */

// Base URL for the cat API
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

/**
 * Fetch dishes by countries 
 * @param {Object} options - Query parameters
 * @param {number} options.limit - Number of images to fetch
 * @param {string} options.breed_ids - Breed ID to filter by
 * @param {boolean} options.has_breeds - Only return images with breed info
 * @returns {Promise<Array>} - Array of cat image objects
 */


/**
 * Fetch all dishes
 * @returns {Promise<Array>} - Array of dish objects
 */
export const fetchDishes = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/dishes`, {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        });

        if (!response.ok) throw new Error("Failed to fetch dishes");
        return await response.json();
    } catch (error) {
        console.error("Error fetching dishes:", error);
        throw error;
    }
};

/**
 * Fetch details for a specific dish
 * @param {string} dishId - ID of the dish to fetch
 * @returns {Promise<Object>} - Dish details object
 */
export const fetchDishDetails = async (dishId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/dishes/${dishId}`, {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        });

        if (!response.ok) throw new Error("Dish not found");
        return await response.json();
    } catch (error) {
        console.error("Error fetching dish details:", error);
        throw error;
    }
};

/**
 * Fetch details for a specific image
 * @param {string} imageId - ID of the image to fetch
 * @returns {Promise<Object>} - Image details object
 */
export const fetchImageDetails = async (imageId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/images/${imageId}`, {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        });

        if (!response.ok) throw new Error("Image not found");
        return await response.json();
    } catch (error) {
        console.error("Error fetching image details:", error);
        throw error;
    }
};

/**
 * Favorites management functions
 */

/**
 * Fetch all favorites from the API
 * @returns {Promise<Array>} - Array of favorite objects
 */
export const fetchFavorites = async () => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/favourites?sub_id=${import.meta.env.VITE_USER_ID}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": import.meta.env.VITE_API_KEY,
                },
            }
        );
        if (!response.ok) throw new Error("Failed to fetch favourites");
        return await response.json();
    } catch (error) {
        console.error("Error fetching favourites:", error);
        throw error;
    }
};

/**
 * Add a cat to favorites
 * @param {string} imageId - ID of the cat image to add to favorites
 * @returns {Promise<Object>} - Response from the API
 */
export const addToFavorites = async (imageId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/favourites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": import.meta.env.VITE_API_KEY,
            },
            body: JSON.stringify({
                image_id: imageId,
                sub_id: import.meta.env.VITE_USER_ID,
            }),
        });
        if (!response.ok) throw new Error("Failed to add favorite");
        return await response.json();
    } catch (error) {
        console.error("Error adding favorite:", error);
        throw error;
    }
};

/**
 * Remove a cat from favorites
 * @param {string} favouriteId - ID of the favorite to remove
 * @returns {Promise<Response>} - Response from the API
 */
export const removeFromFavorites = async (favouriteId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/favourites/${favouriteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": import.meta.env.VITE_API_KEY,
            },
        });
        if (!response.ok) throw new Error("Failed to remove favorite");
        return response;
    } catch (error) {
        console.error("Error removing favorite:", error);
        throw error;
    }
};
