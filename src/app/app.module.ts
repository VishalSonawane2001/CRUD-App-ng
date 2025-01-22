import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  { path: '', component: CrudComponent }
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CrudComponent,
    RouterModule.forRoot(routes),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
