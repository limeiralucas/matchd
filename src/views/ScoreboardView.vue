<script setup lang="ts">
import { ref } from 'vue';

const redScore = ref(0);
const blueScore = ref(0);

// Example player data - this would typically come from your state management
const redTeamPlayers = ref(['Player 1', 'Player 2', 'Player 3', 'Player 8']);
const blueTeamPlayers = ref(['Player 4', 'Player 5', 'Player 6', 'Player 7']);

const handleScoreTouch = (event: Event) => {
  // Prevent default to avoid any unwanted behaviors
  event.preventDefault();

  // Get the element that was touched
  const element = event.currentTarget as HTMLElement;

  // Add pressed class
  element.classList.add('pressed');

  // Remove pressed class after animation
  setTimeout(() => {
    element.classList.remove('pressed');
  }, 200);
};
</script>

<template>
  <div class="scoreboard">
    <div class="main-container">
      <div class="score-container">
        <ul class="players-list red-team landscape-only">
          <li v-for="player in redTeamPlayers" :key="player">{{ player }}</li>
        </ul>

        <div class="scores-section">
          <div class="score-box red" @touchstart="handleScoreTouch" @touchend.prevent>
            <div class="score-value">{{ redScore }}</div>
          </div>
          <div class="vs">VS</div>
          <div class="score-box blue" @touchstart="handleScoreTouch" @touchend.prevent>
            <div class="score-value">{{ blueScore }}</div>
          </div>
        </div>

        <ul class="players-list blue-team landscape-only">
          <li v-for="player in blueTeamPlayers" :key="player">{{ player }}</li>
        </ul>
      </div>

      <div class="portrait-players">
        <div class="team-players">
          <div class="team-label red">Red Team</div>
          <ul class="players-list">
            <li v-for="player in redTeamPlayers" :key="player">{{ player }}</li>
          </ul>
        </div>
        <div class="team-players">
          <div class="team-label blue">Blue Team</div>
          <ul class="players-list">
            <li v-for="player in blueTeamPlayers" :key="player">{{ player }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scoreboard {
  padding: 2rem;
  text-align: center;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1000px;
}

.score-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
}

.scores-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.portrait-players {
  display: none;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  padding-top: 2rem;
}

.team-players {
  flex: 1;
  max-width: 200px;
}

.team-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.team-label.red {
  color: var(--team-red);
}

.team-label.blue {
  color: var(--team-blue);
}

.players-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--color-text-primary);
  font-size: 1.1rem;
  min-width: 120px;
}

.players-list li {
  padding: 0.5rem 0;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.players-list li:hover {
  opacity: 1;
}

.red-team {
  text-align: right;
}

.blue-team {
  text-align: left;
}

.vs {
  color: rgba(255, 255, 255, 0.15);
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow:
    0 1px 1px rgba(255, 255, 255, 0.2),
    0 -1px 1px rgba(0, 0, 0, 0.7);
  transform: scale(1.2);
  flex-shrink: 0;
}

.score-box {
  width: 140px;
  height: 140px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  position: relative;
  transition: all 0.2s ease;
  transform: translateY(-4px);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.5),
    0 8px 16px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.score-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.2) 100%);
  pointer-events: none;
}

.score-box::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -12px;
  height: 12px;
  background: inherit;
  filter: blur(12px) brightness(0.6);
  border-radius: 50%;
  z-index: -1;
}

.score-box:active,
.score-box.pressed {
  transform: translateY(0);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

.score-box.red {
  background-color: var(--team-red);
}

.score-box.blue {
  background-color: var(--team-blue);
}

.score-value {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Media query for portrait mode */
@media (orientation: portrait) {
  .landscape-only {
    display: none;
  }

  .portrait-players {
    display: flex;
  }

  .score-container {
    gap: 2rem;
  }
}

/* Media query for landscape mode */
@media (orientation: landscape) {
  .portrait-players {
    display: none;
  }

  .landscape-only {
    display: block;
  }
}
</style>
