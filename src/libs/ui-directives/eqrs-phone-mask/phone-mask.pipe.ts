import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhoneMaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return ''; }

    let city, number;
    value= value.replace(/[^0-9]/g, '');
    switch (value.length) {
        case 1:
        case 2:
        case 3:
            city = value;
            break;

        default:
            city = value.slice(0, 3);
            number = value.slice(3);
    }

    if (number) {
        if (number.length > 3) {
            number = number.slice(0, 3) + '-' + number.slice(3, 7);
        }
        else {
            number = number;
        }

        return ("(" + city + ")" + number).trim();
    }
    else {
        return "(" + city;
    }

}

parse(value: string): string {
    return value.replace("(","").replace(")","").replace("-","");

}

}
