export const formatName = (name: string): string => {
    const str = name.split(/\s+/);
    return str[0] + ' ' + str[1][0];
};