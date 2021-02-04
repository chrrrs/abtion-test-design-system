import React from "react";
import { Skeleton, Stack, useToast } from "@chakra-ui/react";

function Card(props) {
  const { title, description, status, duration, isClosable } = props;
  const toast = useToast();

  const handleClick = () => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: duration,
      isClosable: isClosable,
    });
  };

  return (
    <Stack onClick={handleClick}>
      <Skeleton height='80px' speed={0} />
      <Skeleton height='20px' speed={0} />
      <Skeleton height='20px' width='50%' speed={0} />
    </Stack>
  );
}

export default Card;
