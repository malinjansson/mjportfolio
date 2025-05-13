import { ProjectDetails } from "./types/ProjectDetails";

export const projectDetails: ProjectDetails[] = [
    {
        id: 1,
        slug: "auctionhouse",
        title: "Auction House",
        productCard: "/src/assets/ProductCardAuctionHouse.jpg",
        course: "School project 2025 - System development",
        description: ["This project is a real-time auction site. Users can place bids and see live updates in the browser. The frontend includes an overview of all auctions and a detailed auction page with bid history and a bid form. The server validates bids and handles real-time updates. The project also supports room-based WebSocket communication to separate individual auctions."],
        tech: ["Node.js", "Express.js", "WebSockets","TypeScript", "SCSS"],
        github: "https://github.com/malinjansson/Auctionhouse",
        topimage: "/src/assets/auctionhouse/topimage.jpg",
        demo: ["/src/assets/auctionhouse/demo_one.jpg", 
               "/src/assets/auctionhouse/demo_two.jpg",
               "/src/assets/auctionhouse/demo_three.jpg"
            ]
    },
    {
        id: 2,
        slug: "liora",
        title: "Liora",
        productCard:"/src/assets/ProductCardLiora.jpg",
        course: "School project 2025 - Frontend development",
        description: ["Liora is a poster webshop, designed with a modern and clean design, focused on providing a user-friendly experience. Key features include a home page, product detail page, shopping cart, and a checkout page. Users can add, remove, and adjust quantities of posters in the shopping cart. It automatic calculation of the total price based on selected products.",
        "The project was developed using Agile methodology, with daily standups, sprint planning, and retrospectives for continuous improvement."],
        tech: ["HTML", "TypeScript", "SCSS"],
        github: "https://github.com/malinjansson/LioraWebshop",
        topimage: "/src/assets/liora/topimage.jpg",
        demo: ["/src/assets/liora/demo_one.jpg", 
        "/src/assets/liora/demo_two.jpg",
        "/src/assets/liora/demo_three.jpg",
        "/src/assets/liora/demo_four.jpg",
        "/src/assets/liora/demo_five.jpg",
        "/src/assets/liora/demo_six.jpg",
        "/src/assets/liora/demo_seven.jpg",
        ]
    },
]