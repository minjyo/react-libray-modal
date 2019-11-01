import React, { Fragment, useState, useEffect } from "react";
import "./Modal.scss";
import styled, { css } from "styled-components";

const Modal: React.FC<IProps> = props => {
    const [open, setOpen] = useState(false);
    const [response, setResponse] = useState(false);

    const close = (response: boolean) => {
        setOpen(!open);
        setResponse(response);
    };

    // useEffect(() => {
    //     console.log("렌더링이 완료되었습니다!");
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    const Background = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.16);
    `;

    const ModalBox = styled.div`
        position: fixed;
        top: ${props.y}%;
        left: ${props.x}%;
        transform: translate(-50%, -50%);
        width: ${props.width}%;
        height: ${props.height}%;
        border-radius: 10px;
    `;

    const TitleBox = styled.div`
        height: 15%;
        background: ${props.title_background};
        color: ${props.title_color};
        border-radius: 10px 10px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const ContentBox = styled.div`
        height: 65%;
        background: ${props.content_background};
        color: ${props.content_color};
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const BtnBox = styled.div`
        height: 20%;
        background: ${props.content_background};
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
    `;

    const SingleBtn = styled.button`
        border: 2px solid black;
        background: ${props.btn_background};
        color: ${props.btn_color};
        height: 80%;
        width: 70%;
        outline: 0;
    `;

    const DoubleBtn = styled.button`
        border: none;
        border-radius: 10px;
        background: ${props.btn_background};
        color: ${props.btn_color};
        width: 40%;
        height: 80%;
        outline: 0;
    `;

    return (
        <Fragment>
            {open ? (
                <Fragment>
                    <Background></Background>
                    <ModalBox>
                        <TitleBox>
                            <div className="Text">{props.title_text}</div>
                        </TitleBox>
                        <ContentBox>
                            <div className="Text">{props.content_text}</div>
                        </ContentBox>
                        <BtnBox>
                            {props.btn_num === 1 ? (
                                <SingleBtn>{props.btn_text && props.btn_text[0]}</SingleBtn>
                            ) : (
                                <Fragment>
                                    <DoubleBtn onClick={() => close(true)}>{props.btn_text && props.btn_text[0]}</DoubleBtn>
                                    <DoubleBtn onClick={() => close(false)}>{props.btn_text && props.btn_text[1]}</DoubleBtn>
                                </Fragment>
                            )}
                        </BtnBox>
                    </ModalBox>
                </Fragment>
            ) : (
                <div>
                    <button onClick={() => close(false)}>click!</button>
                    <div>response : {response.toString()}</div>
                </div>
            )}
        </Fragment>
    );
};

interface IProps {
    /*
    TODO
    이렇게 각각 말고 스타일 객체로 넘겨주기
    버튼 여러개 만들어서 바로 띄울 수 있게
    버튼 결과값 리턴
    ???? : styled component Modal밖으로 어떻게 빼는지
    */

    //모달 위치
    x?: number;
    y?: number;

    //모달 크기
    width?: number;
    height?: number;

    //제목 텍스트, 배경색, 글자색
    title_text?: string;
    title_background?: string;
    title_color?: string;

    //내용 텍스트, 배경색, 글자색
    content_text?: string;
    content_background?: string;
    content_color?: string;

    //버튼 개수, 텍스트, 배경색, 글자색
    btn_num?: number;
    btn_text?: string[];
    btn_background?: string;
    btn_color?: string;

    //modal border weight, color, radius
}

const defaultProps: IProps = {
    x: 50,
    y: 50,

    width: 20,
    height: 30,

    title_text: "title_text",
    title_background: "white",
    title_color: "blue",

    content_text: "content_text",
    content_background: "orange",
    content_color: "black",

    btn_num: 2,
    btn_text: ["btn1", "btn2"],
    btn_background: "green",
    btn_color: "black"
};

Modal.defaultProps = defaultProps;

export default Modal;
