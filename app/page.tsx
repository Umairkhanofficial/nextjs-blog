import Link from "next/link";
import { BlogData } from "./blog/[id]/page";
import Image from "next/image";
function Home (){
  return(
    
    // <h1> Blog page</h1>
    // <h3>welcome to my blog page </h3>
    <section className="secbody">
      <h1>Blogs</h1>
    { BlogData.map((items)=> 
     
     

       <Link href={`./blog/${items.id}`}>
         <Image src={`/${items.id}.jpg`} alt="Image " width={260} height={170}/><br />
      <h2> {items.slug}</h2>
       </Link>
    
     )}
     </section>
     );
   }
export default Home