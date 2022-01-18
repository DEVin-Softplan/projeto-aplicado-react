import { useNavigate, useParams } from 'react-router-dom';

export const Exemplo = () => {
  const { idExemplo } = useParams();
  const navigate = useNavigate();

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
      <div style={{ width: '200px' }}>
        <h2 style={{ paddingBottom: '5px', color: '#727272' }}>{`Exemplo: ${idExemplo}`}</h2>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => navigate(-1)} style={{ padding: '5px', marginRight: '10px', cursor: 'pointer' }}>
            Voltar
          </button>
          <button onClick={() => navigate('/')} style={{ padding: '5px', cursor: 'pointer' }}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
