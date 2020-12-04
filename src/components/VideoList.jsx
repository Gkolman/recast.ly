import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  // console.log('videoList props ->', props);

  var renderedData = props.videos.map( (cv) => {
    return <VideoListEntry onTitleClick = {props.onTitleClick} key = {cv.id.videoId} video = {cv}/>;
  } );

  return (
    <div className="video-list">
      {renderedData}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
