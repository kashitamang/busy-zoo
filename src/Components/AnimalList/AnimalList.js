import Animal from '../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <Animal
          animal={animal}
          key={animal + i}/>)
      }
    </div>
  );
}