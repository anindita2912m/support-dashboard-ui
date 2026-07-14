import "./TicketTable.css";
import { useState } from "react";
import TicketModal from "./TicketModal";

const tickets = [
  {
    id: "TK101",
    title: "Printer not working",
    employee: "Aaritrika",
    priority: "High",
    status: "Open",
  },
  {
    id: "TK102",
    title: "Aayushi",
    employee: "Anjali",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "TK103",
    title: "Aditya",
    employee: "Amit",
    priority: "Low",
    status: "Closed",
  },
  {
    id: "TK104",
    title: "Network Down",
    employee: "Riya",
    priority: "High",
    status: "Open",
  },
];

function TicketTable() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="ticket-table-container">
      <div className="table-header">
        <h2>Recent Tickets</h2>
      </div>

      <table className="ticket-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Employee</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>

              <td>{ticket.title}</td>

              <td>{ticket.employee}</td>

              <td>
                <span className={`priority ${ticket.priority.toLowerCase()}`}>
                  {ticket.priority}
                </span>
              </td>

              <td>
                <span className={`status ${ticket.status.toLowerCase()}`}>
                  {ticket.status}
                </span>
              </td>

              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTicket && (
        <TicketModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}

export default TicketTable;