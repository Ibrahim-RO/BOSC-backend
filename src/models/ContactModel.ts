import { Table, Column, DataType, AllowNull, Model } from 'sequelize-typescript'

@Table({
    tableName: 'contact'
})

class Contact extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    }) 
    declare fullName: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100)
    })
    declare email: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(50)
    })
    declare state: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(30)
    })
    declare service: string

    @Column({
        type: DataType.TEXT
    })
    declare message: string
}

export default Contact