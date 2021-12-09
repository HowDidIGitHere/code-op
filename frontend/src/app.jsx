
import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './components/nav/navbar_container';
import Modal from './components/modals/modal';

import LoginFormContainer from './components/session/login_form_container';
import SignupFormContainer from './components/session/signup_form_container';
import UserProfileContainer from './components/user/user_profile_container'
import ProjectIndexContainer from './components/projects/index/projects_index_container';
import MainPageContainer from './components/main/main_page_container';
import ProjectsNewContainer from './components/projects/create/projects_new_container';
import ProjectsShowContainer from './components/projects/show/projects_show_container';


const App = () => (
  <div>
    <NavBarContainer />
    <Modal />

    <Switch>
      <Route exact path="/" component={props => <MainPageContainer {...props} />} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <Route exact path="/projects" component={props => <ProjectIndexContainer {...props} />} />

      <ProtectedRoute exact path="/users/:id" component={UserProfileContainer} />
      <ProtectedRoute exact path="/projects/new" component={ProjectsNewContainer} />
      <ProtectedRoute exact path="/projects/:id" component={ProjectsShowContainer} />
    </Switch>
  </div>
);

export default App;