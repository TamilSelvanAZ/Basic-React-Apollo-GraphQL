

const userData = [
    {
        id: 1,
        first: "John",
        last: "Roberts",
        age: 51,
        location: 'Chicago, IL',
        description: "John is a retired YouTuber"
    },
    {
        id: 2,
        first: "Frita",
        last: "Waters",
        age: 27,
        location: 'Phoenix, AZ',
        description: "Frita loves the desert, cheese, and turtles."
    },
    {
        id: 3,
        first: 'Bart',
        last: 'Simpson',
        age: 24,
        location: 'Springfield, IL',
        description: 'Bart skateboards everywhere.'
    }
];

const listData = (state = [userData], action) => {
    switch (action.type) {
        case 'USER_DETAILS':
            return [
                ...state,
            ]
        default:
            return state;
    }
}

export default listData;