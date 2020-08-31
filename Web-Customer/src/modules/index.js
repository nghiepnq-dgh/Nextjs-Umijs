// /* eslint-disable no-unused-vars */
import loginReducer, { NAME as LOGIN_NAME } from "./login/reducers";
// import authReducers, { NAME as AUTH_NAME } from './auth/reducers';
// import solutionReducers, { NAME as SOLUTION_NAME } from './solutions/reducers';
// import profileProviderReducers, { NAME as PROVIDER_NAME } from './profileProvider/reducers';
// import profileCustomerReducers, { NAME as CUSTOMER_NAME } from './profileCustomer/reducers';

export default (state) => ({
  [LOGIN_NAME]: loginReducer,
  // [AUTH_NAME]: authReducers,
  // [SOLUTION_NAME]: solutionReducers,
  // [PROVIDER_NAME]: profileProviderReducers,
  // [CUSTOMER_NAME]: profileCustomerReducers
});
