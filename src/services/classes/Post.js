export default class Post {
    constructor(data) {
        if (!data) return

        this.id = data.id ?? null
        this.name = data.name ?? null
    }
}
