import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import ModalPortal from "./ModalPotal";

const App: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(!open);
    };

    // var style = {
    //     x: 50,
    //     y: 50,

    //     width: 50,
    //     height: 50,

    //     title_background: "white",
    //     title_color: "blue",

    //     content_background: "orange",
    //     content_color: "black",

    //     btn_num: 2,
    //     btn_background: "green",
    //     btn_color: "black"
    // };
    return (
        <div className="App">
            <button onClick={() => handleModal()}>click!</button>
            {open ? (
                <ModalPortal>
                    <Modal
                        handleModal={() => handleModal()}
                        title={<h1>Modal Title</h1>}
                        content={
                            "첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈 첫줄 자동줄바꿈\n 두번째줄두번째줄두번째줄두번째줄두번째줄\n "
                        }
                        btn={<div>close</div>}
                    />
                </ModalPortal>
            ) : null}
        </div>
    );
};

export default App;
