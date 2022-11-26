import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage, UserCreate, UserDetail, UserUpdate } from "../screens"


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="detail" element={<UserDetail />} />
      <Route path="create" element={<UserCreate />} />
      <Route path="update" element={<UserUpdate />} />

      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
