import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "../../../reactnativebaseUI/src/Navigator/node_modules/react-navigation"

// redux
import { connect } from "react-redux"
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "./node_modules/react-navigation-redux-helpers"

import WelcomePage from "../Pages/WelcomePage"
import HomePage from "../Pages/HomePage"
import DetailPage from "../Pages/DetailPage"
import AsDemoPage from "../Pages/AsDemoPage"

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage
  },
  AsDemoPage: {
    screen: AsDemoPage
  }
})

export const RootNavigator = createAppContainer(
  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  })
)

const AppWithNavigationState = createReduxContainer(RootNavigator, "root")

export const middleware = createReactNavigationReduxMiddleware(state => state.nav, "root")

export const rootCom = "Init"

const mapStateToProps = state => {
  return {
    state: state.nav
  }
}
export default connect(mapStateToProps)(AppWithNavigationState)
