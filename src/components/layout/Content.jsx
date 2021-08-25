import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
        </Switch>
    </main>
)

export default Content