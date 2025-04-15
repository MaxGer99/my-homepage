import React from 'react';

const VideoSection = () => {
    return (
        <section className="video-section">
            <h2>About Me</h2>
            <div className="video-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/your-video-id" 
                    title="About Me Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <p>Welcome to my homepage! Here you can learn more about my journey and what I do.</p>
        </section>
    );
};

export default VideoSection;