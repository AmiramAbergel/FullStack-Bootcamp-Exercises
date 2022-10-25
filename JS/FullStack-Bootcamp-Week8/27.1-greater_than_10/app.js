function lessGreater10(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve();
        } else {
            reject();
        }
    });
}
lessGreater10(11).then(() => {
    console.log("Resolved!");
});
lessGreater10(11).catch(() => {
    console.log("rejected!");
});
