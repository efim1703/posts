export default class Material {
    constructor(data) {
        if (!data) return

        this.id = data.id ?? null
        this.material_id = data.material_id ?? null
        this.title = data.title ?? null
        this.category = data.category ?? null
        this.country = data.country ?? null
        this.brand = data.brand ?? null
        this.description = data.description ?? null
        this.price = data.price ?? null
        this.discountPrice = data.discountPrice ?? ''
        this.imgSrc = data.imgSrc ?? null
    }
}
