import { useState } from "react";

function Buttons ({ videoData, showComments, setShowComments }) {
    const [upVotes, setUpVotes] = useState(videoData.upvotes);
    const [downVotes, setDownVotes] = useState(videoData.downvotes);

    function handleUpVotes () {
        setUpVotes(prevVotes => prevVotes + 1);
    };

    function handleDownVotes () {
        setDownVotes(prevVotes => prevVotes + 1);
    }

    function toggleComments () {
        setShowComments(!showComments);
    };

    return (
        <div>
            <div className="votes">
                <button 
                    onClick={handleUpVotes} 
                    value={upVotes}
                >{upVotes}👍</button>
                <button 
                    value={downVotes}
                    onClick={handleDownVotes}
                >{downVotes}👎</button>
            </div>
            <div className="comments">
                <button onClick={toggleComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            </div>
            
        </div>    
    )
};

export default Buttons;