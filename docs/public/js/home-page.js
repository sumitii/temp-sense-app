  /**
   * @fileoverview Handles all interactions on the home page
   */

  /**
  * JS selectors
  * @enum {string}
  */
  const SELECTORS = {
    DROPDOWN: '.js-dropdown-link',
    DROPDOWN_CARET: '.js-caret',
  }

  /**
  * JS classes
  * @enum {string}
  */
  const CLASSES = {
    SHOW: '-show',
    ROTATE: '-rotate',
  }

  /**
  * Controller for Home page
  */
  class HomePage {
    constructor() {
      this.dropdownLinks = [...document.querySelectorAll(SELECTORS.DROPDOWN)];
      this.dropdownIcons = [...document.querySelectorAll(SELECTORS.DROPDOWN_CARET)];

      this.getListHeight = this.getListHeight.bind(this);
      this.handleDropdownShow = this.handleDropdownShow.bind(this);
      this.handleDropdownHide = this.handleDropdownHide.bind(this);
      this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
      this.init();
    }

    /**
    * Handle events on Home page.
    */
    init() {
      this.dropdownLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          const currentTarget = e.currentTarget;
          e.preventDefault();
          this.handleDropdownToggle(currentTarget);
        }, false);
      });
    }

    /**
     * Get the height of the dropdown list for animation.
     */
    getListHeight(listItem) {
      listItem.style.display = 'block';
      const height = listItem.scrollHeight + 'px';
      listItem.style.display = '';
      return height;
    }

    /**
     * Handles animations for displaying the dropdown list.
     */
    handleDropdownShow(elem) {
      const listItem = elem.nextSibling;
      const height = this.getListHeight(listItem);
      const caret = elem.querySelector(SELECTORS.DROPDOWN_CARET);
      caret.classList.add(CLASSES.ROTATE);
      elem.nextSibling.classList.add(CLASSES.SHOW);
      listItem.style.height = height;

      window.setTimeout(() => {
        listItem.style.height = '';
      }, 350);
    }

    /**
     * Handles animations for hiding the dropdown list.
     */
    handleDropdownHide(elem) {
      const listItem = elem.nextSibling;
      const caret = elem.querySelector(SELECTORS.DROPDOWN_CARET);

      listItem.style.height = listItem.scrollHeight + 'px';

      window.setTimeout(() => {
        listItem.style.height = '0';
        caret.classList.remove(CLASSES.ROTATE);
      }, 1);

      window.setTimeout(() => {
        listItem.classList.remove(CLASSES.SHOW);
      }, 350);
    }

    /**
     * Wrapper function to handle dropdown toggle.
     */
    handleDropdownToggle(elem) {
      const listItem = elem.nextSibling;

      if (listItem.classList.contains(CLASSES.SHOW)) {
        this.handleDropdownHide(elem);
      }
      this.handleDropdownShow(elem);
    }
  }

  export {HomePage}
