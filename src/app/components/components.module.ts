import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { VideoCardComponent } from './video-card/video-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations : [VideoCardComponent, LoaderComponent] ,
    imports : [MaterialModule] ,
    exports : [VideoCardComponent],
})
export class ComponentsModule { }
