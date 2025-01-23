import { SectionWrapper } from '../hoc';
import { technologiesshort, technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { useMediaQuery } from 'react-responsive';

const Tech = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const techList = isMobile ? technologiesshort : technologies;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {techList.map((technology) => (
          <div className="w-28 h-28 flex flex-col items-center" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className={styles.sectionSubTextLightLessBold}>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');