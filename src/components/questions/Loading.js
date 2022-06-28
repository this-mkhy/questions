import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer } from './QuestionsElements'

const Loading = ({ type, color }) => (
    <LoadingContainer>
        <ReactLoading type={type} color={color} height={'60%'} width={'30%'} />
    </LoadingContainer>
);
 
export default Loading;