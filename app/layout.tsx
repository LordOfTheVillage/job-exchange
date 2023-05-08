import Header from "@components/Header"

export const metadata = {
  title: "Job Exchange",
  description: "This is a job exchange",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}

export default RootLayout
