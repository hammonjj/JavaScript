"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute handler={require("./components/homePage")} />
        <NotFoundRoute handler={require("./components/notFoundPage")} />
        <Route name="authorPage" handler={require("./components/authors/authorPage")} />
        <Route name="about" handler={require("./components/about/aboutPage")} />
        <Route name="authorBiography" handler={require("./components/authors/authorBiography")} />
    </Route>
);

//<Route name="authorBiography" path="/authorBiography/:authorId" handler={require("./components/authors/authorBiography")} />
module.exports = routes;