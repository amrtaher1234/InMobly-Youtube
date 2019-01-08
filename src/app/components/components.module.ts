import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
    declarations : [VideoCardComponent] ,
    imports : [MaterialModule] ,
    exports : [VideoCardComponent],
})
export class ComponentsModule { }
