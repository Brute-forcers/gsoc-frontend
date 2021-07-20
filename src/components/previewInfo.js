import React from 'react'

const PreviewInfo = ({setPreview}) => {

    const clickHandler = () =>{
      setPreview(false);
    }

    return (
        <div className="previewInfo">
            <article className="previewCon">
                <h1>All Info about the issue</h1>
            </article>
            <button onClick={clickHandler}>Return</button>
        </div>
    )
}

export default PreviewInfo;
