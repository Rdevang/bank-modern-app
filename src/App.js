import {
  Billing,
  Bussiness,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";


import styles from "./styles";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussiness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      <button
        
        class="py-4 hover:scale-125 fixed px-6 bg-blue-gradient font-poppins font-bold bottom-[10%] right-10 text-[18px] text-primary outline-none rounded-lg z-50"
        data-projection-id="8"
      >
        
        <a href="#home"> <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3 h-3 md:h-6 md:w-6 "

        >
          <path
            fill-rule="evenodd"
            d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
            clip-rule="evenodd"
          ></path>
        </svg></a>
       
      </button>
    </div>
  );
}

export default App;
