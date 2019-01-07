import fs from 'fs'
import {URL} from 'url'
import mime from 'mime'
import encodeUrl from 'encodeurl'
// import upath from 'upath'

export class Playlist {
  constructor () {
    const base = '/Users/hide/Downloads/Video'
    // const base = '/C:/Users/spin/Videos'
    this.base = new URL(`file://${base}`)
    this.index = -1
    this.videoUrls = allVideoUrls(this.base)
  }
  next () {
    this.index = (this.index >= (this.videoUrls.length - 1)) ? 0 : (this.index + 1)
    return this.videoUrls[this.index]
  }
}

export function allVideoFiles (url) {
  return fs.readdirSync(url).filter((file) => {
    const mt = mime.getType(file)
    let path = `${url}/${file}`
    return fs.statSync(new URL(path)).isFile() && mt && mt.startsWith('video')
  })
}

export function allVideoUrls (url) {
  return allVideoFiles(url).map((file) => {
    return encodeUrl(`${url}/${file}`)
  })
}

export default {
  Playlist, allVideoFiles, allVideoUrls,
}
