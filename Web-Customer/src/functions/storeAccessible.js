import { reduxInstance } from './withReduxStore'

function defaultDispatch () {
  console.problem('Missing store')
}

class StoreAccessible {
  /**
   * @protected
   */
  getStates () {
    return (reduxInstance && reduxInstance.getState()) || {}
  }

  /**
   * @protected
   */
  getState (moduleName) {
    if (!moduleName) {
      return {}
    }
    const store = (reduxInstance && reduxInstance.getState()) || {}
    return store[moduleName] || {}
  }

  /**
   * @protected
   */
  get dispatch () {
    return (reduxInstance && reduxInstance.dispatch) || defaultDispatch
  }
}

export default new StoreAccessible()
