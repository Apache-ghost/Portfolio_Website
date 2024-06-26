
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour, projectFive,projectSix,projectSeven,projectEight,projectNine,projectTen,projectEleven,projectTwelves} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Search Properties App"
          des="Find your dream property with ease using our Search Properties App. Explore a variety of listings, filter options, and discover the perfect place to call home."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Discover a world of shopping convenience with our E-commerce platform. Shop for a wide range of products, enjoy secure transactions, and explore exclusive deals for a delightful shopping experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="Web Browser"
          des="Explore the web seamlessly with our advanced browser. Enjoy fast browsing speeds, secure connections, and a user-friendly interface for a smooth online experience."
          src={projectThree}
        />
        <ProjectsCard
          title="Water Monitoring System"
          des="Stay informed about water usage and quality with our comprehensive monitoring system. Monitor consumption, detect leaks, and ensure water safety effortlessly."
          src={projectFour}
        />
        <ProjectsCard
          title="Student Grade Calculator"
          des=" Effortlessly calculate and manage student grades with our intuitive calculator. Streamline grading processes, track progress, and ensure accurate assessments for better academic outcomes."
          src={projectFive}
        />
        <ProjectsCard
          title="Business Review App"
          des="Empower your business decisions with real-time insights and customer feedback. Our app provides a user-friendly platform to track reviews, analyze trends, and make data-driven decisions for your business growth."
          src={projectSix}
        />
         <ProjectsCard
          title="Piano"
          des="Experience the enchanting world of music with our Piano app. Learn, practice, and create beautiful melodies right at your fingertips."
          src={projectSeven}
        />
         <ProjectsCard
          title="Library System"
          des=" Efficiently manage your library's inventory and user records with ease. Our system offers intuitive navigation, robust search capabilities, and seamless responsive design for an optimal user experience."
          src={projectEight}
        />
         <ProjectsCard
          title="Sky City"
          des=" A modern urban oasis offering unparalleled luxury and convenience. Practice your skills on responsive design with our beautifully crafted, adaptable layouts and breathtaking skyline views."
          src={projectNine}
        />
          <ProjectsCard
          title="Friend  Making Site"
          des=" Connect with like-minded people and make meaningful friendships on our friendly platform. Share interests, chat, and build lasting relationships in a welcoming community."
          src={projectTen}
        />
          <ProjectsCard
          title="learning Coding site"
          des="Embark on your coding journey with our comprehensive platform. Learn programming languages, coding techniques, and software development skills through interactive courses, tutorials, and coding challenges."
          src={projectEleven}
        />
          <ProjectsCard
          title="penguin"
          des= "A responsive web design project aimed at improving design and creativity skills. This project includes innovative layouts, captivating color schemes, interactive elements, to showcase the ability to create visually appealing and user-friendly design"
          src={projectTwelves}
        />
      </div>
    </section>
  );
}

export default Projects