    async function getVideoInfo(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching video information:', error);
        }
    }

    // Example usage
    const videoUrl = 'https://api.example.com/videos/12345';
    getVideoInfo(videoUrl).then(data => {
        console.log('Video Information:', data);
    });




    // how to import many things from the api plus do the bro code video and try to do pokemon fetch by your self  