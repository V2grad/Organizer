import pako from 'pako'
import { Base64 } from 'js-base64'

export default {}

export function deflateAndEncode (obj) {
  var binaryString = pako.deflate(JSON.stringify(obj), { to: 'string' })
  var base64 = Base64.encodeURI(binaryString)
  return base64
}

export function decodeAndInflate (str) {
  var base64 = Base64.decode(str)
  var inflate = pako.inflate(base64, { to: 'string' })
  var obj = JSON.parse(inflate)
  return obj
}
