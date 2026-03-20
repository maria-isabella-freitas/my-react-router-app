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
            <h1>{params.countryId} Meals</h1>
        
        {loaderData.map(country => (
            <article>
                <img src={country.strMealThumb} alt={country.strMeal} />
                <h2>{country.strMeal}</h2>
                <Link key={country.idMeal} to={`/countries/${country.idMeal}`}>
                    View Details
                </Link>
            </article>
            ))}
        </section>
    )

}
