import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

import { certificates } from '../constants';
const Certificates = () => (
  <>
    <div>
      <p className={styles.sectionSubText}>My Achievements</p>
      <h2 className={styles.sectionHeadText}>Certificates</h2>
    </div>
    <div className="mt-10 flex flex-wrap gap-7">
      {certificates.map((cert, idx) => (
        <div key={idx} className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]">
          <h3 className="text-white font-bold text-[20px]">{cert.title}</h3>
          <p className="text-secondary mt-2">{cert.issuer}</p>
          <p className="text-secondary text-[14px]">{cert.date}</p>
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-2 block">
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Certificates, "certificates");