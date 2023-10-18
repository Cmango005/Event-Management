import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredEvent } from "../utility/LocalStorage";
import { GiConfirmed } from 'react-icons/gi';

const JoinedEvents = () => {
    const eitems = useLoaderData();
  const [appliedEvents, setAppliedEvents] = useState([])
  useEffect(() => {
    const storedEventId = getStoredEvent();
    if (eitems.length > 0) {
      const eventsApplied = [];
      for (const id of storedEventId) {
        const eitem = eitems.find((eitem ) => eitem .id === id);
        if (eitem ) {
          eventsApplied.push(eitem );
        }
      }
      setAppliedEvents(eventsApplied);
    }
  }, [eitems]);
    return (
        <div className="mx-auto container">
            {
                appliedEvents.map((eitem ) => <div key={eitem .id}>
                <div className="flex mt-5 rounded-lg w-10/12 space-x-5">
                  <div>
                    <img className="w-52 h-44" src={eitem .img} alt="" />
                  </div>
                  <div className="mt-3 space-y-2">
                    <h2 className="font-bold text-lg">{eitem .name}</h2>
                    <h3 className="font-bold">
                     Entry Fee: ${eitem .entry_fee}
                    </h3><GiConfirmed></GiConfirmed>
                    <p>Date: {eitem.date}</p>
                    <p>Location: {eitem.location}</p>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default JoinedEvents;