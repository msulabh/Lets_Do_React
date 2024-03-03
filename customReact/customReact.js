function customRender(customReactElement, container) {
  const domElement = document.createElement(customReactElement.type);
  domElement.innerHTML = customReactElement.children;
  // for (const prop in customReactElement.props) {
  //   domElement.setAttribute(prop, customReactElement.props[prop]);
  // }
  Object.entries(customReactElement.props).forEach(([prop, value]) => {
    domElement.setAttribute(prop, value);
  });
  container.appendChild(domElement);
}

const customReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    title: "Go to Google.com",
  },
  children: "Google",
};

const mainContainer = document.querySelector("#root");

customRender(customReactElement, mainContainer);
