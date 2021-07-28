import React from 'react'
import Markdown from "markdown-to-jsx";

const PreviewInfo = ({setPreview, detail}) => {

    const clickHandler = () => {
        setPreview(false);
    }
    return (
        <div className="previewInfo">
            <div className="previewCon">
                <Markdown className='mdPar' options={{wrapper:'div'}} children={detail.body}/>
            </div>
            <button onClick={clickHandler}>Return</button>
        </div>
    )
}

export default PreviewInfo;
