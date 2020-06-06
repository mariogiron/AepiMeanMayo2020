import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SumaComponent } from './suma/suma.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    DetallePersonaComponent,
    CronometroComponent,
    SumaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
