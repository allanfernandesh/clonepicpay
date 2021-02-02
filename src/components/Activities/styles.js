import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;


export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const Abas = styled.View`
    flex-direction: row;
    padding-bottom: 10px;
`;

export const AllActiveTitle = styled.Text`
    color: ${({ active }) => active === 'all' ? '#10c86e' : '#fff' };
    margin-right: 20px;
    font-size: 18px;
`;
export const MyActiveTitle = styled.Text`
    color: ${({ active }) => active === 'my' ? '#10c86e' : '#fff' };
    margin-right: 10px;
    font-size: 18px;
`;

export const Bar = styled.View`
    background: #10c86e;
    width: 40px;
    height: 5px;
    position: absolute;
    bottom: 0px;
    left:  0px;

    
`;

export const Card = styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 15px;
`;


export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;


export const Avatar = styled.Image``;


export const Description = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 15px;
`;


export const Bold = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;


export const UserName = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const CardFooter = styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const Details = styled.View`
    flex-direction: row;
`;


export const Divider = styled.View`
    width: 2px;
    height: 15px;
    background:  rgba(255,255,255, 0.4);
    margin: 0 10px;
`;


export const Value = styled.Text`
    color: #f75175;
    font-size: 14px;
    font-weight: bold;
`;


export const Date = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;


export const Actions = styled.View`
    flex-direction: row;
`;


export const Option = styled.TouchableOpacity`
      flex-direction: row;
      margin-left: 15px;
      
`;


export const OptionLabel = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 5px;
`;






