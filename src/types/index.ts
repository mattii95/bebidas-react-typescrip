import { z } from "zod";
import { CategoriesAPIResponseSchema, SearchFilterSchema, DrinksAPIResponseSchema, DrinkAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIResponseSchema>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>