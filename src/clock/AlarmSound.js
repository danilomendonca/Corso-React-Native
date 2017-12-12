import { Asset, Audio } from 'expo';

class AlarmSound{

  async play(music){
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    const source = {
      uri: music.uri
    };
    const initialStatus = {
      shouldPlay: true,
      rate: 1.0,
      shouldCorrectPitch: true,
      volume: music.level,
      isMuted: false,
      isLooping: false,
      // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
      // androidImplementation: 'MediaPlayer',
    };
    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this.onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;
  }

  onPlaybackStatusUpdate(){}

  stop(){
    this.playbackInstance.stopAsync();
  }
}

export default AlarmSound;
