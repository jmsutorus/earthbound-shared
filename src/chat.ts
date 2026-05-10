import type { Event } from "./events.ts";
import type { WorkoutActivity, ScheduledWorkout } from "./workouts.ts";
import type { Task } from "./tasks.ts";
import type { Habit } from "./habits.ts";

/**
 * Discriminated union of all structured data payloads the chat API can emit.
 *
 * When a chat message includes a `{ type: "data" }` chunk:
 * - `dataType` + `payload` narrow to the matching variant below.
 * - `createdId` is present (and set to the new record's id) when the chunk
 *   is the result of a create operation, so the UI can navigate to the new item.
 */
export type ChatDataPayload =
  | { dataType: "events"; payload: Event[]; ids?: (number | string)[]; createdId?: number | string }
  | { dataType: "workout_activities"; payload: WorkoutActivity[]; ids?: (number | string)[]; createdId?: number | string }
  | { dataType: "scheduled_workouts"; payload: ScheduledWorkout[]; ids?: (number | string)[]; createdId?: number | string }
  | { dataType: "tasks"; payload: Task[]; ids?: (number | string)[]; createdId?: number | string }
  | { dataType: "habits"; payload: Habit[]; ids?: (number | string)[]; createdId?: number | string };

export type ChatDataType = ChatDataPayload["dataType"];
