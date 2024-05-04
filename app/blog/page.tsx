import Image from "next/image";

export default function Blog() {
   return (
      <>
         <p><br /></p>
         <h1 className="text-center text-secondary text-xl">Welcome to Blog</h1>
         <p><br /></p>
         <p className="text-center text-base">This is a blog page!</p>
         <p className="text-center text-base">Expect more crap in here :3</p>
         <p><br /></p>

         <div className="diff aspect-[16/9] w-96 justify-self-center">
           <div className="diff-item-1">
             <img alt="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4e7c5f38-d3dc-4bc4-b752-cd21172ef125/d8sge6d-f9696eff-6a51-477b-b580-6ca104497837.png/v1/fill/w_894,h_894,q_75,strp/ness_head_by_delsiin-d8sge6d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzRlN2M1ZjM4LWQzZGMtNGJjNC1iNzUyLWNkMjExNzJlZjEyNS9kOHNnZTZkLWY5Njk2ZWZmLTZhNTEtNDc3Yi1iNTgwLTZjYTEwNDQ5NzgzNy5wbmciLCJ3aWR0aCI6Ijw9ODk0IiwiaGVpZ2h0IjoiPD04OTQifV1dLCJ3bWsiOnsicGF0aCI6Ii93bS80ZTdjNWYzOC1kM2RjLTRiYzQtYjc1Mi1jZDIxMTcyZWYxMjUvZGVsc2lpbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.uZTHo89JhT1ZJghORDS1QlOpqreXGVX7AQPvqCpJdBI" />
           </div>
           <div className="diff-item-2">
             <img alt="" src="https://www.pngkey.com/png/detail/182-1828082_sans-head-undertale-pixel-art.png" />
           </div>
           <div className="diff-resizer"></div>
         </div>
         <div className="divider"></div>
      </>
   );
}
