import { useState } from 'react';
import { VStack, HStack, IconButton, useTheme, Text, Heading } from 'native-base';
import { SignOut } from "phosphor-react-native";

import List from '../assets/list-svgrepo-com.svg';
import { Filter } from '../components/filter';

export function Home() {
    const [statu_selected, set_status_selected] = useState<'open' | 'closed'>('open');
    const { colors } = useTheme()
    return (
        <VStack flex={1} pb={6} bg="gray.700">
            {/* Header */}
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}
            >
                <List />
                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                />

            </HStack>

            <VStack flex={1} px={6}  >
                <HStack w="full"
                    mt={8}
                    mb={4}
                    justifyContent="space-between"
                    alignItems="center" >

                    <Heading>
                        Meus Chamados
                    </Heading>

                    <Text color="gray.200" >
                        3
                    </Text>
                </HStack>


                <HStack space={3} mb={8}>

                    <Filter title="Em andamento" type="open" onPress={() => set_status_selected('open')} />
                    <Filter title="finalizados" type="closed" onPress={() => set_status_selected('closed')} />
                </HStack>
            </VStack>


        </VStack>
    );
}