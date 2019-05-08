import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  state = {
    articles: [],
    title: null,
    content: null,
    intervalIsSet: false,
  };

  componentDidMount() {
    this.allArticles();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.allArticles, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  allArticles = () => {
    axios.get('/api/articles')
      .then(res => {
        this.setState({articles: res.data})
      })
      .catch(err => console.log(err))
  };

  addArticle = (title, content) => {
    axios.post("/api/article/new", {
      title: title,
      content: content
    });
  };

  deleteArticle = (id) => {
    axios.delete("/api/article/" + id + "/remove");
  };

  render() {
    const {articles} = this.state;
    return (
      <div>
        <ul>
          {articles.length <= 0
            ? "NO ARTICLES FOUND"
            : articles.map(dat => (
              <li style={{ padding: "10px" }} key={dat._id}>
                <span style={{ color: "gray" }}> id: </span> {dat._id} <br />
                <span style={{ color: "gray" }}> title: </span> {dat.title} <br />
                <span style={{ color: "gray" }}> content: </span> {dat.content} <br/>
                <button onClick={() => this.deleteArticle(dat._id)}>
                  Delete Article
                </button>
              </li>
            ))}
        </ul>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e => this.setState({ title: e.target.value })}
            placeholder="add article title"
            style={{ width: "200px" }}
          />
          <input
            type="text"
            onChange={e => this.setState({ content: e.target.value })}
            placeholder="add article content"
            style={{ width: "200px" }}
          />
          <button onClick={() => this.addArticle(this.state.title, this.state.content)}>
            Add Article
          </button>
        </div>
      </div>
    );
  }
}

export default App;