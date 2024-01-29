/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
export default function About() {
  return (
    <main>
      <section>
        <div className="bg-zinc-100 w-4/5 mx-auto max-w-100 min-h-100 border rounded-2xl mt-40 relative">
          <div className="mx-10 my-10">
            <h1 className="text-3xl mb-10 ml-8">Hello, I'm Eren.</h1>
            <p>
              &nbsp;&nbsp;&nbsp; I'm a student of Computer Engineering at Marmara University, and I completed my high
              school education in the field of database management. Fueled by a deep passion for the world of software,
              I'm constantly developing my skills, particularly in backend and artificial intelligence. <br />
              &nbsp;&nbsp;&nbsp;Currently, as a first-year student in Computer Engineering, I'm actively involved in
              various projects to advance my knowledge and experience. I'm also working on building my own blog site,
              and my interest in software development in this field is growing every day. <br />
              &nbsp;&nbsp;&nbsp;Among my hobbies are activities like cycling, running, walking, swimming, and reading
              books, but my greatest passion lies in writing code. I aspire to carry my dedication to learning and
              growing in the software world into my career. In the long term, I not only aim to become a proficient
              developer but also to launch my own start-up projects. <br />
              &nbsp;&nbsp;&nbsp;Furthermore, I have a keen interest in generating passive income. I'm working on
              ventures in areas such as the stock market, social media, and websites to achieve this goal. <br />
              &nbsp;&nbsp;&nbsp;With my commitment to the software world and my passion for learning, I aim to achieve
              greater success in the future. Feel free to connect with me on LinkedIn to expand your network and reach
              out if you share similar interests.
              <br />
              <br />
            </p>
            <div className=" absolute bottom-0 right-0 h-16 w-16 gap-3 text-right max-w-100 mr-10 ">
              <div className="flex gap-2">
                <Link href="https://github.com/erentaskiran">
                  <svg width="25" height="25" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#24292f"
                    />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/in/eren-taşkıran/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 72 72" width="25">
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                        fill="#007EBB"
                      />
                      <path
                        d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                        fill="#FFF"
                      />
                    </g>
                  </svg>
                </Link>
                <Link href="https://leetcode.com/eren_taskiran/">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" id="leetcode">
                    <path
                      fill="#B3B1B0"
                      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                    ></path>
                    <path
                      fill="#E7A41F"
                      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                    ></path>
                    <path
                      fill="#070706"
                      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
