import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div
      style={{
        margin: '30px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ paddingBottom: '5px', color: '#727272' }}>Home</h2>
      <Link to="exemplo/123456">Acessar Exemplo</Link>
    </div>
  );
};
