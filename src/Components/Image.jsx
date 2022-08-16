//Complete the Custom Image component based on the props that it expects to receive
import { Image } from '@chakra-ui/react'

export const Imagee = ({src,alt,borderRadius, width, height, fit}) => {
  // src, alt, borderRadius, width, height, fit
  return( 
    <div>
    <Image src={src} alt={alt} borderRadius={borderRadius} width={width} fit={fit} height={height} />
  <img alt="" />
  </div>
  )
};
