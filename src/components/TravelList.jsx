import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlansDisplay, setTravelPlansDisplay] = useState(travelPlansData);

    return (
        <section className="TravelList">
            {travelPlansDisplay.map((locations) => {
                return (
                    <article key={locations.id} className="locationCard">
                        <img src={locations.image} alt={locations.destination} />
                        <div>
                            <p>
                                {locations.destination} ({locations.days} Days)
                            </p>
                            <p>
                                <i>{locations.description}</i>
                            </p>
                            <p>
                                <b>Price:</b> {locations.totalCost} €
                            </p>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}

export default TravelList;