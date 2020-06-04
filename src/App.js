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

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;
    if (repoInput.length === 0)
      return;

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