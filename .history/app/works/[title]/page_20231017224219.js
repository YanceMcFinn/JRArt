import data from '../../../json/works.json'

import Image from 'next/image';


export function generateStaticParams() {
    let works = data
    const params = works.map((piece) => ({
      title: piece.title
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
    <div className="flex flex-row px-2 mt-10 text-main-color">
      <div className="basis-1/2">
        <Image src={imgSrc}
          className='mx-auto'
          width={500}
          height={500}
          alt={piece.title} />
      </div>
      <div className="basis-1/2 px-4"> 
        <div className='text-2xl title'>{piece.title}</div>
        <div className='text-2xl text-stone-500'><i>{piece.dimensions} | {piece.materials}</i></div>
        <p>{piece.description}</p>
      </div>
     
    </div>
  )
}  