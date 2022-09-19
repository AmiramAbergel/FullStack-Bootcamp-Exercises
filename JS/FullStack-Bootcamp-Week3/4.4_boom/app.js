let boom = function (n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        if (i % 7 == 0 && i.toString().includes("7")) {
            res += "BOOM-BOOM, ";
        } else if (i % 7 == 0) {
            res += "BOOM, ";
        } else {
            res += `${i}, `;
        }
    }
    console.log(res);
};

boom(100);
