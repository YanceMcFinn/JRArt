import data from '../../../json/works.json'

console.log(data[1])

export function generateStaticParams() {
    let works = data
    return works.map((piece) => ({
      title: piece.title
    }))
  }
function getPiece(params) {
  const piece = data.filter((piece)=> piece.title.toLowerCase() == params.title)
  return piece}
  
export default function Work({params}){
  const piece = getPiece(params)
  console.log(data)
  console.log(params.title)
  return(
    <div>
      <p>Test</p>
      <p>{piece.title}</p>
    </div>
  )
}  