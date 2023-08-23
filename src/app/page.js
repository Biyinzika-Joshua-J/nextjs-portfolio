import Image from 'next/image'
import { Header, About, Projects, Skills, Contact } from '../../components'

export default function Home() {
  return (
    <main className="">
        <Header/>
        <About/>

        <Skills/>
        <Contact/>
    </main>
  )
}
