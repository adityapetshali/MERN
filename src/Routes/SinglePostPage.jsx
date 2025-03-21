import React from "react";
import Image from "../Components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../Components/PostMenuActions";
import Search from "../Components/Search";
import Comments from "../Components/Comments";

function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md: text-3xal xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            quis molestias. Corrupti quod ea cupiditate facere veniam ullam eum
            similique, fugiat temporibus voluptatum libero quibusdam quas natus
            recusandae ipsum delectus?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className={"rounded-2xl"} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Blanditiis pariatur maxime ad
            corporis at molestias accusantium, ab quo doloremque numquam id
            laborum atque, voluptatum reiciendis dicta veritatis quam magnam
            laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            pariatur maxime ad corporis at molestias accusantium, ab quo
            doloremque numquam id laborum atque, voluptatum reiciendis dicta
            veritatis quam magnam laboriosam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className={"w-12 h-12 rounded-full objecy-cover"}
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <h1 className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline"> web Design</Link>
            <Link className="underline"> Development</Link>
            <Link className="underline"> Dtabases</Link>
            <Link className="underline"> Search Engines</Link>
            <Link className="underline"> Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
}

export default SinglePostPage;
