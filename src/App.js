import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    books: [],
    apiUrl: "",
  }

  fetchBooks = async(apiUrl) => {
    try {
      const responce = await fetch(`${apiUrl}/books`)
      const books = await responce.json()
      console.log(books.filter(book => book.category === "fantasy"))
      this.setState({
        books: books,
      })
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount(){
    const apiUrl = process.env.API_URL
    this.fetchBooks(apiUrl)
    this.setState({ apiUrl: apiUrl })
  }
  render(){
  return (
    <div className="App">
      <NavBar title="StriveBooks" />
      <Home jumboTitle="Welcome to strivebooks" books={this.state.books} apiUrl={this.state.apiUrl} />
    </div>
  );
}
}

export default App;
