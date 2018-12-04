import pako from 'pako'
import {
  Base64
} from 'js-base64'

export default {}

export function deflateAndEncode(obj) {
  let binaryString = pako.deflate(JSON.stringify(obj), {
    to: 'string'
  })
  let base64 = Base64.encodeURI(binaryString)
  return base64
}

// {status: bool, obj: {}, message: optional}
export function decodeAndInflate(str) {
  try {
    let base64 = Base64.decode(str)
    let inflate = pako.inflate(base64, {
      to: 'string'
    })
    let obj = JSON.parse(inflate)
    return {
      status: true,
      message: 'Successfully decoded.',
      obj: obj
    }
  } catch (error) {
    return {
      status: false,
      message: error.message.stack ? error.message.stack.split('\n')[0] : 'Error: ' + error.message,
      obj: {}
    }
  }
}
