import { MatButtonModule, MatCheckboxModule, MatCardModule, MatSnackBarModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
