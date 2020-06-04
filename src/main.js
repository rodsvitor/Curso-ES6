class App {
   constructor() {
      this.repositories = [];
      this.formEl = document.getElementById('repo-form');
      this.listEl = document.getElementById('repo-list');
      this.registerHandlers();
   }

   registerHandlers() {
      this.formEl.onsubmit = e => this.addRepository(e);
   }

   addRepository(event) {
      event.preventDefault();

      this.repositories.push({
         name: 'rocketseat.com.br',
         description: 'Tire a a sua ideia do papel e dê vida à sua startup.',
         avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
         html_url: 'http://github.com/rocketseat/rocketseat.com.br'
      });

      console.log(this.repositories);

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

new App();