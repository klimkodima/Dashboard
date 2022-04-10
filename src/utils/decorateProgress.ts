export const decorateProgress = (value: number): string => {

    const progress = Math.round(value);
    let color: string = 'error';
    if (progress > 33 && progress <= 66) color = 'warning';
    if (progress > 66) color = 'success';

    return color;
}