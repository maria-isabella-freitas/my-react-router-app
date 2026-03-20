import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    // route(":countryId", "routes/country.tsx"),
    // route("/", "routes/countries.tsx", [
    //     index("routes/countries-index.tsx"),
    //     route(":countryId/dishes/:dishId", "routes/dish.tsx")
    // ])
] satisfies RouteConfig;
