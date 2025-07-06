import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { certificates } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CertificateCard = ({ index, cert }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className='w-[320px] h-[440px] flex flex-col bg-tertiary p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-[#915eff]/20 hover:-translate-y-1 overflow-hidden'
    >
      <div className='relative'>
        {/* Certificate Image (optional) - Uncomment and add your image */}
        {cert.image && (
          <div className='mb-4 overflow-hidden rounded-lg h-48 flex-shrink-0'>
            <img 
              src={cert.image} 
              className='w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300'
              alt={cert.title}
            />
          </div>
        )}
        
        <div className='flex justify-between items-start mb-3'>
          <div className='flex-1 min-w-0'>
            <h3 className='text-white font-bold text-[18px] truncate' title={cert.title}>{cert.title}</h3>
            <p className='text-secondary text-[14px] truncate' title={cert.issuer}>{cert.issuer}</p>
          </div>
          <p className='text-secondary text-[14px] whitespace-nowrap ml-2 w-24 h-10 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center text-white font-semibold hover:bg-white/20 transition-all duration-300'>{cert.date}</p>
        </div>
        
        {cert.description && (
          <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
            {cert.description}
          </p>
        )}
        
        <div className='mt-4'>
          <p className='text-gray-400 text-sm line-clamp-3 mb-4 overflow-hidden overflow-ellipsis'>
            {cert.description || 'Click below to view the certificate details.'}
          </p>
          <a
            href={cert.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group relative inline-flex items-center justify-center px-6 py-3 mt-4 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-[#915eff] to-[#7b2ff7] rounded-lg hover:shadow-lg hover:shadow-[#915eff]/40 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#915eff] focus:ring-offset-2 focus:ring-offset-[#1a1440]'
          >
            <span className='relative z-10 flex items-center gap-2'>
              View Certificate
              <svg
                className='w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </span>
            <span className='absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-[#7b2ff7] to-[#5e1dd9] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const containerRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1);
  const cardRef = useRef(null);

  // Calculate number of visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCards(4); // xl
      else if (width >= 1024) setVisibleCards(3); // lg
      else if (width >= 768) setVisibleCards(2); // md
      else setVisibleCards(1); // sm and below
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Check scroll position and update button states
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkScroll = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    };

    checkScroll();
    container.addEventListener('scroll', checkScroll);
    return () => container.removeEventListener('scroll', checkScroll);
  }, [visibleCards]);

  const scroll = (direction) => {
    if (!containerRef.current || !cardRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth + 24; // width + gap
    const scrollAmount = cardWidth * (direction === 'left' ? -visibleCards : visibleCards);
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='w-full relative'
    >
      <motion.div variants={textVariant()} className='mb-12'>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>
      
      <div className='relative w-full'>
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1440]/80 hover:bg-[#2a0e61] flex items-center justify-center shadow-lg transition-all duration-300 ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label='Previous certificates'
          disabled={!canScrollLeft}
        >
          <ChevronLeft className='w-5 h-5 md:w-6 md:h-6 text-white' />
        </button>
        
        <div 
          ref={containerRef}
          className='flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory'
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          <div className='flex gap-6'>
            {certificates.map((cert, index) => (
              <div 
                key={`cert-${index}`} 
                ref={index === 0 ? cardRef : null}
                className='flex-shrink-0 snap-start'
              >
                <CertificateCard 
                  index={index}
                  cert={cert}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1440]/80 hover:bg-[#2a0e61] flex items-center justify-center shadow-lg transition-all duration-300 ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label='Next certificates'
          disabled={!canScrollRight}
        >
          <ChevronRight className='w-5 h-5 md:w-6 md:h-6 text-white' />
        </button>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Certificates, "certificates");