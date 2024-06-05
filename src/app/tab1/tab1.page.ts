
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public alertaBotones = ['Ingresar'];
  public alertaIngresar = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Correo ',
      attributes: {
        maxlength: 100,
      },
    },
    {
      
      placeholder: 'Contraseña',
      min: 1,
      max: 100,
    },
    {
      type: 'numero',
      placeholder: 'Cuantos años tiene su papá (Seguridad)',
    },
  ];
}