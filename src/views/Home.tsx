import React from 'react';
import { useState } from 'react';
import { HStack, VStack, Image, Text, Flex, IconButton, useTheme, Heading, FlatList, Center } from 'native-base';
import { SignOut, ChatTeardropText } from "phosphor-react-native";
import { Button } from '../components/button';
import { Filter } from '../components/filter';
import { Order, OrderProps } from '../components/order';

export function Home() {
    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([/* {
        id: '123',
        patrimony: "999999",
        when: "18/08/2021 às 12:55",
        status: "open"
    } */]);


    const { colors } = useTheme();

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}>
                <Flex direction="row" >
                    <Image source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/3277/3277306.png"
                    }}
                        alt="Alternate Text"
                        size="2xs"
                        mr={5} />
                    <Text color="white" fontSize="lg" fontFamily="heading" >ReminderList</Text>
                </Flex>

                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                >

                </IconButton>
            </HStack>


            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color="gray.100">
                        Meus Chamados
                    </Heading>
                    <Text color="gray.200">
                        6
                    </Text>
                </HStack>

                <HStack
                    space={3} mb={8}
                >
                    <Filter
                        title={"em andamento"}
                        type='open'
                        onPress={() => setStatusSelected("open")}
                        isActive={statusSelected === "open"}
                    />
                    <Filter
                        title={"Finalizados"}
                        type='closed'
                        onPress={() => setStatusSelected("closed")}
                        isActive={statusSelected === "closed"}
                    />
                </HStack>

                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Order data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    ListEmptyComponent={() => (
                        <Center>
                            <ChatTeardropText color={colors.gray[300]} />
                            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                                Você ainda não possui {"\n"} solicitações
                                {
                                    statusSelected === "open"
                                        ? " em andamento"
                                        : " finalizadas"
                                }
                            </Text>
                        </Center>
                    )}
                />

                <Button title="Nova Solicitação" />
            </VStack>


        </VStack>
    );
}