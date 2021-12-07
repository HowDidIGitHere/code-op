
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
import ProjectsNewContainer from './components/projects/create/projects_new_container';
import MainPageContainer from './components/main/main_page_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />

    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      
      <Route exact path="/projects" component={props => <ProjectIndexContainer {...props} />} />

      <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
      <ProtectedRoute exact path="/projects/new" component={ProjectsNewContainer} />
    </Switch>
  </div>
);

export default App;