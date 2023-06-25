import Footer from "@/components/Footer"
import Projects from "@/components/Projects"



export default function Home() {
  return (
    <main>

      {/*-------Header-------*/}
      <header className='h-screen flex items-center justify-center'>
        <h1 className='text-7xl'>Max Lee</h1>
      </header>

      {/*-------Content-------*/}
      <section>
        <Projects />
      </section>

      {/*-------Footer-------*/}
      <Footer />

    </main>
  )
}
