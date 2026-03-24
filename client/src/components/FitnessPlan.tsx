import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function FitnessPlanPage() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar navbar--scrolled how-built-nav">
        <Link className="nav-brand" to="/">
          <span className="nav-brand__first">&lt;</span>
          Back to Portfolio
          <span className="nav-brand__last"> /&gt;</span>
        </Link>
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
      <div className="portfolio">
        <FitnessPlan />
        <footer className="footer">
          <p>
            <Link to="/" className="how-built-back-link">← Back to Portfolio</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

const workoutSchedule = [
  {
    day: "Monday",
    focus: "Upper Body Push",
    emoji: "🏋️‍♀️",
    exercises: [
      { name: "Barbell Bench Press", sets: "4", reps: "8–10" },
      { name: "Dumbbell Shoulder Press", sets: "3", reps: "10–12" },
      { name: "Incline Dumbbell Press", sets: "3", reps: "10–12" },
      { name: "Cable Lateral Raises", sets: "3", reps: "12–15" },
      { name: "Tricep Rope Pushdowns", sets: "3", reps: "12–15" },
      { name: "Overhead Tricep Extension", sets: "3", reps: "10–12" },
    ],
  },
  {
    day: "Tuesday",
    focus: "Lower Body (Glutes & Hamstrings)",
    emoji: "🦵",
    exercises: [
      { name: "Hip Thrusts", sets: "4", reps: "10–12" },
      { name: "Romanian Deadlifts", sets: "4", reps: "8–10" },
      { name: "Bulgarian Split Squats", sets: "3", reps: "10 each" },
      { name: "Leg Curl Machine", sets: "3", reps: "12–15" },
      { name: "Cable Kickbacks", sets: "3", reps: "12–15 each" },
      { name: "Glute Bridge (Banded)", sets: "3", reps: "15–20" },
    ],
  },
  {
    day: "Wednesday",
    focus: "Active Recovery / Cardio",
    emoji: "🧘‍♀️",
    exercises: [
      { name: "Walking / Light Jog", sets: "1", reps: "30–45 min" },
      { name: "Stretching & Foam Rolling", sets: "1", reps: "15–20 min" },
      { name: "Core Circuit (Planks, Crunches, Leg Raises)", sets: "3", reps: "12–15 each" },
    ],
  },
  {
    day: "Thursday",
    focus: "Upper Body Pull",
    emoji: "💪",
    exercises: [
      { name: "Lat Pulldowns", sets: "4", reps: "10–12" },
      { name: "Seated Cable Rows", sets: "3", reps: "10–12" },
      { name: "Dumbbell Rows", sets: "3", reps: "10–12 each" },
      { name: "Face Pulls", sets: "3", reps: "15–20" },
      { name: "Barbell Bicep Curls", sets: "3", reps: "10–12" },
      { name: "Hammer Curls", sets: "3", reps: "10–12" },
    ],
  },
  {
    day: "Friday",
    focus: "Lower Body (Quads & Glutes)",
    emoji: "🔥",
    exercises: [
      { name: "Barbell Back Squats", sets: "4", reps: "8–10" },
      { name: "Leg Press", sets: "4", reps: "10–12" },
      { name: "Walking Lunges", sets: "3", reps: "12 each" },
      { name: "Leg Extensions", sets: "3", reps: "12–15" },
      { name: "Sumo Squats (Dumbbell)", sets: "3", reps: "12–15" },
      { name: "Calf Raises", sets: "4", reps: "15–20" },
    ],
  },
  {
    day: "Saturday",
    focus: "Full Body / Fun Day",
    emoji: "⚡",
    exercises: [
      { name: "Deadlifts", sets: "4", reps: "6–8" },
      { name: "Push-ups (Weighted or Bodyweight)", sets: "3", reps: "12–15" },
      { name: "Kettlebell Swings", sets: "3", reps: "15–20" },
      { name: "Battle Ropes", sets: "3", reps: "30 sec" },
      { name: "Ab Rollouts", sets: "3", reps: "10–12" },
    ],
  },
  {
    day: "Sunday",
    focus: "Rest Day",
    emoji: "😴",
    exercises: [
      { name: "Rest & Recover", sets: "—", reps: "All day!" },
      { name: "Light Walk (Optional)", sets: "1", reps: "20–30 min" },
      { name: "Meal Prep for the Week", sets: "1", reps: "As needed" },
    ],
  },
];

