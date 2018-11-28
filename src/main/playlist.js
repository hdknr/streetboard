export class Playlist {
  constructor () {
    this.base = 'file:///Users/hide/Downloads/Video'
    this.index = 0
    this.video = [
      'fullsizeoutput_39d.mp4',
      'fullsizeoutput_841.mp4',
      'fullsizeoutput_eb0.mp4',
      'videoviewdemo.mp4',
      'fullsizeoutput_3a3.mp4',
      'fullsizeoutput_eaf.mp4',
      'fullsizeoutput_eb4.mp4',
    ]
  }
  next () {
    const i = this.index
    this.index = (i >= this.video.length) ? 0 : this.index + 1
    return `${this.base}/${this.video[i]}`
  }
}
