export const metadata = {
  title: "Job Exchange",
  description: "This is a job exchange",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
