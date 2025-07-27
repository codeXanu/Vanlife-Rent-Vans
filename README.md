# 🚐 VanLife - Rent Vans Web App

VanLife is a feature-rich van rental web application built with React, Firebase Authentication, and Firestore for backend data management. It showcases dynamic routing using React Router and simulates a real-world van booking experience with roles for hosts and regular users.

---

## 🚀 Features

### For Renters
- **Browse Vans**: View all available vans with detailed information
- **Van Details**: See comprehensive details, photos, and pricing for each van
- **Filter & Search**: Find vans that match your specific needs
- **User Authentication**: Secure login system

### For Hosts
- **Dashboard**: Overview of your van rental business
- **Van Management**: Add, edit, and manage your van listings
- **Income Tracking**: Monitor your rental income and transactions
- **Reviews Management**: View and respond to customer reviews
- **Photo Management**: Upload and manage van photos
- **Pricing Control**: Set and adjust rental prices

### Test Credentials
Login as a Host

- Email: `you@gmail.com`
- Password: `you1234`

## 🛠 Tech Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM v7
- **Backend**: Firebase/Firestore
- **Authentication**: Firebase Auth
- **Styling**: CSS3
- **Icons**: React Icons
- **Charts**: Recharts
- **Build Tool**: Vite

---

## 📁 Folder Structure

```
Vanlife-Rent-Vans/
├── public/
├── src-assets/
├── src/
│   ├── components/
│   │   ├── AuthRequired.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HostLayout.jsx
│   │   └── Layout.jsx
│   ├── Pages/
│   │   ├── Host/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── HostVanDetails.jsx
│   │   │   ├── HostVanInfo.jsx
│   │   │   ├── HostVanPhotos.jsx
│   │   │   ├── HostVanPricing.jsx
│   │   │   ├── HostVans.jsx
│   │   │   ├── Income.jsx
│   │   │   └── Reviews.jsx
│   │   ├── Vans/
│   │   │   ├── VanDetails.jsx
│   │   │   └── Vans.jsx
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── AuthContext.jsx
│   ├── api.js
│   ├── index.css
│   ├── main.jsx
│   └── server.js
├── package.json
└── README.md
```

---

## 🔐 Firebase Integration

```js
// In api.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"

const firebaseConfig = { ... }
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
```

### 🔥 Firebase Used For:

- **Auth** — `signInWithEmailAndPassword()`
- **Database** — Collection `vans`, methods:
  - `getVans()`
  - `getVan(id)`
  - `getHostVans()`

---

## 🌐 Routing Overview

```txt
/
├── about
├── vans/
│   └── :id
├── login
└── host/
    ├── (protected)
    ├── income
    ├── reviews
    ├── vans/
    │   └── :id/
    │       ├── (default - info)
    │       ├── pricing
    │       └── photos
```

Routing is protected using `<AuthRequired />` which checks for Firebase authenticated users via `AuthContext`.

---

## 🧠 AuthContext

```js
export const AuthContext = React.createContext()
export function AuthProvider() {
  const [user, setUser] = useState(null)
  useEffect(() => onAuthStateChanged(auth, setUser), [])
}
```

Used for providing authentication status across the app.


---

## 🧪 Development Setup

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build the app
npm run build

# Preview production
npm run preview
```

---

## 🚧 Server Mocking (MirageJS)

- Early stages used MirageJS (now commented)
- Useful for mocking API responses
- Passes through Firebase Firestore now

---

## 📦 Firebase Collections

- `vans`: All vans with hostId, name, price, type, etc.
- `users`: (if needed) for roles and extended logic


---

## 👨‍💻 Author

**Anuj Kumar Maurya**  
React Developer | Firebase Enthusiast  
🔗 [GitHub](https://github.com/codeXanu)

---


## 📝 License

This project is licensed under the MIT License.

