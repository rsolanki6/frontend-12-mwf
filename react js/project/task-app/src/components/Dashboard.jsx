import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import { Search, Plus, X, Pencil, Trash2, Eye } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Shift Request");
  const [showModal, setShowModal] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [viewingRequest, setViewingRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [search, setSearch] = useState("");

  const [requests, setRequests] = useState(() => {
    const savedRequests = localStorage.getItem("shiftRequests");
    return savedRequests ? JSON.parse(savedRequests) : [];
  });

  const [formData, setFormData] = useState({
    currentShift: "",
    requestedShift: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  useEffect(() => {
    localStorage.setItem("shiftRequests", JSON.stringify(requests));
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

    if (editingRequest) {
      setRequests((prev) =>
        prev.map((request) =>
          request.id === editingRequest.id
            ? {
                ...request,
                ...formData,
              }
            : request
        )
      );
    } else {
      const newRequest = {
        id: Date.now(),
        ...formData,
        status: "Pending",
        createdAt: new Date().toISOString(),
      };

      setRequests((prev) => [...prev, newRequest]);
    }

    closeModal();
  };

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

  const handleView = (request) => {
    setViewingRequest(request);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this request?"
    );

    if (!confirmed) return;

    setRequests((prev) =>
      prev.filter((request) => request.id !== id)
    );
  };

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

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesStatus =
        statusFilter === "All" ||
        request.status === statusFilter;

      const searchText = search.toLowerCase();

      const matchesSearch =
        request.currentShift?.toLowerCase().includes(searchText) ||
        request.requestedShift?.toLowerCase().includes(searchText) ||
        request.reason?.toLowerCase().includes(searchText) ||
        request.fromDate?.toLowerCase().includes(searchText) ||
        request.toDate?.toLowerCase().includes(searchText);

      return matchesStatus && matchesSearch;
    });
  }, [requests, statusFilter, search]);

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected") {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#edf2f7]">
      <Header />

      <main className="flex-1 px-3 py-4 sm:px-5 md:px-8 lg:px-10 xl:px-[60px]">
        {/* FILTER SECTION */}
        <div className="mb-5 rounded border border-[#e0e4e8] bg-white p-4 sm:p-5 md:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center">
            {/* Status */}
            <div className="flex min-w-0 items-center gap-3">
              <label className="shrink-0 text-[13px] text-[#333]">
                Status
              </label>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-[35px] min-w-0 flex-1 rounded border border-[#b9c9dc] bg-white px-3 text-[13px] text-[#666] outline-none sm:w-[174px] sm:flex-none"
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* From Date */}
            <input
              type="date"
              className="h-[35px] w-full rounded border border-[#b9c9dc] px-3 text-[13px] outline-none sm:w-full lg:w-[165px]"
            />

            {/* To Date */}
            <input
              type="date"
              className="h-[35px] w-full rounded border border-[#b9c9dc] px-3 text-[13px] outline-none sm:w-full lg:w-[165px]"
            />

            {/* Search */}
            <button
              type="button"
              className="flex h-[35px] w-full items-center justify-center gap-1.5 rounded bg-[#20bd7a] px-[14px] text-[13px] text-white hover:bg-[#18a96b] sm:w-auto"
            >
              <Search size={15} />
              Search
            </button>

            {/* Add */}
            <button
              type="button"
              onClick={openAddModal}
              className="flex h-[35px] w-full items-center justify-center gap-1 rounded bg-[#337ab7] px-[14px] text-[13px] text-white hover:bg-[#286090] sm:w-auto lg:ml-auto"
            >
              <Plus size={16} strokeWidth={3} />
              Add Request
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="mb-0 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`
                  min-w-[150px] flex-1 whitespace-nowrap
                  border-b border-[#ddd]
                  px-4 py-3 text-[13px]
                  transition-colors
                  sm:min-w-[170px]
                  md:min-w-0
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
        </div>

        {/* TABLE CONTAINER */}
        <div className="border border-[#ddd] bg-white p-4 sm:p-5 md:p-6">
          {/* TABLE HEADER */}
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Records */}
            <div className="flex items-center gap-1">
              <select className="h-[30px] w-[80px] rounded border border-[#b9c9dc] bg-white px-2 text-[12px] text-[#555]">
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>

              <span className="text-[13px] text-[#333]">
                records
              </span>
            </div>

            {/* Search */}
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <label className="shrink-0 text-[13px] text-[#333]">
                Search:
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-[30px] w-full rounded border border-[#b9c9dc] px-2 text-[13px] outline-none sm:w-[180px]"
              />
            </div>
          </div>

          {/* SHIFT REQUEST TABLE */}
          {activeTab === "Shift Request" ? (
            <div className="-mx-1 overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-[13px]">
                <thead>
                  <tr className="h-[42px] border border-[#d9e0e7] bg-[#fafafa]">
                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      No
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      Current Shift
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      Requested Shift
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      From Date
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      To Date
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      Reason
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      Status
                    </th>

                    <th className="whitespace-nowrap px-3 text-left font-bold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredRequests.length === 0 ? (
                    <tr className="h-[55px] border-x border-b border-[#d9e0e7]">
                      <td
                        colSpan="8"
                        className="text-center text-[#333]"
                      >
                        No data available in table
                      </td>
                    </tr>
                  ) : (
                    filteredRequests.map((request, index) => (
                      <tr
                        key={request.id}
                        className="border-x border-b border-[#d9e0e7] hover:bg-gray-50"
                      >
                        <td className="px-3 py-3">
                          {index + 1}
                        </td>

                        <td className="px-3 py-3">
                          {request.currentShift}
                        </td>

                        <td className="px-3 py-3">
                          {request.requestedShift}
                        </td>

                        <td className="px-3 py-3">
                          {request.fromDate}
                        </td>

                        <td className="px-3 py-3">
                          {request.toDate}
                        </td>

                        <td className="max-w-[200px] px-3 py-3">
                          <div className="truncate">
                            {request.reason}
                          </div>
                        </td>

                        <td className="px-3 py-3">
                          <span
                            className={`rounded px-2 py-1 text-xs ${getStatusClass(
                              request.status
                            )}`}
                          >
                            {request.status}
                          </span>
                        </td>

                        <td className="px-3 py-3">
                          <div className="flex items-center gap-2">
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

                            <button
                              type="button"
                              title="Delete"
                              onClick={() =>
                                handleDelete(request.id)
                              }
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex h-[150px] items-center justify-center text-center text-sm text-gray-500">
              {activeTab} data will appear here.
            </div>
          )}

          {/* FOOTER */}
          <div className="mt-5 text-[13px] text-[#333]">
            Showing{" "}
            {filteredRequests.length === 0 ? 0 : 1} to{" "}
            {filteredRequests.length} of{" "}
            {filteredRequests.length} entries
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="flex min-h-[54px] items-center justify-center bg-[#3c4651] px-4 py-3">
        <span className="text-center text-[12px] text-[#aeb5bd]">
          2016 © TOPS Technologies.
        </span>
      </footer>

      {/* ADD / EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-4">
          <div className="my-auto w-full max-w-[520px] rounded-md bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-4 sm:px-6">
              <h2 className="pr-4 text-base font-semibold text-gray-700 sm:text-lg">
                {editingRequest
                  ? "Edit Shift Change Request"
                  : "Add Shift Change Request"}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                className="shrink-0 text-gray-400 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 px-4 py-5 sm:px-6">
                {/* Current Shift */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Current Shift
                  </label>

                  <select
                    name="currentShift"
                    value={formData.currentShift}
                    onChange={handleChange}
                    required
                    className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400"
                  >
                    <option value="">
                      Select Current Shift
                    </option>
                    <option value="Morning Shift">
                      Morning Shift
                    </option>
                    <option value="General Shift">
                      General Shift
                    </option>
                    <option value="Evening Shift">
                      Evening Shift
                    </option>
                    <option value="Night Shift">
                      Night Shift
                    </option>
                  </select>
                </div>

                {/* Requested Shift */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Requested Shift
                  </label>

                  <select
                    name="requestedShift"
                    value={formData.requestedShift}
                    onChange={handleChange}
                    required
                    className="h-[38px] w-full rounded border border-gray-300 px-3 text-sm outline-none focus:border-blue-400"
                  >
                    <option value="">
                      Select Requested Shift
                    </option>
                    <option value="Morning Shift">
                      Morning Shift
                    </option>
                    <option value="General Shift">
                      General Shift
                    </option>
                    <option value="Evening Shift">
                      Evening Shift
                    </option>
                    <option value="Night Shift">
                      Night Shift
                    </option>
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                      From Date
                    </label>

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

              {/* Footer */}
              <div className="flex flex-col-reverse gap-2 border-t bg-gray-50 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 sm:w-auto"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full rounded bg-[#337ab7] px-4 py-2 text-sm text-white hover:bg-[#286090] sm:w-auto"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-3 sm:p-4">
          <div className="my-auto w-full max-w-[500px] rounded-md bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-4 sm:px-6">
              <h2 className="text-base font-semibold text-gray-700 sm:text-lg">
                Shift Change Request
              </h2>

              <button
                type="button"
                onClick={() => setViewingRequest(null)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Details */}
            <div className="space-y-4 px-4 py-5 sm:px-6">
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

                <p className="break-words text-sm text-gray-800">
                  {viewingRequest.reason}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs text-gray-500">
                  Status
                </p>

                <span
                  className={`rounded px-2 py-1 text-xs ${getStatusClass(
                    viewingRequest.status
                  )}`}
                >
                  {viewingRequest.status}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse gap-2 border-t bg-gray-50 px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setViewingRequest(null);
                  handleEdit(viewingRequest);
                }}
                className="flex w-full items-center justify-center gap-1 rounded bg-[#337ab7] px-4 py-2 text-sm text-white hover:bg-[#286090] sm:w-auto"
              >
                <Pencil size={14} />
                Edit
              </button>

              <button
                type="button"
                onClick={() => setViewingRequest(null)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 sm:w-auto"
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
