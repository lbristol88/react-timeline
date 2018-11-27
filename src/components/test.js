const persons = [
  {
    fullName: "Ada Lovelace",
    status: "heres a post",
    timestamp: "3 days ago",
  },
  {
    fullName: "testy tester",
    status: "heres another post",
  },
];

const personCollection = data.map((person, i) => {
  return <TimelineEvent key={i} fullName={person.person} status={person.status} timestamp={person.timeStamp} />
});
