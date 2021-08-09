import React, {useState} from 'react'
import "./style.css";
import Issue from "./issue";
import PreviewInfo from "./previewInfo";

const Repos = ({repo}) => {
    const Issues = repo.issues;
    const [preview, setPreview] = React.useState(false);
    const [issueWorking,setIssueWorking] = useState(repo.issues[0])
    return (
        <div className="repoContainer">
            {preview ? <PreviewInfo setPreview={setPreview} detail = {issueWorking}/> : (
                <div>
                    <h2>{repo.repoName}</h2>
                    <div className="issuesContainer">
                        {Issues.map((issue, index) => {
                            return <Issue key={index} issue={issue} setPreview={setPreview} setWorking = {setIssueWorking}/>
                        })}
                    </div>
                </div>)}
        </div>
    )
}

export default Repos;
