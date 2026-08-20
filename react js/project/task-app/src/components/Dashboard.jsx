import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import { Search, Plus, X, Pencil, Trash2, Eye, } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Shift Request");
  const [showModal, setShowModal] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [viewingRequest, setViewingRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState(() => {
  const savedRequests = localStorage.getItem("shiftRequests");
    return savedRequests
      ? JSON.parse(savedRequests)
      : [];
  });

  const [formData, setFormData] = useState({
    currentShift: "",
    requestedShift: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  useEffect(() => {
    localStorage.setItem(
      "shiftRequests",
      JSON.stringify(requests)
    );
  }, [requests]);

  const tabs = [
    "Leave Request",
    "Shift Request",
    "Shift Request (Weekdays)",
    "Late / Early Request",
    "Attendance Request",
    "Overtime Request (7)",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openAddModal = () => {
    setEditingRequest(null);

    setFormData({
      currentShift: "",
      requestedShift: "",
      fromDate: "",
      toDate: "",
      reason: "",
    });

    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.currentShift ||
      !formData.requestedShift ||
      !formData.fromDate ||
      !formData.toDate ||
      !formData.reason
    ) {
      return;
    }

    // UPDATE
    if (editingRequest) {
      setRequests((prev) =>
        prev.map((request) =>
          request.id === editingRequest.id
            ? {
                ...request,
                currentShift: formData.currentShift,
                requestedShift: formData.requestedShift,
                fromDate: formData.fromDate,
                toDate: formData.toDate,
                reason: formData.reason,
              }
            : request
        )
      );
    }

    // ADD
    else {
      const newRequest = {
        id: Date.now(),
        currentShift: formData.currentShift,
        requestedShift: formData.requestedShift,
        fromDate: formData.fromDate,
        toDate: formData.toDate,
        reason: formData.reason,
        status: "Pending",
        createdAt: new Date().toISOString(),
      };

      setRequests((prev) => [
        ...prev,
        newRequest,
      ]);
    }

    closeModal();
  };

  // Edit Request
  const handleEdit = (request) => {
    setEditingRequest(request);

    setFormData({
      currentShift: request.currentShift,
      requestedShift: request.requestedShift,
      fromDate: request.fromDate,
      toDate: request.toDate,
      reason: request.reason,
    });

    setShowModal(true);
  };

  // View Request
  const handleView = (request) => {
    setViewingRequest(request);
  };

  // Delete Request
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this request?"
    );

    if (!confirmed) {
      return;
    }

    setRequests((prev) =>
      prev.filter((request) => request.id !== id)
    );
  };

  // Close Add/Edit Modal
  const closeModal = () => {
    setShowModal(false);
    setEditingRequest(null);
    setFormData({
      currentShift: "",
      requestedShift: "",
      fromDate: "",
      toDate: "",
      reason: "",
    });
  };

  // Filter Requests
  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesStatus =
        statusFilter === "All" ||
        request.status === statusFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        request.currentShift
          .toLowerCase()
          .includes(searchText) ||
        request.requestedShift
          .toLowerCase()
          .includes(searchText) ||
        request.reason
          .toLowerCase()
          .includes(searchText) ||
        request.fromDate
          .toLowerCase()
          .includes(searchText) ||
        request.toDate
          .toLowerCase()
          .includes(searchText);

      return matchesStatus && matchesSearch;
    });
  }, [requests, statusFilter, search]);

  // Render
  return (
    <div className="flex min-h-screen flex-col bg-[#edf2f7]">
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="flex-1 px-[60px] py-[16px]">
        {/* Filter Section */}
        <div className="mb-[25px] rounded border border-[#e0e4e8] bg-white px-[30px] py-[26px]">
          <div className="flex items-center gap-[30px]">
            {/* Status */}
            <div className="flex items-center gap-[25px]">
              <label className="text-[13px] text-[#333]">Status</label>
              <select value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="h-[35px] w-[174px] rounded border border-[#b9c9dc] bg-white px-3 text-[13px] text-[#666] outline-none">
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* From Date */}
            <input type="date" className="h-[35px] w-[165px] rounded border border-[#b9c9dc] px-3 text-[13px] outline-none"/>
            {/* To Date */}
            <input type="date" className="h-[35px] w-[165px] rounded border border-[#b9c9dc] px-3 text-[13px] outline-none"/>
            {/* Search Button */}
            <button type="button" className="flex h-[35px] items-center gap-1.5 rounded bg-[#20bd7a] px-[14px] text-[13px] text-white hover:bg-[#18a96b]">
              <Search size={15} />Search
            </button>

            {/* Add Request */}
            <button type="button" onClick={openAddModal} className="ml-auto flex h-[35px] items-center gap-1 rounded bg-[#337ab7] px-[14px] text-[13px] text-white hover:bg-[#286090]">
              <Plus size={16} strokeWidth={3} />
              Add Request
            </button>

          </div>
        </div>

        {/* Tabs */}
        <div className="flex h-[44px]">

          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`
                flex-1 border-b border-[#ddd] text-[13px]
                ${
                  activeTab === tab
                    ? "border-t-[3px] border-t-[#ee6b78] bg-white text-[#444]"
                    : "bg-transparent text-[#1670bb] hover:text-[#0b5595]"
                }
              `}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* Table */}
        <div className="min-h-[300px] border border-[#ddd] bg-white px-[30px] py-[30px]">
          {/* Table Header */}
          <div className="mb-[14px] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <select className="h-[30px] w-[80px] rounded border border-[#b9c9dc] bg-white px-2 text-[12px] text-[#555]">
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-[13px] text-[#333]">records</span>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <label className="text-[13px] text-[#333]">Search:</label>
              <input type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="h-[30px] w-[180px] rounded border border-[#b9c9dc] px-2 text-[13px] outline-none"/>
            </div>
          </div>

          {/* Shift Request Table */}
          {activeTab === "Shift Request" ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="h-[42px] border border-[#d9e0e7] bg-[#fafafa]">
                    <th className="px-[12px] text-left font-bold">No</th>
                    <th className="px-[12px] text-left font-bold">Current Shift</th>
                    <th className="px-[12px] text-left font-bold">Requested Shift</th>
                    <th className="px-[12px] text-left font-bold">From Date</th>
                    <th className="px-[12px] text-left font-bold">To Date</th>
                    <th className="px-[12px] text-left font-bold">Reason</th>
                    <th className="px-[12px] text-left font-bold">Status</th>
                    <th className="px-[12px] text-left font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.length === 0 ? (
                    <tr className="h-[55px] border-x border-b border-[#d9e0e7]">
                      <td colSpan="8" className="text-center text-[#333]">
                        No data available in table
                      </td>
                    </tr>
                  ) : (
                    filteredRequests.map(
                      (request, index) => (

                        <tr key={request.id} className="border-x border-b border-[#d9e0e7] hover:bg-gray-50">

                          <td className="px-3 py-3">{index + 1}</td>
                          <td className="px-3 py-3">{request.currentShift}</td>
                          <td className="px-3 py-3">{request.requestedShift}</td>
                          <td className="px-3 py-3">{request.fromDate}</td>
                          <td className="px-3 py-3">{request.toDate}</td>
                          <td className="max-w-[200px] px-3 py-3">{request.reason}</td>
                          <td className="px-3 py-3">
                            <span
                              className={`
                                rounded px-2 py-1 text-xs
                                ${
                                  request.status ===
                                  "Approved"
                                    ? "bg-green-100 text-green-700"
                                    : request.status ===
                                      "Rejected"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }
                              `}
                            >
                              {request.status}
                            </span>
                          </td>
                          {/* Actions */}
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-2">

                              {/* View */}
                              <button
                                type="button"
                                title="View"
                                onClick={() =>
                                  handleView(request)
                                }
                                className="text-gray-500 hover:text-blue-600"
                              >
                                <Eye size={16} />
                              </button>

                              {/* Edit */}
                              <button
                                type="button"
                                title="Edit"
                                onClick={() =>
                                  handleEdit(request)
                                }
                                className="text-blue-500 hover:text-blue-700"
                              >
                                <Pencil size={16} />
                              </button>

                              {/* Delete */}
                              <button
                                type="button"
                                title="Delete"
                                onClick={() =>
                                  handleDelete(
                                    request.id
                                  )
                                }
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 size={16} />
                              </button>

                            </div>

                          </td>

                        </tr>

                      )
                    )

                  )}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="flex h-[150px] items-center justify-center text-sm text-gray-500">
              {activeTab} data will appear here.
            </div>

          )}

          {/* Table Footer */}
          <div className="mt-[18px] text-[13px] text-[#333]">

            Showing{" "}
            {filteredRequests.length === 0
              ? 0
              : 1}{" "}
            to{" "}
            {filteredRequests.length}{" "}
            of{" "}
            {filteredRequests.length}{" "}
            entries

          </div>

        </div>

      </main>
      {/* Footer */}
      <footer className="flex h-[54px] items-center justify-center bg-[#3c4651]">

        <span className="text-[12px] text-[#aeb5bd]">
          2016 © TOPS Technologies.
        </span>

      </footer>

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-[520px] rounded-md bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {editingRequest
                  ? "Edit Shift Change Request"
                  : "Add Shift Change Request"}
              </h2>
              <button type="button" onClick={closeModal} className="text-gray-400 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 px-6 py-5">
                {/* Current Shift */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Current Shift
                  </label>
                  <select name="currentShift" value={formData.currentShift} onChange={handleChange} required
                    className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400">

                    <option value="">Select Current Shift</option>
                    <option value="Morning Shift">Morning Shift</option>
                    <option value="General Shift">General Shift</option>
                    <option value="Evening Shift">Evening Shift</option>
                    <option value="Night Shift">Night Shift</option>
                  </select>
                </div>

                {/* Requested Shift */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Requested Shift</label>
                  <select name="requestedShift" value={formData.requestedShift} onChange={handleChange} required
                    className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400">

                    <option value="">Select Requested Shift</option>
                    <option value="Morning Shift">Morning Shift</option>
                    <option value="General Shift">General Shift</option>
                    <option value="Evening Shift">Evening Shift</option>
                    <option value="Night Shift">Night Shift</option>
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">From Date</label>

                    <input
                      type="date"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleChange}
                      required
                      className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400"
                    />

                  </div>

                  <div>

                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      To Date
                    </label>

                    <input
                      type="date"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleChange}
                      required
                      className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400"
                    />

                  </div>

                </div>

                {/* Reason */}
                <div>

                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Reason
                  </label>

                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Enter reason for shift change"
                    className="w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-400"
                  />

                </div>

              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-2 border-t bg-gray-50 px-6 py-4">

                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded bg-[#337ab7] px-4 py-2 text-sm text-white hover:bg-[#286090]"
                >

                  {editingRequest
                    ? "Update Request"
                    : "Submit Request"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* VIEW MODAL */}
      {viewingRequest && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-[500px] rounded-md bg-white shadow-xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">

              <h2 className="text-lg font-semibold text-gray-700">
                Shift Change Request
              </h2>

              <button
                type="button"
                onClick={() =>
                  setViewingRequest(null)
                }
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={20} />
              </button>

            </div>

            {/* Details */}
            <div className="space-y-4 px-6 py-5">

              <div>
                <p className="text-xs text-gray-500">
                  Current Shift
                </p>

                <p className="text-sm font-medium text-gray-800">
                  {viewingRequest.currentShift}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Requested Shift
                </p>

                <p className="text-sm font-medium text-gray-800">
                  {viewingRequest.requestedShift}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-xs text-gray-500">
                    From Date
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {viewingRequest.fromDate}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    To Date
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {viewingRequest.toDate}
                  </p>
                </div>

              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Reason
                </p>

                <p className="text-sm text-gray-800">
                  {viewingRequest.reason}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-500">
                  Status
                </p>

                <span
                  className={`
                    rounded px-2 py-1 text-xs
                    ${
                      viewingRequest.status ===
                      "Approved"
                        ? "bg-green-100 text-green-700"
                        : viewingRequest.status ===
                          "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {viewingRequest.status}
                </span>

              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 border-t bg-gray-50 px-6 py-4">

              <button
                type="button"
                onClick={() => {
                  setViewingRequest(null);
                  handleEdit(viewingRequest);
                }}
                className="flex items-center gap-1 rounded bg-[#337ab7] px-4 py-2 text-sm text-white hover:bg-[#286090]"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                type="button"
                onClick={() =>
                  setViewingRequest(null)
                }
                className="rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}
