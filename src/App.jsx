const workouts = [
  {
    id: 1,
    name: 'Push Day',
    date: 'Today, 6:30 AM',
    duration: '52 min',
    calories: 420,
    exercises: [
      { name: 'Bench Press', sets: '4 x 8', completed: true },
      { name: 'Incline Dumbbell Press', sets: '3 x 10', completed: true },
      { name: 'Shoulder Press', sets: '3 x 8', completed: true },
      { name: 'Triceps Dips', sets: '3 x 12', completed: false }
    ]
  },
  {
    id: 2,
    name: 'Leg Day',
    date: 'Yesterday',
    duration: '61 min',
    calories: 510,
    exercises: [
      { name: 'Back Squat', sets: '5 x 6', completed: true },
      { name: 'Romanian Deadlift', sets: '4 x 8', completed: true },
      { name: 'Walking Lunges', sets: '3 x 12', completed: true },
      { name: 'Calf Raises', sets: '4 x 15', completed: true }
    ]
  }
];

const stats = [
  { label: 'Workouts', value: '12', delta: '+3 this week' },
  { label: 'Calories', value: '4.8k', delta: '+12% vs last week' },
  { label: 'Active Days', value: '6/7', delta: 'Strong consistency' },
  { label: 'Avg. Duration', value: '48 min', delta: '+8 min' }
];

const exerciseCatalog = [
  { name: 'Bench Press', progress: 80, volume: '5.2k' },
  { name: 'Pull Ups', progress: 68, volume: '3.8k' },
  { name: 'Squats', progress: 92, volume: '6.1k' },
  { name: 'Deadlifts', progress: 74, volume: '4.9k' }
];

const weeklyData = [56, 72, 64, 88, 76, 94, 82];

function App() {
  const completedSets = workouts[0].exercises.filter((exercise) => exercise.completed).length;
  const totalSets = workouts[0].exercises.length;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">WT</div>
          <div>
            <p className="eyebrow">Fitness</p>
            <h2>Workout Tracker</h2>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Workouts</button>
          <button className="nav-item">Exercises</button>
          <button className="nav-item">Progress</button>
          <button className="nav-item">Goals</button>
        </nav>

        <div className="mini-card">
          <p className="eyebrow">Current goal</p>
          <h3>8-week strength build</h3>
          <div className="goal-row">
            <span>Progress</span>
            <strong>68%</strong>
          </div>
          <div className="progress-bar">
            <span style={{ width: '68%' }} />
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Monday, Nov 1</p>
            <h1>Welcome back, Alex</h1>
          </div>
          <button className="primary-btn">+ Log workout</button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <p>{stat.label}</p>
              <h3>{stat.value}</h3>
              <span>{stat.delta}</span>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel workout-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Today</p>
                <h2>{workouts[0].name}</h2>
              </div>
              <span className="chip">{workouts[0].duration}</span>
            </div>

            <div className="session-summary">
              <div>
                <strong>{completedSets}/{totalSets}</strong>
                <span>Exercises done</span>
              </div>
              <div>
                <strong>{workouts[0].calories}</strong>
                <span>Calories</span>
              </div>
              <div>
                <strong>{workouts[0].date}</strong>
                <span>Session time</span>
              </div>
            </div>

            <div className="exercise-list">
              {workouts[0].exercises.map((exercise) => (
                <div className={`exercise-item ${exercise.completed ? 'done' : ''}`} key={exercise.name}>
                  <div className="exercise-check">{exercise.completed ? '✓' : '○'}</div>
                  <div className="exercise-meta">
                    <strong>{exercise.name}</strong>
                    <span>{exercise.sets}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Weekly</p>
                <h2>Performance</h2>
              </div>
            </div>

            <div className="chart-bars">
              {weeklyData.map((value, idx) => (
                <div className="bar-group" key={idx}>
                  <div className="bar-track">
                    <span className="bar-fill" style={{ height: `${value}%` }} />
                  </div>
                  <label>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}</label>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Popular</p>
                <h2>Top exercises</h2>
              </div>
            </div>

            <div className="exercise-catalog">
              {exerciseCatalog.map((exercise) => (
                <div className="catalog-item" key={exercise.name}>
                  <div className="catalog-label">
                    <strong>{exercise.name}</strong>
                    <span>{exercise.volume} volume</span>
                  </div>
                  <div className="progress-bar small">
                    <span style={{ width: `${exercise.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Recent</p>
                <h2>Workout history</h2>
              </div>
            </div>

            <div className="history-list">
              {workouts.map((workout) => (
                <div className="history-item" key={workout.id}>
                  <div className="calendar-badge">{workout.date.split(' ')[0].slice(0, 3)}</div>
                  <div>
                    <strong>{workout.name}</strong>
                    <span>{workout.duration} • {workout.calories} cal</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
