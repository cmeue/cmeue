/*eslint-disable no-unused-vars*/
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./containers/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import StudentListPage from "./containers/StudentListPage/StudentListPage";
import SearchPage from "./containers/SearchPage/SearchPage";
import SettingsPage from "./containers/SettingsPage/SettingsPage";
import ChatsPage from "./containers/ChatsPage/ChatsPage";
import EditProfilePage from "./containers/EditProfilePage/EditProfilePage";
/*eslint-enable*/

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Homepage}></IndexRoute>
			<Route path="chatspage" component={ChatsPage}></Route>
			<Route path="searchpage" component={SearchPage}></Route>
			<Route path="studentlistpage" component={StudentListPage}></Route>
			<Route path="settingspage" component={SettingsPage}></Route>
			<Route path="editprofilepage" component={EditProfilePage}></Route>
		</Route>
	</Router>,
	document.getElementById("root")
);
