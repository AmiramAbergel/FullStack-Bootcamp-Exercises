const avatarFilter = (avatarsArr, searchInput) => {
    const res = avatarsArr.filter((avatar) => {
        if (searchInput) {
            return Object.values(avatar)
                .join('')
                .toLowerCase()
                .includes(searchInput.toLowerCase());
        }
    });

    return res;
};

export default avatarFilter;
