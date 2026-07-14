import "./HighPriorityTickets.css";

const tickets = [
  {
    id: "TK104",
    title: "Network Down",
    employee: "Riya",
    priority: "Critical",
  },
  {
    id: "TK118",
    title: "Database Connection Failed",
    employee: "Rahul",
    priority: "Critical",
  },
  {
    id: "TK122",
    title: "VPN Not Working",
    employee: "Anjali",
    priority: "High",
  },
  {
    id: "TK131",
    title: "Email Server Down",
    employee: "Amit",
    priority: "Critical",
  },
];

function HighPriorityTickets() {
  return (
    <div className="priority-card">
      <h2>🚨 High Priority Tickets</h2>

      {tickets.map((ticket) => (
        <div className="priority-item" key={ticket.id}>
          <div>
            <h4>{ticket.title}</h4>
            <p>{ticket.id} • {ticket.employee}</p>
          </div>

          <span
            className={`priority-badge ${ticket.priority.toLowerCase()}`}
          >
            {ticket.priority}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HighPriorityTickets;