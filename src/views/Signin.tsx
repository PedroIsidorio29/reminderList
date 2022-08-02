import { useState } from 'react'
import { VStack, Heading, Icon, useTheme, Button as Button_senha } from 'native-base';
import { Envelope, Key, Eye, EyeSlash } from "phosphor-react-native";
import List from '../assets/list-svgrepo-com.svg';
import { Input } from '../components/input';
import { Button } from '../components/button';


export function SignIn() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { colors } = useTheme();
    const click = () => setShow(!show);

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            {/*Icone de apresentação*/}
            <List width="100" height="100" />

            {/* Cabeçalho */}
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
                Acesse sua conta!
            </Heading>

            {/* Campos para de entrarda de texto */}
            <Input

                placeholder="E-mail"
                InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]} />} />}
                onChangeText={setEmail}
            />
            <Input
                my={4}
                placeholder="Senha"
                InputLeftElement={
                    <Icon ml={4} as={<Key color={colors.gray[300]} />} />
                }
                type={show ? 'text' : 'password'}
                // Botão para a visualização do campo senha
                InputRightElement={
                    <Button_senha
                        size="xs"
                        rounded="none"
                        bg="green.700"
                        w="1/6"
                        h="full"
                        _pressed={{ bg: "green.500" }}
                        onPress={click}>
                        <Icon as={
                            show ?
                                <Eye color={colors.black} /> :
                                <EyeSlash color={colors.black} />
                        } />
                    </Button_senha>
                }
                onChangeText={setPassword}
            />

            <Button title="Login" w="full" />

        </VStack>
    );
} 