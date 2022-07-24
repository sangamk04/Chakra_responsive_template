import { Button ,Box,Text , Heading, Stack, HStack, PinInputField, PinInput} from '@chakra-ui/react'
import React,{useState} from 'react'

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('')
  return (
    <Box>
        <Heading>Form</Heading>
        <Stack gap="0.5rem">
        <Box>
            <input type="email" placeholder='email'/>
        </Box>

        <Box>
            <input type="password" placeholder='password'/>
        </Box>

        <Box>
        <HStack>
  <PinInput value={otp} onChange={(value) => setOtp
    (value)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
        </Box>
        <Box>
            <Text>{otp}</Text>
        </Box>

        <Box>
           <Button 
           onClick={() =>{
            setIsLoading(true);
            setTimeout(() =>{
                setIsLoading(false);
            }, 700);
           }}
           isLoading={isLoading}
           >
            Sign Up
            </Button>
        </Box>
        </Stack>

    </Box>
      
   
  )
}

export default Form
