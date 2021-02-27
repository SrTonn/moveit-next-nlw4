import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { DarkToggle } from '../components/DarkToggle';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel || 0

  return (
    <header>
      <div>
        <div className={styles.experienceBar}>
          <span>0 xp</span>
          <div>
            <div style={{ width: `${percentToNextLevel}%` }} />
            <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
              {currentExperience} xp
            </span>
          </div>
          <span>{experienceToNextLevel} xp</span>
        </div>
      </div>
      <DarkToggle />
    </header>
  )
}