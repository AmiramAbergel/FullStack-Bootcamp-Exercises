const stepShape = (N) => {
    for (let i = 0; i <= N; i++) {
        console.log("#".repeat(i) + " ".repeat(N - i));
    }
};

//Test
console.log(stepShape(2));

//Ninja
const stepShapeNinja = (N) => {
    for (let row = 0; row < N; row++) {
        let step = "";
        for (let col = 0; col < N; col++) {
            if (col <= row) {
                step += "#";
            } else {
                step += " ";
            }
        }
        console.log(step);
    }
};

stepShapeNinja(2);
