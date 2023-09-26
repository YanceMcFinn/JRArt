import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Jan's Art Page!</div>
      <div>
      <Image
        src="/replicant.jpg"
        width={500}
        height={516}
        alt="Picture of the author"
      />
    </div>
      </main>
      )
    }