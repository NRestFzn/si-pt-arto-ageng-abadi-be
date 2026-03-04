import express, { Router } from 'express'
import { RoleController } from './controller/role.controller'
import { AuthController } from './controller/auth.controller'
import { UserController } from './controller/user.controller'
import { NavigationController } from './controller/navigation.controller'
import { RoleHasNavigationController } from './controller/roleHasNavigation.controller'
import { UserHasNavigationController } from './controller/userHasNavigation.controller'
import { SupplierController } from './controller/supplier.controller'
import { DriverController } from './controller/driver.controller'
import { CustomerController } from './controller/customer.controller'
import { EmployeeController } from './controller/employee.controller'
import { PurchaseController } from './controller/purchase.controller'
import { UsageDeltaPressureController } from './controller/usageDeltaPressure.controller'
import { UsageEvcController } from './controller/usageEvc.controller'
import { UsageTurbineController } from './controller/usageTurbine.controller'
import { ContractKeyTermController } from './controller/contractKeyTerm.controller'
import { ContractPjbgController } from './controller/contractPjbg.controller'
import { OfferController } from './controller/offer.controller'
import { InvoiceController } from './controller/invoice.controller'
import { InvoiceUsageController } from './controller/invoiceUsage.controller'
import { DepositController } from './controller/deposit.controller'
import { ExpenseController } from './controller/expense.controller'
import { PettyCashController } from './controller/pettyCash.controller'
import { CashAdvanceController } from './controller/cashAdvance.controller'
import { PayrollController } from './controller/payroll.controller'

const Route: Router = express.Router()

Route.use('/role', RoleController)
Route.use('/auth', AuthController)
Route.use('/user', UserController)
Route.use('/navigations', NavigationController)
Route.use('/role_has_navigations', RoleHasNavigationController)
Route.use('/user_has_navigations', UserHasNavigationController)
Route.use('/suppliers', SupplierController)
Route.use('/drivers', DriverController)
Route.use('/customers', CustomerController)
Route.use('/employees', EmployeeController)
Route.use('/purchases', PurchaseController)
Route.use('/usage_delta_pressures', UsageDeltaPressureController)
Route.use('/usage_evcs', UsageEvcController)
Route.use('/usage_turbines', UsageTurbineController)
Route.use('/contract_key_terms', ContractKeyTermController)
Route.use('/contract_pjbgs', ContractPjbgController)
Route.use('/offers', OfferController)
Route.use('/invoices', InvoiceController)
Route.use('/invoice_usages', InvoiceUsageController)
Route.use('/deposits', DepositController)
Route.use('/expenses', ExpenseController)
Route.use('/petty_cashes', PettyCashController)
Route.use('/cash_advances', CashAdvanceController)
Route.use('/payrolls', PayrollController)

export { Route as v1Route }
