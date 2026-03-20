import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    // route("/", "routes/countries.tsx", [
    //     index("routes/countries-index.tsx"),
    //     route(":countryId", "routes/dishes.tsx"),
    //     route(":countryId/dishes/:dishId", "routes/dish.tsx")
    // ])
] satisfies RouteConfig;
