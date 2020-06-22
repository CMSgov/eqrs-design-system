import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ifElseDisplay'
})
export class IfElseDisplayPipe implements PipeTransform {
    transform(value: boolean, yesText: string, noText: string = ''): string {
        return (value) ? yesText : noText;
    }
}
