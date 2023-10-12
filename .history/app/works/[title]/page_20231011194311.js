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
  const piece = data.filter((piece)=> piece.title.toLowerCase() == params.title)
  return piece[0]}
  
export default function Work({params}){
  const piece = getPiece(params)
  return(
    <div className="flex flex-row px-2 mt-5">
      <div className="basis-1/2">
        <Image src={`/images/${piece.title.replaceAll(" ", "_")}.jpg`}
          className='mx-auto'
          width={500}
          height={500}
          alt={piece.title} />
      </div>
      <div className="basis-1/2"> 
        <p>{piece.title}</p>
        <p>{piece.description}</p>
      </div>
     
    </div>
  )
}  