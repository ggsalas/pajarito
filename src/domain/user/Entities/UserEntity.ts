import {Entity} from '../../common/Entity'

export class UserEntity extends Entity {
  username
  id

  static generateUUID() {
    var dt = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
      c
    ) {
      var r = (dt + Math.random() * 16) % 16 | 0
      dt = Math.floor(dt / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
  }

  static validate({id, username}) {
    if (!username || !id) {
      throw new Error(
        `[UserEntity.validate] forbidden UserEntity username(${username}) id(${id})`
      )
    }
  }

  constructor({id, username}) {
    super()
    this.username = username
    this.id = id
  }

  toJSON() {
    return {
      username: this.username,
      id: this.id
    }
  }
}