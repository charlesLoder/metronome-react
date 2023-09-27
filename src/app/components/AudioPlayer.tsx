import React, { Component, RefObject } from "react";

interface AudioPlayerProps {
  source: string;
}

class AudioPlayer extends Component<AudioPlayerProps> {
  private audioRef: RefObject<HTMLAudioElement>;

  constructor(props: AudioPlayerProps) {
    super(props);
    this.audioRef = React.createRef();
  }

  play = () => {
    if (this.audioRef.current) {
      this.audioRef.current.play();
    }
  };

  stop = () => {
    if (this.audioRef.current) {
      this.audioRef.current.pause();
      this.audioRef.current.currentTime = 0;
    }
  };

  render() {
    return (
      <audio ref={this.audioRef}>
        <source src={this.props.source} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    );
  }
}

export default AudioPlayer;
