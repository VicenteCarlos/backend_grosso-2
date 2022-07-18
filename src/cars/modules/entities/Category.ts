import { v4 as uuidV4 } from "uuid"
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm"

@Entity("categories") //nessa linha defini-se que essa classe abaixo será uma entidade/tabela
class Category {
    @PrimaryColumn() //defini-se uma chave primaria para a propriedade abaixo (id)
    id?: string //parametro opcional nessa linha

    @Column() //nessa linha defini-se que a prop abaixo será uma coluna da tabela
    name?: string

    @Column()
    description?: string

    @CreateDateColumn() //created e updated _at tem decorators específicos do próprio typeorm observe um deles nessa linha
    created_at?: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category }



