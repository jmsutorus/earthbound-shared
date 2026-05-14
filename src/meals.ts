// Shared types for meals and grocery features
// This file contains only types and constants that can be used in both client and server components

export type IngredientCategory =
    | "produce"
    | "dairy"
    | "meat"
    | "pantry"
    | "frozen"
    | "bakery"
    | "beverages"
    | "other";

export const INGREDIENT_CATEGORIES: IngredientCategory[] = [
    "produce",
    "dairy",
    "meat",
    "pantry",
    "frozen",
    "bakery",
    "beverages",
    "other",
];

export const CATEGORY_DISPLAY_NAMES: Record<IngredientCategory, string> = {
    produce: "Produce",
    dairy: "Dairy",
    meat: "Meat & Seafood",
    pantry: "Pantry",
    frozen: "Frozen",
    bakery: "Bakery",
    beverages: "Beverages",
    other: "Other",
};

export interface Meal {
    id: number;
    userId: string;
    name: string;
    description: string | null;
    steps: string[];
    servings: number;
    prep_time: number | null;
    cook_time: number | null;
    image_url: string | null;
    tags: string[];
    rating: number | null;
    drink_pairing: string | null;
    chef_secret: string | null;
    leftover_idea: string | null;
    flavor_profile: string | null;
    nutrition_insight: string | null;
    created_at: string;
    updated_at: string;
}

export interface MealIngredient {
    id: number;
    mealId: number;
    name: string;
    quantity: number | null;
    unit: string | null;
    category: IngredientCategory;
    notes: string | null;
    order_index: number;
}

export interface MealInput {
    name: string;
    description?: string;
    steps?: string[];
    servings?: number;
    prep_time?: number;
    cook_time?: number;
    image_url?: string;
    tags?: string[];
    rating?: number;
    drink_pairing?: string;
    chef_secret?: string;
    leftover_idea?: string;
    flavor_profile?: string;
    nutrition_insight?: string;
}

export interface IngredientInput {
    name: string;
    quantity?: number;
    unit?: string;
    category?: IngredientCategory;
    notes?: string;
    order_index?: number;
}

export interface MealWithIngredients extends Meal {
    ingredients: MealIngredient[];
}

export interface GroceryItem {
    id: number;
    userId: string;
    name: string;
    quantity: number | null;
    unit: string | null;
    category: IngredientCategory;
    checked: boolean;
    mealId: number | null;
    created_at: string;
}

export interface GroceryItemInput {
    name: string;
    quantity?: number;
    unit?: string;
    category?: IngredientCategory;
    mealId?: number;
}

export interface GroceryListByCategory {
    category: IngredientCategory;
    items: GroceryItem[];
}

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

// Daily Meals Types
export type MealType = "breakfast" | "lunch" | "dinner" | "snack";

export const MEAL_TYPES: MealType[] = ["breakfast", "lunch", "dinner", "snack"];

export const MEAL_TYPE_DISPLAY_NAMES: Record<MealType, string> = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack",
};

export interface DailyMeal {
    id: number;
    userId: string;
    date: string; // YYYY-MM-DD format
    meal_type: MealType;
    mealId: number;
    created_at: string;
    updated_at: string;
}

export interface DailyMealWithRecipe extends DailyMeal {
    meal: Meal;
}

export interface DailyMealInput {
    date: string;
    meal_type: MealType;
    mealId: number;
}
