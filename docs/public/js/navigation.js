/**
 * @fileoverview Handles all interactions on the navigation drawer.
 */

/**
* JS selectors
* @enum {string}
*/
const SELECTORS = {
  NAVIGATION: '.js-navigation',
  NAVIGATION_MENU_BUTTON: '.js-navigation-button',
  NAVIGATION_CLOSE_BUTTON: '.js-close-navigation',
}

/**
* JS classes
* @enum {string}
*/
const CLASSES = {
  SHOW: '-show',
}

/**
* Controller for Navigation drawer.
*/
class Navigation {
  constructor() {
    this.navigation = document.querySelector(SELECTORS.NAVIGATION);
    this.navigationMenuButton = document.querySelector(
      SELECTORS.NAVIGATION_MENU_BUTTON);
    this.navigationCloseButton = document.querySelector(
      SELECTORS.NAVIGATION_CLOSE_BUTTON);

    this.openNavigationDrawer = this.openNavigationDrawer.bind(this);
    this.closeNavigationDrawer = this.closeNavigationDrawer.bind(this);
    this.init();
  }

  /**
  * Handle events on Navigation page.
  */
  init() {
    this.navigationMenuButton.addEventListener('click', this.openNavigationDrawer);
    this.navigationCloseButton.addEventListener('click', this.closeNavigationDrawer);
  }

  openNavigationDrawer() {
    this.navigation.classList.add(CLASSES.SHOW);
  }

  closeNavigationDrawer() {
    this.navigation.classList.remove(CLASSES.SHOW);
  }
}

export { Navigation }
