import { Pipe, PipeTransform } from '@angular/core';
import { HasValue } from '../ui-components/eqrs-checkbox/has-value.util';

@Pipe({
    name: 'na'
})
export class NaPipe implements PipeTransform {
    transform<T>(value: T): T|string {
        return HasValue(value) ? value : 'N/A';
    }
}