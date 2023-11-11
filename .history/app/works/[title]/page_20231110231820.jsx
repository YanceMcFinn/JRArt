import data from '../../../json/works.json'

import Image from 'next/image';


export function generateStaticParams() {
    let works = data
    const params = works.map((piece) => ({
      title: piece.title.replaceAll("?","")
    }))
    return params;
  }

function getPiece(params) {
  const piece = data.filter((piece)=> piece.title.toLowerCase().replaceAll("?","") == params.title.toLowerCase().replaceAll("%20"," "))
  return piece[0]}
  
export default function Work({params}){
  const piece = getPiece(params)
  console.log(piece)
  let srctest = `../../../public/static/img/${params.title.toLowerCase().replaceAll("%20", "_")}.jpg`
  const imgSrc = require(`../../../public/static/img/${params.title.toLowerCase().replaceAll("%20", "_")}.jpg`)
  return(
    <div className="flex md:flex-row flex-col px-2 mt-20 text-main-color">
      <div className="basis-1/2 md:h-[calc(100vh-74px)]">
        <Image src={imgSrc}
          className='mx-auto pb-10 h-auto w-auto md:max-w-full md:max-h-full'
          width={500}
          fill={true}
          alt={piece.title} />
      </div>
      <div className="basis-1/2 h-[calc(100vh-74px)] px-4"> 
        <div className='text-4xl title'>{piece.title}</div>
        <div className='text-l text-stone-500 mb-5'><i>{piece.dimensions} | {piece.materials}</i></div>
        <div className='w-full mb-5'>
          <p>{piece.description}</p>
        </div>
        <div className='self-end mb-10 title text-2xl'>
        <a href='/' className='hover:text-white'>{`< Back to gallery`}</a>
      </div>
      </div>
  
     
    </div>
  )
}  