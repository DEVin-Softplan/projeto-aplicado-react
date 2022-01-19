import { Routes, Route } from 'react-router-dom';

import { Cadastro } from '../components/Cadastro';
import { PokemonPage } from '../components/PokemonPage';
import { Exemplo, Home } from '../components/Rotas';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="exemplo/:idExemplo" element={<Exemplo />} />
    <Route path="pokemon" element={<PokemonPage />} />
    <Route path="styled" element={<Cadastro />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);
