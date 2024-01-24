export class PokemonLista{
    name: string;
    url: string;
    id ?: number
    image ? : string;
    experience ? : number
    height ? :number
    weight ? :number
    species ?: string

    constructor( name : string, url : string,  id ? : number, image ? : string, experience ? : number, height ? : number, weight ? : number,species ?: string){
        this.name = name;
        this.url = url;
        this.id = id;
        this.image = image;
        this.experience = experience
        this.height = height;
        this.weight = weight;
        this.species = species
    }
 
}