const mealPlan = [
  {
    meal: "Breakfast",
    emoji: "🥣",
    time: "7:00 AM",
    options: [
      "Protein oats with banana, peanut butter & honey",
      "Scrambled eggs (3) with sourdough & avocado",
      "Greek yoghurt bowl with berries, granola & protein powder",
    ],
  },
  {
    meal: "Morning Snack",
    emoji: "🍎",
    time: "10:00 AM",
    options: [
      "Apple with almond butter",
      "Protein bar",
      "Rice cakes with cottage cheese",
    ],
  },
  {
    meal: "Lunch",
    emoji: "🥗",
    time: "12:30 PM",
    options: [
      "Grilled chicken wrap with salad, hummus & feta",
      "Tuna salad with quinoa, veggies & lemon dressing",
      "Turkey mince stir-fry with brown rice & veggies",
    ],
  },
  {
    meal: "Pre-Workout",
    emoji: "⚡",
    time: "3:00 PM",
    options: [
      "Banana + scoop of pre-workout",
      "Toast with jam & a coffee",
      "Trail mix (nuts, dried fruit, dark chocolate)",
    ],
  },
  {
    meal: "Post-Workout",
    emoji: "🥤",
    time: "5:30 PM",
    options: [
      "Protein shake with milk & banana",
      "Chicken breast with sweet potato & greens",
      "Salmon with rice & steamed broccoli",
    ],
  },
  {
    meal: "Dinner",
    emoji: "🍽️",
    time: "7:30 PM",
    options: [
      "Lean beef mince bolognese with pasta & side salad",
      "Grilled fish tacos with slaw & lime",
      "Chicken & vegetable curry with basmati rice",
    ],
  },
  {
    meal: "Evening Snack (Optional)",
    emoji: "🌙",
    time: "9:00 PM",
    options: [
      "Cottage cheese with a drizzle of honey",
      "Casein protein shake",
      "Small handful of almonds",
    ],
  },
];

export function FitnessPlan() {
  return (
    <section className="section fitness-plan">
      <h2>💪 My Fitness Plan</h2>
      <p className="fitness-intro">
        Fitness is a huge part of my life. Here's my weekly workout routine and
        nutrition plan that keeps me feeling strong, energised, and ready for anything.
      </p>

      {/* Weekly Schedule Overview */}
      <div className="fitness-section">
        <h3>📅 Weekly Schedule</h3>
        <div className="fitness-week-overview">
          {workoutSchedule.map((day) => (
            <div key={day.day} className="fitness-day-badge">
              <span className="fitness-day-emoji">{day.emoji}</span>
              <strong>{day.day}</strong>
              <span className="fitness-day-focus">{day.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Workout Details */}
      <div className="fitness-section">
        <h3>🏋️‍♀️ Workout Routine</h3>
        <div className="fitness-workout-grid">
          {workoutSchedule.map((day) => (
            <div key={day.day} className="fitness-workout-card">
              <div className="fitness-workout-header">
                <span className="fitness-workout-emoji">{day.emoji}</span>
                <div>
                  <h4>{day.day}</h4>
                  <span className="fitness-workout-focus">{day.focus}</span>
                </div>
              </div>
              <table className="fitness-exercise-table">
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                  </tr>
                </thead>
                <tbody>
                  {day.exercises.map((ex) => (
                    <tr key={ex.name}>
                      <td>{ex.name}</td>
                      <td>{ex.sets}</td>
                      <td>{ex.reps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Plan */}
      <div className="fitness-section">
        <h3>🥗 Daily Meal Plan</h3>
        <p className="fitness-meal-intro">
          Balanced nutrition to fuel workouts and recovery. Each meal has a few rotation options to keep things interesting.
        </p>
        <div className="fitness-meal-grid">
          {mealPlan.map((meal) => (
            <div key={meal.meal} className="fitness-meal-card">
              <div className="fitness-meal-header">
                <span className="fitness-meal-emoji">{meal.emoji}</span>
                <div>
                  <h4>{meal.meal}</h4>
                  <span className="fitness-meal-time">{meal.time}</span>
                </div>
              </div>
              <ul className="fitness-meal-options">
                {meal.options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="fitness-section">
        <h3>💡 My Gym Tips</h3>
        <div className="fitness-tips-grid">
          <div className="fitness-tip-card">
            <span className="fitness-tip-icon">💧</span>
            <h4>Stay Hydrated</h4>
            <p>Aim for 2–3 litres of water a day. More on training days!</p>
          </div>
          <div className="fitness-tip-card">
            <span className="fitness-tip-icon">😴</span>
            <h4>Sleep is Key</h4>
            <p>7–9 hours every night. Recovery happens while you sleep.</p>
          </div>
          <div className="fitness-tip-card">
            <span className="fitness-tip-icon">📈</span>
            <h4>Progressive Overload</h4>
            <p>Gradually increase weight or reps each week to keep growing.</p>
          </div>
          <div className="fitness-tip-card">
            <span className="fitness-tip-icon">🎵</span>
            <h4>Great Playlist</h4>
            <p>Music makes or breaks a session. Get that pump-up playlist ready!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
