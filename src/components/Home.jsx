import Card from "./Card";

function Home() {
    const names = [
        {
            id: 1,
            name: "Jack",
            link: "https://www.google.ca/search?q=jack",
        },
        {
            id: 2,
            name: "Jill",
            link: "https://www.google.ca/search?q=jill",
        },
        {
            id: 3,
            name: "Joe",
            link: "https://www.google.ca/search?q=joe",
        },
        {
            id: 11,
            name: "Jack",
            link: "https://www.google.ca/search?q=jack",
        },
        {
            id: 12,
            name: "Jill",
            link: "https://www.google.ca/search?q=jill",
        },
        {
            id: 13,
            name: "Joe",
            link: "https://www.google.ca/search?q=joe",
        },
        {
            id: 21,
            name: "Jack",
            link: "https://www.google.ca/search?q=jack",
        },
        {
            id: 22,
            name: "Jill",
            link: "https://www.google.ca/search?q=jill",
        },
        {
            id: 23,
            name: "Joe",
            link: "https://www.google.ca/search?q=joe",
        },
        {
            id: 31,
            name: "Jack",
            link: "https://www.google.ca/search?q=jack",
        },
        {
            id: 32,
            name: "Jill",
            link: "https://www.google.ca/search?q=jill",
        },
        {
            id: 33,
            name: "Joe",
            link: "https://www.google.ca/search?q=joe",
        },
    ];

    return (
        <div className="myCardWrapper">
            {names.map((n) => {
                return <Card key={n.id} id={n.id} name={n.name} />; // passing in props to Card component
            })}
        </div>
    );
}

export default Home;
