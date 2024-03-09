import Card from "./Card";

function Tours({tours,removeTour}) {
    return (
        <div className="container">
            <div className="tittle">
                <h1>Tour With Imran</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>

    );
}

export default Tours;