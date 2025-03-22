const router = require('express').Router();

const { controllers: authControllers} = require('@controllers/auth');
const { controllers: productControllers} = require('@controllers/products');
const { controllers: buyControllers} = require('@controllers/buy');
const { controllers: sellControllers} = require('@controllers/sell');
const { controllers: dueControllers} = require('@controllers/due');
const { controllers: accountControllers} = require('@controllers/accounts');
const { controllers: userControllers} = require('@controllers/user');
const { controllers: expenseControllers} = require('@controllers/expense');
const dashboardControllers  = require('@controllers/dashboard');


// middleware -- check authentication
const { checkAuthenticate } = require('@root/middlewares/checkAuthenticate');


// dashboard controllers 
router.get(
    '/api/v1/dashboard',
    checkAuthenticate,
    dashboardControllers.getDashboard
)

// admin login routes
router.post(
    '/api/v1/auth/admin/login',
    authControllers.loginAdmin
);

// employeeLogin
router.post(
    '/api/v1/auth/employee/login',
    authControllers.employeeLogin
);


// employee and users
router.post(
    '/api/v1/users',
    checkAuthenticate,
    userControllers.createEmployee
)

router.get(
    '/api/v1/users',
    checkAuthenticate,
    userControllers.getEmployees
)

router.put(
    '/api/v1/users/:id',
    checkAuthenticate,
    userControllers.updateEmployee
)


// products controllers
router.get(
    '/api/v1/products',
    checkAuthenticate,
    productControllers.getAllProduct
)

router.post(
    '/api/v1/products',
    checkAuthenticate,
    productControllers.createProduct
)

router.put(
    '/api/v1/products/:id',
    checkAuthenticate,
    productControllers.updateProduct    
)

router.delete(
    '/api/v1/products/:id',
    checkAuthenticate,
    productControllers.deleteProduct
)

// buy controllers
router.get(
    '/api/v1/buy',
    checkAuthenticate,
    buyControllers.getAllBuyList
)

router.post(
    '/api/v1/buy',
    checkAuthenticate,
    buyControllers.createBuyList
)

router.put(
    '/api/v1/buy/:id',
    checkAuthenticate,
    buyControllers.updateBuyList
)

router.delete(
    '/api/v1/buy/:id',
    checkAuthenticate,
    buyControllers.deleteBuyList
)

// sell controllers
router.get(
    '/api/v1/sell',
    checkAuthenticate,
    sellControllers.getAllSell
)

router.post(
    '/api/v1/sell',
    checkAuthenticate,
    sellControllers.addSell
)

router.put(
    '/api/v1/sell/:id',
    checkAuthenticate,
    sellControllers.updateSell
)

router.delete(
    '/api/v1/sell/:id',
    checkAuthenticate,
    sellControllers.deleteSell
)

// due controllers

router.get(
    '/api/v1/due',
    checkAuthenticate,
    dueControllers.getAllDue
)

router.post(
    '/api/v1/due',
    checkAuthenticate,
    dueControllers.addDue
)

router.put(
    '/api/v1/due/:id',
    checkAuthenticate,
    dueControllers.updateDue
)

router.put(
    '/api/v1/due/addAmount/:id',
    checkAuthenticate,
    dueControllers.addAmount
)

router.delete(
    '/api/v1/due/:id',
    checkAuthenticate,
    dueControllers.deleteDue
)

// account
router.get(
    '/api/v1/accounts',
    checkAuthenticate,
    accountControllers.getAccount
)

router.post(
    '/api/v1/accounts',
    checkAuthenticate,
    accountControllers.addAccount
)

router.put(
    '/api/v1/accounts/:id',
    checkAuthenticate,
    accountControllers.updateAccount
)


// expenses
router.get(
    '/api/v1/expense',
    checkAuthenticate,
    expenseControllers.getAllExpenses
)

router.post(
    '/api/v1/expense',
    checkAuthenticate,
    expenseControllers.addExpense
)

router.put(
    '/api/v1/expense/:id',
    checkAuthenticate,
    expenseControllers.updateExpense
)



module.exports = router;