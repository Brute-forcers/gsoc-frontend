import React from 'react'

const PreviewInfo = ({setPreview,detail}) => {

    const clickHandler = () =>{
      setPreview(false);
    }

    return (
        <div className="previewInfo">
            <article className="previewCon">
                <div>{detail}</div>
            </article>
            <button onClick={clickHandler}>Return</button>
        </div>
    )
}

export default PreviewInfo;
