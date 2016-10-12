import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./containers/Layout/Layout";
import Pupu1 from "./containers/Layout/Pupu1";
import Pupu2 from "./containers/Layout/Pupu2";
import Pupu3 from "./containers/Layout/Pupu3";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Pupu1}></IndexRoute>
			<Route path="1" component={Pupu1}></Route>
			<Route path="2" component={Pupu2}></Route>
			<Route path="3" component={Pupu3}></Route>
		</Route>
	</Router>,
	document.getElementById("root")
);
