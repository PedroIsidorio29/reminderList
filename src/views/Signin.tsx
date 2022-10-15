import { useState } from 'react';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from "phosphor-react-native";
import List from '../assets/list-svgrepo-com.svg';

import { Input } from '../components/input';
import { Button } from '../components/button';
export function SignIn() {

    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");



    const { colors } = useTheme();

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

            <List width="100" height="100" />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
                Acesse sua conta!
            </Heading>

            <Input
                mb={4}
                placeholder="E-mail"
                InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]} />} />}
                onChangeText={text=>setName(text)}
            />
            <Input
                mb={8}
                placeholder="Senha"
                InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]} />} />}
                secureTextEntry
                onChangeText={setSenha}
            />

            <Button title={"Login"} w="full" />
        </VStack>
    );
} 