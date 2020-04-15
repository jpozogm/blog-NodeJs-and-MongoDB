export function some (num) {
    return num.some(item => item >= 5)
}

export function find (num) {
    return num.find(item => item >= 5)
}

export function isCountry(regions) {
    return regions.find(region => !region.isCountry).name;
};