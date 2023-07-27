import Order from './Order';

const Footer = () => {
  const hour: number = new Date().getHours();
  const openHour: number = 12;
  const closeHour: number = 22;
  const isOpen: boolean = hour >= openHour && hour < closeHour;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
