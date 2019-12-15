import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NoDataComponent } from './no-data/no-data.component';
import { MapComponent } from './map/map.component';


@NgModule({
    declarations: [NoDataComponent, MapComponent],
    imports: [IonicModule],
    exports: [NoDataComponent, MapComponent]
})

export class ComponentsModule {}