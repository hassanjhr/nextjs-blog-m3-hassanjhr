'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { client } from '@/sanity/lib/client';

export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

async function Hero() {
  const data: Blog[] = await client.fetch(`
    *[_type == "blog"] {
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  `);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

           <div className='flex flex-wrap'>
            {
                data.map((blog,index)=> {
                    
                    return(

                        <Link key={index} href={`/blog/${blog.slug}`}>
            <div className="p-4 md:w-1/3  transition-all hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={blog.imageUrl}
                      alt="blog"
                      className="object-cover object-center"
                      fill
                    />
                  </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">Insights</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">{blog.heading}</h1>
                  <p className="leading-relaxed text-gray-300 mb-3 line-clamp-3 ">{blog.description}</p>
                  <div className="flex items-center flex-wrap">
                    <Link href={`/blog/${blog.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
                </Link>
                    )
                }

                )
            }

</div>

                


          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
