import fs from 'fs'
import mime from 'mime'
import encodeUrl from 'encodeurl'
import upath from 'upath'

export class Playlist {
  constructor () {
    this.base = '/Users/hide/Downloads/Video'
    this.index = 0
    this.videoUrls = allVideoUrls(this.base)
  }
  next () {
    console.log(this.videoUrls)
    this.index = (this.index >= this.videoUrls.length) ? 0 : this.index + 1
    return this.videoUrls[this.index]
  }
}

export function allVideoFiles (path) {
  return fs.readdirSync(path).filter((file) => {
    const mt = mime.getType(file)
    return fs.statSync(`${path}/${file}`).isFile() && mt && mt.startsWith('video')
  })
}

export function allVideoUrls (path) {
  const pathUrl = upath.toUnix(path)
  return allVideoFiles(path).map((file) => {
    return encodeUrl(`file://${pathUrl}/${file}`)
  })
}
