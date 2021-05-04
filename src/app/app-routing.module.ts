import { PerfilComponent } from './components/views/perfil/perfil.component';
import { DetalleComponent } from './components/views/detalle/detalle.component';
import { CatalogoComponent } from './components/views/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full'  },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', redirectTo: 'catalogo', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
