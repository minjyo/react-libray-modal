import React, { Fragment, useState } from "react";
import "./Modal.scss";
import styled, { css } from "styled-components";
import { any } from "prop-types";

const Modal: React.FC<IProps> = props => {
    const [rest, setRest] = useState(0);

    const decreaseRest = () => {
        setRest(rest - 1);
    };

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
        top: ${props.style.x}%;
        left: ${props.style.y}%;
        transform: translate(-50%, -50%);
        width: ${props.style.width}%;
        height: ${props.style.height}%;
        border-radius: 10px;
    `;

    const TitleBox = styled.div`
        height: 15%;
        background: ${props.style.title_background};
        color: ${props.style.title_color};
        border-radius: 10px 10px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const ContentBox = styled.div`
        height: 65%;
        background: ${props.style.content_background};
        color: ${props.style.content_color};
        word-break: break-all;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
    `;

    const BtnBox = styled.div`
        height: 20%;
        background: ${props.style.content_background};
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 0px 0px 10px 10px;
    `;

    const Btn = styled.div`
        background: ${props.style.btn_background};
        color: ${props.style.btn_color};
        height: 80%;
        width: 70%;
        outline: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    `;

    return (
        <Fragment>
            <Background></Background>
            <ModalBox>
                <TitleBox>{props.title}</TitleBox>
                <ContentBox>
                    {props.content.split("\n").map(line => {
                        return (
                            <span>
                                {line}
                                <br />
                            </span>
                        );
                    })}
                </ContentBox>
                <BtnBox>
                    <Btn>{props.btn}</Btn>
                </BtnBox>
            </ModalBox>
        </Fragment>
    );
};

interface IProps {
    style?: any;

    handleModal: () => void;

    title: React.ReactNode;
    content: string;
    btn: React.ReactNode;
}

Modal.defaultProps = {
    style: {
        x: 50,
        y: 50,

        width: 50,
        height: 50,

        title_background: "white",
        title_color: "black",

        content_background: "white",
        content_color: "black",

        btn_num: 2,
        btn_background: "skyblue",
        btn_color: "white"
    }
};

export default Modal;
