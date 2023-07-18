function Video ({ videoData }) {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={videoData.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={videoData.title}
            />
        </div>
    )
};

export default Video;