const swapped = (obj) => {
    const resObj = {};
    for (const [key, value] of Object.entries(obj)) {
        resObj[value] = key;
    }
    return resObj;
};

const testObj = {
    //The same values will be merged into one key.
    h: 3,
    e: 4,
    l: 3,
    o: 7,
    g: 3,
    d: 3,
    a: 2,
    y: 2,
    u: 2,
    r: 3,
    w: 1,
    c: 1,
    m: 2,
    t: 1,
    b: 1,
    s: 1,
};

const testObj2 = {
    h: 1,
    e: 2,
    l: 3,
    o: 4,
    g: 5,
    d: 6,
    a: 7,
    y: 8,
    u: 9,
    r: 10,
    w: 11,
    c: 12,
    m: 13,
    t: 14,
    b: 15,
    s: 16,
};

swapped(testObj);
swapped(testObj2);
