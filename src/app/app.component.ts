import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GUIANGLE';
  apareceCampo: boolean = false;

  mostraCampo(): void {
    this.apareceCampo =
      !this
        .apareceCampo; /*Ele sempre vai inver os valores (faz aparecer e sumir)*/
  }
}
