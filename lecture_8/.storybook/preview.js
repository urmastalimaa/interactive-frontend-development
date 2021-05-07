export const parameters = {
  // This automatically matches onXXX parameters and generates an "action"
  // logger for them
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
