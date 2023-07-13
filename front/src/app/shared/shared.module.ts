import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { HighlighterPipe } from './pipes/highlighter.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ModalComponent,
    HighlighterPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ModalComponent,
    HighlighterPipe
  ]
})
export class SharedModule { }
