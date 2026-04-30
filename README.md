# Earthbound Shared Library

Shared types and utilities for the Earthbound project (Homepage and API).

## Modules

- `budget`: Income and fixed cost types
- `cache`: API cache entry types
- `calendar`: Calendar color types
- `debts`: Debt and payment types
- `drinks`: Drink and log types
- `duolingo`: Lesson completion types
- `events`: Event, notification, and timeline types
- `github`: GitHub event and sync status types
- `goals`: Goal and milestone types
- `habits`: Habit and completion types
- `holidays`: Holiday types
- `journals`: Daily journal and question types
- `meals`: Meal, plan, and grocery types
- `media`: Media and timeline types
- `mood`: Mood and factor types
- `parks`: Park, trail, and photo types
- `people`: Person and relationship types
- `personal-records`: Exercise PR types
- `quick-links`: Category and link types
- `relationship`: Date, intimacy, and milestone types
- `restaurants`: Restaurant and visit types
- `savings`: Account and balance types
- `subscriptions`: Subscription and total types
- `tasks`: Task and list types
- `task-templates`: Task template types
- `vacations`: Vacation, itinerary, and booking types
- `workouts`: Workout activity and goal types
- `user`: User activity and state types

## Usage

### Deno
```typescript
import { UserActivityState } from "jsr:@jmsutorus/earthbound-shared";
```

### Node.js / Next.js
First, add the package:
```bash
npx jsr add @jmsutorus/earthbound-shared
```

Then import:
```typescript
import { UserActivityState } from "@jmsutorus/earthbound-shared";
```
