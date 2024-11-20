import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferenciaListComponent } from './conferencia/conferencia-list/conferencia-list.component';

const routes: Routes = [
  {path: '', component: ConferenciaListComponent},
  {path: 'conferencia', loadChildren: () => import('./conferencia/conferencia.module').then(m => m.ConferenciaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
