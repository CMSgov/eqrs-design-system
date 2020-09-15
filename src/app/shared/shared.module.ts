import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material 
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatDialogModule} from '@angular/material/dialog';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTooltipModule} from '@angular/material/tooltip';

//Components Lib
import { UiComponentsModule, UiDirectivesModule } from 'src/libs/public_api';
//import from built lib
// import { UiComponentsModule, UiDirectivesModule } from 'dist';

import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
export function getHighlightLanguages() {
  return {
    typescript: () => import('node_modules/highlight.js/lib/languages/typescript'),
    css: () => import('node_modules/highlight.js/lib/languages/css'),
    xml: () => import('node_modules/highlight.js/lib/languages/xml') 
  };
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiComponentsModule,
    UiDirectivesModule,
    HighlightModule
  ],
  exports:[
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTooltipModule,
    UiComponentsModule,
    UiDirectivesModule,
    HighlightModule
  ],
  providers:[
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue:<HighlightOptions> {
        languages: getHighlightLanguages(),
      }
    }
  ]
})
export class SharedModule { }
