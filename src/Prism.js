import Prism from "prismjs";

/**
 * Due to some strange typescript behaviour the
 * import Prism statement just doesn't work inside
 * a ts environment. This is an ugly workaround to
 * get back the fancy prism syntax highlighting.
 */
export const initializePrismJs = () => {};
