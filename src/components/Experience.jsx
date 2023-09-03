import { motion } from 'framer-motion';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ title, company_name, description, date, icon, iconBg, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg}}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={icon} alt={company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] text-white font-bold">{title}</h3>
        <div className="text-secondary text-[16px] font-semibold">{company_name}</div>
        <h4 className="vertical-timeline-element-subtitle text-black">{description}</h4>
      </div>
      
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>
    <div className="flex flex-col mt-20">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");