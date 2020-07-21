import React from 'react';

function Food({name, picture}) {
  return <div>
      <h2>I hate {name}.</h2>
      <img src = {picture} />
    </div>;
}

const foodLike = [
  {name:"Fish and Chips",
  image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wikihow.com%2Fimages%2Fthumb%2F8%2F82%2FMake-Fish-and-Chips-Step-14.jpg%2Faid237127-v4-1200px-Make-Fish-and-Chips-Step-14.jpg&imgrefurl=https%3A%2F%2Fwww.wikihow.com%2FMake-Fish-and-Chips&tbnid=XyOWsNzSdahh6M&vet=12ahUKEwj134aTqdvqAhXCA5QKHRSkD98QMygBegUIARDYAQ..i&docid=XGqxaxQAWRKhEM&w=1200&h=900&q=fish%20and%20chips&ved=2ahUKEwj134aTqdvqAhXCA5QKHRSkD98QMygBegUIARDYAQ"
},
  {name:"Chipotle",
  image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ"
},
{name:"Noodles",
image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ"
},
{name:"Bulgogi",
image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ"
},

]

function App() {
  return (
    <div> 
      <h1>Let's see how it works if I delete all these. Awesome! 
        It automatically changes the texts I modified without refreshing the web page!</h1>
        {/* <Food fav="chicken" /> */}
        {/* <Food fav="banana" /> */}
        {/* <Food fav="beef" /> */}
        {/* <Food fav="kimchi" /> */}
        {foodLike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}{/* This curly brakets mean that this is javascript */}
    </div>
  );
}

export default App;
