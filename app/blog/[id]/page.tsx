import Image from "next/image"
const BlogData = [{
    id:1,
    slug:"artificial intelligence",
    discription:"What is artificial intelligence (AI)? Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
},
{
id:2,
slug:"Block Chain and Nft",
discription:"Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011 and later created a cryptocurrency wallet that accounted for 28% of bitcoin transactions between 2012 and 2020"},
{
   id:3,
   slug: "web 3",
   discription:"Web 3.0, also known as Web3, is the third generation of the World Wide Web. Web 3.0 is meant to be decentralized, open to everyone (with a bottom-up design), and built on top of blockchain technologies and developments in the Semantic Web, which describes the web as a network of meaningfully linked data." 
}]
export {BlogData}
export default function Page({ params }: { params: { id: number} }) {
    {if(params.id>BlogData.length ) {return <h2>No post found</h2>}}
    const SelectBlog = BlogData.filter((item)=> item.id == params.id)
    
    return (
        <section>
        <Image src={`/${params.id}.jpg`} alt="pics" height={400} width={400}/>
        <h1>
           Blog: {SelectBlog[0]?.slug}
        </h1>
        <p>
        {SelectBlog[0]?.discription  }
    </p>
    </section>
    )
  }
