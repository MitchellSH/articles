import React, { Component } from "react";
import axios from "axios";
import ButtonAppBar from "./components/ButtonAppBar";
import Grid from '@material-ui/core/Grid'
import EditArticleFormDialog from "./components/EditArticleFormDialog";
import Icon from "@material-ui/core/Icon/Icon";
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import moment from 'moment';

class App extends Component {

  state = {
    articles: [],
    title: null,
    content: null,
    intervalIsSet: false,
  };

  componentDidMount() {
    this.all();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.all, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  all = () => {
    axios.get('/api/articles')
      .then(res => {
        this.setState({articles: res.data})
      })
      .catch(err => console.log(err))
  };

  delete = (id) => {
    axios.delete("/api/article/" + id + "/remove");
  };

  render() {
    const {articles} = this.state;
    return (
      <div>
        <ButtonAppBar/>
        <Grid container>
          {articles.length <= 0
            ? <p style={{ padding: "10px", margin: "5px" }}>No Articles</p>
            : articles.map(dat => (
              <Card style={{ padding: "10px", margin: "5px", width: "100%" }} key={dat._id}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {moment(dat.createdAt).format('MMMM D, YYYY')}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {dat.title}
                  </Typography>
                  <Typography component="p">
                    {dat.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <EditArticleFormDialog article={{id: dat._id, title: dat.title, content: dat.content}}/>
                  <Button color="default" aria-label="Add" onClick={() => this.delete(dat._id)}>
                    <Icon>delete_icon</Icon>
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </div>
    );
  }
}

export default App;