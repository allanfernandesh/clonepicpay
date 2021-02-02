import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


import {
    Container,
    Header,
    Title,
    Abas,
    AllActiveTitle,
    MyActiveTitle,
    Bar,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Divider,
    Value,
    Date,
    Actions,
    Option,
    OptionLabel,

} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities() {

    const [abaActive, setAbaActive] = useState('all');

  

    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
                <Abas>
                    <TouchableWithoutFeedback onPress={() => setAbaActive('all')}>
                        <AllActiveTitle active={abaActive}>Todas</AllActiveTitle>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setAbaActive('my')}>
                        <MyActiveTitle active={abaActive}>Minhas</MyActiveTitle>
                    </TouchableWithoutFeedback>
                    <Bar />
                </Abas>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@allanfernadesh</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Alan Fernandes</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 100,00</Value>
                        <Divider />

                        <Feather name='lock' size={14} color='#fff'/>
                        <Date>há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color='#fff'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color='#fff'/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}