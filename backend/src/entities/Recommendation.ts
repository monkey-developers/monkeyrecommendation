import { uuid } from 'uuidv4'

export class Recommendation {
    public readonly id: string
    public name: string
    public rating: number
    public description: string
    public author: string
    public genre: string
    public photo: string

    constructor(props: Omit<Recommendation, 'id'>, id?: string){
        Object.assign(this, props)

        if(!id){
            this.id = uuid()
        }
    }
}