import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


const mods = [MatToolbarModule, MatIconModule , MatInputModule];
@NgModule({
    declarations: [

    ],
    imports: [
        mods
    ],
    exports : [mods]
  })
  export class MaterialModule { }
