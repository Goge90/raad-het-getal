import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatBadgeModule, MatProgressBarModule, MatListModule],
    exports: [MatButtonModule, MatInputModule, MatBadgeModule, MatProgressBarModule, MatListModule]
})

export class MaterialModule {}