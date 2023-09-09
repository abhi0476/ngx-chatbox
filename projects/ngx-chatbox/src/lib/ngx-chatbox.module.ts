import { NgModule } from '@angular/core';
import { NgxChatboxComponent } from './ngx-chatbox.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxChatboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgxChatboxComponent]
})
export class NgxChatboxModule { }
