import {allVideoUrls} from '@/../main/playlist.js'
describe('Playlist', () => {
  it('List', () => {
    const path = '/Users/hide/Downloads/Video'
    const flag = allVideoUrls(path).length > 0
    expect(flag).equal(true)
  })
})
// https://www.quora.com/Where-can-I-get-free-WebM-or-MP4-stock-videos-for-web-design
// https://videos.pexels.com/
