import NewsCard from "@/components/NewsCard";


export default function Home() {
  return (
    
    <div class="grid grid-cols-4 gap-4">       
    <grid-item>
    <NewsCard height={"284px"} width={"295px"} src={'/images/card.png'}  Trendscore={100} engScore={'100k'}/>
    </grid-item>  
    </div>
  
  )
}
