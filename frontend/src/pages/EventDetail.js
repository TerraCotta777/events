import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  console.log(params);

  return <h1>Event Detail page {params.eventId}</h1>;
}

export default EventDetailPage;
