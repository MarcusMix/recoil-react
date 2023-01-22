import React from 'react';
import logo from './logo.svg';
import './App.css';
import { atomUser } from './store/atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userCountSelector } from './store/selectors/selector';

function App() {


  // esse hook acessa o valor do atom e altera com a função
  const [user, setUser] = useRecoilState(atomUser);


  // esse hook acessa só o valor do atom
  const usernameValue = useRecoilValue(atomUser);

  // ta pegando o valor do atom (user) e contando o tamanho
  // serve também para chamar api.
  const usernameCount = useRecoilValue(userCountSelector);


  // função que altera o valor do state do atom
  const handleChangeUser = (evt: any) => {
    setUser(evt.target.value)
  }

  return (
    <div>
      <h1>Teste e aplicações do Recoil</h1>
      <input type="text" onChange={handleChangeUser} />
      <p>Valor do useStateRecoil {user} </p>
      <br />
      <p>Valor do useRecoilValue {usernameValue} </p>
      <br />



      <p>Valor do selector (contando o tamanho) {usernameCount}</p>
    </div>
  );
}

export default App;
