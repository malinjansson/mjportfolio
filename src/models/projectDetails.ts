import { ProjectDetails } from "./types/ProjectDetails";

export const projectDetails: ProjectDetails[] = [
    {
        id: 1,
        slug: "auctionhouse",
        title: "Auction House",
        productCard: "/src/assets/ProductCardAuctionHouse.jpg",
        course: "School project 2025 - System development",
        description: "This project is a real-time auction site. Users can place bids and see live updates in the browser. The frontend includes an overview of all auctions and a detailed auction page with bid history and a bid form. The server validates bids and handles real-time updates. The project also supports room-based WebSocket communication to separate individual auctions.",
        tech: ["Node.js", "Express.js", "WebSockets","TypeScript", "SCSS"],
        github: "https://github.com/malinjansson/Auctionhouse",
        topimage: "/src/assets/auctionhouse/topimage.jpg",
        demo: ["/src/assets/auctionhouse/demo_one.jpg", 
               "/src/assets/auctionhouse/demo_two.jpg",
               "/src/assets/auctionhouse/demo_three.jpg"
            ]
    },
]