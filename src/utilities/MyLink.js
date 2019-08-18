/**
 * Represents a link to a page
 */
class MyLink {
  constructor(name, path, component, exact = false) {
    this.name = name;
    this.path = path;
    this.exact = exact; // whether or not the path has to be exact
  }

  /**
   * Determines whether a link is active
   * @returns true if so, otherwise false
   */
  isActive() {
    // TODO: not working

    // maybe https://github.com/jense5/browser-monads ?

    // "Gatsby's making me so sad, when I build, it's not running this "
    // https://www.youtube.com/watch?v=taupuK6oND4

    // return document.URL.split('/')[3] === this.path;
  }
}
export default MyLink;
