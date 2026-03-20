import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Recipe Explorer - Discover World Cuisines" },
    { name: "description", content: "Explore delicious recipes from around the world" },
  ];
}


export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  const data = await res.json();
  const countries = data.meals || [];
  return countries;
}


export default function Home({
  loaderData,
}: Route.ComponentProps) {
  console.log("Home loader data:", loaderData);


  return (
    <div>
      {loaderData.map(country => (
        <Link key={country.strArea} to={`/countries/${country.strArea}`}>
          <div>{country.strArea}</div>
        </Link>
      ))}
    </div>
  );
}
