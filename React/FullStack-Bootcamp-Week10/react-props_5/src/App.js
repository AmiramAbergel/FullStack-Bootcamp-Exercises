import Buttons from './components/Buttons';
import Cards from './components/Cards';

import './App.css';

import Mother from './components/FiveBalloons/Mother';
import Child from './components/FiveBalloons/Child';

function App() {
    // const cards = [
    //     {
    //         imgUrl: `https://images.unsplash.com/photo-1639380540776-1a8c1376b26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`,
    //         title: "Toilet Paper",
    //         desc: "Lorem ipsum dolor sit amet.",
    //     },
    //     {
    //         imgUrl: `https://images.unsplash.com/photo-1639368216157-33c8fdd3c7b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`,
    //         title: "Toilet Paper2",
    //         desc: "Lorem ipsum dolor sit amet.",
    //     },
    //     {
    //         imgUrl: `https://images.unsplash.com/photo-1639330186966-c3e3ad72accc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    //         title: "Toilet Paper3",
    //         desc: "Lorem ipsum dolor sit amet.",
    //     },
    // ];
    return (
        <div className='App'>
            {/* <Buttons myKey={"Important"} weight={"bold"} />
            <Buttons myKey={"Not Important"} />
            <Cards
                img={cards[0].imgUrl}
                title={cards[0].title}
                desc={cards[0].desc}
                share="#"
                explore="#"
            />
            <Cards
                img={cards[1].imgUrl}
                title={cards[1].title}
                desc={cards[1].desc}
                share="#"
                explore="#"
            />
            <Cards
                img={cards[2].imgUrl}
                title={cards[2].title}
                desc={cards[2].desc}
                share="#"
                explore="#"
            /> */}
            <Mother />
        </div>
    );
}

export default App;
