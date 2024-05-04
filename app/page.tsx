import Image from "next/image";

export default function HomePage() {
   return (
      <>
         <p><br /></p>
         <h1 className="text-center text-accent text-xl">Welcome Home</h1>
         <p><br /></p>
         <p className="text-center text-base">This is a home page!</p>
         <p className="text-center text-base">Expect crap in here :3</p>
         <p><br /></p>

         <button className='btn btn-accent w-48 justify-self-center'>Very Nice Button</button>
         <p><br /></p>

         <div className="bg-base-200 rounded-lg ml-10 mr-10">
            <p><br /></p>
            <h2 className="pl-20 text-primary text-lg">More content???</h2>
            <p className="pl-16 pr-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae iste nam vel, itaque obcaecati autem maxime consequuntur accusamus fugit quidem.</p>
            <p className="pl-16 pr-16">yes, there's more.</p>
            <p><br /></p>
         </div>
         <p><br /></p>
         <h2 className="pl-20 text-accent text-lg">Such beauty</h2>
         <p className="pl-16 pr-16">fortnite... yes I just ruined the beauty</p>
         <div className="divider"></div>
      </>
   );
}