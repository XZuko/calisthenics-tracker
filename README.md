# Form — Calisthenics Tracker

A responsive, dependency-free personal calisthenics tracker built with HTML, CSS, JavaScript modules, and `localStorage`.

## Run

JavaScript modules should be served over HTTP rather than opened directly from the filesystem.

From this directory, run either:

```powershell
python -m http.server 8000
```

or use any static server (for example VS Code Live Server), then open `http://localhost:8000`.

## Version 1 features

- Dashboard with today's planned session and weekly overview
- Editable seven-day training schedule with rest days
- Searchable exercise library with custom exercise creation
- Repetition, hold, and weighted exercise support
- Live workout logging, set completion, extra sets, skipping, and notes
- Completed workout history with full session details
- Persistent local data; refreshes and browser restarts keep the user's records
- Desktop sidebar and training-friendly mobile bottom navigation

## JavaScript organization

- `app.js` — routing and application lifecycle
- `data.js` — starter exercises, schedule, and state shape
- `storage.js` — isolated persistence adapter
- `dashboard.js` — dashboard rendering
- `schedule.js` — weekly plan editor
- `exercises.js` — library and custom exercise form
- `workouts.js` — active workout creation and logging
- `history.js` — completed workout list and detail view
- `ui.js` — shared formatting, dialogs, and notifications

All application state is serialized as JSON under the `form-calisthenics-v1` localStorage key. UI modules use the storage adapter instead of accessing localStorage directly, allowing a future API-backed adapter to replace it.

## Next version

Version 2 should add live workout and rest timers, automatically calculated personal records, progress charts and aggregate statistics, plus richer exercise-level notes.
