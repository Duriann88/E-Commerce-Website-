// Importing the CSS module for styling
import styles from './heroBanner.module.css';

// Defining the HeroBanner component
const HeroBanner = () => {
  return (
    // Container div with a class name from the imported CSS module
    <div className={styles.Container}>
      {/* Video element with classes from the imported CSS module, set to autoplay, loop, and muted */}
      <video className={styles.Video} autoPlay loop muted>
        {/* Source of the video */}
        <source src="/Evolve hero video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

// Exporting the HeroBanner component
export default HeroBanner;











