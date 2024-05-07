

function EventCard({ event }) {

    let date = event.timing.slice(0, event.timing.indexOf('T'));
    let time = event.timing.slice(event.timing.indexOf('T')+1);

    let dateArr = date.split('-');

    return (
        <div className="event-card">
            <h3>{event.name}</h3>
            <p>Place: {event.place}</p>
            <p>Time: {time.slice(0,5)}</p>
            <p>Date: {dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0]}</p>
            {/* <p>Description: {event.description}</p>
            <p>Available Spots: {event.availableSpots}/{event.totalSpots}</p> */}
        </div>
    );
}

export {EventCard};