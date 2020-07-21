import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {data :{data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies.data.data.movies);
  }
  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({isLoading : false});
    // }, 6000)
    this.getMovies();  }
  // add = () => {
  //   this.setState(current => ({count : current.count + 1}));
  // }
  // minus = () => {
  //   this.setState(current => ({count : current.count - 1}));
  // }
  // componentDidMount() {
  //   console.log("hi there")
  // }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>
  }
}

export default App;

// const foodLike = [
//   {
//     id:1,
//     name:"Fish and Chips",
//     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wikihow.com%2Fimages%2Fthumb%2F8%2F82%2FMake-Fish-and-Chips-Step-14.jpg%2Faid237127-v4-1200px-Make-Fish-and-Chips-Step-14.jpg&imgrefurl=https%3A%2F%2Fwww.wikihow.com%2FMake-Fish-and-Chips&tbnid=XyOWsNzSdahh6M&vet=12ahUKEwj134aTqdvqAhXCA5QKHRSkD98QMygBegUIARDYAQ..i&docid=XGqxaxQAWRKhEM&w=1200&h=900&q=fish%20and%20chips&ved=2ahUKEwj134aTqdvqAhXCA5QKHRSkD98QMygBegUIARDYAQ",
//     rating:4/*this is a number, not a string*/
//   },
//   {
//     id:2,
//     name:"Chipotle",
//     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ",
//     rating:1
//   },
//   { 
//     id:3,
//     name:"Noodles",
//     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ",
//     rating:3
//   },
//   { 
//     id:4,
//     name:"Bulgogi",
//     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F34%2Fb7%2F1c%2F34b71cd6cf7f98cec071b4e5e6fead01.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131589620349518043%2F&tbnid=17oQmeXR4fzCDM&vet=12ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ..i&docid=jtp0Fl68skAXMM&w=1029&h=1029&q=chipotle&ved=2ahUKEwi0-ra8qdvqAhXxzYsBHbXbDF0QMygJegUIARD1AQ",
//     rating:4.2
//   },
// ]

// function Food({name, picture, rating}) {
//   return <div>
//       <h2>I hate {name}.</h2>
//       <h4>{rating}/5.0</h4>
//       <img src = {picture} alt={name}/>
//     </div>;
// }

// function renderFood(dish) {
//   // console.log(foodLike.map(renderFood));
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
// }
// function App() {
//   return (
//     <div> 
//       <h1>Let's see how it works if I delete all these. Awesome! 
//         It automatically changes the texts I modified without refreshing the web page!</h1>
//         <h2>This sodding place pisses me off. Do what you have to do on your own. I'm not here to do such things you don't want to do.</h2>
//         {/* <Food fav="chicken" /> */}
//         {/* <Food fav="banana" /> */}
//         {/* <Food fav="beef" /> */}
//         {/* <Food fav="kimchi" /> */}
//         {/* {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}This curly brakets mean that this is javascript */}
//         {foodLike.map(renderFood)}
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// export default App;
