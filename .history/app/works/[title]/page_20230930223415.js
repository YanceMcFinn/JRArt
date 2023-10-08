import data from '../../../json/works.json'

export function generateStaticParams() {
    let works = data
    const params = works.map((piece) => ({
      title: piece.title
    }))
    return params;
  }
function getPiece(params) {
  const piece = data.filter((piece)=> piece.title.toLowerCase() == params.title)
  return piece}
  
export default function Work({params}){
  const piece = getPiece(params)
  console.log(piece.title)
  return(
    <div>
      <p>Test</p>
      <p>{piece.title}</p>
    </div>
  )
}  