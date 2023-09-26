import works from '../../works.json'

export async function generateStaticParams() {
    return works.map((piece) => ({
      title: piece.title,
    }))
  }
async function getPiece(params) {
  const piece = works.filter((piece)=> piece.title.toLowerCase() == params.title)
  return piece}
  
export default function Work(params){
  console.log("works" + works)
  const piece = getPiece(params)

  console.log(piece)
  return(
    <div>
      <p>{piece.title}</p>
    </div>
  )
}  