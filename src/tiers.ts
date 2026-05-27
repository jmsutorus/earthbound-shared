export type UserTier = "user" | "plus" | "pro" | "admin";

export interface PerFeatureLimits {
  entries: number;        // max entries (-1 = unlimited)
  photosPerEntry: number; // max photos per entry (-1 = unlimited)
}

export interface TierLimits {
  totalPhotos: number;    // global Firebase Storage photo cap (-1 = unlimited)
  vacations: PerFeatureLimits;
  events: PerFeatureLimits;
  parks: PerFeatureLimits;
  journals: PerFeatureLimits;
  people: PerFeatureLimits;
  meals: PerFeatureLimits;
  creators: PerFeatureLimits;
  restaurants: PerFeatureLimits;
  drinks: PerFeatureLimits;
  relationshipDates: PerFeatureLimits;
  habits: number;         // max active habits (-1 = unlimited)
  tasks: number;          // max active tasks (-1 = unlimited)
  goals: number;          // max goals (-1 = unlimited)
  workout_activities: number;
  workout_goals: number;
}

export const TIER_LIMITS: Record<UserTier, TierLimits> = {
  user: {
    totalPhotos: 75,
    vacations:        { entries: 5,   photosPerEntry: 5  },
    events:           { entries: 10,  photosPerEntry: 3  },
    parks:            { entries: 5,   photosPerEntry: 3  },
    journals:         { entries: 30,  photosPerEntry: 1  },
    people:           { entries: 20,  photosPerEntry: 1  },
    meals:            { entries: 25,  photosPerEntry: 1  },
    creators:         { entries: 5,   photosPerEntry: 3  },
    restaurants:      { entries: 20,  photosPerEntry: 1  },
    drinks:           { entries: 20,  photosPerEntry: 1  },
    relationshipDates:{ entries: 15,  photosPerEntry: 1  },
    habits: 10,
    tasks:  50,
    goals:  10,
    workout_activities: 20,
    workout_goals: 5,
  },
  plus: {
    totalPhotos: 500,
    vacations:        { entries: 25,  photosPerEntry: 25 },
    events:           { entries: 50,  photosPerEntry: 15 },
    parks:            { entries: 25,  photosPerEntry: 10 },
    journals:         { entries: 200, photosPerEntry: 1  },
    people:           { entries: 100, photosPerEntry: 1  },
    meals:            { entries: 150, photosPerEntry: 1  },
    creators:         { entries: 25,  photosPerEntry: 10 },
    restaurants:      { entries: 100, photosPerEntry: 1  },
    drinks:           { entries: 100, photosPerEntry: 1  },
    relationshipDates:{ entries: 100, photosPerEntry: 3  },
    habits: 30,
    tasks:  250,
    goals:  30,
    workout_activities: 100,
    workout_goals: 20,
  },
  pro: {
    totalPhotos: 5000,
    vacations:        { entries: -1, photosPerEntry: 100 },
    events:           { entries: -1, photosPerEntry: 50  },
    parks:            { entries: -1, photosPerEntry: -1  },
    journals:         { entries: -1, photosPerEntry: 3   },
    people:           { entries: -1, photosPerEntry: 3   },
    meals:            { entries: -1, photosPerEntry: 3   },
    creators:         { entries: -1, photosPerEntry: -1  },
    restaurants:      { entries: -1, photosPerEntry: 3   },
    drinks:           { entries: -1, photosPerEntry: 3   },
    relationshipDates:{ entries: -1, photosPerEntry: 10  },
    habits: -1,
    tasks:  -1,
    goals:  -1,
    workout_activities: -1,
    workout_goals: -1,
  },
  admin: {
    totalPhotos: -1,
    vacations:        { entries: -1, photosPerEntry: -1 },
    events:           { entries: -1, photosPerEntry: -1 },
    parks:            { entries: -1, photosPerEntry: -1 },
    journals:         { entries: -1, photosPerEntry: -1 },
    people:           { entries: -1, photosPerEntry: -1 },
    meals:            { entries: -1, photosPerEntry: -1 },
    creators:         { entries: -1, photosPerEntry: -1 },
    restaurants:      { entries: -1, photosPerEntry: -1 },
    drinks:           { entries: -1, photosPerEntry: -1 },
    relationshipDates:{ entries: -1, photosPerEntry: -1 },
    habits: -1,
    tasks:  -1,
    goals:  -1,
    workout_activities: -1,
    workout_goals: -1,
  },
};

export const TIER_DISPLAY_NAMES: Record<UserTier, string> = {
  user:  "Free",
  plus:  "Plus",
  pro:   "Pro",
  admin: "Admin",
};
