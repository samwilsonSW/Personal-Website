import ModalButton from '../components/ModalButton.js';
import styles from '../styles/Work.module.css';

const works = [
  {
    id: 1,
    title: 'Tempest Tunes Spotify Playlist Creation',
    description: "By using the Spotify API to connect to a user’s Spotify account, TempestTunes will check the current weather of the user’s location from OpenWeatherMapAPI, and create and push a playlist to the user’s account that is based on the mood created by the weather in their location. \nImplemented using Javascript, React and MySQL.", 
    image: '../images/logocopy.png',
    link: 'https://github.com/samwilsonSW/TempestTunes'
  },
  {
    id: 2,
    title: 'Six Degrees of Kevin Bacon',
    description: "Executed the Kevin Bacon Degree's of Separation problem in python using a JSON file of over 140,000 films and their cast lists. Used an optimized breadth-first search algorithm to find shortest path between target and source actors.",
    image: '../images/oracleBacon.png',
    link: 'https://github.com/samwilsonSW/WikipediaUnlocked'
  },
  {
    id: 3,
    title: 'This Website!',
    description: "This website combines Javascript, Next.js framework, and plain css to create this website to display my work.",
    image: '../images/faviconLarge.png',
    link: 'https://github.com/samwilsonSW/Personal-Website'
  },
];

export default function Work() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Work</h1>
      <div className={styles.ModalWrapper}>
        {works.map((work) => (
          <ModalButton
            key={work.id}
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
          />
        ))}
      </div>
    </main>
  );
}
