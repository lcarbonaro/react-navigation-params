import Card from "./Card";

function Home() {
    const names = [
        {
            id: 1,
            name: "Jack",            
        },
        {
            id: 2,
            name: "Jill",            
        },
        {
            id: 3,
            name: "Joe",            
        },
        {
            id: 11,
            name: "Jackie",            
        },
        {
            id: 12,
            name: "Jillian",            
        },
        {
            id: 13,
            name: "Jolene",            
        },
        {
            id: 21,
            name: "Jacinda",            
        },
        {
            id: 22,
            name: "Jimi",            
        },
        {
            id: 23,
            name: "James",            
        },
        {
            id: 31,
            name: "Jerri",            
        },
        {
            id: 32,
            name: "Jon",            
        },
        {
            id: 33,
            name: "Josie",            
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
