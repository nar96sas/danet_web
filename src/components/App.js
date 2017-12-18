import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home.js';
import PageNotFound from '../containers/NotFound/404.js';
import FilmPage from '../containers/Film/FilmPage.js';
import SeriesPage from '../containers/Film/SeriesPage.js';
import Page from '../containers/Page.js';
import ListFilmsPage from '../containers/Film/ListFilmsPage.js';
import ListFilmsByCategory from '../containers/Film/ListFilmsByCategory.js';
import ArtistPage from '../containers/Artist/ArtistPage.js';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={() => <Page> <Home /> </Page>} />
                <Route path='/video/:name' component={() => <Page> <FilmPage /> </Page>} />
                <Route path='/series/:name' component={() => <Page> <SeriesPage /> </Page>} />
                <Route path='/category/:classify/:type' component={ListFilmsByCategory} />
                <Route path='/category/:category' component={ListFilmsPage} />
                <Route path='/artist/:name' component={ArtistPage} />

                {/* <Route path='/collection/:type' component={CollectionPage} />
                <Route path='/listFilm/:classify/:type/:page' component={ListFilmPage} />                
                <Route path='/film/:filmName' component={FilmPage} />
                <Route path='/cinema' component={CinemaPage} />
                <Route path='/free' component={FreePage} /> */}
                <Route path='*' component={PageNotFound} />
            </Switch>
        )
    }
}

