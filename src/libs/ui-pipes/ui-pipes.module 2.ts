import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfElseDisplayPipe } from './if-else-display.pipe';
import { IncludedInPipe } from './included-in.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { NaPipe } from './na.pipe';

@NgModule({
   imports: [
      CommonModule
   ],
   declarations: [
      IfElseDisplayPipe,
      IncludedInPipe,
      IsEqualPipe,
      NaPipe
   ],
   exports:[
      IfElseDisplayPipe,
      IncludedInPipe,
      IsEqualPipe,
      NaPipe
   ]
})
export class UiPipesModule { }
