import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }

export interface Employee {
  city: any;
  id: number;
  name: string;
  email: string;
  mobile: number;
}
