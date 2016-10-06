import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StampDutyCalculator }   from './stamp-duty-calc.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ StampDutyCalculator ],
    bootstrap:    [ StampDutyCalculator ]
})

export class AppModule { }
