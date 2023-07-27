type PizzaProps = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
};

const Pizza = ({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}: PizzaProps) => {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
};

export default Pizza;
