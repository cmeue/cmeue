import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./containers/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import StudentListPage from "./containers/StudentListPage/StudentListPage";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Homepage}></IndexRoute>
			<Route path="2" component={StudentListPage}></Route>
			<Route path="3" component={Homepage}></Route>
		</Route>
	</Router>,
	document.getElementById("root")
);
