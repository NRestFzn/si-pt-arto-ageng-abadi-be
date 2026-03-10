'use strict'

import { DataTypes, QueryInterface } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'

type NavigationGroup =
  | 'Overview'
  | 'Master Data'
  | 'Operasional'
  | 'Keuangan'
  | 'Accounting'
  | 'Pengaturan'

const data: { title: string; url: string; icon: string | null; group: NavigationGroup }[] = [
  // Overview
  { title: 'Dashboard', url: '/overview', icon: 'LayoutDashboard', group: 'Overview' },

  // Master Data
  { title: 'Customer', url: '/master-data/customer', icon: 'Users', group: 'Master Data' },
  { title: 'Supplier', url: '/master-data/supplier', icon: 'Container', group: 'Master Data' },
  { title: 'Driver', url: '/master-data/driver', icon: 'Truck', group: 'Master Data' },
  { title: 'Karyawan', url: '/master-data/karyawan', icon: 'UserCircle', group: 'Master Data' },

  // Operasional
  { title: 'Pengisian Gas', url: '/operasional/pengisian', icon: 'Droplets', group: 'Operasional' },
  { title: 'Pemakaian Gas', url: '/operasional/pemakaian', icon: 'Factory', group: 'Operasional' },
  { title: 'Kontrak & Penawaran', url: '/operasional/kontrak-penawaran', icon: 'FileSignature', group: 'Operasional' },

  // Keuangan
  { title: 'Invoice', url: '/keuangan/invoice', icon: 'Receipt', group: 'Keuangan' },
  { title: 'Deposit Wallet', url: '/keuangan/deposit', icon: 'Wallet', group: 'Keuangan' },
  { title: 'Pengeluaran', url: '/keuangan/pengeluaran', icon: 'CreditCard', group: 'Keuangan' },
  { title: 'Petty Cash', url: '/keuangan/petty-cash', icon: 'Coins', group: 'Keuangan' },
  { title: 'Kasbon', url: '/keuangan/kasbon', icon: 'Banknote', group: 'Keuangan' },
  { title: 'Payroll (Gaji)', url: '/keuangan/gaji', icon: 'FileText', group: 'Keuangan' },

  // Accounting
  { title: 'Buku Besar', url: '/accounting/coa', icon: 'BookOpen', group: 'Accounting' },
  { title: 'Jurnal Umum', url: '/accounting/jurnal', icon: 'FileText', group: 'Accounting' },
  { title: 'Laporan Keuangan', url: '/accounting/laporan', icon: 'BarChart3', group: 'Accounting' },
  { title: 'Reporting Excel', url: '/reporting', icon: 'FileSpreadsheet', group: 'Accounting' },

  // Pengaturan
  { title: 'User Management', url: '/master-data/user-management', icon: 'Users', group: 'Pengaturan' },
  { title: 'Role Access', url: '/role-access', icon: 'ShieldCheck', group: 'Pengaturan' },
]

/** @type {import('sequelize-cli').Migration} */
export async function up(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  const formData = data.map((item) => ({
    id: uuidv4(),
    title: item.title,
    url: item.url,
    icon: item.icon,
    group: item.group,
    created_at: new Date(),
    updated_at: new Date(),
  }))

  await queryInterface.bulkInsert('navigations', formData)
}

export async function down(
  queryInterface: QueryInterface,
  Sequelize: typeof DataTypes
) {
  await queryInterface.bulkDelete('navigations', {})
}
