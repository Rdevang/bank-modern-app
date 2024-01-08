import React from 'react'
import Buttons from './Buttons';
import styles from '../styles';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flow-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex flex-col flex-1">
        <h2 className={`${styles.heading2}`}>Manage your finance with us!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={`${styles.flexCenter}`}>
        <Buttons/>
      </div>
    </section>
  );
}

export default CTA