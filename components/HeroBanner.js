
import styles from './heroBanner.css';

const HeroBanner = () => {
  return (
    <div className={styles.Container}>
      <video className={styles.Video} autoPlay loop muted>
        <source src="/Evolve hero video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroBanner;











