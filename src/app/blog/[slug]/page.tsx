import { client } from "@/sanity/lib/client"
import Image from "next/image"
import { Blog } from "@/app/components/hero"


interface Params {
    params: {
        slug: string
    }
}


const BlogPost = async (params: Params) => {

    const {slug} = params.params

    const data:Blog = await client.fetch(`
        *[_type == "blog" && slug.current == $slug] {
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }[0]
        `,{slug}
    )

  return (
    <div>
      <>
      <div className="flex flex-col  items-center my-10 max-w-5xl m-auto ">



        <div>
            <Image className="rounded-lg object-cover max-h-96" src={data.imageUrl} alt={data.heading} height={500} width={1000}  />
        </div>


        <div>
            <h2 className="text-3xl font-bold my-10 flex justify-center">
                {data.heading}
            </h2>

            <p className="text-lg">
                {data.description}
            </p>
        </div>




      </div>
      </>
    </div>
  )
}

export default BlogPost
