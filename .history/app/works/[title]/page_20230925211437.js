import works from '../json/data.json'

export function generateStaticParams() {
    return works.map((piece) => ({
      title: piece.title
    }))
  }
async function getPiece({params}) {
  const piece = works.filter((piece)=> piece.title == params.title)
  return piece}
  
export default function Work(){
  const piece = getPiece(params)
  return(
    <div>
      <p>{piece.title}</p>
    </div>
  )
}  