import type { Route } from "./+types/countries";
import { Link } from "react-router";


export async function clientLoader({
    params,
}: Route.ClientLoaderArgs) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.countryId}`);
    const data = await res.json();
    const dishes = data.meals || [];
    return dishes;
}


export default function localDishes({
    loaderData,
    params,
}: Route.ComponentProps) {


    return (
        <section>
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                {params.countryId} Meals
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {loaderData.map(country => (
            <article>
                <img src={country.strMealThumb} alt={country.strMeal} />
                <h2>{country.strMeal}</h2>
                <Link key={country.idMeal} to={`/countries/${country.idMeal}`}>
                    Go to Recipe
                </Link>
            </article>
            ))}
        </div>
        </section>
    )

}
