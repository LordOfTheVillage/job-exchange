import Header from "@components/Header"
import RootStyleRegistry from "./emotion"

export const metadata = {
  title: "Job Exchange",
  description: "This is a job exchange",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className="bg-gray-100">
        <RootStyleRegistry>
          <Header />
          <div className="lg:px-40 pb-5 flex justify-center">{children}</div>
        </RootStyleRegistry>
      </body>
    </html>
  )
}

export default RootLayout
