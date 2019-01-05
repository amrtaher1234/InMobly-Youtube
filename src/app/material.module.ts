import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const mods = [MatToolbarModule, MatIconModule];
@NgModule({
    declarations: [

    ],
    imports: [
        mods
    ],
    exports : [mods]
  })
  export class MaterialModule { }
