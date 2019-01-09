import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';

import {MatDividerModule} from '@angular/material/divider';

const mods = [MatToolbarModule, MatIconModule , MatInputModule , MatButtonModule, MatSortModule ,
    MatCardModule , MatTableModule, MatPaginatorModule , MatGridListModule, MatDividerModule];
@NgModule({
    declarations: [

    ],
    imports: [
        mods
    ],
    exports : [mods]
  })
  export class MaterialModule { }
