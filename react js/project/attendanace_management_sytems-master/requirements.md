tops-hrms-react/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── utils/
    │   └── storage.js
    │
    ├── components/
    │   ├── auth/
    │   │   ├── Login.jsx
    │   │   └── ProtectedRoute.jsx
    │   │
    │   ├── common/
    │   │   ├── EmptyState.jsx
    │   │   └── StatusBadge.jsx
    │   │
    │   └── layout/
    │       ├── DashboardLayout.jsx
    │       ├── Header.jsx
    │       └── Sidebar.jsx
    │
    └── pages/
        ├── Dashboard.jsx
        ├── AddShift.jsx
        ├── ManageShift.jsx
        ├── ApprovedShift.jsx
        ├── RejectedShift.jsx
        └── Attendance.jsx