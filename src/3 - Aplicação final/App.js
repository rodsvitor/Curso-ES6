import api from './api'

export default class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = e => this.addRepository(e);
  }

  setLoading(loading = true) {
    if (loading) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('  Carregando'));
      loadingEl.id = 'loading';
      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault(); // alguma coisa pra não precisar recarregar a página. Ler mais sobre.

    const repoInput = this.inputEl.value;
    if (repoInput.length > 0) {
      this.setLoading();
      try {
        const response = await api.get(`/repos/${repoInput}`);

        const { name, description, html_url, owner: { avatar_url} } = response.data;

        this.repositories.push({
          name,
          description,
          avatar_url,
          html_url
        });

        this.inputEl.value = '';
        this.render();
      } catch (e) {
        alert('O respositório não existe!');
      } finally {
        this.setLoading(false);
      }
    }
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let img = document.createElement('img');
      img.src = repo.avatar_url;

      let strongTitle = document.createElement('strong');
      strongTitle.appendChild(document.createTextNode(repo.name));

      let pDescription = document.createElement('p');
      pDescription.appendChild(document.createTextNode(repo.description));

      let aLink = document.createElement('a');
      aLink.href = repo.html_url;
      aLink.target = '_blank';
      aLink.appendChild(document.createTextNode('Acessar'));

      let li = document.createElement('li');
      li.appendChild(img);
      li.appendChild(strongTitle);
      li.appendChild(pDescription);
      li.appendChild(aLink);

      this.listEl.appendChild(li);
    })
  }
}