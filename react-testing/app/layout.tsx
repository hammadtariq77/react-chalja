
import './globals.css'
import Navbar from "@/Components/Navbar"
import Footer from "@/Components/Footer"




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  data-theme="dark" lang="en">
      <body>
      
        <Navbar/>
        {children}
       
        </body>
    </html>
  )
}
