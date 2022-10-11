const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const modification = (obj) => {
    const orderedList = document.createElement("ol");
    obj.forEach((element) => {
        const newLi = document.createElement("li");
        let fullName = element.firstName + " " + element.lastName;
        newLi.textContent = fullName;
        newLi.setAttribute("data-id", element.id);
        orderedList.appendChild(newLi);
    });
    orderedList.style.listStyleType = "none";
    console.log(orderedList);
};

//Test
modification(users);
