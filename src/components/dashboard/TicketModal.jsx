import { useState } from "react";
import "./TicketModal.css";

function TicketModal({ ticket, onClose }) {
  const [solution, setSolution] = useState("");

  const [status, setStatus] = useState(ticket?.status || "Open");

  if (!ticket) return null;

  const handleResolve = () => {
    alert("Ticket Updated Successfully!");
    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="ticket-modal">

        <div className="modal-header">
          <h2>{ticket.id}</h2>

          <button onClick={onClose}>✖</button>
        </div>

        <div className="modal-body">

          <div className="row">
            <strong>Title</strong>
            <p>{ticket.title}</p>
          </div>

          <div className="row">
            <strong>Employee</strong>
            <p>{ticket.employee}</p>
          </div>

          <div className="row">
            <strong>Priority</strong>
            <p>{ticket.priority}</p>
          </div>

          <div className="row">
            <strong>Status</strong>

            <select
              value={status}
              onChange={(e)=>setStatus(e.target.value)}
            >
              <option>Open</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>

          </div>

          <div className="row">

            <strong>Description</strong>

            <p>
              Printer is showing paper jam.
              Unable to print documents.
            </p>

          </div>

          <div className="row">

            <strong>Solution</strong>

            <textarea
              placeholder="Write the solution here..."
              value={solution}
              onChange={(e)=>setSolution(e.target.value)}
            />

          </div>

          <button
            className="resolve-btn"
            onClick={handleResolve}
          >
            Save & Close Ticket
          </button>

        </div>

      </div>

    </div>
  );
}

export default TicketModal;