export function HasValue<T>(value: T): boolean {
    let hasValue = false;

    if (value !== null && typeof value !== 'undefined') {
        hasValue = (typeof value === 'string' && value.length === 0) || 
                   (typeof value === 'number' && isNaN(+value)) 
                   ? false : true;
    } 

    return hasValue;
}