import { FC, Suspense } from "react"
import Loading from "./loading"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default Layout
