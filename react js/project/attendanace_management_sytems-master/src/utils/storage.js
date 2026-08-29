const SHIFT_KEY = "tops_hrms_shifts";

export function getShifts() {
  try {
    return JSON.parse(localStorage.getItem(SHIFT_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveShifts(shifts) {
  localStorage.setItem(SHIFT_KEY, JSON.stringify(shifts));
}

export function addShift(shift) {
  const shifts = getShifts();
  const item = {
    ...shift,
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    status: "pending",
    createdAt: new Date().toISOString()
  };
  saveShifts([item, ...shifts]);
  return item;
}

export function updateShift(id, updates) {
  const shifts = getShifts().map((item) =>
    item.id === id ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item
  );
  saveShifts(shifts);
  return shifts;
}

export function deleteShift(id) {
  const shifts = getShifts().filter((item) => item.id !== id);
  saveShifts(shifts);
  return shifts;
}

export function seedShifts() {
  if (localStorage.getItem(SHIFT_KEY) !== null) return;
  saveShifts([
    {
      id: "demo-1",
      employee: "Brijesh Kumar",
      date: new Date().toISOString().slice(0, 10),
      startTime: "09:00",
      endTime: "18:00",
      reason: "Regular shift",
      status: "approved",
      createdAt: new Date().toISOString()
    },
    {
      id: "demo-2",
      employee: "Rahul Patel",
      date: new Date().toISOString().slice(0, 10),
      startTime: "10:00",
      endTime: "19:00",
      reason: "Project requirement",
      status: "pending",
      createdAt: new Date().toISOString()
    }
  ]);
}