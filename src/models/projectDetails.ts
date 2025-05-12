import { ProjectDetails } from "./types/ProjectDetails";

export const projectDetails: ProjectDetails[] = [
    {
        id: 1,
        slug: "auctionhouse",
        title: "Auction House",
        productCard: "/src/assets/ProductCardAuctionHouse.jpg",
        course: "School project 2025 - System development",
        description: "This project is a real-time auction site. The system is divided into backend and frontend components, featuring smart room management to connect auctions and bidders efficiently.",
        tech: ["Node.js", "WebSockets", "TypeScript", "SCSS"],
        github: "https://github.com/malinjansson/Auctionhouse",
        topimage: "/src/assets/auctionhouse/topimage.jpg",
        demo: ["/src/assets/auctionhouse/demo_one.jpg", 
               "/src/assets/auctionhouse/demo_two.jpg",
               "/src/assets/auctionhouse/demo_three.jpg"
            ]
    },
]