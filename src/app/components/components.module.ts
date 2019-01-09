import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { VideoCardComponent } from './video-card/video-card.component';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations : [VideoCardComponent, LoaderComponent] ,
    imports : [MaterialModule , BrowserModule , CommonModule] ,
    exports : [VideoCardComponent , LoaderComponent],
})
export class ComponentsModule { }
