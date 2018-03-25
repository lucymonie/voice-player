import React, { Component } from 'react';
import { elementType } from 'react-prop-types';
import SpeechRecognition from 'react-speech-recognition';
import { getVideo } from '../helpers/fetchVideo';

const propTypes = {
  transcript: elementType.string,
  finalTranscript: elementType.string,
  resetTranscript: elementType.func,
  browserSupportsSpeechRecognition: elementType.bool,
}

class Dictaphone extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showPlayer: false,
      content: '',
    }
  }

  requestVideo = () => {
    getVideo(this.props.finalTranscript)
    .then((response) => {
      let content = response.items[0].id.videoId;
      this.setState({
        showPlayer: true,
        content: `https://www.youtube.com/embed/${content}?enablejsapi=1&autoplay=1`,
      })
    })
  }

  render() {
    const { transcript, finalTranscript, resetTranscript, browserSupportsSpeechRecognition } = this.props;
    return (
      <div>
        <div className="words">{transcript}</div>
        <button onClick={this.requestVideo}>Request</button>
        <button onClick={resetTranscript}>Reset</button>
        {this.state.showPlayer &&
        <div className="container">
          <div className="center-align">
            <iframe title="player" id="player" type="text/html" width="640" height="390"
            src={this.state.content} frameBorder="0"></iframe>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)
