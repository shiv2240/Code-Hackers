import Navbar from "./navbar"
import "../styles/blogs.css"
import blogImg1 from "../images/blogs/blog-1.jpg"
import blogImg2 from "../images/blogs/blog-2.jpg"
import blogImg3 from "../images/blogs/blog-3.jpg"
import blogImg4 from "../images/blogs/blog-4.webp"
import blogImg5 from "../images/blogs/blog-5.jpeg"

const articles = [
    {
        id: 1,
        title: "Understanding Poverty: A Global Perspective",
        excerpt: "This article explores the various dimensions of poverty around the world Based on 2019's PPPs International Comparison Program, According to the United Nations Millennium Development Goals (MDG) programme, 80 million people out of 1.2 billion Indians, roughly equal to 6.7% of India's population, lived below the poverty line of $1.25 and 84% of Indians lived on less than $6.85 per day in ...",
        image: blogImg5,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 2,
        title: "The Impact of Poverty on Children",
        excerpt: "Children living in poverty face numerous challenges that affect their development...",
        image: blogImg2,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 3,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg3,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 4,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg4,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 5,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg5,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 6,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg1,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 7,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg2,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 8,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg3,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 9,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg4,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    {
        id: 10,
        title: "Breaking the Cycle of Poverty",
        excerpt: "Strategies and policies that can help break the cycle of poverty for families...",
        image: blogImg5,
        link: "https://www.hrw.org/report/2022/11/17/if-i-wasnt-poor-i-wouldnt-be-unfit/family-separation-crisis-us-child-welfare"
    },
    
];

const Blog = ()=>{
    return(
        <div className="blog-section">
            <Navbar/>
            <div className="blog">
            <div className="articles">
                {articles.map(article => (
                    <div key={article.id} className="article">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <h2>{article.title}</h2>
                        <p>{article.excerpt}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}
export default Blog