import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import {  
    Wrapper,
    Container,
    Header,
    BalanceContainer,
    BalanceTitle,
    Balance,
    IconContainer,
    BorderIcon,
} from './styles';



export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" style={{marginRight: 30}}/>

                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <IconContainer>
                        <AntDesign name="gift" size={30} color="#10c86e"/>
                        <BorderIcon>
                            <MaterialCommunityIcons name="percent-outline" size={30} color="#10c86e" />
                        </BorderIcon>
                    </IconContainer>
                </Header>
                
                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Container>
        </Wrapper>
    );
}