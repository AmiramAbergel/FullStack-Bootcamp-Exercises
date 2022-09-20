const colorChecker = (color) => {
    let checker = color.toLowerCase();
    switch (checker) {
        case "yellow":
        case "pink":
        case "orange":
            return "light color";
        case "blue":
        case "purple":
        case "brown":
            return "dark color";
        default:
            return "Unknown color";
    }
};

//Tests
colorChecker("piNk");
colorChecker("purple");
colorChecker("Black");
colorChecker("Orange");
