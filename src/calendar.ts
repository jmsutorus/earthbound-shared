import type { DrinkLog } from "./drinks.ts";
import type { MediaContent } from "./media.ts";
import type { Task } from "./tasks.ts";
import type { EventWithCoverPhoto } from "./events.ts";
import type { ParkContent } from "./parks.ts";
import type { JournalContent } from "./journals.ts";
import type { WorkoutActivity } from "./workouts.ts";
import type { GithubEvent } from "./github.ts";
import type { HabitCompletion } from "./habits.ts";
import type { MoodEntry } from "./mood.ts";
import type { DailyMeal } from "./meals.ts";
import type { Vacation, ItineraryDay, Booking } from "./vacations.ts";
import type { RestaurantVisit } from "./restaurants.ts";

export interface CalendarColor {
  id?: number;
  userId: string;
  category: string;
  bg_color: string;
  text_color: string;
  created_at?: string;
  updated_at?: string;
}

export interface CalendarColorUpdate {
  bg_color: string;
  text_color: string;
}


// Drink log for calendar display
export interface CalendarDrinkLog extends DrinkLog {
  drinkName: string;
  drinkSlug: string;
  drinkType: string | null;
  drinkProducer: string | null;
}


// Goal-related calendar types
export interface CalendarGoal {
  id: number;
  slug: string;
  title: string;
  status: string;
  target_date: string | null;
  completed_date: string | null;
  priority: string;
}

export interface CalendarMilestone {
  id: number;
  goalId: number;
  goalSlug: string;
  goalTitle: string;
  title: string;
  target_date: string | null;
  completed: boolean;
  completed_date: string | null;
}

// Relationship-related calendar types
export interface CalendarRelationshipItem {
  id: number;
  type: 'date' | 'intimacy' | 'milestone';
  date: string;
  title?: string;
  description?: string;
}

// Vacation-related calendar types
export interface CalendarVacation {
  vacation: Vacation;
  isStartDate: boolean;
  isEndDate: boolean;
  itineraryItems: ItineraryDay[];
  bookings: Booking[];
}

// People-related calendar types
export interface CalendarPersonEvent {
  id: number;
  personId: number;
  name: string;
  eventType: 'birthday' | 'anniversary';
  age: number | null; // null if year unknown
  relationship: 'family' | 'friends' | 'work' | 'other';
  date: string; // YYYY-MM-DD - the actual calendar date for this occurrence
}

// Restaurant visit for calendar display
export interface CalendarRestaurantVisit extends RestaurantVisit {
  restaurantName: string;
  restaurantSlug: string;
  cuisine: string | null;
  city: string | null;
  poster: string | null;
}

export interface CalendarDayData {
  date: string; // YYYY-MM-DD format
  mood: MoodEntry | null;
  media: MediaContent[];
  tasks: Task[];
  events: EventWithCoverPhoto[];
  parks: ParkContent[];
  journals: JournalContent[];
  workoutActivities: WorkoutActivity[];
  githubEvents: GithubEvent[];
  habitCompletions: HabitCompletion[];
  duolingoCompleted: boolean;
  // Goals: goals with target_date on this day OR completed on this day
  goalsDue: CalendarGoal[];
  goalsCompleted: CalendarGoal[];
  // Milestones: milestones with target_date on this day OR completed on this day
  milestonesDue: CalendarMilestone[];
  milestonesCompleted: CalendarMilestone[];
  // Relationship: combined dates, intimacy, and milestones
  relationshipItems: CalendarRelationshipItem[];
  // Daily meals: recipes logged for this day
  dailyMeals: DailyMeal[];
  // Vacations: vacation spans, itinerary, and bookings for this day
  vacations: CalendarVacation[];
  // People: birthdays and anniversaries for this day
  peopleEvents: CalendarPersonEvent[];
  // Restaurant visits for this day
  // Restaurant visits for this day
  restaurantVisits: CalendarRestaurantVisit[];
  // Drink logs for this day
  drinkLogs: CalendarDrinkLog[];
}


/**
 * Lightweight summary data for calendar grid cells
 * Only contains counts and minimal display info for fast rendering
 */
export interface CalendarDaySummary {
  date: string;
  moodRating: number | null;
  activityCount: number;
  mediaCount: number;
  mediaFirstTitle: string | null;
  mediaFirstType: string | null;
  taskCounts: {
    completed: number;
    overdue: number;
    upcoming: number;
  };
  eventCount: number;
  eventFirstTitle: string | null;
  eventFirstCategory: string | null;
  eventFirstImage: string | null;
  eventFirstNonHolidayTitle: string | null;
  eventFirstNonHolidayCategory: string | null;
  eventNonHolidayCount: number;
  hasMovie: boolean;
  hasTV: boolean;
  hasBook: boolean;
  hasGame: boolean;
  parkCount: number;
  parkFirstTitle: string | null;
  journalCount: number;
  journalFirstTitle: string | null;
  workoutCounts: {
    upcoming: number;
    completed: number;
    firstUpcomingTime: string | null;
    firstUpcomingType: string | null;
    firstCompletedName: string | null;
    firstCompletedDistance: number | null;
  };
  githubEventCount: number;
  duolingoCompleted: boolean;
  habitCount: number;
  // Goal counts
  goalCounts: {
    due: number;
    completed: number;
    firstDueTitle: string | null;
    firstDueSlug: string | null;
  };
  // Milestone counts
  milestoneCounts: {
    due: number;
    completed: number;
    firstDueTitle: string | null;
    firstDueGoalSlug: string | null;
  };
  // Relationship count
  relationshipCount: number;
  // Meal count (number of meal types logged for the day)
  mealCount: number;
  // Vacation counts
  vacationCounts: {
    starting: number; // Vacations starting on this day
    itineraryItems: number; // Number of itinerary items
    bookings: number; // Number of bookings
    firstStartingVacationType: string | null; // Type of first vacation starting
  };
  // Holiday name (null if no holiday on this day)
  holidayName: string | null;
  // Birthday flag (true if user's birthday is on this day)
  isBirthday: boolean;
  // People events count (birthdays and anniversaries)
  peopleEventCount: number;
  // Separate counts for birthdays and anniversaries
  birthdayCount: number;
  anniversaryCount: number;
  // Restaurant visit count
  restaurantCount: number;
  restaurantFirstName: string | null;
  // Drink log count
  drinkCount: number;
  drinkFirstName: string | null;
  drinkFirstProducer: string | null;
}