import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ConverterComponent} from "./components/converter/converter.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'converter',
    component: ConverterComponent
  }
];
