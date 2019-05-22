import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
netlifyIdentity.init();

export const CurrentUserContext = React.createContext({});

class CurrentUserContextProvider extends React.Component {
  state = {
    isAuthenticated: !!netlifyIdentity.currentUser(),
    user: netlifyIdentity.currentUser(),
  };

  authenticate = ({ showSignup = false }) => {
    netlifyIdentity.open(showSignup && 'signup');
    netlifyIdentity.on('login', user => {
      console.log(user);
      this.setState({
        user,
        isAuthenticated: true,
      });
    });
  };

  logout = callback => {
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.setState({
        user: null,
        isAuthenticated: false,
      });
    });
  };

  render() {
    const { children } = this.props;
    const { user, isAuthenticated } = this.state;
    const currentUser = {
      user,
      isAuthenticated,
      authenticate: this.authenticate,
      logout: this.logout,
    };
    console.log(currentUser);
    return (
      <CurrentUserContext.Provider value={currentUser}>
        {children}
      </CurrentUserContext.Provider>
    );
  }
}

export default CurrentUserContextProvider;