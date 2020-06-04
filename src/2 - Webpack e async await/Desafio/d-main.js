import axios from 'axios';

const buscaUsuario = async user => {
  // try {
  //   const response = await axios.get(`https://api.github.com/users/${user}`);
  //   console.log(response.data);
  // } catch {
  //   console.error('Usuário não existe')
  // }
   return await axios.get(`https://api.github.com/users/${user}`);
}

buscaUsuario('rodsvitor')
  .then(console.log)
  .catch((err) => console.error("usuário inexistente!"));