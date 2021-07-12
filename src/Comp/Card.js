import React from 'react';
import {Box, Image,Text,Divider} from "@chakra-ui/react";
import {Link} from "react-router-dom";

function Card({ImgUrl ,MainText,Lang ,Des,Linki}) {
    return (
        <div>
            <Link to={{pathname: Linki}} target="_blank">
             <Box   margin="1%"  borderRadius="25px" boxShadow="2xl"  >
                <Image  src={ImgUrl} background="white" overflow="hidden" align="center" width="100%" height="50%" borderRadius="25px" />
                <Text
                fontSize="3xl"
                fontWeight="extrabold" align="center"
                mt="5%"
                >
                {MainText}</Text>
                <Divider/>
                <Box margin="2%" flexDirection="row">

                <Text
                 fontWeight="extrabold" 
                 bgGradient="linear(to-l, cyan.300 ,#d391fa)"
                 bgClip="text"
                 align="center"

                 
                 >
                {
                    Lang.map(x => <>
                    ||  { x.toUpperCase()} 
                    </>
                    )
                    
                }
                ||




                </Text>
               
                </Box>
                <Divider/>
                <br/>
                <Text
                fontWeight="bold" align="center"
                
                
                >{Des}
                      </Text>



            </Box>
         </Link>
        </div>
    );
}

export default Card;