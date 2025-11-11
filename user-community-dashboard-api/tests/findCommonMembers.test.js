const findCommonMembers = require('../src/utils/findCommonMembers');

describe('findCommonMembers', () => {
    test('should return common members when common IDs exist', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        const result = findCommonMembers(arr1, arr2);
        expect(result).toEqual([2, 3]);
    });

    test('should return an empty array when no common members exist', () => {
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const result = findCommonMembers(arr1, arr2);
        expect(result).toEqual([]);
    });

    test('should return an empty array when both arrays are empty', () => {
        const arr1 = [];
        const arr2 = [];
        const result = findCommonMembers(arr1, arr2);
        expect(result).toEqual([]);
    });
});