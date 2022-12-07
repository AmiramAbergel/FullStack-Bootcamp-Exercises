var isSubsequence = function (s, t) {
    let cnt = 0;
    for (let char of t) if (char === s[cnt]) cnt++;
    return cnt === s.length ? true : false;
};

//test

isSubsequence('aec', 'abcde');
isSubsequence('abc', 'abcde');
isSubsequence('ace', 'abcde');
