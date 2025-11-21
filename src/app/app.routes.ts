import { Routes } from '@angular/router';
import { ValidadoresSincronosComponent } from './features/components/validadores-sincronos/validadores-sincronos.component';
import { ValidadoresAsincronosComponent } from './features/components/validadores-asincronos/validadores-asincronos.component';
import { FormulariosDinamicosComponent } from './features/components/formularios-dinamicos/formularios-dinamicos.component';
import { FormulariosAnidadosComponent } from './features/components/formularios-anidados/formularios-anidados.component';

export const routes: Routes = [
  {
    path: "validadores-sincronos",
    component: ValidadoresSincronosComponent
  },
  {
    path: "validadores-asincronos",
    component: ValidadoresAsincronosComponent
  },
  {
    path: "formularios-dinamicos",
    component: FormulariosDinamicosComponent
  },
  {
    path: "formularios-anidados",
    component: FormulariosAnidadosComponent
  }
];
