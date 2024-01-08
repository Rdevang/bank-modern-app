import React from "react";
import styles, { layout } from "../styles";
import Buttons from "./Buttons";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> we’ll
          handle the in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Buttons styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}><img src={card} className="w-[100%] h-[100%]" alt="" /></div>
    </section>
  );
};

export default CardDeal;
