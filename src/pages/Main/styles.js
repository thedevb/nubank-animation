import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background: #8810AE;
    justify-Content: center;
`

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

export const Card = styled.View`
    flex: 1;
    background: #FFF;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
`;

export const CardHeader = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 30px;
`;
export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
`;
export const Title = styled.Text`
    font-size: 13px;
    color: #999;
`;
export const CardFooter = styled.View`
    padding: 30px;
    background: #eee;
    border-radius: 4px;
`;
export const Annotation = styled.Text`
    font-size: 13px;
    color: #333;
`;
export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;