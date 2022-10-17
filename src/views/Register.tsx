import React from 'react';
import { VStack } from 'native-base';
import { Header } from '../components/header';
import { Input } from '../components/input';
import { Button } from '../components/button';
export function Register() {

    return (
        <VStack flex={1} p={1} bg="gray.600">
            <Header title='Nova Solicitação' />

            <Input placeholder='Número do patrimônio' />
            <Input
                placeholder='Descrição do Problema'
                flex={1}
                mt={5}
                multiline
                textAlignVertical='top'
            />

            <Button
                title="Cadastrar"
                mt={5}
            />
        </VStack>
    );
}