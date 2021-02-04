import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((Story) => (
  <ChakraProvider resetCSS>
    <Story />
  </ChakraProvider>
));
