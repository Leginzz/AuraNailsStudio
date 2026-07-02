import { Routes, Route, Navigate } from 'react-router-dom'
import DesignLab from './DesignLab'
import Proposal01 from './proposals/Proposal01'
import Proposal02 from './proposals/Proposal02'
import Proposal03 from './proposals/Proposal03'
import Proposal04 from './proposals/Proposal04'
import Proposal05 from './proposals/Proposal05'
import Proposal06 from './proposals/Proposal06'
import Proposal07 from './proposals/Proposal07'
import Proposal08 from './proposals/Proposal08'
import Proposal09 from './proposals/Proposal09'
import Proposal10 from './proposals/Proposal10'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/design-lab" replace />} />
      <Route path="/design-lab" element={<DesignLab />} />
      <Route path="/design-lab/propuesta/01" element={<Proposal01 />} />
      <Route path="/design-lab/propuesta/02" element={<Proposal02 />} />
      <Route path="/design-lab/propuesta/03" element={<Proposal03 />} />
      <Route path="/design-lab/propuesta/04" element={<Proposal04 />} />
      <Route path="/design-lab/propuesta/05" element={<Proposal05 />} />
      <Route path="/design-lab/propuesta/06" element={<Proposal06 />} />
      <Route path="/design-lab/propuesta/07" element={<Proposal07 />} />
      <Route path="/design-lab/propuesta/08" element={<Proposal08 />} />
      <Route path="/design-lab/propuesta/09" element={<Proposal09 />} />
      <Route path="/design-lab/propuesta/10" element={<Proposal10 />} />
      <Route path="*" element={<Navigate to="/design-lab" replace />} />
    </Routes>
  )
}
