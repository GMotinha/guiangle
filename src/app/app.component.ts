import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'GUIANGLE';
  public apareceCampo: boolean = false;
  public textoPesquisa: string = '';
  public falhaAoPesquisar: boolean = false;

  public webSites: any[] = [];

  //Depois do construtor
  ngOnInit(): void {
    this.buscarWebsites();
  }
  //Antes dos metodos comuns

  public buscarWebsites(): void {
    this.webSites = [
      {
        nome: 'Angular.io',
        link: 'https://angular.io/',
        descrição:
          'Documentação oficial do Angular, com guias, tutoriais e exemplos',
      },
      {
        nome: 'Angular Blog',
        link: 'https://blog.angular.io/',
        descrição:
          'Blog oficial do Angular, com atualizações, anúncios e artigos',
      },
      {
        nome: 'Scotch.io',
        link: 'https://scotch.io/tag/angular',
        descrição: 'Artigos, tutoriais e dicas sobre desenvolvimento Angular',
      },
      {
        nome: 'AngularInDepth ',
        link: 'https://indepth.dev/tag/angular/',
        descrição: ' Artigos técnicos aprofundados sobre Angular',
      },
      {
        nome: 'Angular University',
        link: 'https://blog.angular-university.io/',
        descrição: ' Recursos educacionais, tutoriais e cursos sobre Angular',
      },
    ];
  }
  /*Ele sempre vai inverter os valores (faz aparecer e sumir)*/
  mostraCampo(): void {
    console.log(this.textoPesquisa);
    if (this.textoPesquisa && !this.apareceCampo) {
      this.apareceCampo = true;
      this.falhaAoPesquisar = false;
    } else if (!this.textoPesquisa) {
      this.apareceCampo = false;
      this.falhaAoPesquisar = true;
    }
  }
}
