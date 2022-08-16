//Complete the custom Input component based on the props that it expects to receive
      /* type, size, variant, value and onChange */

import { Box } from "@chakra-ui/react";

export const Input = ({type, size, variant,onChange}) => {
  return(
    <Box border={"1px solid black"} w="fit-content">
   <input type={type} border={"1px solid black"}
  size={size}
   variant={variant} 
    onChange={onChange}/>
    </Box>
    )
};
