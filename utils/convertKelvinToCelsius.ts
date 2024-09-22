/** @format*/

export function convertKelvinToCelsius(tempInKelvin: number): number{
    const tempInCelsius = tempInKelvin - 273.25;
    return Math.floor(tempInCelsius);
}