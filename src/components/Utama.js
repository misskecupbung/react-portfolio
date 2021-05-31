import React from 'react';
import {Route, Switch} from "react-router-dom";

import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Kontak from './Kontak';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/beranda" component={Beranda} />
        <Route exact path="/tentangsaya" component={TentangSaya} />
        <Route exact path="/karya" component={Karya} />
        <Route exact path="/kontak" component={Kontak} />
    </Switch>
)

export default Utama;