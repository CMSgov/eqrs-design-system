import { Pipe, PipeTransform } from '@angular/core';
import { HasValue } from '../ui-components/eqrs-checkbox/has-value.util';

@Pipe({
    name: 'includedIn'
})
export class IncludedInPipe implements PipeTransform {
    transform<T>(value: T, equalTo: T[]): boolean {
        return HasValue(equalTo) && equalTo.filter(x => x === value).length > 0;
    }
}