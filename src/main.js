class App {
   constructor() {
      this.repositories = [];
      this.formEl = document.getElementById('repo_form');
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
   }
}

new App();