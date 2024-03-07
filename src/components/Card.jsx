import { useState } from "react";

function Card({ id, name, info, image, price,removeTour}) {
    const [readmore, setreadmore] = useState(false);
    const descreption = readmore ? info:`${info.substring(0, 200)}....`;

    function readmoreHeandler() {
        setreadmore(!readmore);
    }
    
    return (
        <div className="card">
            <img src={image} className="image" />

            <div className="tour-info">

                <div className="tour-details">
                    <h4 className="tour-price"> ₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {descreption}
                    <span className="read-more" onClick={readmoreHeandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;