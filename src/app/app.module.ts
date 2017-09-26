// out of the box
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// custom imports
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule} from '@angular/material';

// modules
import { CalculatorViewComponent } from './calculator-view/calculator-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CalculatorViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
