import Animal from '../Animal/Animal.js';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div className="parade">
      {
        animals.map((animal, i) => <Animal
          animal={animal}
          key={animal + i}/>)
      }
    </div>
  );
}