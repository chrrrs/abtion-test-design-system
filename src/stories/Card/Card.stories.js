import React from "react";
import Card from "../../components/Card";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Success = Template.bind({});
Success.args = {
  title: "Success",
  description: "This is the description",
  status: "success",
  duration: 9000,
  isClosable: true,
};

export const Error = Template.bind({});
Error.args = {
  title: "Error",
  description: "This is the description",
  status: "error",
  duration: 9000,
  isClosable: false,
};
