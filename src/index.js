import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Movies from "./Components/Movies";
import Description from "./Components/Description";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/desc/:id" component={Description} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
