import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule, MatToolbarModule, MatMenuModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
})
export class MaterialModule { }
