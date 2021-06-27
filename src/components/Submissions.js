import {useState} from "react";
import {useHistory} from "react-router-dom";

const Submissions = () => {
    const [title, setTitle] = useState("");
    const [artist_title, setArtist] = useState("");
    const [place_of_origin, setOrigin] = useState("");
    const [medium_display, setMaterials] = useState("");
    const [id, setID] = useState("");
    const [url, setURL] = useState("");
    const newSubmission = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const art = {title, artist_title, place_of_origin, medium_display, id, url}
        fetch('http://localhost:3004/data', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(art)
        }).then(() => {
            newSubmission.push(`/artworks/${art.id}`);
        })
    }
 
    return (
        <div className="submissions">
            <h1>Submissions</h1>
            <h3>Know a new work that deserves a spot in our hallowed halls? Submit the details below:</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Artist Name:</label>
                 <input
                type="text"
                required
                value={artist_title}
                onChange={(e) => setArtist(e.target.value)}
                />
                <label>Place of Origin:</label>
                 <input
                type="text"
                required
                value={place_of_origin}
                onChange={(e) => setOrigin(e.target.value)}
                />
                <label>Materials Used:</label>
                 <input
                type="text"
                required
                value={medium_display}
                onChange={(e) => setMaterials(e.target.value)}
                />
                <label>ID Number:</label>
                 <input
                type="text"
                required
                value={id}
                onChange={(e) => setID(e.target.value)}
                />
                 <label>URL:</label>
                 <input
                type="text"
                required
                value={url}
                onChange={(e) => setURL(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Submissions;