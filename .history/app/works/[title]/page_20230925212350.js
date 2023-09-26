import works from '../../works.json'

export async function generateStaticParams() {
    return works.map((piece) => ({
      title: piece.title,
    }))
  }
async function getPiece(params) {
  const piece = works.filter((piece)=> piece.title == params.title)
  return piece}
  
export default function Work(params){
  const piece = getPiece(params)

  console.log(piece)
  return(
    <div>
      <p>{piece.title}</p>
    </div>
  )
}  