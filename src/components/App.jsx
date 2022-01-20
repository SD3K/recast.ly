import Search from '/compiled/src/components/Search.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  // When a video in the videoList is clicked, set the currentVideo to the video that was clicked
  onListItemClick(video) {
    this.setState({
      currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search"><h5><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="videoPlayer"><h5><VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div id="videoList"><h5><VideoList videos={this.state.videoList} onListItemClick={this.onListItemClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
