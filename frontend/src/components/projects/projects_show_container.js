import { connect } from 'react-redux';
import ProjectsShow from './projects_show_component';

const mapStateToProps = (state) => {
  return {
    // tweets: Object.values(state.tweets.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchTweets: () => dispatch(fetchTweets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsShow);