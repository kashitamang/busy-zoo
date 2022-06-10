export default function Animal({ animal }) {
  return (
    <div className="animal">
      {
        animal === 'giraffe' && '🦒'
      }
      {
        animal === 'dolphin' && '🐬'
      }
      {
        animal === 'bison' && '🦬'
      }
      {
        animal === 'monkey' && '🐒'
      }
    </div>
  );
}