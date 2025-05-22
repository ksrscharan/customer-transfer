import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import CustomerTransfer from './CustomerTransfer'

function App() {
  return (
    <Routes>
      <Route path="/customer-transfer" element={<CustomerTransfer />} />
      <Route path="*" element={<Navigate to="/customer-transfer" replace />} />
    </Routes>
  )
}

export default App
