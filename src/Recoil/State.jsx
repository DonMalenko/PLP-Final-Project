import { atom } from 'recoil';

// ThemeMode selection
export const ThemeMode = atom({
  key: 'themeState', // Unique ID
  default: localStorage.getItem("ThemeMode") || "light", // Default value
});

// Active Tab
export const ActiveTab = atom({
  key: 'activeState', // Unique ID
  default: null, // Default value 
});


  // Patient Dashboard
  export const DashboardState = atom({
    key: 'DashboardState', // Unique key for the atom
    default: {
      appointments: [],
      visitHistory: [],
      prescriptions: [],
    },
  });