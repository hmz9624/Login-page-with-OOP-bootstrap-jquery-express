export default class User{
    constructor(id,email, password, checkbox, range) {
        this.id = id
        this.email = email
        this.password = password
        this.checkbox = checkbox
        this.range = range
    }
    log() {
        console.log(this.email)
    }
}