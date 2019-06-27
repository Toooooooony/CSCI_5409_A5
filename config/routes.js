/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/login': {
    view: 'pages/login'
  },
  '/': {
    view: 'pages/index'
  },
  '/mortgage': {
    view: 'pages/mortgage'
  },
  // '/employee': { view: 'pages/employeePage' },
  // '/message_sent': { view: 'pages/messageSentPage(dummy)' },
  'POST /callback_url_egister': 'CallbackRegisterController.registerCallback',
  'POST /send_employee_info': 'EmployeeController.sendEmployeeInfo',
  'POST /authenticate': 'EmployeeLoginController.authenticateEmployeeInfo',


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/


};
