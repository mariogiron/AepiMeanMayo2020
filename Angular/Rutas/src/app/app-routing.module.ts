import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductoComponent } from './producto/producto.component';
import { RelatedComponent } from './producto/related/related.component';
import { ReviewsComponent } from './producto/reviews/reviews.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/informacion' },
  { path: 'informacion', component: InfoComponent },
  { path: 'sobre/:empleadoId', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  {
    path: 'producto', component: ProductoComponent, children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: '**', redirectTo: '/informacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
