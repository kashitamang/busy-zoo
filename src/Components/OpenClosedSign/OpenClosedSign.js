
export default function OpenClosedSign({ zooIsOpen }) {
  return (
    <div className={zooIsOpen ? 'open' : 'closed'}>
      {
        zooIsOpen
          ? <h3>👐 Come on in! 👐</h3>
          : <h3>🌙 shhhhh, it is sleeping time 🌙</h3>
      }
    </div>
  );
}