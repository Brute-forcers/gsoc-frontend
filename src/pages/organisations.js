import React from 'react'
import Issue from '../components/issue';
import PreviewInfo from '../components/previewInfo';
import SelectOrg from '../components/selectorg';
import "./style.css";

const Organisations = () => {
    const [preview,setPreview] = React.useState(false);

    return (
        <>
        {preview ? <PreviewInfo setPreview={setPreview}/> : (
        <div className="orgContainer">
            <SelectOrg/>
            <div className="issuesContainer">
                <Issue setPreview={setPreview}/>
                <Issue setPreview={setPreview}/>
                <Issue setPreview={setPreview}/>
                <Issue setPreview={setPreview}/>
            </div>
        </div>)}
        
        </>
    )
}

export default Organisations;
