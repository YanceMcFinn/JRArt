import data from '../../works.json'

export function generateStaticParams() {
    let works = data
    return works.map((piece) => ({
      title: piece.title,
    }))
  }
function getPiece(params) {
  const piece = works.filter((piece)=> piece.title.toLowerCase() == params.title)
  return piece}
  
export default function Work(params){
  console.log("works" + works)
  const piece = getPiece(params)

  console.log(piece)
  return(
    <div>
      <p>Test</p>
      <p>{piece.title}</p>
    </div>
  )
}  