/**
 * @description 比较多级标题，例如 "1.1.1" < "2.0" < "10.0.1"
 * @param a
 * @param b
 */
export function multiLevelTitleCompareFn(a: string, b: string) {
    const group1 = a.split(".");
    const group2 = b.split(".");
    let maxLength = group1.length;
    const length2 = group2.length;
    if (length2 > maxLength) {
        maxLength = length2;
    }
    for (let i = 0; i < maxLength; i++) {
        let item1 = group1[i] || "";
        let item2 = group2[i] || "";
        let res = numberFirstCompileFn(item1, item2);
        if (res === 0) {
            continue;
        }
        return res;
    }
    return 0;
}

/**
 * @description 数字优先的比较规则 例如  "2" < "10" < "20" < "100"
 * @param a
 * @param b
 */
export function numberFirstCompileFn(a: string, b: string) {
    let na: string | number = Number(a);
    let nb: string | number = Number(b);
    if (isNaN(na) || isNaN(nb)) {
        na = a;
        nb = b;
    }
    if (na < nb) {
        return -1;
    } else if (na > nb) {
        return 1;
    }
    return 0;
}