import { DataTypes } from 'sequelize'
import { Column, HasMany, Table } from 'sequelize-typescript'
import BaseSchema from './_baseModel'
import AccountingJournalEntry from './accountingJournalEntry'

@Table({ freezeTableName: true, tableName: 'accounting_journals' })
export default class AccountingJournal extends BaseSchema {
  @Column({ allowNull: false, type: DataTypes.DATEONLY })
  transaction_date: Date

  @Column({ allowNull: false, type: DataTypes.TEXT })
  description: string

  @Column({ allowNull: false, type: DataTypes.STRING })
  source_module: string

  @HasMany(() => AccountingJournalEntry, {
    foreignKey: 'accounting_journal_id',
    sourceKey: 'id',
  })
  entries: AccountingJournalEntry[]
}
