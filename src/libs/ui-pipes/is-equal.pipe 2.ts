import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isEqual'
})
export class IsEqualPipe implements PipeTransform {
    transform<T>(value: T, equalTo: T): boolean {
        return value === equalTo;
    }
}