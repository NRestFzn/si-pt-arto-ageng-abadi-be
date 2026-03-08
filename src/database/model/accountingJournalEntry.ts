import { DataTypes } from 'sequelize'
import { BelongsTo, Column, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'
import AccountingJournal from './accountingJournal'

@Table({ freezeTableName: true, tableName: 'accounting_journal_entries' })
export default class AccountingJournalEntry extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.UUID })
  accounting_journal_id: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  account_code: string

  @Column({ allowNull: false, type: DataTypes.DECIMAL(10, 2), defaultValue: 0 })
  debit: number

  @Column({ allowNull: false, type: DataTypes.DECIMAL(10, 2), defaultValue: 0 })
  credit: number

  @BelongsTo(() => AccountingJournal, {
    foreignKey: 'accounting_journal_id',
    targetKey: 'id',
  })
  journal: AccountingJournal
}
