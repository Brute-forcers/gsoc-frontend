import React, {useState} from 'react'
import "./style.css";
import Issue from "./issue";
import PreviewInfo from "./previewInfo";

const Repos = ({repo}) => {
    const Issues = repo.issues;
    const [preview, setPreview] = React.useState(false);
    const [issueWorking,setIssueWorking] = useState(repo.issues[0])
    return (
        <>
            {preview ? <PreviewInfo setPreview={setPreview} detail = {issueWorking}/> : (
                <div className="repoContainer">
                    <h3>{repo.repoName}</h3>
                    <div className="issuesContainer">
                        {Issues.map((issue, index) => {
                            return <Issue key={index} issue={issue} setPreview={setPreview} setWorking = {setIssueWorking}/>
                        })}
                    </div>
                </div>)}
        </>
    )
}

export default Repos;