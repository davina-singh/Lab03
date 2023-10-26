import { useState } from "react";

export default function HornedBeast({ 
    title, 
    image_url, 
    description, 
    handleShowModal 
}) {

    const [likes, setLikes] = useState(0);

    function handleLikes() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <h2>{title}</h2>
            <img 
            src={image_url} 
            onClick={() => handleShowModal({ title, image_url })} 
            />
            <p>{description}</p>
            <p onClick={handleLikes}>❤️ {likes}</p>
        </div>
    );
}