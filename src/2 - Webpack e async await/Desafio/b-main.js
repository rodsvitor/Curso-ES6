import axios from  'axios'

// function getUserFromGitHub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//       });
// }
//
// getUserFromGitHub('rodsvitor');
// getUserFromGitHub('rodsvito22r');

async function getUserFromGitHub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (e) {
    console.log('Usuário não exissste');
  }
}

getUserFromGitHub('rodsvitor');
getUserFromGitHub('rodsvito22r');
